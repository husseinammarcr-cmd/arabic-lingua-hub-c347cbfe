import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AchievementBadge } from './AchievementBadge';
import { useAchievements, useUserAchievements } from '@/hooks/useAchievements';

export const AchievementsGrid = () => {
  const { data: achievements, isLoading: loadingAchievements } = useAchievements();
  const { data: userAchievements, isLoading: loadingUserAchievements } = useUserAchievements();

  const isLoading = loadingAchievements || loadingUserAchievements;

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  const earnedAchievementIds = new Set(userAchievements?.map(ua => ua.achievement_id));
  const earnedCount = userAchievements?.length || 0;
  const totalCount = achievements?.length || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            🏅 الإنجازات
          </span>
          <span className="text-sm font-normal text-muted-foreground">
            {earnedCount} / {totalCount}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {achievements?.map(achievement => {
            const userAchievement = userAchievements?.find(ua => ua.achievement_id === achievement.id);
            return (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                earned={earnedAchievementIds.has(achievement.id)}
                earnedAt={userAchievement?.earned_at}
                size="md"
              />
            );
          })}
        </div>

        {achievements?.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            لا توجد إنجازات متاحة حالياً
          </div>
        )}
      </CardContent>
    </Card>
  );
};
