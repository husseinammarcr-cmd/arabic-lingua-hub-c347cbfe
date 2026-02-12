import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  User,
  Shield,
  Bell,
  Lock,
  Trash2,
  LogOut,
  Save,
  Eye,
  EyeOff,
  Monitor,
  Mail,
  BookOpen,
  Trophy,
  Megaphone,
  Globe,
  ChartBar,
  AlertTriangle,
  Check,
  Loader2,
} from 'lucide-react';
import Header from '@/components/Header';
import { FadeUp } from '@/components/animations/AnimatedContainers';
import AuthBackground from '@/components/animations/AuthBackground';
import { useToast } from '@/hooks/use-toast';

// Cartoon avatars are served from /public for a stable URL (no hashed build paths)
const CARTOON_AVATARS = [
  { id: 1, src: '/avatars/avatar-1.png', name: 'طالب' },
  { id: 2, src: '/avatars/avatar-2.png', name: 'بومة' },
  { id: 3, src: '/avatars/avatar-3.png', name: 'قطة' },
  { id: 4, src: '/avatars/avatar-4.png', name: 'روبوت' },
  { id: 5, src: '/avatars/avatar-5.png', name: 'شمس' },
  { id: 6, src: '/avatars/avatar-6.png', name: 'باندا' },
  { id: 7, src: '/avatars/avatar-7.png', name: 'ثعلب' },
  { id: 8, src: '/avatars/avatar-8.png', name: 'بطريق' },
  { id: 9, src: '/avatars/avatar-9.png', name: 'رائد فضاء' },
  { id: 10, src: '/avatars/avatar-10.png', name: 'أسد' },
];

