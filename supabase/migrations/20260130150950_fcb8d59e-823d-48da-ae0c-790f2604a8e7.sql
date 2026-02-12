-- Update the welcome notification function to include certificate info
CREATE OR REPLACE FUNCTION public.notify_welcome_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_name text;
BEGIN
  -- Get user name, fallback to 'صديقنا' if name is null
  user_name := COALESCE(NEW.name, NEW.display_name, 'صديقنا');
  
  -- Insert welcome notification with certificate info and contact page link
  INSERT INTO public.notifications (
    user_id,
    title,
    message,
    sender_name,
    target_type,
    target_value
  ) VALUES (
    NEW.id,
    'مرحباً بك في Lingo Arab! 🎉',
    'أهلاً ' || user_name || '! نتمنى لك رحلة تعلم ممتعة ومثمرة معنا. 🎓 عند إكمالك لمستوى C2، يمكنك الحصول على شهادة إتقان اللغة الإنجليزية مجاناً! إذا واجهتك أي مشكلة أو لديك أي استفسار، لا تتردد في التواصل معنا. نحن هنا لمساعدتك! 💪',
    'فريق Lingo Arab',
    'link',
    '/contact'
  );
  
  RETURN NEW;
END;
$$;