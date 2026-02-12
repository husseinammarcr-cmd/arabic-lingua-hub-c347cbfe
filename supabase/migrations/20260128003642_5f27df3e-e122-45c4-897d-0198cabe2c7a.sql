-- Create function to notify admins about new contact messages
CREATE OR REPLACE FUNCTION public.notify_admins_on_contact_message()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_user RECORD;
BEGIN
  -- Loop through all admin users and create notifications for them
  FOR admin_user IN 
    SELECT user_id FROM public.user_roles WHERE role = 'admin'
  LOOP
    INSERT INTO public.notifications (
      user_id,
      title,
      message,
      sender_name,
      target_type,
      target_value
    ) VALUES (
      admin_user.user_id,
      'رسالة جديدة من صفحة التواصل',
      'رسالة من: ' || NEW.name || ' - الموضوع: ' || NEW.subject,
      'System',
      'contact_message',
      NEW.id::text
    );
  END LOOP;
  
  RETURN NEW;
END;
$$;

-- Create trigger on contact_messages table
CREATE TRIGGER on_contact_message_created
  AFTER INSERT ON public.contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_admins_on_contact_message();