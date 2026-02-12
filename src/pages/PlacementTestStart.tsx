import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PLACEMENT_QUESTIONS, PlacementQuestion } from '@/lib/placementQuestions';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface Answer {
  questionId: number;
  selectedAnswer: string;
  isCorrect: boolean;
  level: string;
}

const PlacementTestStart = () => {
  const navigate = useNavigate();
  const { user, isLoading, refreshProfile } = useAuth();
  const { playSelect, playSuccess, playError } = useSoundEffects();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackState, setFeedbackState] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth?returnUrl=/placement-test');
    }
  }, [user, isLoading, navigate]);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`placement_test_${user?.id}`);
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      setAnswers(parsed.answers || []);
      setCurrentIndex(parsed.currentIndex || 0);
    }
  }, [user?.id]);

  // Save progress to localStorage
  useEffect(() => {
    if (user?.id && answers.length > 0) {
      localStorage.setItem(`placement_test_${user.id}`, JSON.stringify({
        answers,
        currentIndex,
      }));
    }
  }, [answers, currentIndex, user?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary text-xl">جاري التحميل...</div>
      </div>
    );
  }

  const currentQuestion: PlacementQuestion = PLACEMENT_QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / PLACEMENT_QUESTIONS.length) * 100;
  const isLastQuestion = currentIndex === PLACEMENT_QUESTIONS.length - 1;

  const handleSelectOption = (optionId: string) => {
    playSelect();
    setSelectedOption(optionId);
  };

  const handleNext = async () => {
    if (!selectedOption || !currentQuestion || feedbackState !== 'idle') return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    // Set feedback state and play sound
    if (isCorrect) {
      setFeedbackState('correct');
      playSuccess();
    } else {
      setFeedbackState('incorrect');
      playError();
    }

    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedOption,
      isCorrect,
      level: currentQuestion.level,
    };

    const updatedAnswers = [...answers.filter(a => a.questionId !== currentQuestion.id), newAnswer];
    setAnswers(updatedAnswers);

    if (isLastQuestion) {
      // Submit test after animation
      setTimeout(async () => {
        await submitTest(updatedAnswers);
      }, 600);
    } else {
      // Delay to show animation before moving to next question
      setTimeout(() => {
        setFeedbackState('idle');
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
      }, 600);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      const prevAnswer = answers.find(a => a.questionId === PLACEMENT_QUESTIONS[currentIndex - 1].id);
      setSelectedOption(prevAnswer?.selectedAnswer || null);
    }
  };

  const submitTest = async (finalAnswers: Answer[]) => {
    if (!user) return;
    
    setIsSubmitting(true);
    try {
      const score = finalAnswers.filter(a => a.isCorrect).length;
      const total = PLACEMENT_QUESTIONS.length;
      
      // Calculate level breakdown - support all CEFR levels
      const breakdown: Record<string, { correct: number; total: number }> = {
        A1: { correct: 0, total: 0 },
        A2: { correct: 0, total: 0 },
        B1: { correct: 0, total: 0 },
        B2: { correct: 0, total: 0 },
        C1: { correct: 0, total: 0 },
        C2: { correct: 0, total: 0 },
      };
      
      finalAnswers.forEach(answer => {
        const level = answer.level;
        if (breakdown[level]) {
          breakdown[level].total++;
          if (answer.isCorrect) breakdown[level].correct++;
        }
      });

      // Determine suggested level based on percentage
      let suggestedLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
      const percentage = (score / total) * 100;
      
      if (percentage >= 95) suggestedLevel = 'C2';
      else if (percentage >= 85) suggestedLevel = 'C1';
      else if (percentage >= 70) suggestedLevel = 'B2';
      else if (percentage >= 65) suggestedLevel = 'B1';
      else if (percentage >= 45) suggestedLevel = 'A2';
      else suggestedLevel = 'A1';

      // Save to database
      const { error: testError } = await supabase
        .from('placement_tests')
        .insert([{
          user_id: user.id,
          score,
          total_questions: total,
          suggested_level: suggestedLevel,
          answers_json: JSON.parse(JSON.stringify(finalAnswers)),
          breakdown_json: JSON.parse(JSON.stringify(breakdown)),
        }]);

      if (testError) throw testError;

      // Update profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          placement_level: suggestedLevel,
          placement_score: score,
          has_taken_placement: true,
          placement_taken_at: new Date().toISOString(),
          current_level: suggestedLevel,
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      // Clear saved progress
      localStorage.removeItem(`placement_test_${user.id}`);

      // Show success message
      toast.success('تم حفظ نتيجتك بنجاح! 🎉', {
        description: `مستواك: ${suggestedLevel} - النتيجة: ${score}/${total}`,
        duration: 2000,
      });

      // Refresh profile and navigate to results after a brief delay
      await refreshProfile();
      setTimeout(() => {
        navigate('/placement-test/result', { 
          state: { score, total, level: suggestedLevel, breakdown } 
        });
      }, 500);
    } catch (error) {
      console.error('Error submitting test:', error);
      toast.error('حدث خطأ أثناء حفظ النتيجة');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'A1': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'A2': return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400';
      case 'B1': return 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400';
      case 'B2': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/placement-test')}
              disabled={isSubmitting}
            >
              <ChevronRight className="w-4 h-4 ml-1" />
              خروج
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {PLACEMENT_QUESTIONS.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Question Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            {/* Level badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className={cn("text-xs font-bold px-2 py-1 rounded-full", getLevelBadgeColor(currentQuestion.level))}>
                {currentQuestion.level}
              </span>
              <span className="text-xs text-muted-foreground">
                {currentQuestion.type === 'vocabulary' && 'مفردات'}
                {currentQuestion.type === 'grammar' && 'قواعد'}
                {currentQuestion.type === 'reading' && 'فهم'}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-xl font-bold text-foreground mb-6 leading-relaxed">
              {currentQuestion.questionAr}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOption === option.id;
                const isCorrectAnswer = option.id === currentQuestion.correctAnswer;
                const showCorrectFeedback = feedbackState === 'correct' && isSelected;
                const showIncorrectFeedback = feedbackState === 'incorrect' && isSelected;
                const showCorrectHighlight = feedbackState === 'incorrect' && isCorrectAnswer;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    disabled={isSubmitting || feedbackState !== 'idle'}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 text-right transition-all duration-200",
                      "hover:border-primary/50 hover:bg-primary/5",
                      // Default selected state
                      isSelected && feedbackState === 'idle' && "border-primary bg-primary/10 shadow-md",
                      // Not selected
                      !isSelected && feedbackState === 'idle' && "border-border bg-card",
                      // Correct answer feedback - turquoise glow
                      showCorrectFeedback && "border-cyan-500 bg-cyan-500/20 shadow-lg shadow-cyan-500/30 animate-pulse",
                      // Incorrect answer feedback - shake
                      showIncorrectFeedback && "border-red-400 bg-red-500/10 animate-[shake_0.5s_ease-in-out]",
                      // Show correct answer when wrong
                      showCorrectHighlight && "border-cyan-500 bg-cyan-500/10",
                      // Disabled state during feedback
                      feedbackState !== 'idle' && !isSelected && !showCorrectHighlight && "opacity-50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-200",
                        isSelected && feedbackState === 'idle' && "bg-primary text-primary-foreground",
                        !isSelected && feedbackState === 'idle' && "bg-muted text-muted-foreground",
                        showCorrectFeedback && "bg-cyan-500 text-white",
                        showIncorrectFeedback && "bg-red-400 text-white",
                        showCorrectHighlight && "bg-cyan-500 text-white"
                      )}>
                        {showCorrectFeedback || showCorrectHighlight ? '✓' : showIncorrectFeedback ? '✗' : option.id.toUpperCase()}
                      </span>
                      <span className={cn(
                        "text-lg transition-all duration-200",
                        isSelected && feedbackState === 'idle' && "text-foreground font-medium",
                        showCorrectFeedback && "text-cyan-700 dark:text-cyan-300 font-medium",
                        showIncorrectFeedback && "text-red-600 dark:text-red-400",
                        showCorrectHighlight && "text-cyan-700 dark:text-cyan-300 font-medium"
                      )}>
                        {option.textAr || option.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0 || isSubmitting}
          >
            <ChevronRight className="w-4 h-4 ml-1" />
            السابق
          </Button>

          <Button
            variant="hero"
            onClick={handleNext}
            disabled={!selectedOption || isSubmitting}
          >
            {isSubmitting ? (
              'جاري الحفظ...'
            ) : isLastQuestion ? (
              'إنهاء الاختبار'
            ) : (
              <>
                التالي
                <ChevronLeft className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default PlacementTestStart;
