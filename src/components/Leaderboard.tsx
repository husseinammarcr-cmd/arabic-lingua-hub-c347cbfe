import { useState } from 'react';
import { Globe, MapPin, BookOpen, Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeaderboardCard } from './LeaderboardCard';
import { useLeaderboard, useUserRank } from '@/hooks/useLeaderboard';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

type TimeFrame = 'all_time' | 'weekly' | 'monthly';
type LeaderboardType = 'global' | 'local' | 'level';

const timeFrameLabels: Record<TimeFrame, string> = {
  all_time: 'كل الأوقات',
  weekly: 'هذا الأسبوع',
  monthly: 'هذا الشهر'
};

const courseLevels = ['A1', 'A2', 'B1', 'B2'];

export const Leaderboard = () => {
  const { user, profile } = useAuth();
  const [type, setType] = useState<LeaderboardType>('global');
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('weekly');
  const [selectedLevel, setSelectedLevel] = useState<string>('A1');

  const { data: leaderboard, isLoading } = useLeaderboard(
    type,
    timeFrame,
    profile?.country_code || undefined,
    type === 'level' ? selectedLevel : undefined,
    50
  );

  const { data: userRank } = useUserRank(user?.id, type, timeFrame, profile?.country_code || undefined);

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            🏆 لوحة المتصدرين
          </CardTitle>
          
          <Select value={timeFrame} onValueChange={(v) => setTimeFrame(v as TimeFrame)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(timeFrameLabels).map(([key, label]) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* User's rank */}
        {userRank && (
          <div className="mt-2 text-sm text-muted-foreground">
            ترتيبك: <span className="font-bold text-primary">#{userRank}</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <Tabs value={type} onValueChange={(v) => setType(v as LeaderboardType)}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="global" className="flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">عالمي</span>
            </TabsTrigger>
            <TabsTrigger value="local" className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">محلي</span>
            </TabsTrigger>
            <TabsTrigger value="level" className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">المستوى</span>
            </TabsTrigger>
          </TabsList>

          {type === 'level' && (
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {courseLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    selectedLevel === level
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  )}
                >
                  {level}
                </button>
              ))}
            </div>
          )}

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="space-y-2">
              {leaderboard?.map((entry) => (
                <LeaderboardCard
                  key={entry.id}
                  entry={entry}
                  timeFrame={timeFrame}
                  isCurrentUser={entry.id === user?.id}
                />
              ))}

              {leaderboard?.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  لا توجد بيانات متاحة
                </div>
              )}
            </div>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};
