import { Trophy, Star, Flame, Target, BookOpen, Zap, Award, Crown, Medal, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Achievement } from '@/hooks/useAchievements';

interface AchievementBadgeProps {
  achievement: Achievement;
  earned?: boolean;
  earnedAt?: string;
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  star: Star,
  flame: Flame,
  target: Target,
  book: BookOpen,
  zap: Zap,
  award: Award,
  crown: Crown,
  medal: Medal,
  heart: Heart,
};

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
};

const iconSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

export const AchievementBadge = ({
  achievement,
  earned = false,
  earnedAt,
  size = 'md',
  showDetails = true,
}: AchievementBadgeProps) => {
  const IconComponent = iconMap[achievement.icon] || Trophy;

  return (
    <div className={cn(
      "flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200",
      earned ? "opacity-100" : "opacity-40 grayscale"
    )}>
      {/* Badge */}
      <div className={cn(
        "relative rounded-full flex items-center justify-center",
        sizeClasses[size],
        earned
          ? "bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg shadow-yellow-500/30"
          : "bg-muted"
      )}>
        <IconComponent className={cn(
          iconSizes[size],
          earned ? "text-white" : "text-muted-foreground"
        )} />
        
        {/* Shine effect for earned badges */}
        {earned && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent" />
        )}
      </div>

      {/* Details */}
      {showDetails && (
        <div className="text-center">
          <h4 className="font-semibold text-sm">{achievement.title_ar}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{achievement.description_ar}</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Star className="w-3 h-3 text-xp fill-xp" />
            <span className="text-xs font-medium">+{achievement.xp_reward} XP</span>
          </div>
          {earned && earnedAt && (
            <p className="text-xs text-muted-foreground mt-1">
              {new Date(earnedAt).toLocaleDateString('ar-EG')}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
