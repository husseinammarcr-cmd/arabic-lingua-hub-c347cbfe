import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import { usePrefersReducedMotion } from './useAnimations';

interface SplitTypeOptions {
  types?: 'lines' | 'words' | 'chars' | 'lines,words' | 'lines,chars' | 'words,chars' | 'lines,words,chars';
  tagName?: string;
  lineClass?: string;
  wordClass?: string;
  charClass?: string;
}

export const useSplitType = (
  ref: React.RefObject<HTMLElement>,
  options?: SplitTypeOptions
) => {
  const splitRef = useRef<SplitType | null>(null);
  const [isSplit, setIsSplit] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    // Create SplitType instance
    splitRef.current = new SplitType(ref.current, {
      types: 'chars,words,lines',
      tagName: 'span',
      lineClass: 'split-line',
      wordClass: 'split-word',
      charClass: 'char',
      ...options,
    });

    setIsSplit(true);

    return () => {
      splitRef.current?.revert();
      setIsSplit(false);
    };
  }, [ref, options, prefersReducedMotion]);

  return {
    split: splitRef.current,
    isSplit,
    lines: splitRef.current?.lines || [],
    words: splitRef.current?.words || [],
    chars: splitRef.current?.chars || [],
  };
};

// Combined hook with GSAP animation
export const useSplitTextAnimation = (
  ref: React.RefObject<HTMLElement>,
  animationType: 'fadeUp' | 'reveal' | 'scramble' = 'fadeUp'
) => {
  const { isSplit, chars, words, lines } = useSplitType(ref);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isSplit || prefersReducedMotion) return;

    // Import gsap dynamically to avoid circular dependencies
    import('gsap').then(({ gsap }) => {
      const elements = animationType === 'fadeUp' ? chars : words;
      
      if (elements && elements.length > 0) {
        gsap.set(elements, { opacity: 0, y: animationType === 'fadeUp' ? 20 : 0 });
        
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.02,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        });
      }
    });
  }, [isSplit, chars, words, animationType, ref, prefersReducedMotion]);

  return { isSplit, chars, words, lines };
};

export default useSplitType;
