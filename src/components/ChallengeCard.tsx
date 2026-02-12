import { Target, CheckCircle, Clock, Star, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import type { Challenge, UserChallenge } from '@/hooks/useChallenges';

interface ChallengeCardProps {
  challenge: Challenge;
  userChallenge?: UserChallenge;
  onJoin?: () => void;
  isJoining?: boolean;
}

const getChallengeTypeLabel = (type: string) => {
  switch (type) {
    case 'daily':
      return { label: 'يومي', color: 'bg-green-500/20 text-green-600' };
    case 'weekly':
      return { label: 'أسبوعي', color: 'bg-blue-500/20 text-blue-600' };
    case 'monthly':
      return { label: 'شهري', color: 'bg-purple-500/20 text-purple-600' };
    default:
      return { label: type, color: 'bg-gray-500/20 text-gray-600' };
  }
};

export const ChallengeCard = ({ challenge, userChallenge, onJoin, isJoining }: ChallengeCardProps) => {
  const typeInfo = getChallengeTypeLabel(challenge.challenge_type);
  const progress = userChallenge?.progress || 0;
  const progressPercent = Math.min((progress / challenge.target_value) * 100, 100);
  const isCompleted = userChallenge?.completed;
  const isJoined = !!userChallenge;

  return (
    <Card className={cn(
      "transition-all duration-200",
      isCompleted && "bg-green-500/5 border-green-500/30"
    )}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
            isCompleted ? "bg-green-500/20" : "bg-primary/10"
          )}>
            {isCompleted ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <Target className="w-6 h-6 text-primary" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold">{challenge.name_ar}</h3>
              <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", typeInfo.color)}>
                {typeInfo.label}
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground mt-1">
              {challenge.description_ar}
            </p>

            {/* Progress */}
            {isJoined && (
              <div className="mt-3 space-y-2">
                <Progress value={progressPercent} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{progress} / {challenge.target_value}</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
              </div>
            )}

            {/* Reward */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 text-xp fill-xp" />
                <span className="font-medium">+{challenge.reward_xp} XP</span>
              </div>

              {!isJoined && onJoin && (
                <Button
                  size="sm"
                  onClick={onJoin}
                  disabled={isJoining}
                  className="gap-1"
                >
                  {isJoining ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Clock className="w-4 h-4" />
                      انضم
                    </>
                  )}
                </Button>
              )}

              {isCompleted && (
                <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  مكتمل
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
