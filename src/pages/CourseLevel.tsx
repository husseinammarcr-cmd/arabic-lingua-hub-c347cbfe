import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/contexts/AuthContext';
import { getLevelByCode } from '@/lib/curriculum';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ChevronLeft, 
  ChevronRight,
  Lock,
  CheckCircle,
  BookOpen,
  Clock,
  HandMetal,
  Home,
  Briefcase,
  UtensilsCrossed,
  MapPin,
  Sunrise,
  Gamepad2,
  ShoppingCart,
  CircleCheck,
  History,
  Calendar,
  Plane,
  HeartPulse,
  Scale,
  Phone,
  Building,
  Globe,
  MessageCircle,
  GraduationCap,
  Lightbulb,
  Tv,
  Laptop,
  Leaf,
  Users,
  UserCheck,
  PenTool,
  MessageSquare,
  Presentation,
  FileText,
  Target,
  Puzzle,
  Layers,
  ClipboardCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useMemo } from 'react';
import PageBackground from '@/components/PageBackground';
import Header from '@/components/Header';
import { useUserProgress, getUnitProgress } from '@/hooks/useProgress';
import { AclibBanner } from '@/components/AclibBanner';

const SITE_URL = 'https://lingoarab.com';

const iconMap: Record<string, React.ElementType> = {
  'hand-wave': HandMetal,
  'clock': Clock,
  'home': Home,
  'briefcase': Briefcase,
  'utensils': UtensilsCrossed,
  'map': MapPin,
  'sun': Sunrise,
  'gamepad': Gamepad2,
  'shopping-cart': ShoppingCart,
  'check-circle': CircleCheck,
  'history': History,
  'calendar': Calendar,
  'plane': Plane,
  'heart-pulse': HeartPulse,
  'scale': Scale,
  'phone': Phone,
  'building': Building,
  'globe': Globe,
  'book-open': BookOpen,
  'message-circle': MessageCircle,
  'graduation-cap': GraduationCap,
  'lightbulb': Lightbulb,
  'tv': Tv,
  'laptop': Laptop,
  'leaf': Leaf,
  'users': Users,
  'user-check': UserCheck,
  'pen-tool': PenTool,
  'message-square': MessageSquare,
  'presentation': Presentation,
  'file-text': FileText,
  'target': Target,
  'puzzle': Puzzle,
  'layers': Layers,
  'clipboard-check': ClipboardCheck,
};

