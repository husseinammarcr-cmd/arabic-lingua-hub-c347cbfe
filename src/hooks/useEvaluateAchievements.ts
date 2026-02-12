import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

interface AchievementCondition {
  type: 'xp_reached' | 'streak_reached' | 'lessons_completed' | 'first_lesson' | 'unit_completed' | 'level_completed' | 'perfect_lesson';
  value?: number;
  level?: string;
}

interface Achievement {
  id: string;
  key: string;
  title_ar: string;
  title_en: string;
  xp_reward: number;
  condition_json: AchievementCondition | null;
}

export const useEvaluateAchievements = () => {
  const { user, profile, refreshProfile } = useAuth();
  const queryClient = useQueryClient();

  const evaluateAchievements = useCallback(async (stats?: {
    lessonsCompleted?: number;
    unitsCompleted?: string[];
    levelsCompleted?: string[];
    perfectLesson?: boolean;
  }) => {
    if (!user || !profile) {
      console.log('[Achievements] No user or profile, skipping evaluation');
      return;
    }

    console.log('[Achievements] Starting evaluation for user:', user.id);
    console.log('[Achievements] User stats:', {
      xp: profile.xp,
      streak: profile.streak_count,
      ...stats
    });

    try {
      // Fetch all achievements
      const { data: achievements, error: achievementsError } = await supabase
        .from('achievements')
        .select('*');

      if (achievementsError) {
        console.error('[Achievements] Error fetching achievements:', achievementsError);
        return;
      }

      // Fetch user's existing achievements
      const { data: userAchievements, error: userAchievementsError } = await supabase
        .from('user_achievements')
        .select('achievement_id')
        .eq('user_id', user.id);

      if (userAchievementsError) {
        console.error('[Achievements] Error fetching user achievements:', userAchievementsError);
        return;
      }

      const earnedIds = new Set(userAchievements?.map(ua => ua.achievement_id) || []);
      console.log('[Achievements] Already earned:', earnedIds.size, 'achievements');

      // Get lessons completed count
      const { count: lessonsCount } = await supabase
        .from('progress')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .eq('completed', true);

      const lessonsCompleted = stats?.lessonsCompleted ?? lessonsCount ?? 0;

      // Check each achievement
      const newAchievements: Achievement[] = [];

      for (const achievement of achievements || []) {
        if (earnedIds.has(achievement.id)) {
          continue; // Already earned
        }

        const condition = achievement.condition_json as unknown as AchievementCondition | null;
        let earned = false;

        if (!condition || !condition.type) {
          continue; // No condition defined
        }

        console.log(`[Achievements] Checking "${achievement.key}":`, condition);

        switch (condition.type) {
          case 'first_lesson':
            earned = lessonsCompleted >= 1;
            break;

          case 'xp_reached':
            earned = (profile.xp || 0) >= (condition.value || 0);
            break;

          case 'streak_reached':
            earned = (profile.streak_count || 0) >= (condition.value || 0);
            break;

          case 'lessons_completed':
            earned = lessonsCompleted >= (condition.value || 0);
            break;

          case 'unit_completed':
            earned = (stats?.unitsCompleted?.length || 0) > 0;
            break;

          case 'level_completed':
            earned = stats?.levelsCompleted?.includes(condition.level || '') || false;
            break;

          case 'perfect_lesson':
            earned = stats?.perfectLesson === true;
            break;
        }

        if (earned) {
          console.log(`[Achievements] EARNED: "${achievement.key}"`);
          newAchievements.push({
            id: achievement.id,
            key: achievement.key,
            title_ar: achievement.title_ar,
            title_en: achievement.title_en,
            xp_reward: achievement.xp_reward || 0,
            condition_json: condition
          });
        }
      }

      // Award new achievements
      if (newAchievements.length > 0) {
        console.log('[Achievements] Awarding', newAchievements.length, 'new achievements');

        for (const achievement of newAchievements) {
          const { error: insertError } = await supabase
            .from('user_achievements')
            .insert({
              user_id: user.id,
              achievement_id: achievement.id
            });

          if (insertError) {
            // Check if it's a duplicate (already exists)
            if (insertError.code === '23505') {
              console.log(`[Achievements] "${achievement.key}" already awarded (duplicate)`);
              continue;
            }
            console.error(`[Achievements] Error awarding "${achievement.key}":`, insertError);
            continue;
          }

          // Show toast notification
          toast.success(`🏆 حصلت على إنجاز جديد: ${achievement.title_ar}`, {
            description: `+${achievement.xp_reward || 0} XP`,
            duration: 5000
          });

          // Award XP for achievement
          if (achievement.xp_reward && achievement.xp_reward > 0) {
            const newXp = (profile.xp || 0) + achievement.xp_reward;
            const newWeeklyXp = (profile.weekly_xp || 0) + achievement.xp_reward;
            const newMonthlyXp = (profile.monthly_xp || 0) + achievement.xp_reward;

            await supabase
              .from('profiles')
              .update({
                xp: newXp,
                weekly_xp: newWeeklyXp,
                monthly_xp: newMonthlyXp
              })
              .eq('id', user.id);
          }
        }

        // Invalidate queries to refresh UI
        queryClient.invalidateQueries({ queryKey: ['user_achievements'] });
        queryClient.invalidateQueries({ queryKey: ['profile'] });
      } else {
        console.log('[Achievements] No new achievements earned');
      }

      return newAchievements;
    } catch (error) {
      console.error('[Achievements] Evaluation error:', error);
      return [];
    }
  }, [user, profile, queryClient]);

  return { evaluateAchievements };
};
