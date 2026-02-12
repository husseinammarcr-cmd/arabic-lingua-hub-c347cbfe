-- Add placement test columns to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS current_level text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS placement_level text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS placement_score integer DEFAULT NULL,
ADD COLUMN IF NOT EXISTS has_taken_placement boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS placement_taken_at timestamp with time zone DEFAULT NULL;

-- Create placement_tests table
CREATE TABLE IF NOT EXISTS public.placement_tests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  score integer NOT NULL,
  total_questions integer NOT NULL DEFAULT 30,
  suggested_level text NOT NULL,
  answers_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  breakdown_json jsonb DEFAULT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.placement_tests ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Users can view their own placement tests"
ON public.placement_tests
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own placement tests"
ON public.placement_tests
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_placement_tests_user_id ON public.placement_tests(user_id);
CREATE INDEX IF NOT EXISTS idx_placement_tests_created_at ON public.placement_tests(created_at DESC);