const levelColors: Record<string, { bg: string; text: string; accent: string }> = {
  'A1': { bg: 'bg-emerald-500', text: 'text-emerald-700 dark:text-emerald-400', accent: 'bg-emerald-100 dark:bg-emerald-900/30' },
  'A2': { bg: 'bg-sky-500', text: 'text-sky-700 dark:text-sky-400', accent: 'bg-sky-100 dark:bg-sky-900/30' },
  'B1': { bg: 'bg-violet-500', text: 'text-violet-700 dark:text-violet-400', accent: 'bg-violet-100 dark:bg-violet-900/30' },
  'B2': { bg: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-400', accent: 'bg-amber-100 dark:bg-amber-900/30' },
};

// Level metadata for SEO
const levelMetadata: Record<string, { 
  titleAr: string; 
  titleEn: string; 
  descAr: string; 
  descEn: string;
  cefrLevel: string;
  duration: string;
}> = {
  'a1': {
    titleAr: 'المستوى المبتدئ A1',
    titleEn: 'Beginner Level A1',
    descAr: 'تعلم أساسيات اللغة الإنجليزية: التحيات، الأرقام، الألوان، والعبارات اليومية البسيطة',
    descEn: 'Learn English basics: greetings, numbers, colors, and simple daily phrases',
    cefrLevel: 'A1',
    duration: 'PT20H'
  },
  'a2': {
    titleAr: 'المستوى ما قبل المتوسط A2',
    titleEn: 'Elementary Level A2',
    descAr: 'طور مهاراتك في المحادثات اليومية، الطقس، الصحة، والسفر',
    descEn: 'Develop skills in daily conversations, weather, health, and travel',
    cefrLevel: 'A2',
    duration: 'PT25H'
  },
  'b1': {
    titleAr: 'المستوى المتوسط B1',
    titleEn: 'Intermediate Level B1',
    descAr: 'أتقن المحادثات المتقدمة، القواعد، والتعبير عن الآراء بثقة',
    descEn: 'Master advanced conversations, grammar, and express opinions confidently',
    cefrLevel: 'B1',
    duration: 'PT30H'
  },
  'b2': {
    titleAr: 'المستوى فوق المتوسط B2',
    titleEn: 'Upper-Intermediate Level B2',
    descAr: 'تعلم التواصل في بيئات العمل والأكاديمية بطلاقة',
    descEn: 'Learn to communicate fluently in work and academic environments',
    cefrLevel: 'B2',
    duration: 'PT35H'
  },
  'c1': {
    titleAr: 'المستوى المتقدم C1',
    titleEn: 'Advanced Level C1',
    descAr: 'أتقن التعبير الدقيق، البلاغة، والنقاشات المعقدة',
    descEn: 'Master nuanced expression, rhetoric, and complex discussions',
    cefrLevel: 'C1',
    duration: 'PT40H'
  },
  'c2': {
    titleAr: 'مستوى الإتقان C2',
    titleEn: 'Proficiency Level C2',
    descAr: 'حقق الإتقان الكامل في اللغة الإنجليزية على مستوى المتحدث الأصلي',
    descEn: 'Achieve complete mastery of English at native speaker level',
    cefrLevel: 'C2',
    duration: 'PT45H'
  }
};

const CourseLevel = () => {
  const navigate = useNavigate();
  const { level: levelParam } = useParams<{ level: string }>();
  const { user, profile, isLoading, isAdmin } = useAuth();
  const { data: progressData, isLoading: isProgressLoading } = useUserProgress();

  const level = getLevelByCode(levelParam || '');
  const levelKey = levelParam?.toLowerCase() || '';
  const meta = levelMetadata[levelKey];

  // JSON-LD Course schema (must be before any early returns)
  const courseSchema = useMemo(() => {
    if (!meta || !level) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `${meta.titleEn} - Lingo Arab`,
      "alternateName": meta.titleAr,
      "description": meta.descEn,
      "provider": {
        "@type": "Organization",
        "name": "Lingo Arab",
        "url": SITE_URL
      },
      "educationalLevel": meta.cefrLevel,
      "inLanguage": ["en", "ar"],
      "isAccessibleForFree": true,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": meta.duration
      },
      "numberOfCredits": level.units.length * 5,
      "teaches": level.units.map(u => u.titleEn).join(", "),
      "url": `${SITE_URL}/courses/${levelKey}`
    };
  }, [meta, level, levelKey]);

  // BreadcrumbList schema
  const breadcrumbSchema = useMemo(() => {
    if (!meta) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "الدورات",
          "item": `${SITE_URL}/courses`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": meta.titleAr,
          "item": `${SITE_URL}/courses/${levelKey}`
        }
      ]
    };
  }, [meta, levelKey]);

  // Compute completed lesson IDs from progress data
  const completedLessonIds = useMemo(() => {
    if (!progressData) return [];
    return progressData
      .filter(p => p.completed)
      .map(p => p.lesson_id);
  }, [progressData]);

  // Compute unit progress for this level with placement level awareness
  const unitProgressMap = useMemo(() => {
    if (!levelParam) return {};
    const progressList = getUnitProgress(
      levelParam, 
      completedLessonIds,
      profile?.placement_level,
      profile?.current_level,
      isAdmin
    );
    return progressList.reduce((acc, up) => {
      acc[up.unitId] = up;
      return acc;
    }, {} as Record<string, ReturnType<typeof getUnitProgress>[0]>);
  }, [levelParam, completedLessonIds, profile?.placement_level, profile?.current_level, isAdmin]);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  if (isLoading || isProgressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary text-xl">جاري التحميل...</div>
      </div>
    );
  }

  // Level not found - show friendly empty state
  if (!level) {
    return (
      <PageBackground>
        <div className="min-h-screen flex flex-col items-center justify-center" dir="rtl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">المستوى غير موجود</h2>
            <p className="text-muted-foreground mb-6">عذراً، لم نتمكن من العثور على هذا المستوى</p>
            <Button onClick={() => navigate('/app/courses')}>
              <ChevronRight className="w-4 h-4 ml-2" />
              العودة للمستويات
            </Button>
          </div>
        </div>
      </PageBackground>
    );
  }

  const colors = levelColors[level.code] || levelColors['A1'];

  return (
    <PageBackground>
      {meta && (
        <Helmet>
          <title>{meta.titleAr} | Lingo Arab – تعلم الإنجليزية مجانا</title>
          <meta name="description" content={meta.descAr} />
          <link rel="canonical" href={`${SITE_URL}/courses/${levelKey}`} />
          
          {/* OpenGraph */}
          <meta property="og:title" content={`${meta.titleAr} | Lingo Arab`} />
          <meta property="og:description" content={meta.descAr} />
          <meta property="og:url" content={`${SITE_URL}/courses/${levelKey}`} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
          <meta property="og:site_name" content="Lingo Arab" />
          <meta property="og:locale" content="ar_SA" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${meta.titleAr} | Lingo Arab`} />
          <meta name="twitter:description" content={meta.descAr} />
          <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
          
          {/* JSON-LD Schemas */}
          {courseSchema && <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>}
          {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
        </Helmet>
      )}
      <div dir="rtl">
      {/* Header */}
      <Header showBack showUserInfo />

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Level Header */}
        <div className="mb-8 text-center">
          <span className={cn("inline-block text-sm font-bold px-3 py-1 rounded-full mb-3", colors.accent, colors.text)}>
            {level.code}
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-2">{level.titleAr}</h2>
          <p className="text-muted-foreground ltr-text">{level.titleEn}</p>
          <p className="text-sm text-muted-foreground mt-2">{level.descriptionAr}</p>
        </div>

        {/* Ad Banner */}
        <AclibBanner className="mb-6" />

        {/* Units List */}
        <div className="space-y-4">
        {level.units.map((unit, index) => {
            const IconComponent = iconMap[unit.icon] || BookOpen;
            const unitProgress = unitProgressMap[unit.id];
            const lessonsCount = unitProgress?.totalLessons ?? unit.lessons.length;
            const completedLessons = unitProgress?.completedLessons ?? 0;
            const isLocked = unitProgress ? !unitProgress.isUnlocked : index > 0;
            const progress = lessonsCount > 0 ? (completedLessons / lessonsCount) * 100 : 0;
            const isCompleted = unitProgress?.isCompleted ?? false;

            return (
              <Card
                key={unit.id}
                onClick={!isLocked ? () => navigate(`/app/courses/${level.code.toLowerCase()}/${unit.id}`) : undefined}
                className={cn(
                  "relative overflow-hidden cursor-pointer hover:shadow-elevated hover:-translate-y-1 transition-all duration-300",
                  isLocked && "opacity-60 cursor-not-allowed",
                  isCompleted && "ring-2 ring-success"
                )}
              >
                {/* Gradient accent bar */}
                <div className={cn(
                  "absolute top-0 left-0 right-0 h-1",
                  isCompleted ? "bg-gradient-success" : colors.bg
                )} />

                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={cn(
                      "flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center",
                      isCompleted ? "bg-success/10 text-success" : cn(colors.accent, colors.text)
                    )}>
                      {isLocked ? (
                        <Lock className="w-6 h-6" />
                      ) : isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <IconComponent className="w-6 h-6" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-muted-foreground">الوحدة {index + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1 truncate">
                        {unit.titleAr}
                      </h3>
                      <p className="text-sm text-muted-foreground ltr-text truncate mb-3">
                        {unit.titleEn}
                      </p>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-muted-foreground">
                            {completedLessons} / {lessonsCount} دروس
                          </span>
                          <span className={cn("font-semibold", colors.text)}>
                            {Math.round(progress)}%
                          </span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronLeft className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
      </div>
    </PageBackground>
  );
};

export default CourseLevel;
