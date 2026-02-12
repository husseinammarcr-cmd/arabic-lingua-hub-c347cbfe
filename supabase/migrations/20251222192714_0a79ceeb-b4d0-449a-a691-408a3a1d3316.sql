-- Fix RLS for leaderboard: allow public read of non-sensitive profile fields
-- Drop existing restrictive SELECT policy
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Create policy for users to view any profile (needed for leaderboard)
CREATE POLICY "Anyone can view profiles for leaderboard" 
ON public.profiles 
FOR SELECT 
USING (true);

-- Keep update/insert policies restricted to own profile (already exists)