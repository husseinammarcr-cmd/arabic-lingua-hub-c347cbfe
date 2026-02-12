import { cn } from '@/lib/utils';
import Lottie from 'lottie-react';
import verifyAnimation from '@/assets/verify-animation.json';

interface VerifiedBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const VerifiedBadge = ({ className, size = 'md' }: VerifiedBadgeProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className={cn(sizeClasses[size], "inline-flex items-center justify-center shrink-0", className)}>
      <Lottie 
        animationData={verifyAnimation}
        loop={true}
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
};
