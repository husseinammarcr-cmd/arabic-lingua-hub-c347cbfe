-- Create certificate_requests table for tracking user certificate applications
CREATE TABLE public.certificate_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  level text NOT NULL DEFAULT 'C2',
  status text NOT NULL DEFAULT 'pending',
  requested_at timestamp with time zone NOT NULL DEFAULT now(),
  reviewed_at timestamp with time zone,
  reviewed_by uuid,
  notes text
);

-- Create certificates table for issued certificates
CREATE TABLE public.certificates (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  certificate_code text NOT NULL UNIQUE,
  full_name text NOT NULL,
  level text NOT NULL,
  issued_at timestamp with time zone NOT NULL DEFAULT now(),
  issued_by uuid NOT NULL,
  is_valid boolean NOT NULL DEFAULT true
);

-- Enable RLS
ALTER TABLE public.certificate_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- RLS policies for certificate_requests
CREATE POLICY "Users can view their own requests"
ON public.certificate_requests
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests"
ON public.certificate_requests
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can manage all requests"
ON public.certificate_requests
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS policies for certificates
CREATE POLICY "Anyone can view valid certificates for verification"
ON public.certificates
FOR SELECT
USING (is_valid = true);

CREATE POLICY "Admins can manage certificates"
ON public.certificates
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Function to notify admins when certificate is requested
CREATE OR REPLACE FUNCTION public.notify_admins_on_certificate_request()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  admin_user RECORD;
BEGIN
  FOR admin_user IN 
    SELECT user_id FROM public.user_roles WHERE role = 'admin'
  LOOP
    INSERT INTO public.notifications (
      user_id,
      title,
      message,
      sender_name,
      target_type,
      target_value
    ) VALUES (
      admin_user.user_id,
      'طلب شهادة جديد 📜',
      'طلب شهادة من: ' || NEW.full_name || ' - المستوى: ' || NEW.level,
      'System',
      'certificate_request',
      NEW.id::text
    );
  END LOOP;
  
  RETURN NEW;
END;
$function$;

-- Trigger for certificate request notifications
CREATE TRIGGER on_certificate_request_notify_admins
  AFTER INSERT ON public.certificate_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_admins_on_certificate_request();

-- Function to generate unique certificate code
CREATE OR REPLACE FUNCTION public.generate_certificate_code()
RETURNS text
LANGUAGE plpgsql
AS $function$
DECLARE
  new_code text;
  code_exists boolean;
BEGIN
  LOOP
    -- Generate code like: LA-C2-XXXXXX (LA = LingoArab, C2 = level, 6 random chars)
    new_code := 'LA-C2-' || upper(substring(md5(random()::text) from 1 for 6));
    
    -- Check if code exists
    SELECT EXISTS(SELECT 1 FROM public.certificates WHERE certificate_code = new_code) INTO code_exists;
    
    EXIT WHEN NOT code_exists;
  END LOOP;
  
  RETURN new_code;
END;
$function$;