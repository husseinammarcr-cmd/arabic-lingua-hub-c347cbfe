import { Megaphone, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface AdSlotProps {
  variant?: 'banner' | 'inline' | 'interstitial';
  className?: string;
  onClose?: () => void;
  showRemoveAds?: boolean;
}

export const AdSlot = ({
  variant = 'banner',
  className,
  onClose,
  showRemoveAds = true
}: AdSlotProps) => {
  const navigate = useNavigate();

  // Placeholder for ad content
  const handleAdClick = () => {
    // Track ad click analytics
    console.log('ad_click', { variant });
  };

  if (variant === 'interstitial') {
    return (
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
        <Card className="w-full max-w-md relative overflow-hidden">
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 left-2 z-10"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
          <CardContent className="p-8 text-center">
            <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Megaphone className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">مساحة إعلانية</p>
                <p className="text-muted-foreground text-xs ltr-text">Ad Space</p>
              </div>
            </div>
            {showRemoveAds && (
              <Button
                variant="accent"
                onClick={() => navigate('/premium')}
                className="w-full"
              >
                أزل الإعلانات مع Premium
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className={cn(
      "overflow-hidden bg-muted/50 border-dashed",
      variant === 'banner' && "rounded-lg",
      variant === 'inline' && "rounded-xl",
      className
    )}>
      <CardContent 
        className={cn(
          "flex items-center justify-center cursor-pointer",
          variant === 'banner' && "p-4",
          variant === 'inline' && "p-6"
        )}
        onClick={handleAdClick}
      >
        <div className="text-center">
          <Megaphone className={cn(
            "text-muted-foreground mx-auto mb-2",
            variant === 'banner' && "w-6 h-6",
            variant === 'inline' && "w-10 h-10"
          )} />
          <p className="text-muted-foreground text-sm">مساحة إعلانية</p>
          {showRemoveAds && (
            <Button
              variant="link"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/premium');
              }}
              className="text-xs mt-1"
            >
              أزل الإعلانات
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
