import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface Challenge {
  id: string;
  key: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  challenge_type: string;
  target_value: number;
  reward_xp: number;
  reward_achievement_id: string | null;
  is_active: boolean;
  created_at: string;
}

export interface UserChallenge {
  id: string;
  user_id: string;
  challenge_id: string;
  progress: number;
  completed: boolean;
  completed_at: string | null;
  week_start: string | null;
  started_at: string;
  challenge?: Challenge;
}

export const useChallenges = () => {
  return useQuery({
    queryKey: ['challenges'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('challenges')
        .select('*')
        .eq('is_active', true)
        .order('challenge_type', { ascending: true });

      if (error) throw error;
      return data as Challenge[];
    }
  });
};

export const useUserChallenges = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['user_challenges', user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from('user_challenges')
        .select('*, challenges(*)')
        .eq('user_id', user.id);

      if (error) throw error;
      return data.map(uc => ({
        ...uc,
        challenge: uc.challenges as unknown as Challenge
      })) as UserChallenge[];
    },
    enabled: !!user
  });
};

export const useJoinChallenge = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (challengeId: string) => {
      if (!user) throw new Error('Not authenticated');

      const { error } = await supabase
        .from('user_challenges')
        .insert({
          user_id: user.id,
          challenge_id: challengeId,
          progress: 0,
          completed: false
        });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user_challenges'] });
    }
  });
};

export const useUpdateChallengeProgress = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ challengeId, progress }: { challengeId: string; progress: number }) => {
      if (!user) throw new Error('Not authenticated');

      const { data: challenge } = await supabase
        .from('challenges')
        .select('target_value')
        .eq('id', challengeId)
        .single();

      const completed = challenge ? progress >= challenge.target_value : false;

      const { error } = await supabase
        .from('user_challenges')
        .update({
          progress,
          completed,
          completed_at: completed ? new Date().toISOString() : null
        })
        .eq('user_id', user.id)
        .eq('challenge_id', challengeId);

      if (error) throw error;
      return { completed };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user_challenges'] });
    }
  });
};
