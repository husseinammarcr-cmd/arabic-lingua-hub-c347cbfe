-- =====================================================
-- LingoArab Database Export - Complete Schema
-- تصدير قاعدة بيانات تطبيق تعلم اللغة الإنجليزية للناطقين بالعربية
-- Generated: 2026-01-22
-- Version: 2.0
-- =====================================================
-- ⚠️ تنبيه: قم بتنفيذ هذا الملف في SQL Editor في Supabase Dashboard
-- =====================================================


-- =====================================================
-- SECTION 1: CUSTOM TYPES (ENUMS)
-- =====================================================

-- App role enum for user permissions
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('user', 'admin');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Daily goal options
DO $$ BEGIN
  CREATE TYPE public.daily_goal AS ENUM ('5', '10', '15');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Exercise types for lessons
DO $$ BEGIN
  CREATE TYPE public.exercise_type AS ENUM (
    'mcq',
    'fill_blank',
    'reorder',
    'listening',
    'translation'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- User proficiency level
DO $$ BEGIN
  CREATE TYPE public.user_level AS ENUM ('beginner', 'intermediate', 'advanced');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;


-- =====================================================
-- SECTION 2: TABLES
-- =====================================================

-- Profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid NOT NULL PRIMARY KEY,
  name text,
  email text,
  display_name text,
  username text UNIQUE,
  avatar_url text,
  country_code text,
  level public.user_level DEFAULT 'beginner',
  daily_goal public.daily_goal DEFAULT '10',
  xp integer DEFAULT 0,
  weekly_xp integer DEFAULT 0,
  monthly_xp integer DEFAULT 0,
  week_start date DEFAULT (date_trunc('week', now()))::date,
  month_start date DEFAULT (date_trunc('month', now()))::date,
  streak_count integer DEFAULT 0,
  last_study_date date,
  user_level integer DEFAULT 1,
  is_premium boolean DEFAULT false,
  is_founder boolean DEFAULT false,
  is_verified boolean DEFAULT false,
  has_taken_placement boolean DEFAULT false,
  placement_level text,
  placement_score integer,
  placement_taken_at timestamp with time zone,
  current_level text,
  onboarding_completed boolean DEFAULT false,
  interests text[],
  notify_reminders boolean DEFAULT true,
  notify_achievements boolean DEFAULT true,
  notify_course_updates boolean DEFAULT true,
  notify_announcements boolean DEFAULT true,
  privacy_show_profile boolean DEFAULT true,
  privacy_show_progress boolean DEFAULT true,
  privacy_marketing_emails boolean DEFAULT false,
  last_login_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- User roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  role public.app_role NOT NULL DEFAULT 'user',
  UNIQUE(user_id, role)
);

-- Units table (course structure)
CREATE TABLE IF NOT EXISTS public.units (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title_ar text NOT NULL,
  title_en text NOT NULL,
  description_ar text,
  description_en text,
  icon text DEFAULT 'book',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone DEFAULT now()
);

-- Lessons table
CREATE TABLE IF NOT EXISTS public.lessons (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  unit_id uuid NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
  title_ar text NOT NULL,
  title_en text NOT NULL,
  description_ar text,
  description_en text,
  xp_reward integer DEFAULT 10,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone DEFAULT now()
);

-- Exercises table
CREATE TABLE IF NOT EXISTS public.exercises (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  type public.exercise_type NOT NULL,
  prompt_ar text,
  prompt_en text,
  data_json jsonb NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone DEFAULT now()
);

-- Progress table (user lesson progress)
CREATE TABLE IF NOT EXISTS public.progress (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  lesson_id text NOT NULL,
  completed boolean DEFAULT false,
  score integer DEFAULT 0,
  hearts_remaining integer DEFAULT 5,
  updated_at timestamp with time zone DEFAULT now()
);

-- Achievements table
CREATE TABLE IF NOT EXISTS public.achievements (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  title_ar text NOT NULL,
  title_en text NOT NULL,
  description_ar text NOT NULL,
  description_en text NOT NULL,
  icon text DEFAULT 'trophy',
  xp_reward integer DEFAULT 50,
  condition_json jsonb,
  created_at timestamp with time zone DEFAULT now()
);

-- User achievements table (earned achievements)
CREATE TABLE IF NOT EXISTS public.user_achievements (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  achievement_id uuid NOT NULL REFERENCES public.achievements(id) ON DELETE CASCADE,
  earned_at timestamp with time zone DEFAULT now(),
  UNIQUE(user_id, achievement_id)
);

