import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Bell, Users, Send, Loader2, FileText, Clock, MessageSquare, Mail, Trash2, Eye, EyeOff, Reply, Award, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { useSendNotification } from '@/hooks/useNotifications';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import Header from '@/components/Header';
import BlogManager from '@/components/admin/BlogManager';
import CertificatesManager from '@/components/admin/CertificatesManager';
import UserActivityStats from '@/components/admin/UserActivityStats';
import { formatDistanceToNow, format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading: authLoading } = useAuth();
  const sendNotification = useSendNotification();
  const queryClient = useQueryClient();

  // Notification form state
  const [senderName, setSenderName] = useState('Founder');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [targetType, setTargetType] = useState<'all' | 'specific' | 'level' | 'country'>('all');
  const [targetValue, setTargetValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // Reply dialog state
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState<{
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [isSendingReply, setIsSendingReply] = useState(false);

  // Fetch users for admin
  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['admin_users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, name, email, display_name, current_level, country_code, xp, user_level, last_active_at, created_at')
        .order('last_active_at', { ascending: false, nullsFirst: false })
        .limit(100);

      if (error) throw error;
      return data;
    },
    enabled: isAdmin,
    refetchInterval: 30000 // Refresh every 30 seconds
  });

  // Fetch contact messages
  const { data: contactMessages, isLoading: messagesLoading } = useQuery({
    queryKey: ['admin_contact_messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      return data;
    },
    enabled: isAdmin,
    refetchInterval: 30000
  });

  // Fetch stats
  const { data: stats } = useQuery({
    queryKey: ['admin_stats'],
    queryFn: async () => {
      const { count: usersCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      const { count: notificationsCount } = await supabase
        .from('notifications')
        .select('*', { count: 'exact', head: true });

      const { count: messagesCount } = await supabase
        .from('contact_messages')
        .select('*', { count: 'exact', head: true });

      const { count: unreadMessagesCount } = await supabase
        .from('contact_messages')
        .select('*', { count: 'exact', head: true })
        .eq('is_read', false);

      return {
        usersCount: usersCount || 0,
        notificationsCount: notificationsCount || 0,
        messagesCount: messagesCount || 0,
        unreadMessagesCount: unreadMessagesCount || 0
      };
    },
    enabled: isAdmin
  });

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/');
      toast.error('ليس لديك صلاحية الوصول لهذه الصفحة');
    }
  }, [user, isAdmin, authLoading, navigate]);

  const handleSendNotification = async () => {
    if (!title.trim() || !message.trim()) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    try {
      await sendNotification.mutateAsync({
        sender_name: senderName,
        title,
        message,
        target_type: targetType,
        target_value: targetType !== 'all' && targetType !== 'specific' ? targetValue : undefined,
        user_ids: targetType === 'specific' ? selectedUsers : undefined
      });

      toast.success('تم إرسال الإشعار بنجاح');
      setTitle('');
      setMessage('');
      setSelectedUsers([]);
    } catch (error) {
      toast.error('فشل في إرسال الإشعار');
    }
  };

  const handleMarkAsRead = async (messageId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ is_read: !currentStatus })
        .eq('id', messageId);

      if (error) throw error;
      queryClient.invalidateQueries({ queryKey: ['admin_contact_messages'] });
      queryClient.invalidateQueries({ queryKey: ['admin_stats'] });
      toast.success(currentStatus ? 'تم تحديد كغير مقروءة' : 'تم تحديد كمقروءة');
    } catch (error) {
      toast.error('فشل في تحديث حالة الرسالة');
    }
  };

  const handleDeleteMessage = async (messageId: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', messageId);

      if (error) throw error;
      queryClient.invalidateQueries({ queryKey: ['admin_contact_messages'] });
      queryClient.invalidateQueries({ queryKey: ['admin_stats'] });
      toast.success('تم حذف الرسالة');
    } catch (error) {
      toast.error('فشل في حذف الرسالة');
    }
  };

  const handleOpenReplyDialog = (msg: { id: string; name: string; email: string; subject: string; message: string }) => {
    setReplyingTo(msg);
    setReplyMessage('');
    setReplyDialogOpen(true);
  };

  const handleSendReply = async () => {
    if (!replyingTo || !replyMessage.trim()) {
      toast.error('يرجى كتابة رد');
      return;
    }

    setIsSendingReply(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-reply', {
        body: {
          messageId: replyingTo.id,
          recipientEmail: replyingTo.email,
          recipientName: replyingTo.name,
          originalSubject: replyingTo.subject,
          replyMessage: replyMessage.trim(),
        },
      });

      if (error) throw error;

      toast.success('تم إرسال الرد بنجاح');
      setReplyDialogOpen(false);
      setReplyingTo(null);
      setReplyMessage('');
      queryClient.invalidateQueries({ queryKey: ['admin_contact_messages'] });
      queryClient.invalidateQueries({ queryKey: ['admin_stats'] });
    } catch (error: any) {
      console.error('Error sending reply:', error);
      toast.error(error.message || 'فشل في إرسال الرد');
    } finally {
      setIsSendingReply(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header showBack showUserInfo />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">لوحة الإدارة</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Users className="w-10 h-10 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{stats?.usersCount || 0}</p>
                  <p className="text-sm text-muted-foreground">إجمالي المستخدمين</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Bell className="w-10 h-10 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{stats?.notificationsCount || 0}</p>
                  <p className="text-sm text-muted-foreground">إجمالي الإشعارات</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <MessageSquare className="w-10 h-10 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{stats?.messagesCount || 0}</p>
                  <p className="text-sm text-muted-foreground">رسائل التواصل</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Mail className="w-10 h-10 text-amber-500" />
                <div>
                  <p className="text-2xl font-bold">{stats?.unreadMessagesCount || 0}</p>
                  <p className="text-sm text-muted-foreground">رسائل غير مقروءة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              الرسائل
              {(stats?.unreadMessagesCount || 0) > 0 && (
                <Badge variant="destructive" className="mr-1 px-1.5 py-0.5 text-xs">
                  {stats?.unreadMessagesCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              الإشعارات
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              المستخدمين
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              المدونة
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              الشهادات
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              التحليلات
            </TabsTrigger>
          </TabsList>

          {/* Messages Tab */}
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>رسائل التواصل</CardTitle>
                <CardDescription>الرسائل الواردة من صفحة "تواصل معنا"</CardDescription>
              </CardHeader>
              <CardContent>
                {messagesLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                ) : contactMessages && contactMessages.length > 0 ? (
                  <div className="space-y-4">
                    {contactMessages.map((msg) => (
                      <div 
                        key={msg.id} 
                        className={`p-4 rounded-lg border ${msg.is_read ? 'bg-muted/30' : 'bg-primary/5 border-primary/20'}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{msg.name}</h4>
                              {!msg.is_read && (
                                <Badge variant="default" className="text-xs">جديد</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">
                              <a href={`mailto:${msg.email}`} className="hover:text-primary">
                                {msg.email}
                              </a>
                            </p>
                            <p className="font-medium text-primary mb-2">{msg.subject}</p>
                            <p className="text-sm text-foreground whitespace-pre-wrap">{msg.message}</p>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {format(new Date(msg.created_at), 'dd MMM yyyy - hh:mm a', { locale: ar })}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <Button
                              variant="default"
                              size="sm"
                              onClick={() => handleOpenReplyDialog({
                                id: msg.id,
                                name: msg.name,
                                email: msg.email,
                                subject: msg.subject,
                                message: msg.message,
                              })}
                              className="gap-1"
                            >
                              <Reply className="w-4 h-4" />
                              رد
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleMarkAsRead(msg.id, msg.is_read)}
                              title={msg.is_read ? 'تحديد كغير مقروءة' : 'تحديد كمقروءة'}
                            >
                              {msg.is_read ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteMessage(msg.id)}
                              className="text-destructive hover:text-destructive"
                              title="حذف الرسالة"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>لا توجد رسائل حتى الآن</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>إرسال إشعار</CardTitle>
                <CardDescription>أرسل إشعارات للمستخدمين</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>اسم المرسل</Label>
                    <Select value={senderName} onValueChange={setSenderName}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Founder">Founder (المؤسس)</SelectItem>
                        <SelectItem value="System">System (النظام)</SelectItem>
                        <SelectItem value="Support">Support (الدعم)</SelectItem>
                        <SelectItem value="LingoArab">LingoArab</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>الجمهور المستهدف</Label>
                    <Select value={targetType} onValueChange={(v) => setTargetType(v as typeof targetType)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">جميع المستخدمين</SelectItem>
                        <SelectItem value="specific">مستخدمين محددين</SelectItem>
                        <SelectItem value="level">حسب المستوى</SelectItem>
                        <SelectItem value="country">حسب البلد</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {targetType === 'level' && (
                  <div className="space-y-2">
                    <Label>المستوى</Label>
                    <Select value={targetValue} onValueChange={setTargetValue}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المستوى" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A1">A1</SelectItem>
                        <SelectItem value="A2">A2</SelectItem>
                        <SelectItem value="B1">B1</SelectItem>
                        <SelectItem value="B2">B2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {targetType === 'country' && (
                  <div className="space-y-2">
                    <Label>رمز البلد (مثال: SA, EG, US)</Label>
                    <Input 
                      value={targetValue} 
                      onChange={(e) => setTargetValue(e.target.value.toUpperCase())}
                      maxLength={2}
                      placeholder="SA"
                    />
                  </div>
                )}

                {targetType === 'specific' && (
                  <div className="space-y-2">
                    <Label>اختر المستخدمين ({selectedUsers.length} محدد)</Label>
                    <div className="max-h-48 overflow-y-auto border rounded-lg p-2 space-y-1">
                      {users?.map((u) => (
                        <label key={u.id} className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedUsers.includes(u.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedUsers([...selectedUsers, u.id]);
                              } else {
                                setSelectedUsers(selectedUsers.filter(id => id !== u.id));
                              }
                            }}
                            className="rounded"
                          />
                          <span>{u.display_name || u.name || u.email || 'مستخدم'}</span>
                          <span className="text-xs text-muted-foreground">({u.xp} XP)</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>عنوان الإشعار *</Label>
                  <Input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="أدخل عنوان الإشعار"
                  />
                </div>

                <div className="space-y-2">
                  <Label>نص الإشعار *</Label>
                  <Textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="أدخل نص الإشعار"
                    rows={4}
                  />
                </div>

                <Button 
                  onClick={handleSendNotification}
                  disabled={sendNotification.isPending || !title.trim() || !message.trim()}
                  className="w-full"
                >
                  {sendNotification.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin ml-2" />
                  ) : (
                    <Send className="w-4 h-4 ml-2" />
                  )}
                  إرسال الإشعار
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>إدارة المستخدمين</CardTitle>
                <CardDescription>عرض وإدارة المستخدمين المسجلين</CardDescription>
              </CardHeader>
              <CardContent>
                {usersLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-right p-3">المستخدم</th>
                          <th className="text-right p-3">البريد</th>
                          <th className="text-right p-3">المستوى</th>
                          <th className="text-right p-3">XP</th>
                          <th className="text-right p-3">البلد</th>
                          <th className="text-right p-3">آخر نشاط</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.map((u) => {
                          const lastActive = u.last_active_at ? new Date(u.last_active_at) : null;
                          const isOnlineNow = lastActive && (Date.now() - lastActive.getTime()) < 5 * 60 * 1000; // 5 minutes
                          const isRecentlyActive = lastActive && (Date.now() - lastActive.getTime()) < 60 * 60 * 1000; // 1 hour
                          
                          return (
                            <tr key={u.id} className="border-b hover:bg-muted/50">
                              <td className="p-3 font-medium">{u.display_name || u.name || 'مستخدم'}</td>
                              <td className="p-3 text-muted-foreground">{u.email || '-'}</td>
                              <td className="p-3">
                                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                                  Lv.{u.user_level} ({u.current_level || 'A1'})
                                </span>
                              </td>
                              <td className="p-3 font-bold">{u.xp?.toLocaleString()}</td>
                              <td className="p-3">{u.country_code || '-'}</td>
                              <td className="p-3">
                                <div className="flex items-center gap-2">
                                  {isOnlineNow ? (
                                    <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                      متصل الآن
                                    </span>
                                  ) : isRecentlyActive ? (
                                    <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                                      <Clock className="w-3 h-3" />
                                      {lastActive ? formatDistanceToNow(lastActive, { addSuffix: true, locale: ar }) : '-'}
                                    </span>
                                  ) : lastActive ? (
                                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                                      <Clock className="w-3 h-3" />
                                      {formatDistanceToNow(lastActive, { addSuffix: true, locale: ar })}
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground text-sm">-</span>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog">
            <BlogManager />
          </TabsContent>

          <TabsContent value="certificates">
            <CertificatesManager />
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardContent className="pt-6">
                <UserActivityStats />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Reply Dialog */}
        <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>الرد على الرسالة</DialogTitle>
              <DialogDescription>
                الرد على: {replyingTo?.name} ({replyingTo?.email})
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              {/* Original Message Preview */}
              <div className="bg-muted/50 p-3 rounded-lg border">
                <p className="text-xs text-muted-foreground mb-1">الرسالة الأصلية:</p>
                <p className="font-medium text-sm text-primary mb-1">{replyingTo?.subject}</p>
                <p className="text-sm text-foreground line-clamp-3">{replyingTo?.message}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reply-message">ردك</Label>
                <Textarea
                  id="reply-message"
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  placeholder="اكتب ردك هنا..."
                  rows={5}
                  className="resize-none"
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setReplyDialogOpen(false)}
                disabled={isSendingReply}
              >
                إلغاء
              </Button>
              <Button
                onClick={handleSendReply}
                disabled={isSendingReply || !replyMessage.trim()}
                className="gap-2"
              >
                {isSendingReply ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    إرسال الرد
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Admin;
