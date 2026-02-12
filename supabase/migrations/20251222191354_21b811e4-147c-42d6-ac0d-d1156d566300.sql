-- Add gamification fields to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS user_level integer DEFAULT 1,
ADD COLUMN IF NOT EXISTS country_code text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS display_name text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS avatar_url text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS weekly_xp integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS monthly_xp integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS week_start date DEFAULT date_trunc('week', now())::date,
ADD COLUMN IF NOT EXISTS month_start date DEFAULT date_trunc('month', now())::date;

-- Create indexes for leaderboard queries
CREATE INDEX IF NOT EXISTS idx_profiles_total_xp ON public.profiles(xp DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_weekly_xp ON public.profiles(weekly_xp DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_monthly_xp ON public.profiles(monthly_xp DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_country_code ON public.profiles(country_code);
CREATE INDEX IF NOT EXISTS idx_profiles_current_level ON public.profiles(current_level);

-- Add condition_json to achievements table
ALTER TABLE public.achievements 
ADD COLUMN IF NOT EXISTS condition_json jsonb DEFAULT NULL;

-- Create challenges table
CREATE TABLE IF NOT EXISTS public.challenges (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  name_ar text NOT NULL,
  name_en text NOT NULL,
  description_ar text NOT NULL,
  description_en text NOT NULL,
  reward_xp integer NOT NULL DEFAULT 50,
  reward_achievement_id uuid REFERENCES public.achievements(id) ON DELETE SET NULL,
  target_value integer NOT NULL DEFAULT 1,
  challenge_type text NOT NULL DEFAULT 'weekly',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on challenges
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;

-- Anyone can view active challenges
CREATE POLICY "Anyone can view active challenges"
ON public.challenges
FOR SELECT
USING (is_active = true);

-- Admins can manage challenges
CREATE POLICY "Admins can manage challenges"
ON public.challenges
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create user_challenges table for tracking progress
CREATE TABLE IF NOT EXISTS public.user_challenges (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_id uuid NOT NULL REFERENCES public.challenges(id) ON DELETE CASCADE,
  progress integer NOT NULL DEFAULT 0,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamp with time zone DEFAULT NULL,
  started_at timestamp with time zone DEFAULT now(),
  week_start date DEFAULT date_trunc('week', now())::date,
  UNIQUE(user_id, challenge_id, week_start)
);

-- Enable RLS on user_challenges
ALTER TABLE public.user_challenges ENABLE ROW LEVEL SECURITY;

-- Users can view their own challenges
CREATE POLICY "Users can view their own challenges"
ON public.user_challenges
FOR SELECT
USING (auth.uid() = user_id);

-- Users can manage their own challenges
CREATE POLICY "Users can manage their own challenges"
ON public.user_challenges
FOR ALL
USING (auth.uid() = user_id);

-- Create indexes for user_challenges
CREATE INDEX IF NOT EXISTS idx_user_challenges_user_id ON public.user_challenges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_challenges_challenge_id ON public.user_challenges(challenge_id);

-- Function to compute user level from XP (every 500 XP = 1 level, with bonuses)
CREATE OR REPLACE FUNCTION public.compute_user_level(total_xp integer, streak_count integer DEFAULT 0, lessons_completed integer DEFAULT 0)
RETURNS integer
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  base_level integer;
  streak_bonus integer;
  lesson_bonus integer;
BEGIN
  -- Base level: every 500 XP = 1 level
  base_level := GREATEST(1, (total_xp / 500) + 1);
  
  -- Streak bonus: every 30 days streak = +1 level (max +3)
  streak_bonus := LEAST(3, streak_count / 30);
  
  -- Lesson bonus: every 50 lessons = +1 level (max +2)
  lesson_bonus := LEAST(2, lessons_completed / 50);
  
  RETURN base_level + streak_bonus + lesson_bonus;
END;
$$;

-- Function to reset weekly/monthly XP
CREATE OR REPLACE FUNCTION public.reset_periodic_xp()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_week_start date;
  current_month_start date;
BEGIN
  current_week_start := date_trunc('week', now())::date;
  current_month_start := date_trunc('month', now())::date;
  
  -- Reset weekly XP if week changed
  IF OLD.week_start IS DISTINCT FROM current_week_start THEN
    NEW.weekly_xp := 0;
    NEW.week_start := current_week_start;
  END IF;
  
  -- Reset monthly XP if month changed
  IF OLD.month_start IS DISTINCT FROM current_month_start THEN
    NEW.monthly_xp := 0;
    NEW.month_start := current_month_start;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Trigger to reset periodic XP on profile update
DROP TRIGGER IF EXISTS reset_periodic_xp_trigger ON public.profiles;
CREATE TRIGGER reset_periodic_xp_trigger
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.reset_periodic_xp();

-- Insert default challenges
INSERT INTO public.challenges (key, name_ar, name_en, description_ar, description_en, reward_xp, target_value, challenge_type)
VALUES 
  ('streak_7_days', 'سلسلة 7 أيام', '7-Day Streak', 'حافظ على سلسلة تعلم لمدة 7 أيام متتالية', 'Maintain a learning streak for 7 consecutive days', 100, 7, 'weekly'),
  ('complete_5_lessons', 'أكمل 5 دروس', 'Complete 5 Lessons', 'أكمل 5 دروس هذا الأسبوع', 'Complete 5 lessons this week', 75, 5, 'weekly'),
  ('earn_300_xp', 'اكسب 300 XP', 'Earn 300 XP', 'اكسب 300 نقطة خبرة هذا الأسبوع', 'Earn 300 XP this week', 50, 300, 'weekly'),
  ('daily_practice', 'تمرين يومي', 'Daily Practice', 'تدرب كل يوم لمدة 5 أيام', 'Practice every day for 5 days', 80, 5, 'weekly')
ON CONFLICT (key) DO NOTHING;

-- Insert more achievements if not exist
INSERT INTO public.achievements (key, title_ar, title_en, description_ar, description_en, icon, xp_reward, condition_json)
VALUES 
  ('first_lesson', 'الدرس الأول', 'First Lesson', 'أكملت درسك الأول!', 'You completed your first lesson!', 'book', 25, '{"type": "lessons_completed", "value": 1}'),
  ('streak_7', 'أسبوع متواصل', 'Week Streak', 'حافظت على سلسلة 7 أيام', 'Maintained a 7-day streak', 'flame', 50, '{"type": "streak", "value": 7}'),
  ('streak_30', 'شهر متواصل', 'Month Streak', 'حافظت على سلسلة 30 يوم', 'Maintained a 30-day streak', 'flame', 150, '{"type": "streak", "value": 30}'),
  ('lessons_30', 'متعلم نشط', 'Active Learner', 'أكملت 30 درساً', 'Completed 30 lessons', 'graduation-cap', 100, '{"type": "lessons_completed", "value": 30}'),
  ('unit_completed', 'وحدة كاملة', 'Unit Complete', 'أكملت وحدة كاملة', 'Completed a full unit', 'check-circle', 50, '{"type": "unit_completed", "value": 1}'),
  ('complete_a1', 'إتمام A1', 'A1 Complete', 'أكملت مستوى A1 بالكامل', 'Completed the entire A1 level', 'award', 300, '{"type": "level_completed", "value": "A1"}'),
  ('xp_1000', 'ألف نقطة', '1000 XP', 'وصلت إلى 1000 نقطة خبرة', 'Reached 1000 XP', 'star', 100, '{"type": "xp", "value": 1000}'),
  ('xp_5000', 'خمسة آلاف', '5000 XP', 'وصلت إلى 5000 نقطة خبرة', 'Reached 5000 XP', 'star', 200, '{"type": "xp", "value": 5000}')
ON CONFLICT (key) DO UPDATE SET 
  condition_json = EXCLUDED.condition_json,
  title_ar = EXCLUDED.title_ar,
  title_en = EXCLUDED.title_en,
  description_ar = EXCLUDED.description_ar,
  description_en = EXCLUDED.description_en;