import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { getLevelByCode, getUnitById } from '@/lib/curriculum';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight,
  Star, 
  Lock,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Headphones,
  MessageCircle,
  PenLine
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import { useUserProgress, isLessonUnlocked } from '@/hooks/useProgress';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedContainers';
import { AnimatedProgress } from '@/components/animations/AnimatedProgress';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import { toast } from 'sonner';

const lessonIcons: Record<string, React.ElementType> = {
  'المفردات': BookOpen,
  'القواعد': PenLine,
  'الاستماع': Headphones,
  'المحادثة': MessageCircle,
  'التمارين': PlayCircle,
};

const levelColors: Record<string, { bg: string; text: string; accent: string }> = {
  'A1': { bg: 'bg-emerald-500', text: 'text-emerald-700 dark:text-emerald-400', accent: 'bg-emerald-100 dark:bg-emerald-900/30' },
  'A2': { bg: 'bg-sky-500', text: 'text-sky-700 dark:text-sky-400', accent: 'bg-sky-100 dark:bg-sky-900/30' },
  'B1': { bg: 'bg-violet-500', text: 'text-violet-700 dark:text-violet-400', accent: 'bg-violet-100 dark:bg-violet-900/30' },
  'B2': { bg: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-400', accent: 'bg-amber-100 dark:bg-amber-900/30' },
};

// Shake animation for locked lessons
const shakeAnimation = {
  x: [0, -10, 10, -10, 10, 0],
  transition: { duration: 0.4 }
};

const CourseUnit = () => {
  const navigate = useNavigate();
  const { level: levelParam, unit: unitParam } = useParams<{ level: string; unit: string }>();
  const { user, profile, isLoading, isAdmin } = useAuth();
  const { data: progressData } = useUserProgress();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [shakingLessonId, setShakingLessonId] = useState<string | null>(null);

  const level = getLevelByCode(levelParam || '');
  const unit = level ? getUnitById(level.code, unitParam || '') : undefined;

  // Get completed lesson IDs
  const completedLessons = useMemo(() => {
    if (!progressData) return [];
    return progressData
      .filter(p => p.completed)
      .map(p => p.lesson_id);
  }, [progressData]);

  // Calculate unit progress
  const unitProgress = useMemo(() => {
    if (!unit) return 0;
    const completed = unit.lessons.filter(l => completedLessons.includes(l.id)).length;
    return Math.round((completed / unit.lessons.length) * 100);
  }, [unit, completedLessons]);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  const handleLockedClick = (lessonId: string) => {
    setShakingLessonId(lessonId);
    toast.info('أكمل الدرس السابق أولاً', { duration: 2000 });
    setTimeout(() => setShakingLessonId(null), 500);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div 
          className="text-primary text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          جاري التحميل...
        </motion.div>
      </div>
    );
  }

  // Unit not found - show friendly empty state
  if (!level || !unit) {
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center" dir="rtl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">الوحدة غير موجودة</h2>
          <p className="text-muted-foreground mb-6">عذراً، لم نتمكن من العثور على هذه الوحدة</p>
          <Button onClick={() => navigate('/app/courses')}>
            <ChevronRight className="w-4 h-4 ml-2" />
            العودة للمستويات
          </Button>
        </div>
      </div>
    );
  }

  const colors = levelColors[level.code] || levelColors['A1'];

  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden" dir="rtl">
      {/* Header */}
      <Header showBack showUserInfo />

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Unit Header */}
        <FadeUp>
          <div className="mb-8 text-center">
            <motion.span 
              className={cn("inline-block text-sm font-bold px-3 py-1 rounded-full mb-3", colors.accent, colors.text)}
              initial={prefersReducedMotion ? {} : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              {level.code}
            </motion.span>
            <h2 className="text-3xl font-bold text-foreground mb-2">{unit.titleAr}</h2>
            <p className="text-muted-foreground ltr-text">{unit.titleEn}</p>
            <p className="text-sm text-muted-foreground mt-2">{unit.descriptionAr}</p>
            
            {/* Progress bar */}
            <div className="mt-4 max-w-xs mx-auto">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>التقدم</span>
                <span>{unitProgress}%</span>
              </div>
              <AnimatedProgress value={unitProgress} />
            </div>
          </div>
        </FadeUp>

        {/* Lessons List */}
        <StaggerContainer className="space-y-3">
          {unit.lessons.map((lesson, index) => {
            const IconComponent = lessonIcons[lesson.titleAr] || BookOpen;
            const isCompleted = completedLessons.includes(lesson.id);
            const isUnlocked = isLessonUnlocked(
              lesson.id, 
              completedLessons,
              profile?.placement_level,
              profile?.current_level,
              isAdmin
            );
            const hasExercises = lesson.hasRealExercises;
            const isLocked = !isUnlocked && !hasExercises;
            const isShaking = shakingLessonId === lesson.id;

            return (
              <StaggerItem key={lesson.id}>
                <motion.div
                  animate={isShaking && !prefersReducedMotion ? shakeAnimation : {}}
                  whileHover={!isLocked && !prefersReducedMotion ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isLocked && !prefersReducedMotion ? { scale: 0.98 } : {}}
                >
                  <Card
                    onClick={!isLocked ? () => navigate(`/lesson/${lesson.id}`) : () => handleLockedClick(lesson.id)}
                    className={cn(
                      "relative overflow-hidden cursor-pointer transition-all duration-200",
                      isLocked && "opacity-50",
                      isCompleted && "ring-2 ring-success",
                      hasExercises && !isCompleted && "ring-2 ring-primary"
                    )}
                  >
                    {/* Hover glow effect */}
                    {!isLocked && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0"
                        whileHover={{ opacity: 1 }}
                      />
                    )}
                    
                    <CardContent className="p-4 relative">
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <motion.div 
                          className={cn(
                            "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                            isCompleted ? "bg-success/10 text-success" : 
                            hasExercises ? "bg-primary/10 text-primary" :
                            cn(colors.accent, colors.text)
                          )}
                          whileHover={!isLocked && !prefersReducedMotion ? { rotate: 5 } : {}}
                        >
                          {isLocked ? (
                            <Lock className="w-5 h-5" />
                          ) : isCompleted ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <IconComponent className="w-5 h-5" />
                          )}
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">الدرس {index + 1}</span>
                            {isCompleted && (
                              <motion.span 
                                className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                              >
                                مكتمل
                              </motion.span>
                            )}
                            {hasExercises && !isCompleted && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                تمارين حقيقية
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-bold text-foreground truncate">
                            {lesson.titleAr}
                          </h3>
                          <p className="text-sm text-muted-foreground ltr-text truncate">
                            {lesson.titleEn}
                          </p>
                        </div>

                        {/* XP Badge */}
                        <motion.div 
                          className="flex items-center gap-1 text-xp text-sm font-bold"
                          whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
                        >
                          <Star className="w-4 h-4 fill-current" />
                          <span>+{lesson.xpReward}</span>
                        </motion.div>

                        {/* Arrow */}
                        <motion.div
                          whileHover={!isLocked && !prefersReducedMotion ? { x: -4 } : {}}
                        >
                          <ChevronLeft className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </main>
    </div>
  );
};

export default CourseUnit;
