import React, { useRef, useEffect, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { usePrefersReducedMotion, useInView } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  playOnHover?: boolean;
  playOnView?: boolean;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
  onComplete?: () => void;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  playOnHover = false,
  playOnView = false,
  className,
  style,
  speed = 1,
  onComplete,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const { ref: viewRef, isInView } = useInView();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Handle reduced motion
  useEffect(() => {
    if (prefersReducedMotion && lottieRef.current) {
      lottieRef.current.goToAndStop(0, true);
    }
  }, [prefersReducedMotion]);

  // Handle play on view
  useEffect(() => {
    if (playOnView && isInView && lottieRef.current && !prefersReducedMotion) {
      lottieRef.current.play();
    }
  }, [isInView, playOnView, prefersReducedMotion]);

  // Handle speed
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  const handleMouseEnter = () => {
    if (playOnHover && lottieRef.current && !prefersReducedMotion) {
      setIsHovered(true);
      lottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover && lottieRef.current) {
      setIsHovered(false);
      lottieRef.current.stop();
    }
  };

  const shouldAutoplay = autoplay && !playOnHover && !playOnView && !prefersReducedMotion;

  return (
    <div
      ref={viewRef}
      className={cn('lottie-container', className)}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={shouldAutoplay}
        onComplete={onComplete}
      />
    </div>
  );
};

// Simple loading animation component
export const LoadingLottie: React.FC<{ className?: string }> = ({ className }) => {
  // Simple loading animation data (inline for quick loading)
  const loadingData = {
    v: '5.5.7',
    fr: 60,
    ip: 0,
    op: 60,
    w: 100,
    h: 100,
    layers: [
      {
        ty: 4,
        nm: 'circle',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 60, s: [360] }] },
          p: { a: 0, k: [50, 50] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
        },
        shapes: [
          {
            ty: 'el',
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [40, 40] },
          },
          {
            ty: 'st',
            c: { a: 0, k: [0.4, 0.8, 0.7, 1] },
            o: { a: 0, k: 100 },
            w: { a: 0, k: 4 },
            lc: 2,
            lj: 2,
            d: [{ n: 'd', nm: 'dash', v: { a: 0, k: 60 } }, { n: 'g', nm: 'gap', v: { a: 0, k: 60 } }],
          },
        ],
      },
    ],
  };

  return (
    <LottieAnimation
      animationData={loadingData}
      loop
      autoplay
      className={cn('w-12 h-12', className)}
    />
  );
};

export default LottieAnimation;
