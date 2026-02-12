import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronRight, 
  Clock, 
  Target, 
  Award,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import PageBackground from '@/components/PageBackground';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const PlacementTest = () => {
  const navigate = useNavigate();
  const { user, profile, isLoading } = useAuth();
  const [lastTestDate, setLastTestDate] = useState<Date | null>(null);
  const [canRetake, setCanRetake] = useState(true);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth?returnUrl=/placement-test');
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    const checkLastTest = async () => {
      if (!user) return;
      
      const { data } = await supabase
        .from('placement_tests')
        .select('created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (data) {
        const testDate = new Date(data.created_at);
        setLastTestDate(testDate);
        const daysSinceTest = (Date.now() - testDate.getTime()) / (1000 * 60 * 60 * 24);
        setCanRetake(daysSinceTest >= 7);
      }
    };

    checkLastTest();
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    );
  }

  const features = [
    { icon: Clock, title: '5–7 minutes', description: 'Approximate test duration' },
    { icon: Target, title: '21 questions', description: 'Varied and progressive' },
    { icon: Award, title: 'Precise placement', description: 'A1 to C2' },
  ];

  return (
    <PageBackground>
      <div className="min-h-screen">
        <Header showBack />

        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Placement Test</h2>
            <p className="text-muted-foreground text-lg">
              Discover your true Spanish level and start from the right place
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-foreground">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">{feature.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {profile?.has_taken_placement && (
            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <div className="flex-1">
                    <div className="font-bold text-foreground">
                      Your current level: {profile.placement_level}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Score: {profile.placement_score}/15
                      {lastTestDate && ` • ${lastTestDate.toLocaleDateString('en-GB')}`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground mb-4">Test Instructions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>The test contains 21 varied questions covering vocabulary, grammar, and comprehension</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>Questions are progressively harder from beginner (A1) to advanced (C2)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>Answer honestly for an accurate result that suits your real level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span>You can retake the test once every 7 days</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            {canRetake ? (
              <>
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={() => navigate('/placement-test/start')}
                  className="text-lg w-full sm:w-auto"
                >
                  {profile?.has_taken_placement ? 'Retake Test' : 'Start Test'}
                  <ChevronRight className="w-5 h-5" />
                </Button>
                
                {!profile?.has_taken_placement && (
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">
                      Don't know any Spanish? No worries!
                    </p>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={async () => {
                        if (!user) return;
                        
                        await supabase
                          .from('profiles')
                          .update({
                            has_taken_placement: true,
                            placement_level: 'A1',
                            placement_score: 0,
                            current_level: 'A1',
                            placement_taken_at: new Date().toISOString()
                          })
                          .eq('id', user.id);
                        
                        navigate('/app/courses/a1');
                      }}
                      className="w-full sm:w-auto gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      I'm a complete beginner — start from scratch
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-3">
                <Button variant="outline" size="xl" disabled className="text-lg w-full sm:w-auto">
                  You can retake the test after 7 days
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => navigate(`/courses/${profile?.placement_level?.toLowerCase()}`)}
                  className="w-full sm:w-auto"
                >
                  Continue learning from level {profile?.placement_level}
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </PageBackground>
  );
};

export default PlacementTest;
