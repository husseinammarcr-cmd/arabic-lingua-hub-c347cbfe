import { useState } from 'react';
import { Award, Send, Loader2, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { 
  useUserCertificateRequest, 
  useUserCertificate, 
  useSubmitCertificateRequest,
  useHasCompletedC2
} from '@/hooks/useCertificates';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

const CertificateRequestCard = () => {
  const { profile, user } = useAuth();
  const { data: hasCompletedC2, isLoading: checkingC2 } = useHasCompletedC2();
  const { data: existingRequest, isLoading: loadingRequest } = useUserCertificateRequest();
  const { data: certificate, isLoading: loadingCertificate } = useUserCertificate();
  const submitRequest = useSubmitCertificateRequest();

  const [fullName, setFullName] = useState(profile?.name || '');
  const [email, setEmail] = useState(profile?.email || user?.email || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !email.trim()) {
      toast({
        title: 'خطأ',
        description: 'يرجى ملء جميع الحقول',
        variant: 'destructive'
      });
      return;
    }

    try {
      await submitRequest.mutateAsync({ fullName, email });
      toast({
        title: 'تم إرسال الطلب! 🎉',
        description: 'سيتم مراجعة طلبك وإرسال الشهادة إلى بريدك الإلكتروني'
      });
    } catch (error) {
      toast({
        title: 'خطأ',
        description: 'حدث خطأ أثناء إرسال الطلب',
        variant: 'destructive'
      });
    }
  };

  if (checkingC2 || loadingRequest || loadingCertificate) {
    return (
      <Card>
        <CardContent className="py-8 flex justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  // User has a certificate
  if (certificate) {
    return (
      <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <Award className="w-6 h-6" />
            شهادتك جاهزة! 🎉
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white dark:bg-background rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">رمز الشهادة:</span>
              <span className="font-mono font-bold text-primary" dir="ltr">
                {certificate.certificate_code}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">تاريخ الإصدار:</span>
              <span>{format(new Date(certificate.issued_at), 'dd MMMM yyyy', { locale: ar })}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            يمكنك التحقق من شهادتك عبر صفحة{' '}
            <a href="/verify-certificate" className="text-primary hover:underline">
              التحقق من الشهادة
            </a>
          </p>
        </CardContent>
      </Card>
    );
  }

  // User has a pending request
  if (existingRequest) {
    const statusConfig = {
      pending: {
        icon: Clock,
        color: 'text-yellow-600 dark:text-yellow-400',
        bgColor: 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800',
        title: 'طلبك قيد المراجعة',
        description: 'سيتم مراجعة طلبك وإرسال الشهادة إلى بريدك الإلكتروني'
      },
      approved: {
        icon: CheckCircle,
        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800',
        title: 'تمت الموافقة على طلبك',
        description: 'تم إصدار شهادتك'
      },
      rejected: {
        icon: XCircle,
        color: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800',
        title: 'لم يتم قبول الطلب',
        description: existingRequest.notes || 'يرجى التواصل معنا للمزيد من المعلومات'
      }
    };

    const status = statusConfig[existingRequest.status as keyof typeof statusConfig] || statusConfig.pending;
    const StatusIcon = status.icon;

    return (
      <Card className={status.bgColor}>
        <CardHeader>
          <CardTitle className={`flex items-center gap-2 ${status.color}`}>
            <StatusIcon className="w-6 h-6" />
            {status.title}
          </CardTitle>
          <CardDescription>{status.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            تاريخ الطلب: {format(new Date(existingRequest.requested_at), 'dd MMMM yyyy', { locale: ar })}
          </div>
        </CardContent>
      </Card>
    );
  }

  // User hasn't completed C2
  if (!hasCompletedC2) {
    return (
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-6 h-6" />
            شهادة إتمام المستوى C2
          </CardTitle>
          <CardDescription>
            أكمل جميع دروس المستوى C2 للحصول على شهادة معتمدة من LingoArab
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <p className="text-muted-foreground">
              لم تكمل المستوى C2 بعد. استمر في التعلم! 💪
            </p>
            <Button variant="outline" className="mt-4" asChild>
              <a href="/app/courses/c2">تابع دروس C2</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // User can request certificate
  return (
    <Card className="border-primary/50 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          احصل على شهادتك! 🎓
        </CardTitle>
        <CardDescription>
          مبارك! أكملت المستوى C2. يمكنك الآن طلب شهادة إتمام معتمدة.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">الاسم الكامل (كما سيظهر على الشهادة)</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="أدخل اسمك الكامل"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              required
              dir="ltr"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={submitRequest.isPending}
          >
            {submitRequest.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin ml-2" />
            ) : (
              <Send className="w-4 h-4 ml-2" />
            )}
            إرسال طلب الشهادة
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CertificateRequestCard;
