import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { StreakWidget } from '@/components/StreakWidget';
import { UserLevelBadge } from '@/components/UserLevelBadge';
import { AchievementsGrid } from '@/components/AchievementsGrid';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Trophy, Target, Star, Flame, BookOpen, Settings, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedContainers';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { MagneticButton, BouncingIcon } from '@/components/animations/MagneticButton';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import { LottieAnimation } from '@/components/animations/LottieAnimation';
import level1Banner from '@/assets/level1-banner.json';

const getFlagEmoji = (countryCode: string | null) => {
  if (!countryCode) return '🌍';
  const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const Profile = () => {
  const navigate = useNavigate();
  const { profile, signOut, isAdmin } = useAuth();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showLevelDialog, setShowLevelDialog] = useState(false);
  
  const showVerifiedBadge = profile?.is_verified || profile?.is_founder || isAdmin;
  const currentLevel = profile?.user_level || 1;
  const currentXP = profile?.xp || 0;
  const xpPerLevel = 500;
  const xpForCurrentLevel = (currentLevel - 1) * xpPerLevel;
  const xpForNextLevel = currentLevel * xpPerLevel;
  const xpInCurrentLevel = currentXP - xpForCurrentLevel;
  const progressPercent = Math.min((xpInCurrentLevel / xpPerLevel) * 100, 100);
  const xpNeeded = xpForNextLevel - currentXP;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header showBack />

      <main className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        <FadeUp delay={0}>
          <Card className="overflow-hidden relative cursor-pointer group" onClick={() => setShowLevelDialog(true)}>
            <div className="absolute inset-0 z-0 opacity-40 overflow-hidden transition-opacity group-hover:opacity-50">
              <LottieAnimation animationData={level1Banner} loop={true} autoplay={true} className="w-full h-full scale-150" style={{ background: 'transparent' }} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none z-0" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start gap-4">
                <motion.div className="relative flex-shrink-0" initial={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}>
                  <Avatar className="w-20 h-20 border-4 border-primary/20">
                    <AvatarImage src={profile?.avatar_url || ''} alt="User avatar" />
                    <AvatarFallback className="bg-gradient-primary text-3xl font-bold text-primary-foreground">
                      {profile?.display_name?.charAt(0) || profile?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <span className="absolute -bottom-1 -right-1 text-2xl">{getFlagEmoji(profile?.country_code || null)}</span>
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">{profile?.display_name || profile?.name || 'Learner'}</h2>
                    {showVerifiedBadge && <VerifiedBadge size="md" />}
                  </div>
                  <p className="text-muted-foreground text-sm">{profile?.email}</p>
                  <div className="mt-3">
                    <UserLevelBadge level={profile?.user_level || 1} xp={profile?.xp || 0} size="sm" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-3 gap-3">
            <Card className="text-center p-4">
              <BouncingIcon><Star className="w-6 h-6 text-xp mx-auto mb-2" /></BouncingIcon>
              <div className="text-2xl font-bold"><AnimatedCounter value={profile?.xp || 0} /></div>
              <p className="text-xs text-muted-foreground">Total XP</p>
            </Card>
            <Card className="text-center p-4">
              <BouncingIcon><Flame className="w-6 h-6 text-streak mx-auto mb-2" /></BouncingIcon>
              <div className="text-2xl font-bold"><AnimatedCounter value={profile?.streak_count || 0} /></div>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </Card>
            <Card className="text-center p-4">
              <BouncingIcon><BookOpen className="w-6 h-6 text-primary mx-auto mb-2" /></BouncingIcon>
              <div className="text-2xl font-bold"><AnimatedCounter value={profile?.weekly_xp || 0} /></div>
              <p className="text-xs text-muted-foreground">Weekly XP</p>
            </Card>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <StaggerContainer className="grid grid-cols-3 gap-3">
            <StaggerItem>
              <MagneticButton className="w-full">
                <Button variant="outline" className="h-auto py-4 flex-col gap-2 w-full" onClick={() => navigate('/leaderboard')}>
                  <BouncingIcon><Trophy className="w-6 h-6 text-xp" /></BouncingIcon>
                  <span className="text-xs">Leaderboard</span>
                </Button>
              </MagneticButton>
            </StaggerItem>
            <StaggerItem>
              <MagneticButton className="w-full">
                <Button variant="outline" className="h-auto py-4 flex-col gap-2 w-full" onClick={() => navigate('/challenges')}>
                  <BouncingIcon><Target className="w-6 h-6 text-primary" /></BouncingIcon>
                  <span className="text-xs">Challenges</span>
                </Button>
              </MagneticButton>
            </StaggerItem>
            <StaggerItem>
              <MagneticButton className="w-full">
                <Button variant="outline" className="h-auto py-4 flex-col gap-2 w-full" onClick={() => navigate('/settings')}>
                  <BouncingIcon><Settings className="w-6 h-6 text-muted-foreground" /></BouncingIcon>
                  <span className="text-xs">Settings</span>
                </Button>
              </MagneticButton>
            </StaggerItem>
          </StaggerContainer>
        </FadeUp>

        <FadeUp delay={0.2}>
          <StreakWidget currentStreak={profile?.streak_count || 0} lastStudyDate={profile?.last_study_date || null} />
        </FadeUp>

        <FadeUp delay={0.25}><AchievementsGrid /></FadeUp>

        <FadeUp delay={0.3}>
          <Button variant="outline" className="w-full" onClick={signOut}>Sign Out</Button>
        </FadeUp>
      </main>

      <Dialog open={showLevelDialog} onOpenChange={setShowLevelDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />Level Progress
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-4xl font-bold text-primary-foreground mb-3">{currentLevel}</div>
              <h3 className="text-xl font-bold">Level {currentLevel}</h3>
              <p className="text-muted-foreground text-sm">{currentLevel === 1 ? 'Beginner' : currentLevel <= 3 ? 'Intermediate' : currentLevel <= 5 ? 'Advanced' : 'Expert'}</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress to next level</span>
                <span className="font-bold text-primary">{Math.round(progressPercent)}%</span>
              </div>
              <Progress value={progressPercent} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{xpForCurrentLevel} XP</span>
                <span>{xpForNextLevel} XP</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Star className="w-5 h-5 text-xp mx-auto mb-1" />
                <div className="text-lg font-bold">{currentXP}</div>
                <div className="text-xs text-muted-foreground">Total XP</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-lg font-bold">{xpNeeded}</div>
                <div className="text-xs text-muted-foreground">XP to Next Level</div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              {xpNeeded <= 100 ? '🔥 You\'re so close to the next level!' : xpNeeded <= 250 ? '💪 Keep going! Halfway to the next level' : '📚 Complete more lessons to earn XP'}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
