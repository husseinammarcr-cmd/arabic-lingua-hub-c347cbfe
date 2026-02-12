import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { CURRICULUM, getLessonById } from '@/lib/curriculum';
import { toast } from 'sonner';

export interface Progress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  score: number;
  hearts_remaining: number;
  updated_at: string;
}

// Helper to get level order index
const LEVEL_ORDER: Record<string, number> = {
  'A1': 0,
  'A2': 1,
  'B1': 2,
  'B2': 3,
  'C1': 4,
  'C2': 5,
};

export function getLevelIndex(levelCode: string): number {
  return LEVEL_ORDER[levelCode.toUpperCase()] ?? 0;
}

// Check if a level is unlocked based on user's placement/current level
export function isLevelUnlocked(
  levelCode: string, 
  userPlacementLevel: string | null, 
  userCurrentLevel: string | null,
  isAdmin: boolean = false
): boolean {
  // Admin has access to all levels
  if (isAdmin) return true;
  
  const targetLevelIndex = getLevelIndex(levelCode);
  
  // Use the higher of placement_level or current_level
  const placementIndex = getLevelIndex(userPlacementLevel || 'A1');
  const currentIndex = getLevelIndex(userCurrentLevel || 'A1');
  const userMaxLevelIndex = Math.max(placementIndex, currentIndex);
  
  // Level is unlocked if it's at or below the user's max level
  return targetLevelIndex <= userMaxLevelIndex;
}

// Get all lesson IDs for levels up to and including the specified level
export function getLessonIdsUpToLevel(maxLevelCode: string): string[] {
  const maxIndex = getLevelIndex(maxLevelCode);
  const lessonIds: string[] = [];
  
  for (const level of CURRICULUM) {
    if (getLevelIndex(level.code) <= maxIndex) {
      for (const unit of level.units) {
        for (const lesson of unit.lessons) {
          lessonIds.push(lesson.id);
        }
      }
    }
  }
  
  return lessonIds;
}

export const useUserProgress = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['progress', user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;
      return data as Progress[];
    },
    enabled: !!user
  });
};

export const useLessonProgress = (lessonId: string) => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['progress', user?.id, lessonId],
    queryFn: async () => {
      if (!user) return null;

      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('lesson_id', lessonId)
        .maybeSingle();

      if (error) throw error;
      return data as Progress | null;
    },
    enabled: !!user && !!lessonId
  });
};

// Get next lesson in curriculum order
export function getNextLesson(currentLessonId: string): string | null {
  for (const level of CURRICULUM) {
    for (let unitIndex = 0; unitIndex < level.units.length; unitIndex++) {
      const unit = level.units[unitIndex];
      for (let lessonIndex = 0; lessonIndex < unit.lessons.length; lessonIndex++) {
        if (unit.lessons[lessonIndex].id === currentLessonId) {
          // Check if there's a next lesson in this unit
          if (lessonIndex < unit.lessons.length - 1) {
            return unit.lessons[lessonIndex + 1].id;
          }
          // Check if there's a next unit in this level
          if (unitIndex < level.units.length - 1) {
            return level.units[unitIndex + 1].lessons[0]?.id || null;
          }
          // Check if there's a next level
          const currentLevelIndex = CURRICULUM.findIndex(l => l.id === level.id);
          if (currentLevelIndex < CURRICULUM.length - 1) {
            return CURRICULUM[currentLevelIndex + 1].units[0]?.lessons[0]?.id || null;
          }
          return null;
        }
      }
    }
  }
  return null;
}

