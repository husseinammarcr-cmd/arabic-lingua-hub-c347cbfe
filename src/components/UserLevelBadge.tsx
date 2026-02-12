import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserLevelBadgeProps {
  level: number;
  xp: number;
  size?: 'sm' | 'md' | 'lg';
  showXp?: boolean;
}

const getLevelColor = (level: number) => {
  if (level >= 50) return 'from-purple-500 to-pink-500';
  if (level >= 40) return 'from-red-500 to-orange-500';
  if (level >= 30) return 'from-yellow-500 to-amber-500';
  if (level >= 20) return 'from-green-500 to-emerald-500';
  if (level >= 10) return 'from-blue-500 to-cyan-500';
  return 'from-gray-500 to-slate-500';
};

const getLevelTitle = (level: number) => {
  if (level >= 50) return 'أسطورة';
  if (level >= 40) return 'محترف';
  if (level >= 30) return 'خبير';
  if (level >= 20) return 'متقدم';
  if (level >= 10) return 'متوسط';
  return 'مبتدئ';
};

const getXpForNextLevel = (level: number) => {
  return level * 500;
};

const sizeClasses = {
  sm: { badge: 'w-10 h-10 text-sm', container: 'gap-2' },
  md: { badge: 'w-14 h-14 text-lg', container: 'gap-3' },
  lg: { badge: 'w-20 h-20 text-2xl', container: 'gap-4' },
};

export const UserLevelBadge = ({ level, xp, size = 'md', showXp = true }: UserLevelBadgeProps) => {
  const nextLevelXp = getXpForNextLevel(level);
  const currentLevelXp = getXpForNextLevel(level - 1);
  const progressInLevel = xp - currentLevelXp;
  const xpNeeded = nextLevelXp - currentLevelXp;
  const progressPercent = Math.min((progressInLevel / xpNeeded) * 100, 100);

  return (
    <div className={cn("flex items-center", sizeClasses[size].container)}>
      {/* Level badge */}
      <div className={cn(
        "rounded-full flex items-center justify-center font-bold text-white shadow-lg relative overflow-hidden",
        `bg-gradient-to-br ${getLevelColor(level)}`,
        sizeClasses[size].badge
      )}>
        {level}
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
      </div>

      {/* Level info */}
      <div className="flex flex-col">
        <span className="font-semibold">{getLevelTitle(level)}</span>
        
        {showXp && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-3 h-3 text-xp fill-xp" />
              <span>{xp.toLocaleString()} XP</span>
            </div>
            
            {/* Progress to next level */}
            <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className={cn("h-full rounded-full transition-all duration-300", `bg-gradient-to-r ${getLevelColor(level)}`)}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">
              {progressInLevel} / {xpNeeded} للمستوى التالي
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
