import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { CURRICULUM, getTotalLessonsCount } from '@/lib/curriculum';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  BookOpen,
  GraduationCap,
  Lock,
  CheckCircle,
  Target,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useMemo } from 'react';
import PageBackground from '@/components/PageBackground';
import Header from '@/components/Header';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedContainers';
import { TiltCard } from '@/components/animations/TiltCard';
import { AnimatedProgress } from '@/components/animations/AnimatedProgress';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import { useUserProgress, isLevelUnlocked, getLevelIndex } from '@/hooks/useProgress';

const COURSE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Learn Spanish for English Speakers",
  "description": "Interactive Spanish courses designed for English speakers from A1 to C2 levels. 300 lessons covering vocabulary, grammar, listening, and conversation skills.",
  "provider": {
    "@type": "Organization",
    "name": "LingoSpanish",
    "sameAs": "https://lingospanish.com",
    "url": "https://lingospanish.com"
  },
  "inLanguage": ["es", "en"],
  "isAccessibleForFree": true,
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "student"
  },
  "hasCourseInstance": [
    { "@type": "CourseInstance", "name": "A1 - Beginner Spanish", "description": "Foundation level for complete beginners", "courseMode": "online" },
    { "@type": "CourseInstance", "name": "A2 - Elementary Spanish", "description": "Elementary level for basic communication", "courseMode": "online" },
    { "@type": "CourseInstance", "name": "B1 - Intermediate Spanish", "description": "Intermediate level for independent users", "courseMode": "online" },
    { "@type": "CourseInstance", "name": "B2 - Upper Intermediate Spanish", "description": "Upper intermediate level for advanced communication", "courseMode": "online" },
    { "@type": "CourseInstance", "name": "C1 - Advanced Spanish", "description": "Advanced level for proficient users", "courseMode": "online" },
    { "@type": "CourseInstance", "name": "C2 - Proficiency Spanish", "description": "Mastery level for near-native proficiency", "courseMode": "online" }
  ]
};

import levelA1Books from '@/assets/level-a1-books.jpeg';
import levelA2Books from '@/assets/level-a2-books.jpeg';
import levelB1Books from '@/assets/level-b1-books.jpeg';
import levelB2Books from '@/assets/level-b2-books.jpeg';
import levelC1Books from '@/assets/level-c1-books.jpeg';
import levelC2Books from '@/assets/level-c2-books.jpeg';

const levelColors: Record<string, string> = {
  'A1': 'from-emerald-500 to-emerald-600',
  'A2': 'from-sky-500 to-sky-600',
  'B1': 'from-violet-500 to-violet-600',
  'B2': 'from-amber-500 to-amber-600',
  'C1': 'from-rose-500 to-rose-600',
  'C2': 'from-fuchsia-500 to-fuchsia-600',
};

const levelImages: Record<string, string> = {
  'A1': levelA1Books,
  'A2': levelA2Books,
  'B1': levelB1Books,
  'B2': levelB2Books,
  'C1': levelC1Books,
  'C2': levelC2Books,
};

