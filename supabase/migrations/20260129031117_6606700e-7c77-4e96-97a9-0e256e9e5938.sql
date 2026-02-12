
-- Update welcome notification function to include contact page link
CREATE OR REPLACE FUNCTION public.send_welcome_notification()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  user_name text;
BEGIN
  -- Get user name, fallback to 'صديقنا' if name is null
  user_name := COALESCE(NEW.name, NEW.display_name, 'صديقنا');
  
  -- Insert welcome notification with contact page link
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
    'أهلاً ' || user_name || '! نتمنى لك رحلة تعلم ممتعة ومثمرة معنا. إذا واجهتك أي مشكلة أو لديك أي استفسار، لا تتردد في التواصل معنا. نحن هنا لمساعدتك! 💪',
    'فريق Lingo Arab',
    'link',
    '/contact'
  );
  
  RETURN NEW;
END;
$function$;