// Check if a lesson is unlocked based on progress and user's placement level
export function isLessonUnlocked(
  lessonId: string, 
  completedLessons: string[],
  userPlacementLevel?: string | null,
  userCurrentLevel?: string | null,
  isAdmin: boolean = false
): boolean {
  // Admin has access to all lessons
  if (isAdmin) return true;
  
  // Extract level code from lesson ID (e.g., "A1-u01-l01" -> "A1")
  const lessonLevelCode = lessonId.split('-')[0].toUpperCase();
  const lessonLevelIndex = getLevelIndex(lessonLevelCode);
  
  // Get user's max unlocked level
  const placementIndex = getLevelIndex(userPlacementLevel || 'A1');
  const currentIndex = getLevelIndex(userCurrentLevel || 'A1');
  const userMaxLevelIndex = Math.max(placementIndex, currentIndex);
  
  // If the lesson is in a level BELOW the user's max level, it's always unlocked
  if (lessonLevelIndex < userMaxLevelIndex) {
    return true;
  }
  
  // If the lesson is in the user's current/placement level
  if (lessonLevelIndex === userMaxLevelIndex) {
    // First lesson of the level is always unlocked
    const level = CURRICULUM.find(l => l.code.toUpperCase() === lessonLevelCode);
    const firstLessonOfLevel = level?.units[0]?.lessons[0];
    if (firstLessonOfLevel?.id === lessonId) return true;
  }

  // First lesson of first unit of A1 is always unlocked
  const firstLesson = CURRICULUM[0]?.units[0]?.lessons[0];
  if (firstLesson?.id === lessonId) return true;

  // Find the previous lesson
  for (const level of CURRICULUM) {
    for (let unitIndex = 0; unitIndex < level.units.length; unitIndex++) {
      const unit = level.units[unitIndex];
      for (let lessonIndex = 0; lessonIndex < unit.lessons.length; lessonIndex++) {
        if (unit.lessons[lessonIndex].id === lessonId) {
          // Get previous lesson
          let previousLessonId: string | null = null;
          if (lessonIndex > 0) {
            previousLessonId = unit.lessons[lessonIndex - 1].id;
          } else if (unitIndex > 0) {
            const prevUnit = level.units[unitIndex - 1];
            previousLessonId = prevUnit.lessons[prevUnit.lessons.length - 1]?.id;
          } else {
            const currentLevelIndex = CURRICULUM.findIndex(l => l.id === level.id);
            if (currentLevelIndex > 0) {
              const prevLevel = CURRICULUM[currentLevelIndex - 1];
              const lastUnit = prevLevel.units[prevLevel.units.length - 1];
              previousLessonId = lastUnit?.lessons[lastUnit.lessons.length - 1]?.id;
            }
          }
          
          // Lesson is unlocked if previous lesson is completed
          return previousLessonId ? completedLessons.includes(previousLessonId) : true;
        }
      }
    }
  }
  return false;
}

// Get unit progress from completed lessons
export interface UnitProgress {
  unitId: string;
  completedLessons: number;
  totalLessons: number;
  isCompleted: boolean;
  isUnlocked: boolean;
}

