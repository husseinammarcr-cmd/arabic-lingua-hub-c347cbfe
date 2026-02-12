import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './useAnimations';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// GSAP Context hook for proper cleanup
export const useGSAPContext = () => {
  const contextRef = useRef<gsap.Context | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    contextRef.current = gsap.context(() => {});
    return () => contextRef.current?.revert();
  }, []);

  return { context: contextRef.current, prefersReducedMotion };
};

// Fade in animation
export const useFadeIn = (
  ref: React.RefObject<HTMLElement>,
  options?: {
    duration?: number;
    delay?: number;
    y?: number;
    stagger?: number;
  }
) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    const { duration = 0.8, delay = 0, y = 30, stagger = 0.1 } = options || {};

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [ref, options, prefersReducedMotion]);
};

// Text reveal animation
export const useTextReveal = (
  ref: React.RefObject<HTMLElement>,
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
  }
) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    const { duration = 0.6, delay = 0, stagger = 0.02 } = options || {};

    const ctx = gsap.context(() => {
      const chars = ref.current?.querySelectorAll('.char');
      if (chars && chars.length > 0) {
        gsap.from(chars, {
          opacity: 0,
          y: 20,
          rotateX: -90,
          duration,
          delay,
          stagger,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, [ref, options, prefersReducedMotion]);
};

// Scale animation
export const useScaleIn = (
  ref: React.RefObject<HTMLElement>,
  options?: {
    duration?: number;
    delay?: number;
    scale?: number;
  }
) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    const { duration = 0.6, delay = 0, scale = 0.8 } = options || {};

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        scale,
        duration,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, [ref, options, prefersReducedMotion]);
};

// Stagger children animation
export const useStaggerChildren = (
  containerRef: React.RefObject<HTMLElement>,
  childSelector: string,
  options?: {
    duration?: number;
    stagger?: number;
    y?: number;
  }
) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const { duration = 0.5, stagger = 0.1, y = 30 } = options || {};

    const ctx = gsap.context(() => {
      const children = containerRef.current?.querySelectorAll(childSelector);
      if (children && children.length > 0) {
        gsap.from(children, {
          opacity: 0,
          y,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, [containerRef, childSelector, options, prefersReducedMotion]);
};

// Timeline hook
export const useGSAPTimeline = (options?: gsap.TimelineVars) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    timelineRef.current = gsap.timeline(options);
    return () => {
      timelineRef.current?.kill();
    };
  }, [options, prefersReducedMotion]);

  return timelineRef.current;
};

export { gsap, ScrollTrigger };
