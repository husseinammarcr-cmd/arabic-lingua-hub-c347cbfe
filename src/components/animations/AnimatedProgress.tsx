import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';

interface AnimatedProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

export const AnimatedProgress = ({ value, className, indicatorClassName }: AnimatedProgressProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)}>
      <motion.div
        className={cn("h-full bg-primary rounded-full", indicatorClassName)}
        initial={prefersReducedMotion ? { width: `${value}%` } : { width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.8, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
      />
    </div>
  );
};