export function getUnitProgress(
  levelCode: string,
  completedLessonIds: string[],
  userPlacementLevel?: string | null,
  userCurrentLevel?: string | null,
  isAdmin: boolean = false
): UnitProgress[] {
  const level = CURRICULUM.find(l => l.code.toLowerCase() === levelCode.toLowerCase());
  if (!level) return [];

  // Admin has access to all units
  if (isAdmin) {
    return level.units.map(unit => {
      const lessonIds = unit.lessons.map(l => l.id);
      const completedCount = lessonIds.filter(id => completedLessonIds.includes(id)).length;
      return {
        unitId: unit.id,
        completedLessons: completedCount,
        totalLessons: lessonIds.length,
        isCompleted: completedCount === lessonIds.length && lessonIds.length > 0,
        isUnlocked: true
      };
    });
  }

  // Check if this entire level is unlocked based on placement
  const levelIndex = getLevelIndex(levelCode);
  const placementIndex = getLevelIndex(userPlacementLevel || 'A1');
  const currentIndex = getLevelIndex(userCurrentLevel || 'A1');
  const userMaxLevelIndex = Math.max(placementIndex, currentIndex);
  
  // If user's level is HIGHER than this level, all units in this level are unlocked
  const isLevelBelowUser = levelIndex < userMaxLevelIndex;
  // If user's level is EQUAL to this level, use sequential unlock within the level
  const isLevelAtUser = levelIndex === userMaxLevelIndex;

  const unitProgressList: UnitProgress[] = [];
  let previousUnitCompleted = true; // First unit is always unlocked

  for (const unit of level.units) {
    const lessonIds = unit.lessons.map(l => l.id);
    const completedCount = lessonIds.filter(id => completedLessonIds.includes(id)).length;
    const isCompleted = completedCount === lessonIds.length && lessonIds.length > 0;
    
    // Determine if unit is unlocked
    let isUnlocked = false;
    if (isLevelBelowUser) {
      // All units in levels below user's level are unlocked
      isUnlocked = true;
    } else if (isLevelAtUser) {
      // In user's current level, use sequential unlock OR first unit is unlocked
      isUnlocked = previousUnitCompleted;
    } else {
      // Levels above user's level are locked
      isUnlocked = previousUnitCompleted;
    }
    
    unitProgressList.push({
      unitId: unit.id,
      completedLessons: completedCount,
      totalLessons: lessonIds.length,
      isCompleted,
      isUnlocked
    });

    // Debug log
    console.log(`Unit ${unit.id}: ${completedCount}/${lessonIds.length} lessons, unlocked: ${isUnlocked}, levelBelowUser: ${isLevelBelowUser}`);

    // Next unit is unlocked if current unit is completed
    previousUnitCompleted = isCompleted;
  }

  return unitProgressList;
}

// Get lesson progress within a unit
export function getLessonProgress(
  levelCode: string,
  unitId: string,
  completedLessonIds: string[],
  userPlacementLevel?: string | null,
  userCurrentLevel?: string | null,
  isAdmin: boolean = false
): { lessonId: string; isCompleted: boolean; isUnlocked: boolean }[] {
  const level = CURRICULUM.find(l => l.code.toLowerCase() === levelCode.toLowerCase());
  if (!level) return [];
  
  const unit = level.units.find(u => u.id === unitId);
  if (!unit) return [];

  // Admin has access to all lessons
  if (isAdmin) {
    return unit.lessons.map(lesson => ({
      lessonId: lesson.id,
      isCompleted: completedLessonIds.includes(lesson.id),
      isUnlocked: true
    }));
  }

  const levelIndex = getLevelIndex(levelCode);
  const placementIndex = getLevelIndex(userPlacementLevel || 'A1');
  const currentIndex = getLevelIndex(userCurrentLevel || 'A1');
  const userMaxLevelIndex = Math.max(placementIndex, currentIndex);
  const isLevelBelowUser = levelIndex < userMaxLevelIndex;

  const lessonProgressList: { lessonId: string; isCompleted: boolean; isUnlocked: boolean }[] = [];
  let previousLessonCompleted = true; // First lesson is always unlocked

  for (const lesson of unit.lessons) {
    const isCompleted = completedLessonIds.includes(lesson.id);
    
    // Determine if lesson is unlocked
    let isUnlocked = false;
    if (isLevelBelowUser) {
      // All lessons in levels below user's level are unlocked
      isUnlocked = true;
    } else {
      // Sequential unlock
      isUnlocked = previousLessonCompleted;
    }

    lessonProgressList.push({
      lessonId: lesson.id,
      isCompleted,
      isUnlocked
    });

    previousLessonCompleted = isCompleted;
  }

  return lessonProgressList;
}

