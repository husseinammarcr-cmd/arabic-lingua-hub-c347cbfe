import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, X, RefreshCw } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const EmailVerificationBanner = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [dismissed, setDismissed] = useState(false);
  const [resending, setResending] = useState(false);

  // Check if email is verified
  const isEmailVerified = user?.email_confirmed_at != null;

  // Don't show if verified, dismissed, or no user
  if (!user || isEmailVerified || dismissed) {
    return null;
  }

  const handleResend = async () => {
    if (!user.email) return;
    
    setResending(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: user.email,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
        }
      });
      
      if (error) throw error;
      
      toast({
        title: 'تم إرسال رسالة التحقق! 📧',
        description: 'يرجى التحقق من بريدك الإلكتروني',
      });
    } catch (error: any) {
      toast({
        title: 'خطأ',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <div 
      className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-primary/20"
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="p-2 bg-primary/20 rounded-full">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm text-foreground">
              <span className="font-medium">لم يتم تأكيد بريدك الإلكتروني.</span>
              {' '}
              <span className="text-muted-foreground">
                يرجى التحقق من بريدك لتفعيل جميع الميزات.
              </span>
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleResend}
              disabled={resending}
              className="text-xs"
            >
              {resending ? (
                <RefreshCw className="w-3 h-3 ml-1 animate-spin" />
              ) : (
                <RefreshCw className="w-3 h-3 ml-1" />
              )}
              إعادة الإرسال
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setDismissed(true)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationBanner;
