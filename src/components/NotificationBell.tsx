import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useUnreadCount } from '@/hooks/useNotifications';
import { cn } from '@/lib/utils';

export const NotificationBell = () => {
  const navigate = useNavigate();
  const { data: unreadCount = 0 } = useUnreadCount();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="relative"
      onClick={() => navigate('/notifications')}
    >
      <Bell className="w-5 h-5" />
      {unreadCount > 0 && (
        <span className={cn(
          "absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full",
          "bg-destructive text-destructive-foreground text-xs font-bold",
          "flex items-center justify-center px-1"
        )}>
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </Button>
  );
};
