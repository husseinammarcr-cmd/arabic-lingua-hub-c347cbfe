import { useState } from 'react';
import { Search, Award, CheckCircle, XCircle, Loader2, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useVerifyCertificate, Certificate } from '@/hooks/useCertificates';
import Header from '@/components/Header';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

const VerifyCertificate = () => {
  const [code, setCode] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<Certificate | null>(null);
  
  const verifyCertificate = useVerifyCertificate();

  const handleVerify = async () => {
    if (!code.trim()) return;
    
    setSearched(true);
    const certificate = await verifyCertificate.mutateAsync(code.trim());
    setResult(certificate);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBack showAuthButton />
      
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">التحقق من الشهادة</h1>
          <p className="text-muted-foreground">
            أدخل رمز الشهادة للتحقق من صحتها
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              البحث عن شهادة
            </CardTitle>
            <CardDescription>
              أدخل رمز الشهادة المكون من 12 حرف (مثال: LA-C2-ABC123)
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              <Input
                placeholder="LA-C2-XXXXXX"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                className="text-center font-mono text-lg tracking-wider"
                dir="ltr"
              />
              <Button 
                onClick={handleVerify} 
                disabled={verifyCertificate.isPending || !code.trim()}
              >
                {verifyCertificate.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
              </Button>
            </div>

            {searched && !verifyCertificate.isPending && (
              <div className="mt-6">
                {result ? (
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="font-bold text-green-800 dark:text-green-200 text-lg">
                          شهادة صالحة ✓
                        </h3>
                        <p className="text-green-600 dark:text-green-400 text-sm">
                          تم التحقق من صحة هذه الشهادة
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-background rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-muted-foreground">الاسم</span>
                        <span className="font-semibold">{result.full_name}</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-muted-foreground">المستوى</span>
                        <span className="font-semibold flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          {result.level}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-muted-foreground">رمز الشهادة</span>
                        <span className="font-mono font-semibold" dir="ltr">
                          {result.certificate_code}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">تاريخ الإصدار</span>
                        <span className="font-semibold">
                          {format(new Date(result.issued_at), 'dd MMMM yyyy', { locale: ar })}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
                    <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                    <h3 className="font-bold text-red-800 dark:text-red-200 text-lg mb-1">
                      شهادة غير موجودة
                    </h3>
                    <p className="text-red-600 dark:text-red-400 text-sm">
                      لم نتمكن من العثور على شهادة بهذا الرمز. تأكد من إدخال الرمز بشكل صحيح.
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            شهادات LingoArab معتمدة ومسجلة في نظامنا.
            <br />
            للاستفسارات، تواصل معنا عبر صفحة <a href="/contact" className="text-primary hover:underline">التواصل</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default VerifyCertificate;
