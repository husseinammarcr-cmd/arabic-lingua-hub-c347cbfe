-- Remove the default value from last_active_at column so new users don't get auto-filled
ALTER TABLE public.profiles 
ALTER COLUMN last_active_at DROP DEFAULT;