-- Challenges table
CREATE TABLE IF NOT EXISTS public.challenges (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  name_ar text NOT NULL,
  name_en text NOT NULL,
  description_ar text NOT NULL,
  description_en text NOT NULL,
  challenge_type text NOT NULL DEFAULT 'weekly',
  target_value integer NOT NULL DEFAULT 1,
  reward_xp integer NOT NULL DEFAULT 50,
  reward_achievement_id uuid REFERENCES public.achievements(id),
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone DEFAULT now()
);

-- User challenges table (challenge progress)
CREATE TABLE IF NOT EXISTS public.user_challenges (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  challenge_id uuid NOT NULL REFERENCES public.challenges(id) ON DELETE CASCADE,
  progress integer NOT NULL DEFAULT 0,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamp with time zone,
  started_at timestamp with time zone DEFAULT now(),
  week_start date DEFAULT (date_trunc('week', now()))::date,
  UNIQUE(user_id, challenge_id, week_start)
);

-- Placement tests table
CREATE TABLE IF NOT EXISTS public.placement_tests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  score integer NOT NULL,
  suggested_level text NOT NULL,
  total_questions integer NOT NULL DEFAULT 30,
  answers_json jsonb NOT NULL DEFAULT '[]',
  breakdown_json jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid,
  title text NOT NULL,
  message text NOT NULL,
  sender_name text NOT NULL DEFAULT 'System',
  target_type text NOT NULL DEFAULT 'all',
  target_value text,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Blog categories table
CREATE TABLE IF NOT EXISTS public.blog_categories (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name_ar text NOT NULL,
  name_en text NOT NULL,
  slug text NOT NULL UNIQUE,
  color text DEFAULT '#3b82f6',
  created_at timestamp with time zone DEFAULT now()
);

-- Blog articles table
CREATE TABLE IF NOT EXISTS public.blog_articles (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title_ar text NOT NULL,
  title_en text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt_ar text NOT NULL,
  excerpt_en text NOT NULL,
  content_ar text NOT NULL,
  content_en text NOT NULL,
  featured_image text,
  author_id uuid,
  author_name text NOT NULL DEFAULT 'فريق LingoArab',
  category_id uuid REFERENCES public.blog_categories(id),
  is_published boolean DEFAULT false,
  published_at timestamp with time zone,
  views_count integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);


-- =====================================================
-- SECTION 3: DATABASE FUNCTIONS
-- =====================================================

-- Function to check if user has a specific role
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Function to compute user level based on XP and achievements
CREATE OR REPLACE FUNCTION public.compute_user_level(
  total_xp integer,
  streak_count integer DEFAULT 0,
  lessons_completed integer DEFAULT 0
)
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

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'name', NEW.email);
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Function to reset periodic XP (weekly/monthly)
CREATE OR REPLACE FUNCTION public.reset_periodic_xp()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
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


-- =====================================================
-- SECTION 4: TRIGGERS
-- =====================================================

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;
DROP TRIGGER IF EXISTS reset_periodic_xp_trigger ON public.profiles;

-- Trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Trigger for updating updated_at on profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger for resetting periodic XP
CREATE TRIGGER reset_periodic_xp_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.reset_periodic_xp();


-- =====================================================
-- SECTION 5: ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.placement_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DO $$ 
DECLARE
  r RECORD;
BEGIN
  FOR r IN (SELECT policyname, tablename FROM pg_policies WHERE schemaname = 'public') 
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', r.policyname, r.tablename);
  END LOOP;
END $$;

-- Profiles policies
CREATE POLICY "Anyone can view profiles for leaderboard" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- User roles policies
CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles" ON public.user_roles
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Units policies
CREATE POLICY "Anyone can view units" ON public.units
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage units" ON public.units
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Lessons policies
CREATE POLICY "Anyone can view lessons" ON public.lessons
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage lessons" ON public.lessons
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Exercises policies
CREATE POLICY "Anyone can view exercises" ON public.exercises
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage exercises" ON public.exercises
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Progress policies
CREATE POLICY "Users can view their own progress" ON public.progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own progress" ON public.progress
  FOR ALL USING (auth.uid() = user_id);

-- Achievements policies
CREATE POLICY "Anyone can view achievements" ON public.achievements
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage achievements" ON public.achievements
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- User achievements policies
CREATE POLICY "Users can view their own achievements" ON public.user_achievements
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own achievements" ON public.user_achievements
  FOR ALL USING (auth.uid() = user_id);

-- Challenges policies
CREATE POLICY "Anyone can view active challenges" ON public.challenges
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage challenges" ON public.challenges
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- User challenges policies
CREATE POLICY "Users can view their own challenges" ON public.user_challenges
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own challenges" ON public.user_challenges
  FOR ALL USING (auth.uid() = user_id);

