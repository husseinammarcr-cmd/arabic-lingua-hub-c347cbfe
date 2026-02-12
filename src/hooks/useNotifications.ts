import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface Notification {
  id: string;
  user_id: string | null;
  sender_name: string;
  title: string;
  message: string;
  is_read: boolean;
  target_type: string;
  target_value: string | null;
  created_at: string;
}

export const useNotifications = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['notifications', user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .or(`user_id.eq.${user.id},and(target_type.eq.all,user_id.is.null)`)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      return data as Notification[];
    },
    enabled: !!user
  });
};

export const useUnreadCount = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['unread_notifications', user?.id],
    queryFn: async () => {
      if (!user) return 0;

      const { count, error } = await supabase
        .from('notifications')
        .select('*', { count: 'exact', head: true })
        .or(`user_id.eq.${user.id},and(target_type.eq.all,user_id.is.null)`)
        .eq('is_read', false);

      if (error) throw error;
      return count || 0;
    },
    enabled: !!user
  });
};

export const useMarkAsRead = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (notificationId: string) => {
      const { error } = await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('id', notificationId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['unread_notifications'] });
    }
  });
};

export const useMarkAllAsRead = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async () => {
      if (!user) return;

      const { error } = await supabase
        .from('notifications')
        .update({ is_read: true })
        .or(`user_id.eq.${user.id},and(target_type.eq.all,user_id.is.null)`)
        .eq('is_read', false);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['unread_notifications'] });
    }
  });
};

export const useSendNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (notification: {
      sender_name: string;
      title: string;
      message: string;
      target_type: 'all' | 'specific' | 'level' | 'country';
      target_value?: string;
      user_ids?: string[];
    }) => {
      if (notification.target_type === 'all') {
        // Insert a single notification for all users
        const { error } = await supabase
          .from('notifications')
          .insert({
            sender_name: notification.sender_name,
            title: notification.title,
            message: notification.message,
            target_type: 'all',
            user_id: null
          });

        if (error) throw error;
      } else if (notification.target_type === 'specific' && notification.user_ids) {
        // Insert notifications for specific users
        const insertData = notification.user_ids.map(userId => ({
          sender_name: notification.sender_name,
          title: notification.title,
          message: notification.message,
          target_type: 'specific',
          user_id: userId
        }));

        const { error } = await supabase
          .from('notifications')
          .insert(insertData);

        if (error) throw error;
      } else if (notification.target_type === 'level' && notification.target_value) {
        // Get users with specific level
        const { data: users, error: usersError } = await supabase
          .from('profiles')
          .select('id')
          .eq('current_level', notification.target_value);

        if (usersError) throw usersError;

        if (users && users.length > 0) {
          const insertData = users.map(user => ({
            sender_name: notification.sender_name,
            title: notification.title,
            message: notification.message,
            target_type: 'level',
            target_value: notification.target_value,
            user_id: user.id
          }));

          const { error } = await supabase
            .from('notifications')
            .insert(insertData);

          if (error) throw error;
        }
      } else if (notification.target_type === 'country' && notification.target_value) {
        // Get users from specific country
        const { data: users, error: usersError } = await supabase
          .from('profiles')
          .select('id')
          .eq('country_code', notification.target_value);

        if (usersError) throw usersError;

        if (users && users.length > 0) {
          const insertData = users.map(user => ({
            sender_name: notification.sender_name,
            title: notification.title,
            message: notification.message,
            target_type: 'country',
            target_value: notification.target_value,
            user_id: user.id
          }));

          const { error } = await supabase
            .from('notifications')
            .insert(insertData);

          if (error) throw error;
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    }
  });
};
