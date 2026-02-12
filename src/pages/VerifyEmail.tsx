import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, RefreshCw, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import AuthBackground from '@/components/animations/AuthBackground';

const VerifyEmail = () => {
  const [resending, setResending] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Get email from URL params or sessionStorage
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get('email') || sessionStorage.getItem('pendingVerificationEmail') || '';

  const handleResend = async () => {
    if (!email) {
      toast({
        title: 'خطأ',
        description: 'لم يتم العثور على البريد الإلكتروني. يرجى التسجيل مرة أخرى.',
        variant: 'destructive'
      });
      navigate('/auth');
      return;
    }

    setResending(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        if (error.message.includes('rate limit') || error.message.includes('too many')) {
          toast({
            title: 'يرجى الانتظار',
            description: 'تم إرسال الكثير من الطلبات. انتظر بضع دقائق قبل المحاولة مرة أخرى.',
            variant: 'destructive'
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: 'تم إعادة الإرسال! ✉️',
          description: 'تحقق من بريدك الإلكتروني للحصول على رابط التأكيد الجديد.'
        });
      }
    } catch (error: any) {
      toast({
        title: 'خطأ',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
      {/* Animated Background */}
      <AuthBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="backdrop-blur-sm bg-card/95 border-border/50 shadow-2xl overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-l from-primary/20 via-primary/10 to-transparent p-6 text-center relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
            >
              <Mail className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            
            {/* Floating sparkles */}
            <motion.div
              animate={{ 
                y: [-5, 5, -5],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-8"
            >
              <Sparkles className="w-5 h-5 text-primary/60" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [5, -5, 5],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-8"
            >
              <Sparkles className="w-4 h-4 text-primary/40" />
            </motion.div>
          </div>

          <CardContent className="p-6 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-2xl font-bold text-foreground mb-2">
                تحقق من بريدك الإلكتروني
              </h1>
              <p className="text-muted-foreground">
                لقد أرسلنا رابط التأكيد إلى
              </p>
              {email && (
                <p className="font-medium text-primary mt-1" dir="ltr">
                  {email}
                </p>
              )}
            </motion.div>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-muted/50 rounded-xl p-4 space-y-3"
            >
              <div className="flex items-center gap-3 text-right">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  افتح بريدك الإلكتروني وابحث عن رسالة من LingoArab
                </p>
              </div>
              <div className="flex items-center gap-3 text-right">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  اضغط على رابط التأكيد في الرسالة
                </p>
              </div>
              <div className="flex items-center gap-3 text-right">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  سيتم توجيهك تلقائياً لإكمال ملفك الشخصي
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <Button
                variant="outline"
                className="w-full"
                onClick={handleResend}
                disabled={resending}
              >
                {resending ? (
                  <>
                    <RefreshCw className="w-4 h-4 ml-2 animate-spin" />
                    جاري إعادة الإرسال...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 ml-2" />
                    لم تصلك الرسالة؟ أعد الإرسال
                  </>
                )}
              </Button>

              <Link to="/auth" className="block">
                <Button variant="ghost" className="w-full text-muted-foreground">
                  <ArrowRight className="w-4 h-4 ml-2" />
                  العودة لتسجيل الدخول
                </Button>
              </Link>
            </motion.div>

            {/* Help text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs text-muted-foreground"
            >
              تحقق من مجلد الرسائل غير المرغوب فيها (Spam) إذا لم تجد الرسالة
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