-- Placement tests policies
CREATE POLICY "Users can view their own placement tests" ON public.placement_tests
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own placement tests" ON public.placement_tests
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Notifications policies
CREATE POLICY "Users can view their notifications" ON public.notifications
  FOR SELECT USING (auth.uid() = user_id OR (target_type = 'all' AND user_id IS NULL));

CREATE POLICY "Users can mark their notifications as read" ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id OR (target_type = 'all' AND user_id IS NULL));

CREATE POLICY "Admins can manage notifications" ON public.notifications
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Blog categories policies
CREATE POLICY "Anyone can view categories" ON public.blog_categories
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage categories" ON public.blog_categories
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Blog articles policies
CREATE POLICY "Anyone can view published articles" ON public.blog_articles
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can view all articles" ON public.blog_articles
  FOR SELECT USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage articles" ON public.blog_articles
  FOR ALL USING (has_role(auth.uid(), 'admin'));


-- =====================================================
-- SECTION 6: STORAGE BUCKETS
-- =====================================================

-- Create avatars bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing storage policies
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload their own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own avatar" ON storage.objects;

-- Storage policies for avatars
CREATE POLICY "Avatar images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own avatar"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own avatar"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);


-- =====================================================
-- SECTION 7: SEED DATA - ACHIEVEMENTS
-- =====================================================

INSERT INTO public.achievements (key, title_ar, title_en, description_ar, description_en, icon, xp_reward, condition_json) VALUES
('first_lesson', 'الدرس الأول', 'First Lesson', 'أكملت درسك الأول!', 'You completed your first lesson!', 'star', 50, '{"type": "first_lesson", "value": 1}'),
('streak_3', 'ثلاثة أيام متتالية', '3 Day Streak', 'تعلم لمدة 3 أيام متتالية', 'Learn for 3 consecutive days', 'flame', 100, '{"type": "streak_reached", "value": 3}'),
('streak_7', 'أسبوع متواصل', 'Week Streak', 'حافظت على سلسلة 7 أيام', 'Maintained a 7-day streak', 'flame', 200, '{"type": "streak_reached", "value": 7}'),
('streak_30', 'شهر متواصل', 'Month Streak', 'حافظت على سلسلة 30 يوم', 'Maintained a 30-day streak', 'flame', 150, '{"type": "streak_reached", "value": 30}'),
('xp_100', '100 نقطة', 'XP Hunter', 'اجمع 100 نقطة خبرة', 'Earn 100 XP', 'zap', 50, '{"type": "xp_reached", "value": 100}'),
('xp_500', '500 نقطة', 'XP Champion', 'اجمع 500 نقطة خبرة', 'Earn 500 XP', 'zap', 100, '{"type": "xp_reached", "value": 500}'),
('xp_1000', 'ألف نقطة', '1000 XP', 'وصلت إلى 1000 نقطة خبرة', 'Reached 1000 XP', 'star', 100, '{"type": "xp_reached", "value": 1000}'),
('xp_5000', 'خمسة آلاف', '5000 XP', 'وصلت إلى 5000 نقطة خبرة', 'Reached 5000 XP', 'star', 200, '{"type": "xp_reached", "value": 5000}'),
('perfect_lesson', 'درس مثالي', 'Perfect Score', 'أكمل درساً بدون أخطاء', 'Complete a lesson without mistakes', 'check-circle', 75, '{"type": "perfect_lesson", "value": 1}'),
('lessons_30', 'متعلم نشط', 'Active Learner', 'أكملت 30 درساً', 'Completed 30 lessons', 'graduation-cap', 100, '{"type": "lessons_completed", "value": 30}'),
('unit_completed', 'وحدة كاملة', 'Unit Complete', 'أكملت وحدة كاملة', 'Completed a full unit', 'check-circle', 50, '{"type": "unit_completed", "value": 1}'),
('complete_a1', 'إتمام A1', 'A1 Complete', 'أكملت مستوى A1 بالكامل', 'Completed the entire A1 level', 'award', 300, '{"type": "level_completed", "level": "A1"}'),
('complete_a2', 'إتمام A2', 'A2 Complete', 'أكملت مستوى A2 بالكامل', 'Completed the entire A2 level', 'award', 400, '{"type": "level_completed", "level": "A2"}'),
('complete_b1', 'إتمام B1', 'B1 Complete', 'أكملت مستوى B1 بالكامل', 'Completed the entire B1 level', 'award', 500, '{"type": "level_completed", "level": "B1"}'),
('complete_b2', 'إتمام B2', 'B2 Complete', 'أكملت مستوى B2 بالكامل', 'Completed the entire B2 level', 'award', 600, '{"type": "level_completed", "level": "B2"}')
ON CONFLICT (key) DO UPDATE SET
  title_ar = EXCLUDED.title_ar,
  title_en = EXCLUDED.title_en,
  description_ar = EXCLUDED.description_ar,
  description_en = EXCLUDED.description_en,
  icon = EXCLUDED.icon,
  xp_reward = EXCLUDED.xp_reward,
  condition_json = EXCLUDED.condition_json;


