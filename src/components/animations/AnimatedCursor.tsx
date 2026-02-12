import React, { useEffect, useState } from 'react';
import AnimatedCursorLib from 'react-animated-cursor';
import { usePrefersReducedMotion, useIsMobileDevice } from '@/hooks/useAnimations';

interface AnimatedCursorProps {
  color?: string;
  outerSize?: number;
  innerSize?: number;
  outerScale?: number;
  innerScale?: number;
  trailingSpeed?: number;
  showSystemCursor?: boolean;
}

export const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  color = '64, 196, 176', // Primary teal color in RGB
  outerSize = 35,
  innerSize = 8,
  outerScale = 2,
  innerScale = 0.7,
  trailingSpeed = 8,
  showSystemCursor = false,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobileDevice();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on mobile, with reduced motion, or during SSR
  if (!mounted || isMobile || prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatedCursorLib
      color={color}
      innerSize={innerSize}
      outerSize={outerSize}
      innerScale={innerScale}
      outerScale={outerScale}
      outerAlpha={0.3}
      innerStyle={{
        backgroundColor: `rgba(${color}, 1)`,
        mixBlendMode: 'difference',
      }}
      outerStyle={{
        border: `2px solid rgba(${color}, 0.5)`,
        backgroundColor: 'transparent',
        mixBlendMode: 'difference',
      }}
      trailingSpeed={trailingSpeed}
      showSystemCursor={showSystemCursor}
      clickables={[
        'a',
        'button',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="password"]',
        'input[type="submit"]',
        'input[type="button"]',
        'label[for]',
        'select',
        'textarea',
        '.link',
        '.clickable',
        '[role="button"]',
        '[data-cursor="pointer"]',
      ]}
    />
  );
};

// Cursor provider wrapper
export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <AnimatedCursor />
      {children}
    </>
  );
};

export default AnimatedCursor;
