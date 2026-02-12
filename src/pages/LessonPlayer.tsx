import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { getLessonById } from '@/lib/curriculum';
import { getLessonContent, VocabItem, SentenceItem } from '@/lib/a1-lessons';
import { ExerciseRenderer } from '@/components/ExerciseRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Heart, Star, ChevronRight, Trophy, Loader2, BookOpen, Dumbbell, ClipboardCheck, ChevronLeft, AlertTriangle } from 'lucide-react';
import { AudioButton } from '@/components/AudioButton';
import { cn } from '@/lib/utils';
import { useUpdateProgress, getNextLesson } from '@/hooks/useProgress';
import { useEvaluateAchievements } from '@/hooks/useEvaluateAchievements';
import { AnimatedProgress } from '@/components/animations/AnimatedProgress';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { MiniConfetti } from '@/components/animations/MiniConfetti';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import { toast } from 'sonner';

declare global {
  interface Window {
    aclib?: {
      runBanner: (config: { zoneId: string }) => void;
      runInterstitial: (config: { zoneId: string }) => void;
    };
  }
}

type LessonSection = 'learn' | 'practice' | 'quiz';

interface LessonProgress {
  lessonId: string;
  section: LessonSection;
  learnIndex: number;
  practiceIndex: number;
  quizIndex: number;
  hearts: number;
  xpEarned: number;
  quizScore: number;
}

const STORAGE_KEY = 'lesson_progress';

const loadProgress = (lessonId: string): LessonProgress | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved) as LessonProgress;
      if (data.lessonId === lessonId) {
        return data;
      }
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return null;
};

const saveProgress = (progress: LessonProgress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
};

const clearProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear progress:', e);
  }
};

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

