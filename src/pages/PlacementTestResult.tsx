import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  ChevronLeft, 
  Award,
  Trophy,
  Star,
  BookOpen,
  GraduationCap,
  Rocket,
  CheckCircle,
  XCircle,
  Share2
} from 'lucide-react';
import PageBackground from '@/components/PageBackground';
import Header from '@/components/Header';
import { getLevelRecommendation, getLevelDescription } from '@/lib/placementQuestions';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface Breakdown {
  A1: { correct: number; total: number };
  A2: { correct: number; total: number };
  B1: { correct: number; total: number };
  B2: { correct: number; total: number };
}

interface LocationState {
  score: number;
  total: number;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  breakdown: Breakdown;
}

const levelIcons: Record<string, React.ElementType> = {
  'A1': BookOpen,
  'A2': Trophy,
  'B1': GraduationCap,
  'B2': Rocket,
};

const levelColors: Record<string, { bg: string; text: string; gradient: string }> = {
  'A1': { bg: 'bg-emerald-500', text: 'text-emerald-600', gradient: 'from-emerald-400 to-emerald-600' },
  'A2': { bg: 'bg-sky-500', text: 'text-sky-600', gradient: 'from-sky-400 to-sky-600' },
  'B1': { bg: 'bg-violet-500', text: 'text-violet-600', gradient: 'from-violet-400 to-violet-600' },
  'B2': { bg: 'bg-amber-500', text: 'text-amber-600', gradient: 'from-amber-400 to-amber-600' },
};

const PlacementTestResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile, isLoading } = useAuth();
  
  const state = location.state as LocationState | null;
  
  // If no state, use profile data
  const score = state?.score ?? profile?.placement_score ?? 0;
  const total = state?.total ?? 30;
  const level = (state?.level ?? profile?.placement_level ?? 'A1') as 'A1' | 'A2' | 'B1' | 'B2';
  const breakdown = state?.breakdown;

  const percentage = Math.round((score / total) * 100);
  const levelInfo = getLevelDescription(level);
  const recommendation = getLevelRecommendation(level);
  const IconComponent = levelIcons[level];
  const colors = levelColors[level];

  useEffect(() => {
    if (!isLoading && !profile?.has_taken_placement && !state) {
      navigate('/placement-test');
    }
  }, [isLoading, profile, state, navigate]);

  const handleShare = async () => {
    const text = `حصلت على مستوى ${level} (${levelInfo.title}) في اختبار تحديد المستوى على LingoArab! 🎉`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(text);
      toast.success('تم نسخ النتيجة!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary text-xl">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <PageBackground>
      <div className="min-h-screen" dir="rtl">
        {/* Header */}
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-2xl">
          {/* Congratulations */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 animate-bounce-in">
              <Award className="w-20 h-20 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">🎉 مبروك!</h2>
            <p className="text-muted-foreground">أكملت اختبار تحديد المستوى بنجاح</p>
          </div>

          {/* Level Result Card */}
          <Card className={cn("mb-6 overflow-hidden border-2", `border-${level === 'A1' ? 'emerald' : level === 'A2' ? 'sky' : level === 'B1' ? 'violet' : 'amber'}-500/30`)}>
            <div className={cn("h-3 bg-gradient-to-r", colors.gradient)} />
            <CardContent className="p-6 text-center">
              <div className={cn("w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center", colors.gradient)}>
                <IconComponent className="w-12 h-12 text-white" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">مستواك هو</div>
              <div className="text-5xl font-bold text-foreground mb-2">{level}</div>
              <div className={cn("text-xl font-semibold mb-1", colors.text)}>{levelInfo.title}</div>
              <div className="text-muted-foreground ltr-text">{levelInfo.subtitle}</div>
            </CardContent>
          </Card>

          {/* Score Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">النتيجة</span>
                <div className="text-2xl font-bold text-foreground">
                  <span className="text-primary">{score}</span>
                  <span className="text-muted-foreground">/{total}</span>
                </div>
              </div>
              <Progress value={percentage} className="h-3 mb-2" />
              <div className="text-center text-sm text-muted-foreground">{percentage}%</div>
            </CardContent>
          </Card>

          {/* Breakdown */}
          {breakdown && (
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">تفاصيل الأداء</h3>
                <div className="space-y-3">
                  {(['A1', 'A2', 'B1', 'B2'] as const).map((lvl) => {
                    const data = breakdown[lvl];
                    const lvlPercentage = data.total > 0 ? (data.correct / data.total) * 100 : 0;
                    const lvlColors = levelColors[lvl];
                    
                    return (
                      <div key={lvl} className="flex items-center gap-3">
                        <span className={cn(
                          "w-10 text-center font-bold text-sm px-2 py-1 rounded",
                          lvl === 'A1' && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                          lvl === 'A2' && "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
                          lvl === 'B1' && "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
                          lvl === 'B2' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                        )}>
                          {lvl}
                        </span>
                        <div className="flex-1">
                          <Progress value={lvlPercentage} className="h-2" />
                        </div>
                        <div className="flex items-center gap-1 w-16 justify-end">
                          {data.correct === data.total ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : data.correct === 0 ? (
                            <XCircle className="w-4 h-4 text-destructive" />
                          ) : null}
                          <span className="text-sm text-muted-foreground">
                            {data.correct}/{data.total}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recommendation */}
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">ننصح أن تبدأ من مستوى {level}</h3>
                  <p className="text-muted-foreground">{recommendation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="space-y-3">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => navigate(`/courses/${level.toLowerCase()}`)}
              className="w-full text-lg"
            >
              ابدأ من مستوى {level}
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/courses')}
              className="w-full"
            >
              عرض جميع المستويات
            </Button>
          </div>
        </main>
      </div>
    </PageBackground>
  );
};

export default PlacementTestResult;
