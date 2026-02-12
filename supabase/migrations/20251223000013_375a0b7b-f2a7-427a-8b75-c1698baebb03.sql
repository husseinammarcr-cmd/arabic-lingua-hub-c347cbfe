-- Create notifications table
CREATE TABLE public.notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  sender_name TEXT NOT NULL DEFAULT 'System',
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  target_type TEXT NOT NULL DEFAULT 'all',
  target_value TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Users can view their own notifications (or notifications targeted to all)
CREATE POLICY "Users can view their notifications"
ON public.notifications
FOR SELECT
USING (
  auth.uid() = user_id OR 
  (target_type = 'all' AND user_id IS NULL)
);

-- Users can update their own notifications (mark as read)
CREATE POLICY "Users can mark their notifications as read"
ON public.notifications
FOR UPDATE
USING (auth.uid() = user_id OR (target_type = 'all' AND user_id IS NULL));

-- Admins can manage all notifications
CREATE POLICY "Admins can manage notifications"
ON public.notifications
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add is_founder and is_verified columns to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS is_founder BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS is_verified BOOLEAN DEFAULT false;

-- Create index for faster notification queries
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_notifications_target_type ON public.notifications(target_type);