-- =====================================================
-- SECTION 8: SEED DATA - CHALLENGES
-- =====================================================

INSERT INTO public.challenges (key, name_ar, name_en, description_ar, description_en, challenge_type, target_value, reward_xp) VALUES
('streak_7_days', 'سلسلة 7 أيام', '7-Day Streak', 'حافظ على سلسلة تعلم لمدة 7 أيام متتالية', 'Maintain a learning streak for 7 consecutive days', 'weekly', 7, 100),
('complete_5_lessons', 'أكمل 5 دروس', 'Complete 5 Lessons', 'أكمل 5 دروس هذا الأسبوع', 'Complete 5 lessons this week', 'weekly', 5, 75),
('earn_300_xp', 'اكسب 300 XP', 'Earn 300 XP', 'اكسب 300 نقطة خبرة هذا الأسبوع', 'Earn 300 XP this week', 'weekly', 300, 50),
('daily_practice', 'تمرين يومي', 'Daily Practice', 'تدرب كل يوم لمدة 5 أيام', 'Practice every day for 5 days', 'weekly', 5, 80),
('complete_10_lessons', 'أكمل 10 دروس', 'Complete 10 Lessons', 'أكمل 10 دروس هذا الأسبوع', 'Complete 10 lessons this week', 'weekly', 10, 150),
('earn_500_xp', 'اكسب 500 XP', 'Earn 500 XP', 'اكسب 500 نقطة خبرة هذا الأسبوع', 'Earn 500 XP this week', 'weekly', 500, 100)
ON CONFLICT (key) DO UPDATE SET
  name_ar = EXCLUDED.name_ar,
  name_en = EXCLUDED.name_en,
  description_ar = EXCLUDED.description_ar,
  description_en = EXCLUDED.description_en,
  challenge_type = EXCLUDED.challenge_type,
  target_value = EXCLUDED.target_value,
  reward_xp = EXCLUDED.reward_xp;


-- =====================================================
-- SECTION 9: SEED DATA - BLOG CATEGORIES
-- =====================================================

INSERT INTO public.blog_categories (name_ar, name_en, slug, color) VALUES
('نصائح التعلم', 'Learning Tips', 'learning-tips', '#10b981'),
('القواعد', 'Grammar', 'grammar', '#8b5cf6'),
('المفردات', 'Vocabulary', 'vocabulary', '#f59e0b'),
('المحادثة', 'Conversation', 'conversation', '#3b82f6'),
('الثقافة', 'Culture', 'culture', '#ec4899'),
('الاختبارات', 'Tests & Exams', 'tests', '#ef4444'),
('قصص النجاح', 'Success Stories', 'success-stories', '#22c55e')
ON CONFLICT (slug) DO UPDATE SET
  name_ar = EXCLUDED.name_ar,
  name_en = EXCLUDED.name_en,
  color = EXCLUDED.color;


-- =====================================================
-- END OF DATABASE EXPORT
-- =====================================================

-- =====================================================
-- NOTES / ملاحظات:
-- =====================================================
-- 1. This script creates the complete database structure for LingoArab
--    هذا السكريبت ينشئ هيكل قاعدة البيانات الكامل لـ LingoArab
--
-- 2. Run this on a fresh Supabase project
--    نفذ هذا على مشروع Supabase جديد
--
-- 3. auth.users table is managed by Supabase Auth - users must re-register
--    جدول auth.users يديره Supabase Auth - يجب على المستخدمين إعادة التسجيل
--
-- 4. Lesson content is stored in frontend code (src/lib/*-lessons*.ts)
--    محتوى الدروس مخزن في الكود الأمامي (src/lib/*-lessons*.ts)
--
-- 5. Curriculum structure:
--    - 4 Levels: A1, A2, B1, B2
--    - 10 Units per level
--    - 5 Lessons per unit
--    - Total: 200 lessons (150 completed, 50 B2 remaining)
--    - Passing score: 50%
--
-- 6. Auth Configuration:
--    - Auto-confirm email: ENABLED
--    - Google OAuth: ENABLED
--    - Anonymous sign-ups: DISABLED
--
-- 7. Edge Functions:
--    - detect-country: Detects user country from IP
--    - send-password-reset: Sends password reset emails via Resend
--    - send-verification-email: Sends verification emails via Resend
--
-- 8. Version: 2.0 - Updated 2026-01-22
-- =====================================================
