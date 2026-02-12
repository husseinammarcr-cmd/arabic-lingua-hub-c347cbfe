import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePrefersReducedMotion } from './useAnimations';

let lenisInstance: Lenis | null = null;

export const useLenis = (options?: ConstructorParameters<typeof Lenis>[0]) => {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Create singleton instance
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        ...options,
      });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }

    lenisRef.current = lenisInstance;

    return () => {
      // Don't destroy on unmount - singleton pattern
    };
  }, [options, prefersReducedMotion]);

  return lenisRef.current;
};

// Scroll to element
export const useScrollTo = () => {
  const scrollTo = (target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, {
        offset: options?.offset || 0,
        duration: options?.duration || 1.2,
      });
    }
  };

  return scrollTo;
};

// Stop/start smooth scroll
export const useLenisControl = () => {
  const stop = () => lenisInstance?.stop();
  const start = () => lenisInstance?.start();
  
  return { stop, start };
};

export default useLenis;
