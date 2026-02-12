import { BookOpen, ChevronLeft, Lock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface UnitCardProps {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr?: string;
  icon?: string;
  lessonsCount: number;
  completedLessons: number;
  isLocked?: boolean;
  onClick?: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  'book-open': BookOpen,
  'book': BookOpen,
};

export const UnitCard = ({
  titleAr,
  titleEn,
  descriptionAr,
  icon = 'book-open',
  lessonsCount,
  completedLessons,
  isLocked = false,
  onClick
}: UnitCardProps) => {
  const IconComponent = iconMap[icon] || BookOpen;
  const progress = lessonsCount > 0 ? (completedLessons / lessonsCount) * 100 : 0;
  const isCompleted = completedLessons === lessonsCount && lessonsCount > 0;

  return (
    <Card
      onClick={isLocked ? undefined : onClick}
      className={cn(
        "relative overflow-hidden cursor-pointer hover:shadow-elevated hover:-translate-y-1 transition-all duration-300",
        isLocked && "opacity-60 cursor-not-allowed",
        isCompleted && "ring-2 ring-success"
      )}
    >
      {/* Gradient accent bar */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-1",
        isCompleted ? "bg-gradient-success" : "bg-gradient-primary"
      )} />
      
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={cn(
            "flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center",
            isCompleted ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
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
            <h3 className="text-lg font-bold text-foreground mb-1 truncate">
              {titleAr}
            </h3>
            <p className="text-sm text-muted-foreground ltr-text truncate mb-3">
              {titleEn}
            </p>
            
            {descriptionAr && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {descriptionAr}
              </p>
            )}

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">
                  {completedLessons} / {lessonsCount} دروس
                </span>
                <span className="font-semibold text-primary">
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
};
