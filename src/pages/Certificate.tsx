import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Award, ShieldCheck, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import CertificateRequestCard from '@/components/CertificateRequestCard';

const Certificate = () => {
  const navigate = useNavigate();
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth?returnUrl=/certificate');
    }
  }, [user, authLoading, navigate]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header showBack showUserInfo />
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Lingo Spanish Certificate</h1>
          <p className="text-muted-foreground">
            Get a certified certificate upon completing the C2 level
          </p>
        </div>

        <CertificateRequestCard />

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldCheck className="w-5 h-5" />
              Verify Certificates
            </CardTitle>
            <CardDescription>
              You can verify the authenticity of any certificate issued by Lingo Spanish
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild className="w-full">
              <Link to="/verify-certificate">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Verify a Certificate
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>Lingo Spanish certificates are certified and registered in our electronic system.</p>
          <p>
            For enquiries, contact us via the{' '}
            <Link to="/contact" className="text-primary hover:underline">Contact</Link> page
          </p>
        </div>
      </main>
    </div>
  );
};

export default Certificate;
