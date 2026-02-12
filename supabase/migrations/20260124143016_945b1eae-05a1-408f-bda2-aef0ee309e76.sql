-- Create a function to delete profile when user is deleted from auth.users
CREATE OR REPLACE FUNCTION public.handle_user_deletion()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Delete user's profile
  DELETE FROM public.profiles WHERE id = OLD.id;
  
  -- Delete user's progress
  DELETE FROM public.progress WHERE user_id = OLD.id;
  
  -- Delete user's achievements
  DELETE FROM public.user_achievements WHERE user_id = OLD.id;
  
  -- Delete user's challenges
  DELETE FROM public.user_challenges WHERE user_id = OLD.id;
  
  -- Delete user's notifications
  DELETE FROM public.notifications WHERE user_id = OLD.id;
  
  -- Delete user's placement tests
  DELETE FROM public.placement_tests WHERE user_id = OLD.id;
  
  -- Delete user's roles
  DELETE FROM public.user_roles WHERE user_id = OLD.id;
  
  RETURN OLD;
END;
$$;

-- Create trigger on auth.users for deletion
DROP TRIGGER IF EXISTS on_auth_user_deleted ON auth.users;
CREATE TRIGGER on_auth_user_deleted
  BEFORE DELETE ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_user_deletion();