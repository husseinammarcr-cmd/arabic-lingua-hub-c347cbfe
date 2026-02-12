import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSpeech } from '@/hooks/useSpeech';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  variant?: 'ghost' | 'outline' | 'secondary';
}

/**
 * A button that plays audio pronunciation of the given text
 * Uses the Web Speech API with American English (en-US)
 */
export const AudioButton = ({ 
  text, 
  size = 'sm', 
  className,
  variant = 'ghost'
}: AudioButtonProps) => {
  const { speak, isSupported, isReady, voiceCount } = useSpeech();
  const { toast } = useToast();

  // SSR guard
  if (typeof window === 'undefined') {
    return null;
  }

  // Show disabled state if not supported
  if (!isSupported) {
    return (
      <Button
        type="button"
        variant={variant}
        size="icon"
        disabled
        className={cn(
          "rounded-full opacity-50 cursor-not-allowed",
          size === 'sm' && "h-8 w-8",
          size === 'default' && "h-10 w-10",
          size === 'lg' && "h-12 w-12",
          className
        )}
        title="Audio not supported on this device"
        aria-label="Audio not supported"
      >
        <VolumeX className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
      </Button>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent parent click handlers
    
    const cleanText = (text || '').trim();
    console.log('[AudioButton] Clicked, text:', cleanText, 'voices:', voiceCount, 'ready:', isReady);
    
    if (!cleanText) {
      console.warn('[AudioButton] No text to speak');
      toast({
        title: "لا يوجد نص للقراءة",
        description: "No text available to read",
        variant: "destructive",
      });
      return;
    }

    const success = speak(cleanText);
    
    if (!success) {
      toast({
        title: "الصوت غير متاح",
        description: "Audio not supported on this device/browser",
        variant: "destructive",
      });
    }
  };

  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';

  return (
    <Button
      type="button"
      variant={variant}
      size="icon"
      onClick={handleClick}
      className={cn(
        "rounded-full transition-all hover:scale-110 active:scale-95",
        size === 'sm' && "h-8 w-8",
        size === 'default' && "h-10 w-10",
        size === 'lg' && "h-12 w-12",
        className
      )}
      title="استمع للنطق"
      aria-label={`Listen to pronunciation of: ${text}`}
    >
      <Volume2 className={iconSize} />
    </Button>
  );
};
