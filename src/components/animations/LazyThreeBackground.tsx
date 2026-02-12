import React, { lazy, Suspense, useState, useEffect } from 'react';
import { usePrefersReducedMotion, useIsMobileDevice } from '@/hooks/useAnimations';

// Lazy load the heavy ThreeBackground component
const ThreeBackground = lazy(() => import('./ThreeBackground'));

interface LazyThreeBackgroundProps {
  variant?: 'particles' | 'spheres' | 'waves' | 'stars';
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  /** Delay in ms before loading the 3D background */
  loadDelay?: number;
}

/**
 * Lazy-loaded ThreeBackground component that:
 * 1. Delays loading to prioritize main content (LCP improvement)
 * 2. Respects reduced motion preferences
 * 3. Doesn't load on mobile devices
 * 4. Uses React.lazy for code splitting
 */
export const LazyThreeBackground: React.FC<LazyThreeBackgroundProps> = ({
  variant = 'particles',
  className,
  intensity = 'medium',
  loadDelay = 1500, // Default 1.5s delay to let main content load first
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobileDevice();

  useEffect(() => {
    // Don't load on mobile or with reduced motion
    if (prefersReducedMotion || isMobile) {
      return;
    }

    // Delay loading to improve initial page load performance
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, loadDelay);

    return () => clearTimeout(timer);
  }, [loadDelay, prefersReducedMotion, isMobile]);

  // Don't render anything if conditions aren't met
  if (prefersReducedMotion || isMobile || !shouldLoad) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <ThreeBackground 
        variant={variant} 
        className={className} 
        intensity={intensity} 
      />
    </Suspense>
  );
};

export default LazyThreeBackground;
