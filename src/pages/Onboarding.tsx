import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { Target, Sparkles, ArrowRight, Brain, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import AuthBackground from '@/components/animations/AuthBackground';

interface QuickQuestion {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
}

const QUICK_QUESTIONS: QuickQuestion[] = [
  {
    id: 1, level: 'A1', question: 'What does "Hola" mean?',
    options: [{ id: 'a', text: 'Hello' }, { id: 'b', text: 'Goodbye' }, { id: 'c', text: 'Thank you' }, { id: 'd', text: 'Sorry' }],
    correctAnswer: 'a'
  },
  {
    id: 2, level: 'A1', question: 'Choose the correct sentence:',
    options: [{ id: 'a', text: 'Yo soy estudiante.' }, { id: 'b', text: 'Yo es estudiante.' }, { id: 'c', text: 'Yo son estudiante.' }, { id: 'd', text: 'Yo ser estudiante.' }],
    correctAnswer: 'a'
  },
  {
    id: 3, level: 'A1', question: 'Complete: Ella ___ profesora.',
    options: [{ id: 'a', text: 'soy' }, { id: 'b', text: 'es' }, { id: 'c', text: 'somos' }, { id: 'd', text: 'ser' }],
    correctAnswer: 'b'
  },
  {
    id: 4, level: 'A2', question: 'Complete: Yo ___ a la escuela ayer.',
    options: [{ id: 'a', text: 'voy' }, { id: 'b', text: 'va' }, { id: 'c', text: 'fui' }, { id: 'd', text: 'yendo' }],
    correctAnswer: 'c'
  },
  {
    id: 5, level: 'A2', question: 'Choose: Ella puede ___ bien.',
    options: [{ id: 'a', text: 'canta' }, { id: 'b', text: 'cantar' }, { id: 'c', text: 'a cantar' }, { id: 'd', text: 'cantando' }],
    correctAnswer: 'b'
  },
  {
    id: 6, level: 'A2', question: 'Este libro es ___ que ese.',
    options: [{ id: 'a', text: 'interesante' }, { id: 'b', text: 'más interesante' }, { id: 'c', text: 'el más interesante' }, { id: 'd', text: 'interesanter' }],
    correctAnswer: 'b'
  },
  {
    id: 7, level: 'B1', question: 'Si yo ___ rico, viajaría por el mundo.',
    options: [{ id: 'a', text: 'soy' }, { id: 'b', text: 'era' }, { id: 'c', text: 'fuera' }, { id: 'd', text: 'seré' }],
    correctAnswer: 'c'
  },
  {
    id: 8, level: 'B1', question: 'Ojalá yo ___ hablar francés.',
    options: [{ id: 'a', text: 'puedo' }, { id: 'b', text: 'pudiera' }, { id: 'c', text: 'podré' }, { id: 'd', text: 'podría' }],
    correctAnswer: 'b'
  },
  {
    id: 9, level: 'B2', question: 'Si hubiera sabido de la reunión, ___ asistido.',
    options: [{ id: 'a', text: 'habré' }, { id: 'b', text: 'habría' }, { id: 'c', text: 'habría que' }, { id: 'd', text: 'había' }],
    correctAnswer: 'b'
  },
  {
    id: 10, level: 'B2', question: 'Para esta época el próximo año, ___ mi carrera.',
    options: [{ id: 'a', text: 'terminaré' }, { id: 'b', text: 'habré terminado' }, { id: 'c', text: 'termino' }, { id: 'd', text: 'estoy terminando' }],
    correctAnswer: 'b'
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { updateProfile, user, refreshProfile } = useAuth();
  const [step, setStep] = useState(0);
  const [dailyGoal, setDailyGoal] = useState<'5' | '10' | '15'>('10');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ questionId: number; isCorrect: boolean; level: string }[]>([]);
  const [calculatedLevel, setCalculatedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>('A1');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goals = [
    { value: '5' as const, title: '5 minutes', desc: 'Very busy', icon: '⚡' },
    { value: '10' as const, title: '10 minutes', desc: 'Perfect balance', icon: '✨' },
    { value: '15' as const, title: '15 minutes', desc: 'Serious learner', icon: '🔥' },
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
      toast.success(`Congratulations! Your level is ${calculatedLevel} 🎉`);
      navigate(`/courses/${calculatedLevel.toLowerCase()}`);
    } catch (error) {
      console.error('Error saving onboarding:', error);
      toast.error('An error occurred, please try again');
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
      toast.error('An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLevelInfo = (level: string) => {
    const info: Record<string, { name: string; color: string; emoji: string; desc: string }> = {
      'A1': { name: 'Beginner', color: 'from-emerald-500 to-green-600', emoji: '🌱', desc: 'You\'ll start with the basics: greetings, numbers, and everyday expressions' },
      'A2': { name: 'Elementary', color: 'from-sky-500 to-blue-600', emoji: '📚', desc: 'You\'ll learn to express yourself in daily situations and talk about the past' },
      'B1': { name: 'Intermediate', color: 'from-violet-500 to-purple-600', emoji: '🚀', desc: 'You\'ll be able to express opinions and handle various situations' },
      'B2': { name: 'Advanced', color: 'from-amber-500 to-orange-600', emoji: '🏆', desc: 'You\'ll learn to express yourself fluently and discuss complex topics' },
    };
    return info[level] || info['A1'];
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative overflow-hidden">
      <AuthBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="backdrop-blur-sm bg-card/95 border-border/50 shadow-2xl overflow-hidden">
          <CardContent className="p-6">
            <AnimatePresence mode="wait">
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
                    <h2 className="text-2xl font-bold mb-2">How long do you want to study daily?</h2>
                    <p className="text-muted-foreground text-sm">Choose your daily goal</p>
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
                            <div className="text-left">
                              <span className="font-bold block">{g.title}</span>
                              <span className="text-xs opacity-70">{g.desc}</span>
                            </div>
                          </div>
                          {dailyGoal === g.value && <CheckCircle2 className="w-5 h-5" />}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="hero" size="lg" className="w-full" onClick={() => setStep(1)}>
                    Next <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}

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
                    <h2 className="text-2xl font-bold mb-2">Placement Test</h2>
                    <p className="text-muted-foreground">
                      10 quick questions to determine your real level
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 text-sm space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Progressive questions from beginner to advanced
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      We automatically determine the right level for you
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Takes less than two minutes
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full" onClick={() => setStep(2)}>
                      <Sparkles className="w-4 h-4" /> Start Test
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-muted-foreground"
                      onClick={skipTest}
                      disabled={isSubmitting}
                    >
                      Skip and start from Level 1
                    </Button>
                  </div>
                </motion.div>
              )}

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
                    {currentQuestion.question}
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
                          "w-full p-3 rounded-xl border-2 text-left transition-all duration-200",
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
                      <>Next <ArrowRight className="w-4 h-4" /></>
                    ) : (
                      <>Finish Test <Sparkles className="w-4 h-4" /></>
                    )}
                  </Button>
                </motion.div>
              )}

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
                      <p className="text-muted-foreground mb-2">Your suggested level</p>
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
                      {isSubmitting ? 'Saving...' : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Start learning from {calculatedLevel}
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
