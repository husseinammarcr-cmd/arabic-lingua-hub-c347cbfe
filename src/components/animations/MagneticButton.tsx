import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const MagneticButton = ({ children, className, onClick, disabled }: MagneticButtonProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} onClick={!disabled ? onClick : undefined}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("inline-block", className)}
      onClick={!disabled ? onClick : undefined}
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

// Icon bounce on hover
export const BouncingIcon = ({ children, className }: { children: ReactNode; className?: string }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={cn("inline-flex", className)}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.span>
  );
};
