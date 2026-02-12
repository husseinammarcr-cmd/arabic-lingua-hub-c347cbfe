
-- Create activity log table to track daily user visits
CREATE TABLE public.user_activity_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  activity_date DATE NOT NULL DEFAULT CURRENT_DATE,
  visit_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, activity_date)
);

-- Enable RLS
ALTER TABLE public.user_activity_log ENABLE ROW LEVEL SECURITY;

-- Users can insert/update their own activity
CREATE POLICY "Users can insert own activity"
ON public.user_activity_log
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own activity"
ON public.user_activity_log
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Admins can read all activity logs
CREATE POLICY "Admins can read all activity"
ON public.user_activity_log
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create index for fast queries
CREATE INDEX idx_activity_log_date ON public.user_activity_log (activity_date);
CREATE INDEX idx_activity_log_user ON public.user_activity_log (user_id);
CREATE INDEX idx_activity_log_user_date ON public.user_activity_log (user_id, activity_date);

-- Trigger for updated_at
CREATE TRIGGER update_activity_log_updated_at
BEFORE UPDATE ON public.user_activity_log
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
