import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Unit {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string | null;
  description_en: string | null;
  order_index: number;
  icon: string;
  created_at: string;
}

export interface Lesson {
  id: string;
  unit_id: string;
  title_ar: string;
  title_en: string;
  description_ar: string | null;
  description_en: string | null;
  order_index: number;
  xp_reward: number;
  created_at: string;
}

export interface Exercise {
  id: string;
  lesson_id: string;
  type: 'mcq' | 'fill_blank' | 'reorder' | 'listening' | 'translation';
  prompt_ar: string | null;
  prompt_en: string | null;
  data_json: Record<string, unknown>;
  order_index: number;
  created_at: string;
}

export const useUnits = () => {
  return useQuery({
    queryKey: ['units'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('units')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      return data as Unit[];
    }
  });
};

export const useLessons = (unitId?: string) => {
  return useQuery({
    queryKey: ['lessons', unitId],
    queryFn: async () => {
      let query = supabase
        .from('lessons')
        .select('*')
        .order('order_index', { ascending: true });

      if (unitId) {
        query = query.eq('unit_id', unitId);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Lesson[];
    },
    enabled: true
  });
};

export const useLesson = (lessonId: string) => {
  return useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('id', lessonId)
        .single();

      if (error) throw error;
      return data as Lesson;
    },
    enabled: !!lessonId
  });
};

export const useExercises = (lessonId: string) => {
  return useQuery({
    queryKey: ['exercises', lessonId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('exercises')
        .select('*')
        .eq('lesson_id', lessonId)
        .order('order_index', { ascending: true });

      if (error) throw error;
      return data as Exercise[];
    },
    enabled: !!lessonId
  });
};
