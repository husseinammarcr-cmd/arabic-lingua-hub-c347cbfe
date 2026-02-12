import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface CertificateRequest {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  level: string;
  status: 'pending' | 'approved' | 'rejected';
  requested_at: string;
  reviewed_at: string | null;
  reviewed_by: string | null;
  notes: string | null;
}

export interface Certificate {
  id: string;
  user_id: string;
  certificate_code: string;
  full_name: string;
  level: string;
  issued_at: string;
  issued_by: string;
  is_valid: boolean;
}

// Hook to check if user has completed C2 level
export const useHasCompletedC2 = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['c2_completion', user?.id],
    queryFn: async () => {
      if (!user) return false;

      // Check user's progress for C2 lessons
      const { data: progress, error } = await supabase
        .from('progress')
        .select('lesson_id, completed')
        .eq('user_id', user.id)
        .eq('completed', true);

      if (error) throw error;

      // Check if user has completed enough C2 lessons (at least 50 lessons)
      const c2LessonIds = progress?.filter(p => p.lesson_id.startsWith('c2-')) || [];
      return c2LessonIds.length >= 50;
    },
    enabled: !!user
  });
};

// Hook to get user's certificate request
export const useUserCertificateRequest = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['user_certificate_request', user?.id],
    queryFn: async () => {
      if (!user) return null;

      const { data, error } = await supabase
        .from('certificate_requests')
        .select('*')
        .eq('user_id', user.id)
        .order('requested_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      return data as CertificateRequest | null;
    },
    enabled: !!user
  });
};

// Hook to get user's certificate
export const useUserCertificate = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['user_certificate', user?.id],
    queryFn: async () => {
      if (!user) return null;

      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_valid', true)
        .maybeSingle();

      if (error) throw error;
      return data as Certificate | null;
    },
    enabled: !!user
  });
};

// Hook to submit certificate request
export const useSubmitCertificateRequest = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ fullName, email }: { fullName: string; email: string }) => {
      if (!user) throw new Error('Not authenticated');

      const { error } = await supabase
        .from('certificate_requests')
        .insert({
          user_id: user.id,
          full_name: fullName,
          email: email,
          level: 'C2'
        });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user_certificate_request'] });
    }
  });
};

// Hook to verify certificate by code
export const useVerifyCertificate = () => {
  return useMutation({
    mutationFn: async (code: string) => {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('certificate_code', code.toUpperCase())
        .eq('is_valid', true)
        .maybeSingle();

      if (error) throw error;
      return data as Certificate | null;
    }
  });
};

// Admin hooks
export const useAllCertificateRequests = () => {
  return useQuery({
    queryKey: ['all_certificate_requests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('certificate_requests')
        .select('*')
        .order('requested_at', { ascending: false });

      if (error) throw error;
      return data as CertificateRequest[];
    }
  });
};

export const useAllCertificates = () => {
  return useQuery({
    queryKey: ['all_certificates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('issued_at', { ascending: false });

      if (error) throw error;
      return data as Certificate[];
    }
  });
};

export const useIssueCertificate = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ 
      requestId, 
      userId, 
      fullName, 
      level,
      certificateCode 
    }: { 
      requestId: string;
      userId: string;
      fullName: string;
      level: string;
      certificateCode: string;
    }) => {
      if (!user) throw new Error('Not authenticated');

      // Insert certificate
      const { error: certError } = await supabase
        .from('certificates')
        .insert({
          user_id: userId,
          certificate_code: certificateCode.toUpperCase(),
          full_name: fullName,
          level: level,
          issued_by: user.id
        });

      if (certError) throw certError;

      // Update request status
      const { error: reqError } = await supabase
        .from('certificate_requests')
        .update({
          status: 'approved',
          reviewed_at: new Date().toISOString(),
          reviewed_by: user.id
        })
        .eq('id', requestId);

      if (reqError) throw reqError;

      // Notify user
      await supabase
        .from('notifications')
        .insert({
          user_id: userId,
          title: 'تم إصدار شهادتك! 🎉',
          message: `مبارك! تم إصدار شهادة إتمام المستوى ${level}. رمز الشهادة: ${certificateCode}`,
          sender_name: 'LingoArab',
          target_type: 'certificate',
          target_value: certificateCode
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all_certificate_requests'] });
      queryClient.invalidateQueries({ queryKey: ['all_certificates'] });
    }
  });
};

export const useRejectCertificateRequest = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ requestId, userId, notes }: { requestId: string; userId: string; notes?: string }) => {
      if (!user) throw new Error('Not authenticated');

      const { error } = await supabase
        .from('certificate_requests')
        .update({
          status: 'rejected',
          reviewed_at: new Date().toISOString(),
          reviewed_by: user.id,
          notes: notes
        })
        .eq('id', requestId);

      if (error) throw error;

      // Notify user
      await supabase
        .from('notifications')
        .insert({
          user_id: userId,
          title: 'حالة طلب الشهادة',
          message: notes || 'عذراً، لم يتم قبول طلب الشهادة. يرجى التواصل معنا للمزيد من المعلومات.',
          sender_name: 'LingoArab',
          target_type: 'certificate_rejected'
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all_certificate_requests'] });
    }
  });
};
