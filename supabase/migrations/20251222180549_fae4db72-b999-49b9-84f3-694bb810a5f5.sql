-- Add unique constraint on progress table for upsert to work
ALTER TABLE public.progress 
ADD CONSTRAINT progress_user_lesson_unique UNIQUE (user_id, lesson_id);

-- Add index for faster progress queries
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON public.progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_lesson_id ON public.progress(lesson_id);