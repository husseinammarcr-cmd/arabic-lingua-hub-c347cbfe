import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AclibBannerProps {
  zoneId?: string;
  className?: string;
}

declare global {
  interface Window {
    aclib?: {
      runBanner: (config: { zoneId: string }) => void;
      runInterstitial: (config: { zoneId: string }) => void;
    };
  }
}

export const AclibBanner = ({ zoneId = '10967374', className }: AclibBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const tryRun = () => {
      if (window.aclib && containerRef.current) {
        window.aclib.runBanner({ zoneId });
      }
    };

    // Try immediately, then retry after a short delay
    tryRun();
    const timer = setTimeout(tryRun, 2000);
    return () => clearTimeout(timer);
  }, [zoneId]);

  return (
    <div ref={containerRef} className={cn('w-full flex justify-center my-4', className)} />
  );
};
