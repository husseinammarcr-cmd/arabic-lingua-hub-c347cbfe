import { useState } from 'react';
import { Award, CheckCircle, XCircle, Loader2, Clock, Search, Copy, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  useAllCertificateRequests,
  useAllCertificates,
  useIssueCertificate,
  useRejectCertificateRequest,
  CertificateRequest,
  Certificate
} from '@/hooks/useCertificates';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

const CertificatesManager = () => {
  const { data: requests, isLoading: loadingRequests } = useAllCertificateRequests();
  const { data: certificates, isLoading: loadingCertificates } = useAllCertificates();
  const issueCertificate = useIssueCertificate();
  const rejectRequest = useRejectCertificateRequest();

  const [selectedRequest, setSelectedRequest] = useState<CertificateRequest | null>(null);
  const [certificateCode, setCertificateCode] = useState('');
  const [rejectNotes, setRejectNotes] = useState('');
  const [showIssueDialog, setShowIssueDialog] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [searchCode, setSearchCode] = useState('');

  const pendingRequests = requests?.filter(r => r.status === 'pending') || [];
  const processedRequests = requests?.filter(r => r.status !== 'pending') || [];

  const generateCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'LA-C2-';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCertificateCode(code);
  };

  const handleIssue = async () => {
    if (!selectedRequest || !certificateCode.trim()) {
      toast({
        title: 'خطأ',
        description: 'يرجى إدخال رمز الشهادة',
        variant: 'destructive'
      });
      return;
    }

    try {
      await issueCertificate.mutateAsync({
        requestId: selectedRequest.id,
        userId: selectedRequest.user_id,
        fullName: selectedRequest.full_name,
        level: selectedRequest.level,
        certificateCode: certificateCode.trim()
      });
      
      toast({
        title: 'تم إصدار الشهادة! ✓',
        description: `رمز الشهادة: ${certificateCode}`
      });
      
      setShowIssueDialog(false);
      setSelectedRequest(null);
      setCertificateCode('');
    } catch (error: any) {
      toast({
        title: 'خطأ',
        description: error.message || 'حدث خطأ أثناء إصدار الشهادة',
        variant: 'destructive'
      });
    }
  };

  const handleReject = async () => {
    if (!selectedRequest) return;

    try {
      await rejectRequest.mutateAsync({
        requestId: selectedRequest.id,
        userId: selectedRequest.user_id,
        notes: rejectNotes
      });
      
      toast({
        title: 'تم رفض الطلب',
        description: 'تم إرسال إشعار للمستخدم'
      });
      
      setShowRejectDialog(false);
      setSelectedRequest(null);
      setRejectNotes('');
    } catch (error) {
      toast({
        title: 'خطأ',
        description: 'حدث خطأ أثناء رفض الطلب',
        variant: 'destructive'
      });
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({ title: 'تم النسخ!' });
  };

  const filteredCertificates = certificates?.filter(c => 
    !searchCode || c.certificate_code.toLowerCase().includes(searchCode.toLowerCase())
  ) || [];

  if (loadingRequests || loadingCertificates) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Award className="w-8 h-8 text-primary" />
        <div>
          <h2 className="text-2xl font-bold">إدارة الشهادات</h2>
          <p className="text-muted-foreground">مراجعة طلبات الشهادات وإصدارها</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{pendingRequests.length}</p>
                <p className="text-sm text-muted-foreground">طلبات معلقة</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{certificates?.length || 0}</p>
                <p className="text-sm text-muted-foreground">شهادات صادرة</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {requests?.filter(r => r.status === 'rejected').length || 0}
                </p>
                <p className="text-sm text-muted-foreground">طلبات مرفوضة</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending" className="gap-2">
            <Clock className="w-4 h-4" />
            طلبات معلقة ({pendingRequests.length})
          </TabsTrigger>
          <TabsTrigger value="certificates" className="gap-2">
            <Award className="w-4 h-4" />
            الشهادات الصادرة
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-2">
            <Eye className="w-4 h-4" />
            سجل الطلبات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-4">
          {pendingRequests.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>لا توجد طلبات معلقة</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{request.full_name}</h3>
                        <p className="text-sm text-muted-foreground" dir="ltr">
                          {request.email}
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <Badge variant="secondary">{request.level}</Badge>
                          <span className="text-muted-foreground">
                            {format(new Date(request.requested_at), 'dd MMM yyyy', { locale: ar })}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedRequest(request);
                            setShowRejectDialog(true);
                          }}
                        >
                          <XCircle className="w-4 h-4 ml-1" />
                          رفض
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedRequest(request);
                            generateCode();
                            setShowIssueDialog(true);
                          }}
                        >
                          <CheckCircle className="w-4 h-4 ml-1" />
                          إصدار شهادة
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="certificates" className="mt-4 space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="بحث برمز الشهادة..."
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                className="pr-10"
              />
            </div>
          </div>

          {filteredCertificates.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>لا توجد شهادات</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {filteredCertificates.map((cert) => (
                <Card key={cert.id}>
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{cert.full_name}</h3>
                        <div className="flex items-center gap-2">
                          <code className="text-sm bg-muted px-2 py-1 rounded font-mono" dir="ltr">
                            {cert.certificate_code}
                          </code>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => copyCode(cert.certificate_code)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-left">
                        <Badge variant={cert.is_valid ? "default" : "destructive"}>
                          {cert.is_valid ? 'صالحة' : 'ملغية'}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {format(new Date(cert.issued_at), 'dd MMM yyyy', { locale: ar })}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          {processedRequests.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>لا يوجد سجل طلبات</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {processedRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{request.full_name}</h3>
                        <p className="text-sm text-muted-foreground">{request.email}</p>
                      </div>
                      <div className="text-left">
                        <Badge variant={request.status === 'approved' ? "default" : "destructive"}>
                          {request.status === 'approved' ? 'مقبول' : 'مرفوض'}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {request.reviewed_at && format(new Date(request.reviewed_at), 'dd MMM yyyy', { locale: ar })}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Issue Certificate Dialog */}
      <Dialog open={showIssueDialog} onOpenChange={setShowIssueDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>إصدار شهادة</DialogTitle>
            <DialogDescription>
              أدخل رمز الشهادة لـ {selectedRequest?.full_name}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>رمز الشهادة</Label>
              <div className="flex gap-2">
                <Input
                  value={certificateCode}
                  onChange={(e) => setCertificateCode(e.target.value.toUpperCase())}
                  placeholder="LA-C2-XXXXXX"
                  className="font-mono"
                  dir="ltr"
                />
                <Button variant="outline" onClick={generateCode}>
                  توليد
                </Button>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowIssueDialog(false)}>
              إلغاء
            </Button>
            <Button onClick={handleIssue} disabled={issueCertificate.isPending}>
              {issueCertificate.isPending && <Loader2 className="w-4 h-4 animate-spin ml-2" />}
              إصدار الشهادة
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>رفض الطلب</DialogTitle>
            <DialogDescription>
              سيتم إرسال إشعار للمستخدم بالرفض
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-2">
            <Label>سبب الرفض (اختياري)</Label>
            <Textarea
              value={rejectNotes}
              onChange={(e) => setRejectNotes(e.target.value)}
              placeholder="أدخل سبب الرفض..."
            />
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectDialog(false)}>
              إلغاء
            </Button>
            <Button variant="destructive" onClick={handleReject} disabled={rejectRequest.isPending}>
              {rejectRequest.isPending && <Loader2 className="w-4 h-4 animate-spin ml-2" />}
              رفض الطلب
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CertificatesManager;
