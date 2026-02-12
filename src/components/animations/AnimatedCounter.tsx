import { useEffect, useRef } from 'react';
import { useInView, useCountUp } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = ({ 
  value, 
  duration = 1500, 
  className,
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) => {
  const { ref, isInView } = useInView();
  const { count, animate } = useCountUp(value, duration);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (isInView && !hasTriggered.current) {
      hasTriggered.current = true;
      animate();
    }
  }, [isInView, animate]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};