const LessonPlayer = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams<{ lessonId: string }>();
  const { user, isLoading, refreshProfile } = useAuth();
  const updateProgress = useUpdateProgress();
  const { evaluateAchievements } = useEvaluateAchievements();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Use refs to track initialization
  const initializedRef = useRef(false);
  const lessonIdRef = useRef(lessonId);

  // Show interstitial ad when lesson opens
  useEffect(() => {
    if (window.aclib) {
      window.aclib.runInterstitial({ zoneId: '10967390' });
    }
  }, []);
  
  // Load saved progress or use defaults
  const savedProgress = lessonId ? loadProgress(lessonId) : null;
  
  const [section, setSection] = useState<LessonSection>(savedProgress?.section || 'learn');
  const [learnIndex, setLearnIndex] = useState(savedProgress?.learnIndex || 0);
  const [practiceIndex, setPracticeIndex] = useState(savedProgress?.practiceIndex || 0);
  const [quizIndex, setQuizIndex] = useState(savedProgress?.quizIndex || 0);
  const [hearts, setHearts] = useState(savedProgress?.hearts ?? 5);
  const [xpEarned, setXpEarned] = useState(savedProgress?.xpEarned || 0);
  const [hintPenalties, setHintPenalties] = useState(0); // Track total hint penalties
  const [quizScore, setQuizScore] = useState(savedProgress?.quizScore || 0);
  const [quizTotal, setQuizTotal] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);

  const lessonData = getLessonById(lessonId || '');
  const lessonContent = getLessonContent(lessonId || '');

  // Save progress whenever state changes
  useEffect(() => {
    if (lessonId && !isComplete && initializedRef.current) {
      saveProgress({
        lessonId,
        section,
        learnIndex,
        practiceIndex,
        quizIndex,
        hearts,
        xpEarned,
        quizScore
      });
    }
  }, [lessonId, section, learnIndex, practiceIndex, quizIndex, hearts, xpEarned, quizScore, isComplete]);

  // Mark as initialized after first render
  useEffect(() => {
    initializedRef.current = true;
  }, []);

  // Reset state if lessonId changes
  useEffect(() => {
    if (lessonId !== lessonIdRef.current) {
      lessonIdRef.current = lessonId;
      const newSavedProgress = lessonId ? loadProgress(lessonId) : null;
      setSection(newSavedProgress?.section || 'learn');
      setLearnIndex(newSavedProgress?.learnIndex || 0);
      setPracticeIndex(newSavedProgress?.practiceIndex || 0);
      setQuizIndex(newSavedProgress?.quizIndex || 0);
      setHearts(newSavedProgress?.hearts ?? 5);
      setXpEarned(newSavedProgress?.xpEarned || 0);
      setQuizScore(newSavedProgress?.quizScore || 0);
      setIsComplete(false);
    }
  }, [lessonId]);

  // Auth redirect
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  // Calculate pass status - use lesson's passing score or default to 50%
  const passingThreshold = lessonContent?.passingScore ?? 50;
  
  const calculatePassed = useCallback(() => {
    if (!lessonContent || quizTotal === 0) return true;
    return (quizScore / quizTotal) * 100 >= passingThreshold;
  }, [lessonContent, quizScore, quizTotal, passingThreshold]);

  // Ref to track the save timeout
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Save to DB when lesson completes (only if passed)
  useEffect(() => {
    if (isComplete && lessonId && lessonData && !isSaving && !hasSaved) {
      const passed = calculatePassed();
      
      if (!passed) {
        clearProgress();
        return;
      }
      
      setIsSaving(true);
      setSaveError(false); // Reset error state before attempting save
      clearProgress();
      setShowConfetti(true);
      
      const totalXp = xpEarned + lessonData.lesson.xpReward;
      console.log('[LessonPlayer] Saving progress with hint penalties:', {
        totalXp,
        hintPenalties,
        netXp: totalXp - hintPenalties
      });
      
      // Clear any existing timeout
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      
      // Set new timeout
      saveTimeoutRef.current = setTimeout(() => {
        if (!hasSaved) {
          setIsSaving(false);
          setSaveError(true);
        }
      }, 10000);
      
      updateProgress.mutate({
        lessonId,
        completed: true,
        score: lessonContent ? Math.round((quizScore / quizTotal) * 100) : 100,
        heartsRemaining: hearts,
        xpEarned: totalXp,
        hintPenalty: hintPenalties
      }, {
        onSuccess: async () => {
          if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
            saveTimeoutRef.current = null;
          }
          setHasSaved(true);
          setIsSaving(false);
          
          await refreshProfile();
          await evaluateAchievements();
        },
        onError: () => {
          if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
            saveTimeoutRef.current = null;
          }
          setIsSaving(false);
          setSaveError(true);
        }
      });
    }
  }, [isComplete, lessonId, lessonData, isSaving, hasSaved, xpEarned, quizScore, quizTotal, hearts, lessonContent, updateProgress, calculatePassed, refreshProfile, evaluateAchievements, hintPenalties]);

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

  if (!lessonData) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center" dir="rtl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">الدرس غير موجود</h2>
          <Button type="button" onClick={() => navigate('/courses')}>
            <ChevronRight className="w-4 h-4 ml-2" />
            العودة للمستويات
          </Button>
        </div>
      </div>
    );
  }

  if (!lessonContent) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center" dir="rtl">
        <div className="text-center max-w-md mx-auto px-4">
          <motion.div 
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <Star className="w-10 h-10 text-primary" />
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{lessonData.lesson.titleAr}</h2>
          <p className="text-muted-foreground mb-6">هذا الدرس قيد الإعداد. سيتم إضافة المحتوى قريباً!</p>
          <Button type="button" onClick={() => navigate(`/courses/${lessonData.level.code.toLowerCase()}/${lessonData.unit.id}`)}>
            <ChevronRight className="w-4 h-4 ml-2" />
            العودة للوحدة
          </Button>
        </div>
      </div>
    );
  }

  const getSectionProgress = () => {
    switch (section) {
      case 'learn':
        return ((learnIndex + 1) / (lessonContent.vocab.length + lessonContent.sentences.length)) * 33;
      case 'practice':
        return 33 + ((practiceIndex + 1) / lessonContent.exercises.length) * 33;
      case 'quiz':
        return 66 + ((quizIndex + 1) / lessonContent.quiz.length) * 34;
    }
  };

  const handleBackToLessons = () => {
    clearProgress();
    navigate(`/courses/${lessonData.level.code.toLowerCase()}/${lessonData.unit.id}`);
  };

  const handleNextLesson = () => {
    clearProgress();
    const nextLessonId = getNextLesson(lessonId || '');
    if (nextLessonId) {
      navigate(`/lesson/${nextLessonId}`);
    } else {
      navigate(`/courses/${lessonData.level.code.toLowerCase()}/${lessonData.unit.id}`);
    }
  };

  const handleRetry = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setHearts(5);
    setIsComplete(false);
    setHasSaved(false);
    setSaveError(false);
    setSection('quiz');
  };

  const handleBackToUnit = () => {
    clearProgress();
    navigate(`/courses/${lessonData.level.code.toLowerCase()}/${lessonData.unit.id}`);
  };

  const handleRetrySave = () => {
    setSaveError(false);
    setHasSaved(false);
    setIsSaving(false);
  };

  const handleLearnNext = () => {
    setSlideDirection(1);
    const totalLearnItems = lessonContent.vocab.length + lessonContent.sentences.length;
    if (learnIndex < totalLearnItems - 1) {
      setLearnIndex(prev => prev + 1);
      setXpEarned(prev => prev + 1);
    } else {
      setSection('practice');
      setXpEarned(prev => prev + 5);
    }
  };

  const handlePracticeAnswer = (isCorrect: boolean, hintPenalty: number = 0) => {
    // Track hint penalties regardless of answer correctness (will be deducted from total XP)
    if (hintPenalty > 0) {
      console.log('[LessonPlayer] Adding hint penalty:', hintPenalty);
      setHintPenalties(prev => prev + hintPenalty);
    }
    
    if (isCorrect) {
      // Award full XP for correct answer
      setXpEarned(prev => prev + 3);
    } else {
      setHearts(prev => Math.max(0, prev - 1));
    }

    setSlideDirection(1);
    setTimeout(() => {
      if (practiceIndex < lessonContent.exercises.length - 1) {
        setPracticeIndex(prev => prev + 1);
      } else {
        setSection('quiz');
        setQuizTotal(lessonContent.quiz.reduce((acc, q) => acc + q.points, 0));
      }
    }, 1500);
  };

  const handleQuizAnswer = (isCorrect: boolean, hintPenalty: number = 0) => {
    // Track hint penalties regardless of answer correctness (will be deducted from total XP)
    if (hintPenalty > 0) {
      console.log('[LessonPlayer] Adding quiz hint penalty:', hintPenalty);
      setHintPenalties(prev => prev + hintPenalty);
    }
    
    const currentQuiz = lessonContent.quiz[quizIndex];
    if (isCorrect) {
      setQuizScore(prev => prev + currentQuiz.points);
      // Award full XP for correct answer
      setXpEarned(prev => prev + 5);
    } else {
      setHearts(prev => Math.max(0, prev - 1));
    }

    setSlideDirection(1);
    setTimeout(() => {
      if (quizIndex < lessonContent.quiz.length - 1) {
        setQuizIndex(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, 1500);
  };

  const handleClose = () => {
    navigate(-1);
  };

  // Completion screen
  if (isComplete) {
    const totalXp = xpEarned + lessonData.lesson.xpReward;
    const passed = calculatePassed();
    const scorePercent = quizTotal > 0 ? Math.round((quizScore / quizTotal) * 100) : 0;
    
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center relative" dir="rtl">
        <MiniConfetti trigger={showConfetti && passed} onComplete={() => setShowConfetti(false)} />
        
        <motion.div 
          className="text-center max-w-md mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className={cn(
              "w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center",
              passed ? "bg-gradient-primary" : "bg-destructive/20"
            )}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <Trophy className={cn("w-12 h-12", passed ? "text-primary-foreground" : "text-destructive")} />
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {passed ? 'أحسنت!' : 'حاول مرة أخرى'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {passed 
              ? 'لقد أكملت الدرس بنجاح' 
              : `حصلت على ${scorePercent}% - تحتاج ${passingThreshold}% للنجاح`}
          </p>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className={cn(
                    "flex items-center justify-center gap-1 text-2xl font-bold",
                    passed ? "text-xp" : "text-muted-foreground"
                  )}>
                    <Star className={cn("w-6 h-6", passed && "fill-current")} />
                    <span>{passed ? `+${totalXp}` : '0'}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">نقاط XP</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className={cn(
                    "flex items-center justify-center gap-1 text-2xl font-bold",
                    passed ? "text-primary" : "text-destructive"
                  )}>
                    <ClipboardCheck className="w-6 h-6" />
                    <span>{scorePercent}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">نتيجة الاختبار</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-center gap-1 text-hearts text-2xl font-bold">
                    <Heart className="w-6 h-6 fill-current" />
                    <span>{hearts}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">قلوب متبقية</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {saveError && (
            <motion.div 
              className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              حدث خطأ في حفظ التقدم
            </motion.div>
          )}

          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {passed ? (
              <>
                {saveError ? (
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" size="lg" onClick={handleRetrySave} className="flex-1">
                      إعادة المحاولة
                    </Button>
                    <Button type="button" variant="hero" size="lg" onClick={handleBackToLessons} className="flex-1">
                      متابعة
                    </Button>
                  </div>
                ) : isSaving ? (
                  <Button type="button" variant="hero" size="xl" className="w-full" disabled>
                    <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                    جاري الحفظ...
                  </Button>
                ) : (
                  <>
                    <Button type="button" variant="hero" size="xl" className="w-full" onClick={handleBackToLessons}>
                      العودة إلى الدروس
                    </Button>
                    <Button type="button" variant="outline" size="lg" className="w-full" onClick={handleNextLesson}>
                      ابدأ الدرس التالي
                    </Button>
                  </>
                )}
              </>
            ) : (
              <>
                <Button type="button" variant="hero" size="xl" className="w-full" onClick={handleRetry}>
                  حاول مرة أخرى
                </Button>
                <Button type="button" variant="outline" size="lg" className="w-full" onClick={handleBackToUnit}>
                  العودة للوحدة
                </Button>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Generate stable keys for exercises
  const practiceExerciseKey = `${lessonId}-practice-${practiceIndex}`;
  const quizExerciseKey = `${lessonId}-quiz-${quizIndex}`;

  // Animated section tabs
  const renderSectionTabs = () => (
    <div className="flex gap-2 mb-4 justify-center">
      {[
        { key: 'learn', icon: BookOpen, label: 'تعلم' },
        { key: 'practice', icon: Dumbbell, label: 'تدريب' },
        { key: 'quiz', icon: ClipboardCheck, label: 'اختبار' }
      ].map((tab, index) => (
        <motion.div 
          key={tab.key}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors relative",
            section === tab.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          )}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <tab.icon className="w-4 h-4" />
          <span>{tab.label}</span>
          {section === tab.key && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-foreground/30 rounded-full"
              layoutId="activeTab"
            />
          )}
        </motion.div>
      ))}
    </div>
  );

  // Learn section content with animations
  const renderLearnSection = () => {
    const isVocab = learnIndex < lessonContent.vocab.length;
    const item = isVocab 
      ? lessonContent.vocab[learnIndex] 
      : lessonContent.sentences[learnIndex - lessonContent.vocab.length];

    return (
      <div className="space-y-6">
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={learnIndex}
            custom={slideDirection}
            variants={prefersReducedMotion ? {} : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                {isVocab ? (
                  <>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <p className="text-4xl font-bold text-primary ltr-text">
                        {(item as VocabItem).english}
                      </p>
                      <AudioButton 
                        text={(item as VocabItem).english} 
                        size="lg"
                        variant="secondary"
                        className="text-primary"
                      />
                    </div>
                    <p className="text-2xl text-foreground mb-4">{(item as VocabItem).arabic}</p>
                    {(item as VocabItem).example && (
                      <motion.div 
                        className="mt-6 p-4 bg-background/50 rounded-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-lg text-muted-foreground ltr-text">{(item as VocabItem).example}</p>
                          <AudioButton 
                            text={(item as VocabItem).example || ''} 
                            size="sm"
                            className="text-muted-foreground"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{(item as VocabItem).exampleAr}</p>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <p className="text-2xl font-bold text-primary ltr-text">
                        {(item as SentenceItem).english}
                      </p>
                      <AudioButton 
                        text={(item as SentenceItem).english} 
                        size="lg"
                        variant="secondary"
                        className="text-primary"
                      />
                    </div>
                    <p className="text-xl text-foreground">{(item as SentenceItem).arabic}</p>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        
        <div className="text-center text-sm text-muted-foreground">
          {learnIndex + 1} / {lessonContent.vocab.length + lessonContent.sentences.length}
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button type="button" variant="hero" size="xl" className="w-full" onClick={handleLearnNext}>
            {learnIndex < lessonContent.vocab.length + lessonContent.sentences.length - 1 ? 'التالي' : 'ابدأ التدريب'}
            <ChevronLeft className="w-5 h-5 mr-2" />
          </Button>
        </motion.div>
      </div>
    );
  };

  // Practice section
  const renderPracticeSection = () => {
    const exercise = lessonContent.exercises[practiceIndex];
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={practiceExerciseKey}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ExerciseRenderer
            type={exercise.type as 'mcq' | 'fill_blank' | 'reorder' | 'listening' | 'translation' | 'matching'}
            promptAr={exercise.promptAr}
            promptEn={exercise.promptEn}
            data={{
              options: exercise.data.options,
              correct: exercise.data.correct,
              answer: exercise.data.answer,
              alternatives: exercise.data.alternatives,
              words: exercise.data.words,
              correct_order: exercise.data.correctOrder,
              hint_ar: exercise.data.hint,
              pairs: exercise.data.pairs,
            }}
            onAnswer={handlePracticeAnswer}
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  // Quiz section
  const renderQuizSection = () => {
    const quiz = lessonContent.quiz[quizIndex];
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={quizExerciseKey}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ExerciseRenderer
            type={quiz.type as 'mcq' | 'fill_blank' | 'reorder' | 'listening' | 'translation' | 'matching'}
            promptAr={quiz.promptAr}
            promptEn={quiz.promptEn}
            data={{
              options: quiz.data.options,
              correct: quiz.data.correct,
              answer: quiz.data.answer,
              alternatives: quiz.data.alternatives,
              words: quiz.data.words,
              correct_order: quiz.data.correctOrder,
              hint_ar: quiz.data.hint,
              pairs: quiz.data.pairs,
            }}
            onAnswer={handleQuizAnswer}
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      {/* Header with animated progress */}
      <header className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3">
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button type="button" variant="ghost" size="icon" onClick={handleClose}>
              <X className="w-5 h-5" />
            </Button>
          </motion.div>
          
          <div className="flex-1">
            <AnimatedProgress value={getSectionProgress()} className="h-3" />
          </div>
          
          <motion.div 
            className="flex items-center gap-1 text-hearts font-bold"
            animate={hearts < 3 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Heart className={cn("w-5 h-5", hearts > 0 && "fill-current")} />
            <span>{hearts}</span>
          </motion.div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6 max-w-2xl">
        {renderSectionTabs()}
        
        {section === 'learn' && renderLearnSection()}
        {section === 'practice' && renderPracticeSection()}
        {section === 'quiz' && renderQuizSection()}
      </main>
    </div>
  );
};

export default LessonPlayer;
