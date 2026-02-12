-- Create enums for app roles, user levels, daily goals, and exercise types
CREATE TYPE public.app_role AS ENUM ('user', 'admin');
CREATE TYPE public.user_level AS ENUM ('beginner', 'intermediate', 'advanced');
CREATE TYPE public.daily_goal AS ENUM ('5', '10', '15');
CREATE TYPE public.exercise_type AS ENUM ('mcq', 'fill_blank', 'reorder', 'listening', 'translation');

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  level user_level DEFAULT 'beginner',
  daily_goal daily_goal DEFAULT '10',
  xp INTEGER DEFAULT 0,
  streak_count INTEGER DEFAULT 0,
  last_study_date DATE,
  is_premium BOOLEAN DEFAULT FALSE,
  interests TEXT[],
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_roles table for role-based access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  UNIQUE (user_id, role)
);

-- Create units table
CREATE TABLE public.units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  icon TEXT DEFAULT 'book',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create lessons table
CREATE TABLE public.lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id UUID REFERENCES public.units(id) ON DELETE CASCADE NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  xp_reward INTEGER DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create exercises table
CREATE TABLE public.exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  type exercise_type NOT NULL,
  prompt_ar TEXT,
  prompt_en TEXT,
  data_json JSONB NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create progress table for tracking user lesson progress
CREATE TABLE public.progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  score INTEGER DEFAULT 0,
  hearts_remaining INTEGER DEFAULT 5,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (user_id, lesson_id)
);

-- Create achievements table
CREATE TABLE public.achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_ar TEXT NOT NULL,
  description_en TEXT NOT NULL,
  icon TEXT DEFAULT 'trophy',
  xp_reward INTEGER DEFAULT 50,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_achievements table
CREATE TABLE public.user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  achievement_id UUID REFERENCES public.achievements(id) ON DELETE CASCADE NOT NULL,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (user_id, achievement_id)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;

-- Create has_role function for secure role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- User roles policies
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Units policies (public read, admin write)
CREATE POLICY "Anyone can view units"
  ON public.units FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage units"
  ON public.units FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Lessons policies
CREATE POLICY "Anyone can view lessons"
  ON public.lessons FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage lessons"
  ON public.lessons FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Exercises policies
CREATE POLICY "Anyone can view exercises"
  ON public.exercises FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage exercises"
  ON public.exercises FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Progress policies
CREATE POLICY "Users can view their own progress"
  ON public.progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own progress"
  ON public.progress FOR ALL
  USING (auth.uid() = user_id);

-- Achievements policies
CREATE POLICY "Anyone can view achievements"
  ON public.achievements FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage achievements"
  ON public.achievements FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- User achievements policies
CREATE POLICY "Users can view their own achievements"
  ON public.user_achievements FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own achievements"
  ON public.user_achievements FOR ALL
  USING (auth.uid() = user_id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'name', NEW.email);
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_progress_updated_at
  BEFORE UPDATE ON public.progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample achievements
INSERT INTO public.achievements (key, title_ar, title_en, description_ar, description_en, icon, xp_reward) VALUES
('first_lesson', 'الدرس الأول', 'First Lesson', 'أكمل درسك الأول', 'Complete your first lesson', 'star', 50),
('streak_3', 'ثلاثة أيام متتالية', '3 Day Streak', 'تعلم لمدة 3 أيام متتالية', 'Learn for 3 consecutive days', 'flame', 100),
('streak_7', 'أسبوع كامل', 'Week Warrior', 'تعلم لمدة 7 أيام متتالية', 'Learn for 7 consecutive days', 'flame', 200),
('unit_complete', 'وحدة كاملة', 'Unit Master', 'أكمل وحدة كاملة', 'Complete an entire unit', 'trophy', 150),
('xp_100', '100 نقطة', 'XP Hunter', 'اجمع 100 نقطة خبرة', 'Earn 100 XP', 'zap', 50),
('xp_500', '500 نقطة', 'XP Champion', 'اجمع 500 نقطة خبرة', 'Earn 500 XP', 'zap', 100),
('perfect_lesson', 'درس مثالي', 'Perfect Score', 'أكمل درساً بدون أخطاء', 'Complete a lesson without mistakes', 'check-circle', 75);

-- Insert sample units
INSERT INTO public.units (id, title_ar, title_en, description_ar, description_en, order_index, icon) VALUES
('11111111-1111-1111-1111-111111111111', 'الأساسيات', 'Basics', 'تعلم الكلمات والعبارات الأساسية', 'Learn basic words and phrases', 1, 'book-open'),
('22222222-2222-2222-2222-222222222222', 'التحيات والتعارف', 'Greetings', 'كيف تحيي الآخرين وتقدم نفسك', 'How to greet others and introduce yourself', 2, 'hand-wave'),
('33333333-3333-3333-3333-333333333333', 'الأرقام والألوان', 'Numbers & Colors', 'تعلم الأرقام والألوان بالإنجليزية', 'Learn numbers and colors in English', 3, 'palette');

