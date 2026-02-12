
-- Create function to properly log daily activity with visit_count increment
CREATE OR REPLACE FUNCTION public.log_daily_activity(p_user_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.user_activity_log (user_id, activity_date, visit_count)
  VALUES (p_user_id, CURRENT_DATE, 1)
  ON CONFLICT (user_id, activity_date)
  DO UPDATE SET 
    visit_count = user_activity_log.visit_count + 1,
    updated_at = now();
END;
$$;
