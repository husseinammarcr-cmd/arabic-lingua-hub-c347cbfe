// Animation Components
export { FadeUp, ScaleIn, StaggerContainer, StaggerItem, slideVariants } from './AnimatedContainers';
export { AnimatedCounter } from './AnimatedCounter';
export { AnimatedProgress } from './AnimatedProgress';
export { MiniConfetti } from './MiniConfetti';
export { TiltCard } from './TiltCard';
export { MagneticButton, BouncingIcon } from './MagneticButton';
export { LottieAnimation, LoadingLottie } from './LottieAnimation';
export { LazyLottieAnimation } from './LazyLottieAnimation';
export { AnimatedCursor, CursorProvider } from './AnimatedCursor';
export { ThreeBackground } from './ThreeBackground';
export { LazyThreeBackground } from './LazyThreeBackground';

// Re-export hooks
export { useGSAPContext, useFadeIn, useTextReveal, useScaleIn, useStaggerChildren, useGSAPTimeline, gsap, ScrollTrigger } from '@/hooks/useGSAP';
export { useLenis, useScrollTo, useLenisControl } from '@/hooks/useLenis';
export { useSplitType, useSplitTextAnimation } from '@/hooks/useSplitType';
export { usePrefersReducedMotion, useCountUp, useInView, useIsMobileDevice } from '@/hooks/useAnimations';