const AppCourses = () => {
  const navigate = useNavigate();
  const { user, profile, isLoading, isAdmin } = useAuth();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { data: progressData } = useUserProgress();

  const hasTakenPlacement = profile?.has_taken_placement ?? false;

  const completedLessonIds = useMemo(() => {
    if (!progressData) return [];
    return progressData.filter(p => p.completed).map(p => p.lesson_id);
  }, [progressData]);

  const levelProgressMap = useMemo(() => {
    const map: Record<string, { completed: number; total: number; progress: number }> = {};
    for (const level of CURRICULUM) {
      let completed = 0;
      let total = 0;
      for (const unit of level.units) {
        for (const lesson of unit.lessons) {
          total++;
          if (completedLessonIds.includes(lesson.id)) completed++;
        }
      }
      map[level.code] = { completed, total, progress: total > 0 ? Math.round((completed / total) * 100) : 0 };
    }
    return map;
  }, [completedLessonIds]);

  useEffect(() => {
    if (!isLoading && !user) navigate('/auth');
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div className="text-primary text-xl" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
          Loading...
        </motion.div>
      </div>
    );
  }

  const totalLessons = getTotalLessonsCount();

  return (
    <PageBackground>
      <Helmet>
        <title>Courses | LingoSpanish</title>
        <meta name="description" content="Learn Spanish from beginner to mastery - 300 interactive lessons across 6 CEFR levels" />
        <script type="application/ld+json">{JSON.stringify(COURSE_SCHEMA)}</script>
      </Helmet>

      <div>
        <Header showUserInfo />

        <main className="container mx-auto px-4 py-6 max-w-4xl">
          {!hasTakenPlacement && (
            <FadeUp>
              <Card className="mb-8 overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg"
                      animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Target className="w-10 h-10 text-primary-foreground" />
                    </motion.div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-2">Start Your Learning Journey!</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      Find your Spanish level to unlock the right lessons for you. The test is quick and takes only 5-7 minutes.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>21 varied questions</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>Accurate level placement</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span>Unlock lessons instantly</span>
                      </div>
                    </div>
                    
                    <Button variant="hero" size="xl" onClick={() => navigate('/placement-test')} className="text-lg gap-2">
                      <Target className="w-5 h-5" />
                      Find Your Level
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          )}

          <FadeUp delay={0.1}>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">Learning Levels</h2>
              {isAdmin && <p className="text-sm text-primary font-medium">Admin mode enabled</p>}
              <p className="text-muted-foreground">
                {totalLessons} lessons across 6 levels - from beginner to mastery
              </p>
              {!hasTakenPlacement && (
                <p className="text-sm text-primary mt-2">Take the placement test first to unlock lessons</p>
              )}
            </div>
          </FadeUp>

          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {CURRICULUM.map((level, index) => {
              const totalUnits = level.units.length;
              const totalLevelLessons = level.units.reduce((sum, unit) => sum + unit.lessons.length, 0);
              const levelProgress = levelProgressMap[level.code];
              const progress = levelProgress?.progress ?? 0;
              const isUnlocked = isAdmin || (hasTakenPlacement && isLevelUnlocked(level.code, profile?.placement_level, profile?.current_level));
              const levelImage = levelImages[level.code];
              const isCompleted = levelProgress?.completed === levelProgress?.total && levelProgress?.total > 0;

              return (
                <StaggerItem key={level.id}>
                  <TiltCard
                    onClick={isUnlocked ? () => navigate(`/app/courses/${level.code.toLowerCase()}`) : undefined}
                    className={cn("h-full", !isUnlocked && "opacity-60 cursor-not-allowed")}
                  >
                    <Card className={cn(
                      "group overflow-hidden transition-all duration-300 h-full",
                      isUnlocked && "cursor-pointer hover:shadow-elevated",
                      isCompleted && "ring-2 ring-success"
                    )}>
                      <div className={cn("h-28 sm:h-32 bg-gradient-to-br relative overflow-hidden", levelColors[level.code])}>
                        <img src={levelImage} alt={`${level.code} illustration`} className={cn("absolute inset-0 w-full h-full object-cover", isUnlocked ? "opacity-90" : "opacity-50 grayscale")} />
                        <div className={cn("absolute inset-0 bg-gradient-to-t from-black/10 to-transparent")} />
                        <div className="absolute top-3 right-3 flex items-center gap-2">
                          <span className="text-sm font-bold px-3 py-1 rounded-full bg-white/90 text-foreground shadow-sm">{level.code}</span>
                          {!isUnlocked && <span className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm"><Lock className="w-4 h-4 text-muted-foreground" /></span>}
                          {isCompleted && <span className="w-8 h-8 rounded-full bg-success/90 flex items-center justify-center shadow-sm"><CheckCircle className="w-4 h-4 text-white" /></span>}
                        </div>
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" initial={{ x: '-100%' }} whileHover={prefersReducedMotion ? {} : { x: '100%' }} transition={{ duration: 0.6 }} />
                      </div>

                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-foreground">{level.titleEn}</h3>
                              {!isUnlocked && <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Locked</span>}
                              {isCompleted && <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">Complete</span>}
                            </div>
                            <p className="text-sm text-muted-foreground">{level.titleAr}</p>
                          </div>
                          <motion.div whileHover={isUnlocked && !prefersReducedMotion ? { x: 4 } : {}} transition={{ type: 'spring', stiffness: 300 }}>
                            <ChevronRight className={cn("w-5 h-5 transition-colors", isUnlocked ? "text-muted-foreground group-hover:text-primary" : "text-muted-foreground/50")} />
                          </motion.div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{level.descriptionAr}</p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                          <span>{totalUnits} units</span>
                          <span>{levelProgress?.completed ?? 0} / {totalLevelLessons} lessons</span>
                        </div>

                        <AnimatedProgress value={isUnlocked ? progress : 0} />
                      </CardContent>
                    </Card>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </main>
      </div>
    </PageBackground>
  );
};

export default AppCourses;
