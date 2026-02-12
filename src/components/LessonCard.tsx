import { Play, CheckCircle, Lock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface LessonCardProps {
  id: string;
  titleAr: string;
  titleEn: string;
  xpReward: number;
  isCompleted?: boolean;
  isLocked?: boolean;
  isCurrent?: boolean;
  score?: number;
  onClick?: () => void;
}

export const LessonCard = ({
  titleAr,
  titleEn,
  xpReward,
  isCompleted = false,
  isLocked = false,
  isCurrent = false,
  score,
  onClick
}: LessonCardProps) => {
  return (
    <Card
      onClick={isLocked ? undefined : onClick}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        !isLocked && "cursor-pointer hover:shadow-elevated hover:-translate-y-1",
        isLocked && "opacity-50 cursor-not-allowed",
        isCurrent && "ring-2 ring-primary shadow-glow",
        isCompleted && "bg-success/5"
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          {/* Status icon */}
          <div className={cn(
            "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all",
            isCompleted && "bg-success text-success-foreground",
            isCurrent && !isCompleted && "bg-gradient-primary text-primary-foreground animate-pulse-glow",
            !isCompleted && !isCurrent && !isLocked && "bg-secondary text-secondary-foreground",
            isLocked && "bg-muted text-muted-foreground"
          )}>
            {isLocked ? (
              <Lock className="w-5 h-5" />
            ) : isCompleted ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground truncate">
              {titleAr}
            </h4>
            <p className="text-sm text-muted-foreground ltr-text truncate">
              {titleEn}
            </p>
          </div>

          {/* XP Badge */}
          <div className="flex flex-col items-center gap-1">
            <div className={cn(
              "flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold",
              isCompleted ? "bg-success/10 text-success" : "bg-xp/10 text-xp"
            )}>
              <Star className="w-4 h-4" />
              <span>{xpReward}</span>
            </div>
            {isCompleted && score !== undefined && (
              <span className="text-xs text-muted-foreground">
                {score}%
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
