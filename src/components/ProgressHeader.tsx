import { Heart, Star, Flame, Crown, X } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProgressHeaderProps {
  currentExercise: number;
  totalExercises: number;
  hearts: number;
  maxHearts?: number;
  xp?: number;
  streak?: number;
  onClose?: () => void;
  showClose?: boolean;
  isPremium?: boolean;
}

export const ProgressHeader = ({
  currentExercise,
  totalExercises,
  hearts,
  maxHearts = 5,
  xp,
  streak,
  onClose,
  showClose = true,
  isPremium = false
}: ProgressHeaderProps) => {
  const progress = totalExercises > 0 ? (currentExercise / totalExercises) * 100 : 0;

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Close button */}
          {showClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </Button>
          )}

          {/* Progress bar */}
          <div className="flex-1">
            <Progress value={progress} className="h-3" />
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Hearts */}
            <div className={cn(
              "flex items-center gap-1 font-bold",
              hearts <= 1 ? "text-destructive" : "text-destructive"
            )}>
              <Heart className={cn(
                "w-5 h-5 fill-current",
                hearts <= 1 && "animate-heart-beat"
              )} />
              <span>{isPremium ? '∞' : hearts}</span>
            </div>

            {/* XP */}
            {xp !== undefined && (
              <div className="flex items-center gap-1 font-bold text-xp">
                <Star className="w-5 h-5 fill-current" />
                <span>{xp}</span>
              </div>
            )}

            {/* Streak */}
            {streak !== undefined && streak > 0 && (
              <div className="flex items-center gap-1 font-bold text-streak">
                <Flame className="w-5 h-5 fill-current animate-streak-flame" />
                <span>{streak}</span>
              </div>
            )}

            {/* Premium indicator */}
            {isPremium && (
              <Crown className="w-5 h-5 text-accent fill-accent" />
            )}
          </div>
        </div>

        {/* Exercise counter */}
        <div className="text-center mt-2 text-sm text-muted-foreground">
          سؤال {currentExercise} من {totalExercises}
        </div>
      </div>
    </div>
  );
};
