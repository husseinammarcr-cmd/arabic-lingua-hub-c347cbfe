import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';

// Lazy load the Lottie component
const LottieAnimation = lazy(() => import('./LottieAnimation'));

interface LazyLottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  playOnHover?: boolean;
  playOnView?: boolean;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
  onComplete?: () => void;
  /** Placeholder element to show while loading */
  placeholder?: React.ReactNode;
  /** Root margin for intersection observer (e.g., "100px" to load 100px before visible) */
  rootMargin?: string;
}

/**
 * Lazy-loaded LottieAnimation component that:
 * 1. Only loads when the element is near the viewport (Intersection Observer)
 * 2. Uses React.lazy for code splitting
 * 3. Respects reduced motion preferences
 * 4. Shows optional placeholder while loading
 */
export const LazyLottieAnimation: React.FC<LazyLottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  playOnHover = false,
  playOnView = false,
  className,
  style,
  speed = 1,
  onComplete,
  placeholder,
  rootMargin = '200px', // Start loading 200px before visible
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // If reduced motion is preferred, don't load animations
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, prefersReducedMotion]);

  // For reduced motion, show a static placeholder or nothing
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={cn('lottie-placeholder', className)} style={style}>
        {placeholder}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn('lottie-lazy-container', className)} style={style}>
      {shouldLoad ? (
        <Suspense fallback={placeholder || <div className="animate-pulse bg-muted rounded" />}>
          <LottieAnimation
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            playOnHover={playOnHover}
            playOnView={playOnView}
            speed={speed}
            onComplete={onComplete}
            className="w-full h-full"
          />
        </Suspense>
      ) : (
        placeholder || <div className="animate-pulse bg-muted/30 rounded w-full h-full" />
      )}
    </div>
  );
};

export default LazyLottieAnimation;
