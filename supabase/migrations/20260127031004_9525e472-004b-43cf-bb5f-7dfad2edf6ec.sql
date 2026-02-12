-- Add last_active_at column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS last_active_at timestamp with time zone DEFAULT now();

-- Update existing profiles to use last_login_at as initial value
UPDATE public.profiles 
SET last_active_at = COALESCE(last_login_at, created_at, now())
WHERE last_active_at IS NULL;