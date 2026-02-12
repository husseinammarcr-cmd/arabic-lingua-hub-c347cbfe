-- =====================================================
-- LingoArab - Missing Database Items
-- العناصر الناقصة في قاعدة البيانات
-- Generated: 2026-01-22
-- =====================================================
-- ⚠️ تنبيه: هذا الملف يحتوي فقط على العناصر الناقصة
-- قم بتنفيذه بعد التأكد من وجود الجداول والـ Functions
-- =====================================================


-- =====================================================
-- SECTION 1: TRIGGERS (الناقصة)
-- =====================================================

-- Trigger for new user registration (creates profile + role automatically)
-- يتم تنفيذه عند تسجيل مستخدم جديد
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Trigger for updating updated_at on profiles
-- تحديث تاريخ التعديل تلقائياً
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger for resetting periodic XP (weekly/monthly)
-- إعادة تعيين XP الأسبوعي والشهري
CREATE TRIGGER reset_periodic_xp_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.reset_periodic_xp();


-- =====================================================
-- SECTION 2: SEED DATA - ACHIEVEMENTS (إذا كانت ناقصة)
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
('complete_a1', 'إتمام A1', 'A1 Complete', 'أكملت مستوى A1 بالكامل', 'Completed the entire A1 level', 'award', 300, '{"type": "level_completed", "level": "A1"}')
ON CONFLICT (key) DO NOTHING;


-- =====================================================
-- SECTION 3: SEED DATA - CHALLENGES (إذا كانت ناقصة)
-- =====================================================

INSERT INTO public.challenges (key, name_ar, name_en, description_ar, description_en, challenge_type, target_value, reward_xp) VALUES
('streak_7_days', 'سلسلة 7 أيام', '7-Day Streak', 'حافظ على سلسلة تعلم لمدة 7 أيام متتالية', 'Maintain a learning streak for 7 consecutive days', 'weekly', 7, 100),
('complete_5_lessons', 'أكمل 5 دروس', 'Complete 5 Lessons', 'أكمل 5 دروس هذا الأسبوع', 'Complete 5 lessons this week', 'weekly', 5, 75),
('earn_300_xp', 'اكسب 300 XP', 'Earn 300 XP', 'اكسب 300 نقطة خبرة هذا الأسبوع', 'Earn 300 XP this week', 'weekly', 300, 50),
('daily_practice', 'تمرين يومي', 'Daily Practice', 'تدرب كل يوم لمدة 5 أيام', 'Practice every day for 5 days', 'weekly', 5, 80)
ON CONFLICT (key) DO NOTHING;


-- =====================================================
-- SECTION 4: SEED DATA - BLOG CATEGORIES (إذا كانت ناقصة)
-- =====================================================

INSERT INTO public.blog_categories (name_ar, name_en, slug, color) VALUES
('نصائح التعلم', 'Learning Tips', 'learning-tips', '#10b981'),
('القواعد', 'Grammar', 'grammar', '#8b5cf6'),
('المفردات', 'Vocabulary', 'vocabulary', '#f59e0b'),
('المحادثة', 'Conversation', 'conversation', '#3b82f6'),
('الثقافة', 'Culture', 'culture', '#ec4899')
ON CONFLICT (slug) DO NOTHING;


-- =====================================================
-- END OF MISSING ITEMS
-- =====================================================