const Settings = () => {
  const navigate = useNavigate();
  const { user, profile, signOut, refreshProfile } = useAuth();
  const { toast } = useToast();

  // Account Info State
  const [displayName, setDisplayName] = useState(profile?.display_name || profile?.name || '');
  const [username, setUsername] = useState(profile?.username || '');
  const [selectedAvatar, setSelectedAvatar] = useState<string>(profile?.avatar_url || CARTOON_AVATARS[0].src);
  const [isSavingAccount, setIsSavingAccount] = useState(false);

  // Security State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Notifications State
  const [notifyCourseUpdates, setNotifyCourseUpdates] = useState(profile?.notify_course_updates ?? true);
  const [notifyReminders, setNotifyReminders] = useState(profile?.notify_reminders ?? true);
  const [notifyAchievements, setNotifyAchievements] = useState(profile?.notify_achievements ?? true);
  const [notifyAnnouncements, setNotifyAnnouncements] = useState(profile?.notify_announcements ?? true);

  // Privacy State
  const [privacyShowProfile, setPrivacyShowProfile] = useState(profile?.privacy_show_profile ?? true);
  const [privacyShowProgress, setPrivacyShowProgress] = useState(profile?.privacy_show_progress ?? true);
  const [privacyMarketingEmails, setPrivacyMarketingEmails] = useState(profile?.privacy_marketing_emails ?? false);

  // Danger Zone State
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  // Update state when profile loads
  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name || profile.name || '');
      setUsername(profile.username || '');
      // Check if current avatar is one of our cartoon avatars or set default
      const isCartoonAvatar = CARTOON_AVATARS.some(a => profile.avatar_url === a.src);
      setSelectedAvatar(isCartoonAvatar ? (profile.avatar_url as string) : CARTOON_AVATARS[0].src);
      setNotifyCourseUpdates(profile.notify_course_updates ?? true);
      setNotifyReminders(profile.notify_reminders ?? true);
      setNotifyAchievements(profile.notify_achievements ?? true);
      setNotifyAnnouncements(profile.notify_announcements ?? true);
      setPrivacyShowProfile(profile.privacy_show_profile ?? true);
      setPrivacyShowProgress(profile.privacy_show_progress ?? true);
      setPrivacyMarketingEmails(profile.privacy_marketing_emails ?? false);
    }
  }, [profile]);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  const handleSaveAccountInfo = async () => {
    setIsSavingAccount(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: displayName,
          username: username || null,
          avatar_url: selectedAvatar,
        })
        .eq('id', user?.id);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: 'خطأ',
            description: 'اسم المستخدم مستخدم بالفعل',
            variant: 'destructive',
          });
          return;
        }
        throw error;
      }

      await refreshProfile?.();
      
      toast({
        title: 'تم الحفظ',
        description: 'تم حفظ معلومات الحساب بنجاح',
      });
    } catch (error: any) {
      console.error('Error saving account info:', error);
      toast({
        title: 'خطأ',
        description: 'فشل حفظ المعلومات',
        variant: 'destructive',
      });
    } finally {
      setIsSavingAccount(false);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      toast({
        title: 'خطأ',
        description: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: 'خطأ',
        description: 'كلمات المرور غير متطابقة',
        variant: 'destructive',
      });
      return;
    }

    setIsChangingPassword(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');

      toast({
        title: 'تم التغيير',
        description: 'تم تغيير كلمة المرور بنجاح',
      });
    } catch (error: any) {
      console.error('Error changing password:', error);
      toast({
        title: 'خطأ',
        description: error.message || 'فشل تغيير كلمة المرور',
        variant: 'destructive',
      });
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleLogoutAllDevices = async () => {
    try {
      await supabase.auth.signOut({ scope: 'global' });
      toast({
        title: 'تم',
        description: 'تم تسجيل الخروج من جميع الأجهزة',
      });
      navigate('/auth');
    } catch (error: any) {
      toast({
        title: 'خطأ',
        description: 'فشل تسجيل الخروج',
        variant: 'destructive',
      });
    }
  };

  const handleSaveNotifications = async () => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          notify_course_updates: notifyCourseUpdates,
          notify_reminders: notifyReminders,
          notify_achievements: notifyAchievements,
          notify_announcements: notifyAnnouncements,
        })
        .eq('id', user?.id);

      if (error) throw error;

      toast({
        title: 'تم الحفظ',
        description: 'تم حفظ إعدادات الإشعارات',
      });
    } catch (error) {
      toast({
        title: 'خطأ',
        description: 'فشل حفظ الإعدادات',
        variant: 'destructive',
      });
    }
  };

  const handleSavePrivacy = async () => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          privacy_show_profile: privacyShowProfile,
          privacy_show_progress: privacyShowProgress,
          privacy_marketing_emails: privacyMarketingEmails,
        })
        .eq('id', user?.id);

      if (error) throw error;

      toast({
        title: 'تم الحفظ',
        description: 'تم حفظ إعدادات الخصوصية',
      });
    } catch (error) {
      toast({
        title: 'خطأ',
        description: 'فشل حفظ الإعدادات',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== 'حذف حسابي') {
      toast({
        title: 'خطأ',
        description: 'يرجى كتابة "حذف حسابي" للتأكيد',
        variant: 'destructive',
      });
      return;
    }

    setIsDeleting(true);
    try {
      // Delete user data from profiles (cascade will handle related data)
      const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', user?.id);

      if (profileError) throw profileError;

      // Sign out
      await signOut();
      
      toast({
        title: 'تم الحذف',
        description: 'تم حذف حسابك بنجاح',
      });
      
      navigate('/');
    } catch (error: any) {
      console.error('Error deleting account:', error);
      toast({
        title: 'خطأ',
        description: 'فشل حذف الحساب',
        variant: 'destructive',
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const formatLastLogin = (date: string | null) => {
    if (!date) return 'غير متوفر';
    return new Date(date).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden" dir="rtl">
      <AuthBackground />
      <Header showBack />

      <main className="container mx-auto px-4 py-6 max-w-2xl space-y-6 relative z-10">
        <FadeUp>
          <h1 className="text-3xl font-bold mb-6">الإعدادات</h1>
        </FadeUp>

        {/* Account Information */}
        <FadeUp delay={0.1}>
          <Card className="overflow-hidden backdrop-blur-sm bg-card/95">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="w-5 h-5 text-primary" />
                </div>
                معلومات الحساب
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Selection */}
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-24 h-24 border-4 border-primary/20">
                  <AvatarImage src={selectedAvatar} />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                    {displayName?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm text-muted-foreground">اختر صورة رمزية</p>
                
                {/* Avatar Grid */}
                <div className="grid grid-cols-5 gap-3 w-full max-w-md">
                  {CARTOON_AVATARS.map((avatar) => (
                    <motion.button
                      key={avatar.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedAvatar(avatar.src)}
                      className={`relative rounded-full overflow-hidden border-2 transition-all ${
                        selectedAvatar === avatar.src
                          ? 'border-primary ring-2 ring-primary/30'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.name}
                        className="w-full aspect-square object-cover"
                      />
                      {selectedAvatar === avatar.src && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <Check className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="displayName">الاسم الكامل</Label>
                <Input
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username">اسم المستخدم (اختياري)</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                  placeholder="username"
                  dir="ltr"
                  className="text-left"
                />
                <p className="text-xs text-muted-foreground">
                  أحرف إنجليزية صغيرة وأرقام وشرطة سفلية فقط
                </p>
              </div>

              {/* Email (readonly) */}
              <div className="space-y-2">
                <Label>البريد الإلكتروني</Label>
                <Input
                  value={profile?.email || ''}
                  disabled
                  className="bg-muted"
                />
              </div>

              <Button
                onClick={handleSaveAccountInfo}
                disabled={isSavingAccount}
                className="w-full"
              >
                {isSavingAccount ? (
                  <Loader2 className="w-4 h-4 animate-spin ml-2" />
                ) : (
                  <Save className="w-4 h-4 ml-2" />
                )}
                حفظ التغييرات
              </Button>
            </CardContent>
          </Card>
        </FadeUp>

        {/* Security */}
        <FadeUp delay={0.2}>
          <Card className="overflow-hidden backdrop-blur-sm bg-card/95">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <Shield className="w-5 h-5 text-amber-500" />
                </div>
                الأمان
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Change Password */}
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  تغيير كلمة المرور
                </h4>

                <div className="space-y-2">
                  <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>

                <Button
                  onClick={handleChangePassword}
                  disabled={isChangingPassword || !newPassword || !confirmPassword}
                  variant="outline"
                  className="w-full"
                >
                  {isChangingPassword ? (
                    <Loader2 className="w-4 h-4 animate-spin ml-2" />
                  ) : (
                    <Lock className="w-4 h-4 ml-2" />
                  )}
                  تغيير كلمة المرور
                </Button>
              </div>

              <Separator />

              {/* Logout All Devices */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  تسجيل الخروج من جميع الأجهزة
                </h4>
                <p className="text-sm text-muted-foreground">
                  سيتم تسجيل خروجك من جميع الأجهزة المتصلة بحسابك
                </p>
                <Button
                  onClick={handleLogoutAllDevices}
                  variant="outline"
                  className="w-full"
                >
                  <LogOut className="w-4 h-4 ml-2" />
                  تسجيل الخروج من الكل
                </Button>
              </div>

              <Separator />

              {/* Last Login */}
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">آخر تسجيل دخول</p>
                <p className="font-medium">{formatLastLogin(profile?.last_login_at || null)}</p>
              </div>
            </CardContent>
          </Card>
        </FadeUp>

        {/* Notifications */}
        <FadeUp delay={0.3}>
          <Card className="overflow-hidden backdrop-blur-sm bg-card/95">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Bell className="w-5 h-5 text-blue-500" />
                </div>
                الإشعارات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">تحديثات الدورات</p>
                    <p className="text-sm text-muted-foreground">إشعارات عند إضافة دروس جديدة</p>
                  </div>
                </div>
                <Switch
                  checked={notifyCourseUpdates}
                  onCheckedChange={setNotifyCourseUpdates}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">تذكيرات التعلم</p>
                    <p className="text-sm text-muted-foreground">تذكيرات يومية للدراسة</p>
                  </div>
                </div>
                <Switch
                  checked={notifyReminders}
                  onCheckedChange={setNotifyReminders}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">إشعارات الإنجازات</p>
                    <p className="text-sm text-muted-foreground">عند حصولك على شارة جديدة</p>
                  </div>
                </div>
                <Switch
                  checked={notifyAchievements}
                  onCheckedChange={setNotifyAchievements}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Megaphone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">إعلانات المنصة</p>
                    <p className="text-sm text-muted-foreground">أخبار وتحديثات المنصة</p>
                  </div>
                </div>
                <Switch
                  checked={notifyAnnouncements}
                  onCheckedChange={setNotifyAnnouncements}
                />
              </div>

              <Button
                onClick={handleSaveNotifications}
                variant="outline"
                className="w-full mt-4"
              >
                <Save className="w-4 h-4 ml-2" />
                حفظ إعدادات الإشعارات
              </Button>
            </CardContent>
          </Card>
        </FadeUp>

        {/* Privacy */}
        <FadeUp delay={0.4}>
          <Card className="overflow-hidden backdrop-blur-sm bg-card/95">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Lock className="w-5 h-5 text-green-500" />
                </div>
                الخصوصية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">إظهار الملف الشخصي علنياً</p>
                    <p className="text-sm text-muted-foreground">يمكن للآخرين رؤية ملفك الشخصي</p>
                  </div>
                </div>
                <Switch
                  checked={privacyShowProfile}
                  onCheckedChange={setPrivacyShowProfile}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <ChartBar className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">الظهور في قائمة المتصدرين</p>
                    <p className="text-sm text-muted-foreground">إظهار تقدمك في لوحة المتصدرين</p>
                  </div>
                </div>
                <Switch
                  checked={privacyShowProgress}
                  onCheckedChange={setPrivacyShowProgress}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">رسائل التسويق والتعليم</p>
                    <p className="text-sm text-muted-foreground">استلام عروض ونصائح تعليمية</p>
                  </div>
                </div>
                <Switch
                  checked={privacyMarketingEmails}
                  onCheckedChange={setPrivacyMarketingEmails}
                />
              </div>

              <Button
                onClick={handleSavePrivacy}
                variant="outline"
                className="w-full mt-4"
              >
                <Save className="w-4 h-4 ml-2" />
                حفظ إعدادات الخصوصية
              </Button>
            </CardContent>
          </Card>
        </FadeUp>

        {/* Danger Zone */}
        <FadeUp delay={0.5}>
          <Card className="overflow-hidden border-destructive/30 backdrop-blur-sm bg-card/95">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl text-destructive">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                منطقة الخطر
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Logout */}
              <Button
                onClick={signOut}
                variant="outline"
                className="w-full"
              >
                <LogOut className="w-4 h-4 ml-2" />
                تسجيل الخروج
              </Button>

              {/* Delete Account */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    className="w-full"
                  >
                    <Trash2 className="w-4 h-4 ml-2" />
                    حذف الحساب نهائياً
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent dir="rtl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2 text-destructive">
                      <AlertTriangle className="w-5 h-5" />
                      تأكيد حذف الحساب
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-right space-y-3">
                      <p>
                        هل أنت متأكد من حذف حسابك نهائياً؟ لا يمكن التراجع عن هذا الإجراء.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>سيتم حذف جميع بياناتك الشخصية</li>
                        <li>سيتم فقدان جميع تقدمك في الدورات</li>
                        <li>سيتم إلغاء جميع إنجازاتك وشاراتك</li>
                        <li>لا يمكن استعادة الحساب بعد الحذف</li>
                      </ul>
                      <div className="pt-3">
                        <Label htmlFor="deleteConfirm" className="text-foreground">
                          اكتب "حذف حسابي" للتأكيد
                        </Label>
                        <Input
                          id="deleteConfirm"
                          value={deleteConfirmText}
                          onChange={(e) => setDeleteConfirmText(e.target.value)}
                          placeholder="حذف حسابي"
                          className="mt-2"
                        />
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="gap-2 flex-row-reverse sm:flex-row-reverse">
                    <AlertDialogCancel>إلغاء</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteAccount}
                      disabled={isDeleting || deleteConfirmText !== 'حذف حسابي'}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      {isDeleting ? (
                        <Loader2 className="w-4 h-4 animate-spin ml-2" />
                      ) : (
                        <Trash2 className="w-4 h-4 ml-2" />
                      )}
                      حذف الحساب
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <p className="text-xs text-muted-foreground text-center">
                حذف الحساب نهائي ولا يمكن التراجع عنه
              </p>
            </CardContent>
          </Card>
        </FadeUp>
      </main>
    </div>
  );
};

export default Settings;
