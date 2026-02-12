import { Trophy, Medal, Award, Flame, Star, Pin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { cn } from '@/lib/utils';
import type { LeaderboardEntry } from '@/hooks/useLeaderboard';

interface LeaderboardCardProps {
  entry: LeaderboardEntry;
  timeFrame: 'all_time' | 'weekly' | 'monthly';
  isCurrentUser?: boolean;
}

const getFlagEmoji = (countryCode: string | null) => {
  if (!countryCode) return '🌍';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const getRankIcon = (rank: number, isFounder?: boolean) => {
  if (isFounder || rank === 0) {
    return <Pin className="w-6 h-6 text-blue-500 fill-blue-500" />;
  }
  switch (rank) {
    case 1:
      return <Trophy className="w-6 h-6 text-yellow-500 fill-yellow-500" />;
    case 2:
      return <Medal className="w-6 h-6 text-gray-400 fill-gray-400" />;
    case 3:
      return <Award className="w-6 h-6 text-amber-600 fill-amber-600" />;
    default:
      return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">{rank}</span>;
  }
};

const getRankBgClass = (rank: number, isFounder?: boolean) => {
  if (isFounder || rank === 0) {
    return 'bg-gradient-to-r from-blue-500/20 to-blue-600/10 border-blue-500/30';
  }
  switch (rank) {
    case 1:
      return 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border-yellow-500/30';
    case 2:
      return 'bg-gradient-to-r from-gray-400/20 to-gray-500/10 border-gray-400/30';
    case 3:
      return 'bg-gradient-to-r from-amber-600/20 to-amber-700/10 border-amber-600/30';
    default:
      return '';
  }
};

export const LeaderboardCard = ({ entry, timeFrame, isCurrentUser }: LeaderboardCardProps) => {
  const xp = timeFrame === 'weekly' ? entry.weekly_xp : timeFrame === 'monthly' ? entry.monthly_xp : entry.xp;
  const displayName = entry.display_name || entry.name || 'Anonymous';
  const initials = displayName.slice(0, 2).toUpperCase();
  const isFounder = entry.is_founder;
  const isAdmin = entry.is_admin;
  // Show verified badge for founders, verified users, or admins
  const showVerifiedBadge = entry.is_verified || isFounder || isAdmin;

  return (
    <Card className={cn(
      "transition-all duration-200 hover:scale-[1.02]",
      (entry.rank && entry.rank <= 3 || isFounder) && getRankBgClass(entry.rank || 0, isFounder),
      isCurrentUser && "ring-2 ring-primary",
      isFounder && "ring-2 ring-blue-500"
    )}>
      <CardContent className="flex items-center gap-4 p-4">
        {/* Rank */}
        <div className="flex-shrink-0 w-8">
          {getRankIcon(entry.rank || 0, isFounder)}
        </div>

        {/* Avatar with country flag */}
        <div className="relative flex-shrink-0">
          <Avatar className="w-12 h-12 border-2 border-border">
            <AvatarImage src={entry.avatar_url || undefined} alt={displayName} />
            <AvatarFallback className="bg-primary/10 text-primary font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="absolute -bottom-1 -right-1 text-lg" title={entry.country_code?.toUpperCase()}>
            {getFlagEmoji(entry.country_code)}
          </span>
        </div>

        {/* User info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold truncate">{displayName}</h3>
            {showVerifiedBadge && <VerifiedBadge size="sm" />}
            {isFounder && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-500 font-medium">
                Founder
              </span>
            )}
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Lv.{entry.user_level}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
            {entry.streak_count > 0 && (
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-streak fill-streak" />
                {entry.streak_count}
              </span>
            )}
            {entry.current_level && (
              <span className="text-xs uppercase tracking-wide">{entry.current_level}</span>
            )}
          </div>
        </div>

        {/* XP */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <Star className="w-5 h-5 text-xp fill-xp" />
          <span className="font-bold text-lg">{xp.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};
