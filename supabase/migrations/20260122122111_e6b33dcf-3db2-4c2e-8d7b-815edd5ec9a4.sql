-- Add notification and privacy preferences to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS notify_course_updates boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS notify_reminders boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS notify_achievements boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS notify_announcements boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS privacy_show_profile boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS privacy_show_progress boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS privacy_marketing_emails boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS last_login_at timestamp with time zone DEFAULT now(),
ADD COLUMN IF NOT EXISTS username text UNIQUE;

-- Create avatars storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload their own avatar
CREATE POLICY "Users can upload their own avatar"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Allow authenticated users to update their own avatar
CREATE POLICY "Users can update their own avatar"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Allow authenticated users to delete their own avatar
CREATE POLICY "Users can delete their own avatar"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Allow public read access to avatars
CREATE POLICY "Avatars are publicly accessible"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'avatars');