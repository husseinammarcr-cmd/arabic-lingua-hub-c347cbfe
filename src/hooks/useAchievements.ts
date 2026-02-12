import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface Achievement {
  id: string;
  key: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: string;
  xp_reward: number;
  created_at: string;
}

export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: string;
  earned_at: string;
  achievement?: Achievement;
}

export const useAchievements = () => {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('xp_reward', { ascending: true });

      if (error) throw error;
      return data as Achievement[];
    }
  });
};

export const useUserAchievements = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['user_achievements', user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from('user_achievements')
        .select('*, achievements(*)')
        .eq('user_id', user.id);

      if (error) throw error;
      return data.map(ua => ({
        ...ua,
        achievement: ua.achievements as unknown as Achievement
      })) as UserAchievement[];
    },
    enabled: !!user
  });
};

export const useAwardAchievement = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (achievementKey: string) => {
      if (!user) throw new Error('Not authenticated');

      // Get achievement by key
      const { data: achievement, error: fetchError } = await supabase
        .from('achievements')
        .select('id')
        .eq('key', achievementKey)
        .single();

      if (fetchError) throw fetchError;

      // Check if already earned
      const { data: existing } = await supabase
        .from('user_achievements')
        .select('id')
        .eq('user_id', user.id)
        .eq('achievement_id', achievement.id)
        .maybeSingle();

      if (existing) return { alreadyEarned: true };

      // Award achievement
      const { error } = await supabase
        .from('user_achievements')
        .insert({
          user_id: user.id,
          achievement_id: achievement.id
        });

      if (error) throw error;
      return { alreadyEarned: false };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user_achievements'] });
    }
  });
};
