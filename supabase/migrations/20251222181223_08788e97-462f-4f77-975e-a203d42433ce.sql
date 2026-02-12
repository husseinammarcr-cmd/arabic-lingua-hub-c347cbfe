-- Drop the foreign key constraint first
ALTER TABLE public.progress DROP CONSTRAINT IF EXISTS progress_lesson_id_fkey;

-- Drop existing constraints and indexes
ALTER TABLE public.progress DROP CONSTRAINT IF EXISTS progress_user_lesson_unique;
DROP INDEX IF EXISTS idx_progress_lesson_id;

-- Change lesson_id from UUID to TEXT to match curriculum string IDs
ALTER TABLE public.progress ALTER COLUMN lesson_id TYPE TEXT USING lesson_id::TEXT;

-- Recreate the unique constraint
ALTER TABLE public.progress ADD CONSTRAINT progress_user_lesson_unique UNIQUE (user_id, lesson_id);

-- Recreate index
CREATE INDEX idx_progress_lesson_id ON public.progress(lesson_id);