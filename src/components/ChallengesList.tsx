import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeCard } from './ChallengeCard';
import { useChallenges, useUserChallenges, useJoinChallenge } from '@/hooks/useChallenges';
import { useToast } from '@/hooks/use-toast';

export const ChallengesList = () => {
  const { data: challenges, isLoading: loadingChallenges } = useChallenges();
  const { data: userChallenges, isLoading: loadingUserChallenges } = useUserChallenges();
  const joinChallenge = useJoinChallenge();
  const { toast } = useToast();

  const handleJoin = async (challengeId: string) => {
    try {
      await joinChallenge.mutateAsync(challengeId);
      toast({
        title: "تم الانضمام!",
        description: "تم الانضمام للتحدي بنجاح",
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء الانضمام للتحدي",
        variant: "destructive",
      });
    }
  };

  const isLoading = loadingChallenges || loadingUserChallenges;

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  const getUserChallenge = (challengeId: string) => {
    return userChallenges?.find(uc => uc.challenge_id === challengeId);
  };

  // Group challenges by type
  const dailyChallenges = challenges?.filter(c => c.challenge_type === 'daily') || [];
  const weeklyChallenges = challenges?.filter(c => c.challenge_type === 'weekly') || [];
  const monthlyChallenges = challenges?.filter(c => c.challenge_type === 'monthly') || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🎯 التحديات
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Daily Challenges */}
        {dailyChallenges.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">تحديات يومية</h3>
            {dailyChallenges.map(challenge => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                userChallenge={getUserChallenge(challenge.id)}
                onJoin={() => handleJoin(challenge.id)}
                isJoining={joinChallenge.isPending}
              />
            ))}
          </div>
        )}

        {/* Weekly Challenges */}
        {weeklyChallenges.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">تحديات أسبوعية</h3>
            {weeklyChallenges.map(challenge => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                userChallenge={getUserChallenge(challenge.id)}
                onJoin={() => handleJoin(challenge.id)}
                isJoining={joinChallenge.isPending}
              />
            ))}
          </div>
        )}

        {/* Monthly Challenges */}
        {monthlyChallenges.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">تحديات شهرية</h3>
            {monthlyChallenges.map(challenge => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                userChallenge={getUserChallenge(challenge.id)}
                onJoin={() => handleJoin(challenge.id)}
                isJoining={joinChallenge.isPending}
              />
            ))}
          </div>
        )}

        {challenges?.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            لا توجد تحديات متاحة حالياً
          </div>
        )}
      </CardContent>
    </Card>
  );
};
