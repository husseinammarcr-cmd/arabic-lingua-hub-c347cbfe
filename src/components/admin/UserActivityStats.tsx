import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, TrendingUp, TrendingDown, Users, UserCheck, CalendarDays, BarChart3, Eye } from 'lucide-react';
import { format, subDays, eachDayOfInterval, startOfDay, differenceInDays } from 'date-fns';
import { ar } from 'date-fns/locale';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
} from 'recharts';

const chartConfig: ChartConfig = {
  activeUsers: {
    label: 'مستخدمين نشطين',
    color: 'hsl(var(--primary))',
  },
  newUsers: {
    label: 'مستخدمين جدد',
    color: 'hsl(var(--chart-2, 160 60% 45%))',
  },
  returningUsers: {
    label: 'مستخدمين عائدين',
    color: 'hsl(var(--chart-3, 30 80% 55%))',
  },
  visits: {
    label: 'عدد الزيارات',
    color: 'hsl(var(--chart-4, 280 60% 55%))',
  },
};

const DAYS_TO_SHOW = 30;

const UserActivityStats = () => {
  // Fetch activity logs for last 30 days
  const { data: activityLogs, isLoading: logsLoading } = useQuery({
    queryKey: ['admin_activity_logs_daily'],
    queryFn: async () => {
      const startDate = format(subDays(new Date(), DAYS_TO_SHOW), 'yyyy-MM-dd');
      const { data, error } = await supabase
        .from('user_activity_log')
        .select('user_id, activity_date, visit_count')
        .gte('activity_date', startDate)
        .order('activity_date', { ascending: true });

      if (error) throw error;
      return data;
    },
    refetchInterval: 60000,
  });

  // Fetch user creation dates
  const { data: userProfiles, isLoading: profilesLoading } = useQuery({
    queryKey: ['admin_user_profiles_activity'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, created_at');

      if (error) throw error;
      return data;
    },
    refetchInterval: 60000,
  });

  const isLoading = logsLoading || profilesLoading;

  const analytics = useMemo(() => {
    if (!activityLogs || !userProfiles) return null;

    const today = startOfDay(new Date());
    const dateRange = eachDayOfInterval({
      start: subDays(today, DAYS_TO_SHOW - 1),
      end: today,
    });

    // Map of user creation dates
    const userCreatedMap = new Map<string, Date>();
    userProfiles.forEach((p) => {
      if (p.created_at) {
        userCreatedMap.set(p.id, startOfDay(new Date(p.created_at)));
      }
    });

    // Group activity by date
    const activityByDate = new Map<string, Set<string>>();
    const visitsByDate = new Map<string, number>();
    activityLogs.forEach((log) => {
      const dateKey = log.activity_date;
      if (!activityByDate.has(dateKey)) {
        activityByDate.set(dateKey, new Set());
      }
      activityByDate.get(dateKey)!.add(log.user_id);
      visitsByDate.set(dateKey, (visitsByDate.get(dateKey) || 0) + (log.visit_count || 1));
    });

    // Build daily chart data (day by day)
    const dailyData = dateRange.map((date) => {
      const dateKey = format(date, 'yyyy-MM-dd');
      const activeUserIds = activityByDate.get(dateKey) || new Set();

      let newCount = 0;
      let returningCount = 0;

      activeUserIds.forEach((uid) => {
        const createdAt = userCreatedMap.get(uid);
        if (createdAt && differenceInDays(date, createdAt) <= 1) {
          newCount++;
        } else {
          returningCount++;
        }
      });

      return {
        date: format(date, 'yyyy-MM-dd'),
        dateLabel: format(date, 'dd MMM', { locale: ar }),
        dayName: format(date, 'EEEE', { locale: ar }),
        activeUsers: activeUserIds.size,
        newUsers: newCount,
        returningUsers: returningCount,
        visits: visitsByDate.get(dateKey) || 0,
      };
    });

    // Day-by-day retention: for each day, what % of previous day's users came back
    const dailyRetention = dateRange.slice(1).map((date, i) => {
      const todayKey = format(date, 'yyyy-MM-dd');
      const yesterdayKey = format(dateRange[i], 'yyyy-MM-dd');
      const todayUsers = activityByDate.get(todayKey) || new Set();
      const yesterdayUsers = activityByDate.get(yesterdayKey) || new Set();

      let retained = 0;
      yesterdayUsers.forEach((uid) => {
        if (todayUsers.has(uid)) retained++;
      });

      const rate = yesterdayUsers.size > 0
        ? Math.round((retained / yesterdayUsers.size) * 100)
        : 0;

      return {
        dateLabel: format(date, 'dd MMM', { locale: ar }),
        rate,
        retained,
        previousDayUsers: yesterdayUsers.size,
      };
    });

    // Summary stats
    const todayKey = format(today, 'yyyy-MM-dd');
    const todayActive = activityByDate.get(todayKey)?.size || 0;
    const todayVisits = visitsByDate.get(todayKey) || 0;
    const yesterdayKey = format(subDays(today, 1), 'yyyy-MM-dd');
    const yesterdayActive = activityByDate.get(yesterdayKey)?.size || 0;
    const trend = todayActive - yesterdayActive;

    const totalActiveUsers = new Set(activityLogs.map((l) => l.user_id)).size;
    const totalDailyActive = dailyData.reduce((sum, d) => sum + d.activeUsers, 0);
    const avgDailyActive = Math.round(totalDailyActive / DAYS_TO_SHOW);

    // Average retention rate
    const retentionRates = dailyRetention.filter((d) => d.previousDayUsers > 0);
    const avgRetention = retentionRates.length > 0
      ? Math.round(retentionRates.reduce((sum, d) => sum + d.rate, 0) / retentionRates.length)
      : 0;

    // Top active users (by days count)
    const userDaysActive = new Map<string, number>();
    activityLogs.forEach((log) => {
      userDaysActive.set(log.user_id, (userDaysActive.get(log.user_id) || 0) + 1);
    });

    const topUsers = Array.from(userDaysActive.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([userId, daysCount]) => ({ userId, daysCount }));

    return {
      dailyData,
      dailyRetention,
      todayActive,
      todayVisits,
      yesterdayActive,
      avgDailyActive,
      avgRetention,
      totalActiveUsers,
      totalUsers: userProfiles.length,
      trend,
      topUsers,
    };
  }, [activityLogs, userProfiles]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>لا توجد بيانات نشاط حتى الآن</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">تحليلات النشاط اليومي (آخر {DAYS_TO_SHOW} يوم)</h3>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">نشطين اليوم</p>
                <p className="text-2xl font-bold">{analytics.todayActive}</p>
              </div>
              <div className={`flex items-center gap-1 text-sm ${analytics.trend >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {analytics.trend >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {analytics.trend >= 0 ? '+' : ''}{analytics.trend}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center gap-3">
              <Eye className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">زيارات اليوم</p>
                <p className="text-2xl font-bold">{analytics.todayVisits}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">معدل يومي</p>
                <p className="text-2xl font-bold">{analytics.avgDailyActive}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center gap-3">
              <UserCheck className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">نشطين ({DAYS_TO_SHOW} يوم)</p>
                <p className="text-2xl font-bold">{analytics.totalActiveUsers}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-8 h-8 text-accent-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">معدل العودة</p>
                <p className="text-2xl font-bold">{analytics.avgRetention}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Active Users */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">المستخدمين النشطين يوم بيوم</CardTitle>
            <CardDescription>عدد المستخدمين الفريدين كل يوم</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px]">
              <AreaChart data={analytics.dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dateLabel" fontSize={11} interval={2} />
                <YAxis fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="activeUsers"
                  stroke="var(--color-activeUsers)"
                  fill="var(--color-activeUsers)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* New vs Returning Daily */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">جدد مقابل عائدين (يومياً)</CardTitle>
            <CardDescription>تفصيل يومي للمستخدمين الجدد والعائدين</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px]">
              <BarChart data={analytics.dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dateLabel" fontSize={11} interval={2} />
                <YAxis fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="newUsers" fill="var(--color-newUsers)" stackId="a" radius={[0, 0, 0, 0]} />
                <Bar dataKey="returningUsers" fill="var(--color-returningUsers)" stackId="a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Day-by-Day Retention & Top Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Retention Rate */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">معدل العودة اليومي</CardTitle>
            <CardDescription>نسبة المستخدمين الذين عادوا في اليوم التالي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-[350px] overflow-y-auto">
              {analytics.dailyRetention.slice(-14).reverse().map((item) => (
                <div key={item.dateLabel} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.dateLabel}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground text-xs">
                        {item.retained}/{item.previousDayUsers}
                      </span>
                      <Badge variant={item.rate >= 50 ? 'default' : item.rate >= 25 ? 'secondary' : 'outline'}>
                        {item.rate}%
                      </Badge>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Active Users */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">أكثر المستخدمين نشاطاً</CardTitle>
            <CardDescription>المستخدمون الأكثر تواجداً خلال {DAYS_TO_SHOW} يوم</CardDescription>
          </CardHeader>
          <CardContent>
            {analytics.topUsers.length > 0 ? (
              <div className="space-y-2">
                {analytics.topUsers.map((u, i) => (
                  <div key={u.userId} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${
                      i === 0 ? 'bg-primary text-primary-foreground' : i === 1 ? 'bg-muted-foreground text-background' : i === 2 ? 'bg-accent-foreground text-accent' : 'bg-muted text-muted-foreground'
                    }`}>
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {u.userId.substring(0, 8)}...
                      </p>
                    </div>
                    <Badge variant="secondary">
                      {u.daysCount} {u.daysCount === 1 ? 'يوم' : 'أيام'}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">لا توجد بيانات كافية</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserActivityStats;
