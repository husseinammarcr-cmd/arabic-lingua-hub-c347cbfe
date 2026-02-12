import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { Target, Sparkles, ArrowLeft, Brain, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import AuthBackground from '@/components/animations/AuthBackground';

// Quick placement test questions (10 questions - smart selection)
interface QuickQuestion {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  questionAr: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
}

const QUICK_QUESTIONS: QuickQuestion[] = [
  // A1 (3 questions)
  {
    id: 1, level: 'A1', questionAr: 'ما معنى كلمة "Hello"؟',
    options: [{ id: 'a', text: 'مرحباً' }, { id: 'b', text: 'وداعاً' }, { id: 'c', text: 'شكراً' }, { id: 'd', text: 'آسف' }],
    correctAnswer: 'a'
  },
  {
    id: 2, level: 'A1', questionAr: 'اختر الجملة الصحيحة:',
    options: [{ id: 'a', text: 'I am a student.' }, { id: 'b', text: 'I is a student.' }, { id: 'c', text: 'I are a student.' }, { id: 'd', text: 'I be student.' }],
    correctAnswer: 'a'
  },
  {
    id: 3, level: 'A1', questionAr: 'أكمل: She ___ a teacher.',
    options: [{ id: 'a', text: 'am' }, { id: 'b', text: 'is' }, { id: 'c', text: 'are' }, { id: 'd', text: 'be' }],
    correctAnswer: 'b'
  },
  // A2 (3 questions)
  {
    id: 4, level: 'A2', questionAr: 'أكمل: I ___ to school yesterday.',
    options: [{ id: 'a', text: 'go' }, { id: 'b', text: 'goes' }, { id: 'c', text: 'went' }, { id: 'd', text: 'going' }],
    correctAnswer: 'c'
  },
  {
    id: 5, level: 'A2', questionAr: 'اختر: She can ___ well.',
    options: [{ id: 'a', text: 'sings' }, { id: 'b', text: 'sing' }, { id: 'c', text: 'to sing' }, { id: 'd', text: 'singing' }],
    correctAnswer: 'b'
  },
  {
    id: 6, level: 'A2', questionAr: 'This book is ___ than that one.',
    options: [{ id: 'a', text: 'interesting' }, { id: 'b', text: 'more interesting' }, { id: 'c', text: 'most interesting' }, { id: 'd', text: 'interestinger' }],
    correctAnswer: 'b'
  },
  // B1 (2 questions)
  {
    id: 7, level: 'B1', questionAr: 'If I ___ rich, I would travel the world.',
    options: [{ id: 'a', text: 'am' }, { id: 'b', text: 'was' }, { id: 'c', text: 'were' }, { id: 'd', text: 'will be' }],
    correctAnswer: 'c'
  },
  {
    id: 8, level: 'B1', questionAr: 'I wish I ___ speak French.',
    options: [{ id: 'a', text: 'can' }, { id: 'b', text: 'could' }, { id: 'c', text: 'will' }, { id: 'd', text: 'would' }],
    correctAnswer: 'b'
  },
  // B2 (2 questions)
  {
    id: 9, level: 'B2', questionAr: 'Had I known about the meeting, I ___ attended.',
    options: [{ id: 'a', text: 'will have' }, { id: 'b', text: 'would have' }, { id: 'c', text: 'would' }, { id: 'd', text: 'had' }],
    correctAnswer: 'b'
  },
  {
    id: 10, level: 'B2', questionAr: 'By this time next year, I ___ my degree.',
    options: [{ id: 'a', text: 'will complete' }, { id: 'b', text: 'will have completed' }, { id: 'c', text: 'complete' }, { id: 'd', text: 'am completing' }],
    correctAnswer: 'b'
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { updateProfile, user, refreshProfile } = useAuth();
  const [step, setStep] = useState(0); // 0: goal, 1: test intro, 2: test, 3: result
  const [dailyGoal, setDailyGoal] = useState<'5' | '10' | '15'>('10');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ questionId: number; isCorrect: boolean; level: string }[]>([]);
  const [calculatedLevel, setCalculatedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>('A1');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goals = [
    { value: '5' as const, titleAr: '5 دقائق', desc: 'مشغول جداً', icon: '⚡' },
    { value: '10' as const, titleAr: '10 دقائق', desc: 'توازن مثالي', icon: '✨' },
    { value: '15' as const, titleAr: '15 دقائق', desc: 'جاد في التعلم', icon: '🔥' },
  ];

  const currentQuestion = QUICK_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUICK_QUESTIONS.length) * 100;

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNextQuestion = () => {
    if (!selectedOption || !currentQuestion) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const newAnswers = [...answers, { questionId: currentQuestion.id, isCorrect, level: currentQuestion.level }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUICK_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      // Calculate level based on answers
      const levelScores = { A1: 0, A2: 0, B1: 0, B2: 0 };
      newAnswers.forEach(a => {
        if (a.isCorrect) levelScores[a.level as keyof typeof levelScores]++;
      });

      const totalCorrect = newAnswers.filter(a => a.isCorrect).length;
      const percentage = (totalCorrect / QUICK_QUESTIONS.length) * 100;

      let level: 'A1' | 'A2' | 'B1' | 'B2';
      if (percentage >= 80) level = 'B2';
      else if (percentage >= 60) level = 'B1';
      else if (percentage >= 40) level = 'A2';
      else level = 'A1';

      setCalculatedLevel(level);
      setStep(3);
    }
  };

  const handleFinish = async () => {
    if (!user) return;
    
    setIsSubmitting(true);
    try {
      const totalCorrect = answers.filter(a => a.isCorrect).length;
      
      // Save placement test result
      await supabase.from('placement_tests').insert([{
        user_id: user.id,
        score: totalCorrect,
        total_questions: QUICK_QUESTIONS.length,
        suggested_level: calculatedLevel,
        answers_json: JSON.parse(JSON.stringify(answers)),
        breakdown_json: JSON.parse(JSON.stringify({
          A1: { correct: answers.filter(a => a.level === 'A1' && a.isCorrect).length, total: answers.filter(a => a.level === 'A1').length },
          A2: { correct: answers.filter(a => a.level === 'A2' && a.isCorrect).length, total: answers.filter(a => a.level === 'A2').length },
          B1: { correct: answers.filter(a => a.level === 'B1' && a.isCorrect).length, total: answers.filter(a => a.level === 'B1').length },
          B2: { correct: answers.filter(a => a.level === 'B2' && a.isCorrect).length, total: answers.filter(a => a.level === 'B2').length },
        })),
      }]);

      // Update profile with level and completion status
      await updateProfile({
        daily_goal: dailyGoal,
        onboarding_completed: true,
        placement_level: calculatedLevel,
        current_level: calculatedLevel,
        placement_score: totalCorrect,
        has_taken_placement: true,
        placement_taken_at: new Date().toISOString(),
      });

      await refreshProfile();
      toast.success(`مبروك! مستواك ${calculatedLevel} 🎉`);
      navigate(`/courses/${calculatedLevel.toLowerCase()}`);
    } catch (error) {
      console.error('Error saving onboarding:', error);
      toast.error('حدث خطأ، يرجى المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skipTest = async () => {
    setIsSubmitting(true);
    try {
      await updateProfile({
        daily_goal: dailyGoal,
        onboarding_completed: true,
        current_level: 'A1',
      });
      await refreshProfile();
      navigate('/courses/a1');
    } catch (error) {
      console.error('Error:', error);
      toast.error('حدث خطأ');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLevelInfo = (level: string) => {
    const info: Record<string, { name: string; color: string; emoji: string; desc: string }> = {
      'A1': { name: 'مبتدئ', color: 'from-emerald-500 to-green-600', emoji: '🌱', desc: 'ستبدأ من الأساسيات وتتعلم التحيات والأرقام والتعبيرات اليومية' },
      'A2': { name: 'أساسي', color: 'from-sky-500 to-blue-600', emoji: '📚', desc: 'ستتعلم التعبير عن نفسك في مواقف يومية والتحدث عن الماضي' },
      'B1': { name: 'متوسط', color: 'from-violet-500 to-purple-600', emoji: '🚀', desc: 'ستتمكن من التعبير عن آرائك والتعامل مع مواقف متنوعة' },
      'B2': { name: 'متقدم', color: 'from-amber-500 to-orange-600', emoji: '🏆', desc: 'ستتعلم التعبير بطلاقة ومناقشة مواضيع معقدة' },
    };
    return info[level] || info['A1'];
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
      <AuthBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="backdrop-blur-sm bg-card/95 border-border/50 shadow-2xl overflow-hidden">
          <CardContent className="p-6">
            <AnimatePresence mode="wait">
              {/* Step 0: Daily Goal */}
              {step === 0 && (
                <motion.div
                  key="goal"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <Target className="w-16 h-16 mx-auto text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">كم وقت تريد للدراسة يومياً؟</h2>
                    <p className="text-muted-foreground text-sm">اختر هدفك اليومي</p>
                  </div>
                  <div className="space-y-3">
                    {goals.map((g, i) => (
                      <motion.div
                        key={g.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Button 
                          variant={dailyGoal === g.value ? 'default' : 'outline'} 
                          className={cn(
                            "w-full h-auto py-4 flex items-center justify-between transition-all",
                            dailyGoal === g.value && "ring-2 ring-primary ring-offset-2"
                          )} 
                          onClick={() => setDailyGoal(g.value)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{g.icon}</span>
                            <div className="text-right">
                              <span className="font-bold block">{g.titleAr}</span>
                              <span className="text-xs opacity-70">{g.desc}</span>
                            </div>
                          </div>
                          {dailyGoal === g.value && <CheckCircle2 className="w-5 h-5" />}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="hero" size="lg" className="w-full" onClick={() => setStep(1)}>
                    التالي <ArrowLeft className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}

              {/* Step 1: Test Intro */}
              {step === 1 && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <Brain className="w-20 h-20 mx-auto text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">اختبار تحديد المستوى</h2>
                    <p className="text-muted-foreground">
                      10 أسئلة سريعة لتحديد مستواك الحقيقي
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 text-sm space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      أسئلة متدرجة من المبتدئ للمتقدم
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      نحدد لك المستوى المناسب تلقائياً
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      يستغرق أقل من دقيقتين
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full" onClick={() => setStep(2)}>
                      <Sparkles className="w-4 h-4" /> ابدأ الاختبار
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-muted-foreground"
                      onClick={skipTest}
                      disabled={isSubmitting}
                    >
                      تخطي وابدأ من المستوى الأول
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Test Questions */}
              {step === 2 && currentQuestion && (
                <motion.div
                  key={`question-${currentQuestionIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded-full",
                        currentQuestion.level === 'A1' && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                        currentQuestion.level === 'A2' && "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
                        currentQuestion.level === 'B1' && "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
                        currentQuestion.level === 'B2' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                      )}>
                        {currentQuestion.level}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {currentQuestionIndex + 1} / {QUICK_QUESTIONS.length}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <h2 className="text-lg font-bold leading-relaxed">
                    {currentQuestion.questionAr}
                  </h2>

                  <div className="space-y-2">
                    {currentQuestion.options.map((option, i) => (
                      <motion.button
                        key={option.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => handleSelectOption(option.id)}
                        className={cn(
                          "w-full p-3 rounded-xl border-2 text-right transition-all duration-200",
                          "hover:border-primary/50 hover:bg-primary/5",
                          selectedOption === option.id
                            ? "border-primary bg-primary/10 shadow-md"
                            : "border-border bg-card"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className={cn(
                            "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0",
                            selectedOption === option.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}>
                            {option.id.toUpperCase()}
                          </span>
                          <span className={cn(
                            selectedOption === option.id ? "font-medium" : ""
                          )}>
                            {option.text}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={handleNextQuestion}
                    disabled={!selectedOption}
                  >
                    {currentQuestionIndex < QUICK_QUESTIONS.length - 1 ? (
                      <>التالي <ArrowLeft className="w-4 h-4" /></>
                    ) : (
                      <>إنهاء الاختبار <Sparkles className="w-4 h-4" /></>
                    )}
                  </Button>
                </motion.div>
              )}

              {/* Step 3: Result */}
              {step === 3 && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
                    className="text-6xl"
                  >
                    {getLevelInfo(calculatedLevel).emoji}
                  </motion.div>
                  
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-muted-foreground mb-2">مستواك المقترح</p>
                      <div className={cn(
                        "inline-block px-6 py-3 rounded-2xl text-white font-bold text-2xl bg-gradient-to-r",
                        getLevelInfo(calculatedLevel).color
                      )}>
                        {calculatedLevel} - {getLevelInfo(calculatedLevel).name}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-muted/50 rounded-xl p-4 text-sm text-muted-foreground"
                  >
                    {getLevelInfo(calculatedLevel).desc}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3"
                  >
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full" 
                      onClick={handleFinish}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'جاري الحفظ...' : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          ابدأ التعلم من {calculatedLevel}
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Onboarding;