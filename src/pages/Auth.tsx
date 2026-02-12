import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import AuthBackground from '@/components/animations/AuthBackground';
const emailSchema = z.string().email('البريد الإلكتروني غير صالح');
const passwordSchema = z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل');

type AuthView = 'login' | 'signup' | 'forgot-password';

const Auth = () => {
  const [view, setView] = useState<AuthView>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);
  const returnUrl = searchParams.get('returnUrl') || '/courses';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(email);
      if (view !== 'forgot-password') {
        passwordSchema.parse(password);
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({ title: 'خطأ', description: err.errors[0].message, variant: 'destructive' });
        return;
      }
    }

    setLoading(true);
    
    try {
      if (view === 'login') {
        const { error } = await signIn(email, password);
        if (error) throw error;
        navigate(returnUrl);
      } else if (view === 'signup') {
        const { error } = await signUp(email, password, name);
        if (error) throw error;
        
        // Track signup conversion for Google Ads
        if (typeof window !== 'undefined' && (window as any).trackSignupConversion) {
          (window as any).trackSignupConversion();
        }
        
        // حفظ البريد للصفحة التالية
        sessionStorage.setItem('pendingVerificationEmail', email);
        // توجيه لصفحة تأكيد البريد
        navigate(`/verify-email?email=${encodeURIComponent(email)}`);
      } else if (view === 'forgot-password') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        toast({ 
          title: 'تم إرسال رابط إعادة التعيين! 📧', 
          description: 'يرجى التحقق من بريدك الإلكتروني للحصول على رابط إعادة تعيين كلمة المرور' 
        });
        setView('login');
      }
    } catch (error: any) {
      let errorMessage = error.message;
      if (error.message.includes('User already registered')) {
        errorMessage = 'هذا البريد الإلكتروني مسجل بالفعل. حاول تسجيل الدخول بدلاً من ذلك.';
      } else if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'بيانات الدخول غير صحيحة. تحقق من البريد الإلكتروني وكلمة المرور.';
      }
      toast({ title: 'خطأ', description: errorMessage, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    // Track Google signup conversion before redirect
    if (typeof window !== 'undefined' && (window as any).trackSignupConversion) {
      (window as any).trackSignupConversion();
    }
    
    const { error } = await signInWithGoogle();
    if (error) {
      toast({ title: 'خطأ', description: error.message, variant: 'destructive' });
    }
  };

  const renderTitle = () => {
    switch (view) {
      case 'login': return 'مرحباً بعودتك!';
      case 'signup': return 'أنشئ حسابك المجاني';
      case 'forgot-password': return 'نسيت كلمة المرور؟';
    }
  };

  const renderSubmitText = () => {
    if (loading) return 'جاري التحميل...';
    switch (view) {
      case 'login': return 'تسجيل الدخول';
      case 'signup': return 'إنشاء حساب';
      case 'forgot-password': return 'إرسال رابط إعادة التعيين';
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
        <Card className="backdrop-blur-sm bg-card/95 border-border/50 shadow-2xl">
          <CardHeader className="text-center">
            <Link to="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CardTitle className="text-2xl font-bold text-primary">LingoArab</CardTitle>
              </motion.div>
            </Link>
            <motion.p 
              key={view}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-muted-foreground mt-2"
            >
              {renderTitle()}
            </motion.p>
          </CardHeader>
        <CardContent>
          {view === 'forgot-password' && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-4" 
              onClick={() => setView('login')}
            >
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة لتسجيل الدخول
            </Button>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {view === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="name">الاسم</Label>
                <div className="relative">
                  <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="اسمك" 
                    className="pr-10" 
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <div className="relative">
                <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="email@example.com" 
                  className="pr-10" 
                  dir="ltr" 
                />
              </div>
            </div>

            {view !== 'forgot-password' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">كلمة المرور</Label>
                  {view === 'login' && (
                    <Button 
                      type="button" 
                      variant="link" 
                      className="p-0 h-auto text-xs text-muted-foreground hover:text-primary"
                      onClick={() => setView('forgot-password')}
                    >
                      نسيت كلمة المرور؟
                    </Button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="••••••••" 
                    className="pr-10" 
                  />
                </div>
              </div>
            )}

            {view === 'forgot-password' && (
              <p className="text-sm text-muted-foreground text-center">
                أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور.
              </p>
            )}

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {renderSubmitText()}
              {view !== 'forgot-password' && <ArrowLeft className="w-4 h-4" />}
            </Button>
          </form>

          {view !== 'forgot-password' && (
            <>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 text-muted-foreground">أو</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                تسجيل الدخول بـ Google
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-6">
                {view === 'login' ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
                <Button 
                  variant="link" 
                  className="px-1" 
                  onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                >
                  {view === 'login' ? 'سجّل الآن' : 'تسجيل الدخول'}
                </Button>
              </p>
            </>
          )}
        </CardContent>
      </Card>
      </motion.div>
    </div>
  );
};

export default Auth;