-- Insert sample lessons for Unit 1
INSERT INTO public.lessons (id, unit_id, title_ar, title_en, description_ar, description_en, order_index, xp_reward) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 'الضمائر', 'Pronouns', 'تعلم ضمائر المتكلم والمخاطب والغائب', 'Learn personal pronouns', 1, 10),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '11111111-1111-1111-1111-111111111111', 'أفعال الكينونة', 'To Be Verbs', 'تعلم كيفية استخدام am, is, are', 'Learn how to use am, is, are', 2, 15),
('cccccccc-cccc-cccc-cccc-cccccccccccc', '11111111-1111-1111-1111-111111111111', 'الأسئلة البسيطة', 'Simple Questions', 'تعلم كيفية طرح الأسئلة البسيطة', 'Learn how to ask simple questions', 3, 15);

-- Insert sample exercises for Lesson 1 (Pronouns)
INSERT INTO public.exercises (lesson_id, type, prompt_ar, prompt_en, data_json, order_index) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'mcq', 'ما هو الضمير الصحيح للمتكلم؟', 'What is the correct pronoun for "أنا"?', 
 '{"options": ["I", "You", "He", "She"], "correct": 0, "hint_ar": "الضمير الأول للمتكلم", "hint_en": "First person singular"}', 1),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'mcq', 'ما معنى "They"؟', 'What does "They" mean?',
 '{"options": ["أنت", "هو", "هي", "هم"], "correct": 3, "hint_ar": "ضمير الجمع للغائب", "hint_en": "Third person plural"}', 2),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'fill_blank', 'أكمل الفراغ: ___ am a student', 'Fill in the blank: ___ am a student',
 '{"answer": "I", "alternatives": ["i"], "hint_ar": "ضمير المتكلم المفرد", "hint_en": "First person singular pronoun"}', 3),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'translation', 'ترجم إلى الإنجليزية: هي طالبة', 'Translate to English: هي طالبة',
 '{"answer": "She is a student", "alternatives": ["she is a student", "She''s a student", "she''s a student"], "hint_ar": "استخدم ضمير المؤنث الغائب", "hint_en": "Use the feminine third person pronoun"}', 4),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'reorder', 'رتب الكلمات لتكوين جملة صحيحة', 'Reorder the words to form a correct sentence',
 '{"words": ["am", "I", "happy"], "correct_order": [1, 0, 2], "answer": "I am happy", "hint_ar": "ابدأ بالضمير", "hint_en": "Start with the pronoun"}', 5);

-- Insert sample exercises for Lesson 2 (To Be Verbs)
INSERT INTO public.exercises (lesson_id, type, prompt_ar, prompt_en, data_json, order_index) VALUES
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'mcq', 'اختر الفعل الصحيح: I ___ a teacher', 'Choose the correct verb: I ___ a teacher',
 '{"options": ["am", "is", "are", "be"], "correct": 0, "hint_ar": "استخدم مع ضمير المتكلم I", "hint_en": "Used with the pronoun I"}', 1),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'mcq', 'اختر الفعل الصحيح: She ___ beautiful', 'Choose the correct verb: She ___ beautiful',
 '{"options": ["am", "is", "are", "be"], "correct": 1, "hint_ar": "استخدم مع ضمائر المفرد الغائب", "hint_en": "Used with third person singular"}', 2),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'fill_blank', 'أكمل: They ___ my friends', 'Fill in: They ___ my friends',
 '{"answer": "are", "alternatives": ["Are"], "hint_ar": "استخدم مع ضمائر الجمع", "hint_en": "Used with plural pronouns"}', 3),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'translation', 'ترجم: نحن سعداء', 'Translate: نحن سعداء',
 '{"answer": "We are happy", "alternatives": ["we are happy", "We''re happy", "we''re happy"], "hint_ar": "استخدم We مع are", "hint_en": "Use We with are"}', 4);

-- Insert sample exercises for Lesson 3 (Simple Questions)
INSERT INTO public.exercises (lesson_id, type, prompt_ar, prompt_en, data_json, order_index) VALUES
('cccccccc-cccc-cccc-cccc-cccccccccccc', 'mcq', 'كيف تسأل عن الاسم بالإنجليزية؟', 'How do you ask for someone''s name in English?',
 '{"options": ["What is your name?", "How is your name?", "Who is your name?", "Where is your name?"], "correct": 0, "hint_ar": "استخدم What للسؤال عن الاسم", "hint_en": "Use What to ask about names"}', 1),
('cccccccc-cccc-cccc-cccc-cccccccccccc', 'mcq', 'ما معنى: How are you?', 'What does "How are you?" mean?',
 '{"options": ["من أنت؟", "كيف حالك؟", "أين أنت؟", "ماذا تفعل؟"], "correct": 1, "hint_ar": "سؤال عن الحالة", "hint_en": "Asking about condition"}', 2),
('cccccccc-cccc-cccc-cccc-cccccccccccc', 'reorder', 'رتب الكلمات لتكوين سؤال', 'Reorder to form a question',
 '{"words": ["are", "Where", "you", "from", "?"], "correct_order": [1, 0, 2, 3, 4], "answer": "Where are you from?", "hint_ar": "ابدأ بكلمة الاستفهام", "hint_en": "Start with the question word"}', 3),
('cccccccc-cccc-cccc-cccc-cccccccccccc', 'translation', 'ترجم: ما اسمك؟', 'Translate: ما اسمك؟',
 '{"answer": "What is your name?", "alternatives": ["what is your name?", "What''s your name?", "what''s your name?"], "hint_ar": "استخدم What", "hint_en": "Use What"}', 4);