import { Flame, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StreakWidgetProps {
  currentStreak: number;
  lastStudyDate?: string | null;
  className?: string;
}

export const StreakWidget = ({
  currentStreak,
  lastStudyDate,
  className
}: StreakWidgetProps) => {
  const today = new Date().toISOString().split('T')[0];
  const isActiveToday = lastStudyDate === today;

  // Generate last 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return {
      date: date.toISOString().split('T')[0],
      dayName: date.toLocaleDateString('ar-SA', { weekday: 'short' }),
      isToday: i === 6,
      // Simple logic: mark as active if within streak range
      isActive: lastStudyDate && i >= 7 - currentStreak
    };
  });

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-3">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            currentStreak > 0 ? "bg-gradient-streak" : "bg-muted"
          )}>
            <Flame className={cn(
              "w-6 h-6",
              currentStreak > 0 ? "text-streak-foreground animate-streak-flame" : "text-muted-foreground"
            )} />
          </div>
          <div>
            <span className="text-2xl font-bold">{currentStreak}</span>
            <span className="text-muted-foreground text-base mr-2">يوم متتالي</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Week calendar */}
        <div className="flex justify-between gap-2">
          {days.map((day) => (
            <div
              key={day.date}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-xs text-muted-foreground">
                {day.dayName}
              </span>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                day.isActive && "bg-gradient-streak",
                !day.isActive && day.isToday && "border-2 border-primary",
                !day.isActive && !day.isToday && "bg-muted"
              )}>
                {day.isActive ? (
                  <Flame className="w-4 h-4 text-streak-foreground" />
                ) : (
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Motivation text */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          {!isActiveToday && currentStreak > 0 && (
            "تعلّم اليوم للحفاظ على سلسلتك! 🔥"
          )}
          {isActiveToday && (
            "أحسنت! واصل التعلم غداً 💪"
          )}
          {currentStreak === 0 && (
            "ابدأ سلسلة جديدة اليوم! 🌟"
          )}
        </p>
      </CardContent>
    </Card>
  );
};