export const useUpdateProgress = () => {
  const { user, updateProfile, profile } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      lessonId,
      completed,
      score,
      heartsRemaining,
      xpEarned,
      hintPenalty = 0
    }: {
      lessonId: string;
      completed: boolean;
      score: number;
      heartsRemaining: number;
      xpEarned: number;
      hintPenalty?: number;
    }) => {
      if (!user) throw new Error('Not authenticated');

      // Check if already completed to prevent double XP
      const { data: existingProgress } = await supabase
        .from('progress')
        .select('completed')
        .eq('user_id', user.id)
        .eq('lesson_id', lessonId)
        .maybeSingle();

      const wasAlreadyCompleted = existingProgress?.completed === true;

      // Save progress - use insert/update pattern for reliability
      const progressData = {
        user_id: user.id,
        lesson_id: lessonId,
        completed,
        score,
        hearts_remaining: heartsRemaining,
        updated_at: new Date().toISOString()
      };

      let progressError;

      if (existingProgress) {
        // Update existing record
        const { error } = await supabase
          .from('progress')
          .update({
            completed,
            score,
            hearts_remaining: heartsRemaining,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id)
          .eq('lesson_id', lessonId);
        progressError = error;
      } else {
        // Insert new record
        const { error } = await supabase
          .from('progress')
          .insert(progressData);
        progressError = error;
      }

      if (progressError) {
        console.error('Progress save error:', progressError);
        throw progressError;
      }

      // Update user XP and streak if lesson completed and not already completed
      if (completed && profile && !wasAlreadyCompleted) {
        const today = new Date().toISOString().split('T')[0];
        const lastStudyDate = profile.last_study_date;
        
        let newStreakCount = profile.streak_count || 0;
        
        if (lastStudyDate) {
          const lastDate = new Date(lastStudyDate);
          const todayDate = new Date(today);
          const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
          
          if (lastStudyDate === today) {
            // Already studied today, don't change streak
          } else if (diffDays === 1) {
            // Studied yesterday, increment streak
            newStreakCount = (profile.streak_count || 0) + 1;
          } else if (diffDays > 1) {
            // Missed days, reset streak
            newStreakCount = 1;
          }
        } else {
          // First time studying
          newStreakCount = 1;
        }

        // Calculate net XP (earned minus hint penalty, but never go negative for this lesson)
        const netXpFromLesson = Math.max(0, xpEarned);
        
        // Apply hint penalty to total XP (can reduce overall XP)
        const currentXp = profile.xp || 0;
        const newXp = Math.max(0, currentXp + netXpFromLesson - hintPenalty);
        const newWeeklyXp = Math.max(0, (profile.weekly_xp || 0) + netXpFromLesson - hintPenalty);
        const newMonthlyXp = Math.max(0, (profile.monthly_xp || 0) + netXpFromLesson - hintPenalty);
        
        console.log('[useProgress] XP Calculation:', {
          currentXp,
          netXpFromLesson,
          hintPenalty,
          newXp,
          formula: `${currentXp} + ${netXpFromLesson} - ${hintPenalty} = ${newXp}`
        });
        
        // Calculate new user level based on XP (every 500 XP = 1 level)
        const newUserLevel = Math.max(1, Math.floor(newXp / 500) + 1);

        const { error: profileError } = await updateProfile({
          xp: newXp,
          weekly_xp: newWeeklyXp,
          monthly_xp: newMonthlyXp,
          streak_count: newStreakCount,
          last_study_date: today,
          user_level: newUserLevel
        });

        if (profileError) {
          console.error('Profile update error:', profileError);
          throw profileError;
        }

        console.log('Profile updated:', { newXp, newWeeklyXp, newMonthlyXp, newStreakCount, newUserLevel, lastStudyDate: today });
      }

      return { success: true, wasAlreadyCompleted };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['progress'] });
      // Don't show toast here - let the LessonPlayer handle UI feedback
      console.log('[useProgress] Save successful, wasAlreadyCompleted:', data.wasAlreadyCompleted);
    },
    onError: (error) => {
      console.error('Failed to save progress:', error);
      // Don't show toast here - let the LessonPlayer handle UI feedback
    }
  });
};
