import React, { useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import themeToggleAnimation from '@/assets/theme-toggle.json';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const isAnimatingRef = useRef(false);
  const { theme, toggleTheme } = useTheme();
  const { playClick } = useSoundEffects();

  // Sync animation state with current theme on mount and theme changes
  useEffect(() => {
    // Don't snap to a frame while an animation is playing.
    if (!lottieRef.current || isAnimatingRef.current) return;

    // Light = sun (frame 0), Dark = moon (frame 80)
    lottieRef.current.goToAndStop(theme === 'dark' ? 80 : 0, true);
  }, [theme]);

  const handleClick = () => {
    playClick();
    
    if (lottieRef.current) {
      isAnimatingRef.current = true;
      if (theme === 'light') {
        // Play forward: sun to moon (frames 0-80)
        lottieRef.current.setDirection(1);
        lottieRef.current.playSegments([0, 80], true);
      } else {
        // Play backward-ish segment: moon to sun (frames 80-0)
        lottieRef.current.setDirection(-1);
        lottieRef.current.playSegments([0, 80], true);
      }
    }
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors hover:bg-muted/40 active:bg-muted/60 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ${className}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={themeToggleAnimation}
        loop={false}
        autoplay={false}
        className="w-10 h-10"
        onComplete={() => {
          isAnimatingRef.current = false;
          // Snap to the final correct frame to avoid drift.
          if (lottieRef.current) {
            lottieRef.current.goToAndStop(theme === 'dark' ? 80 : 0, true);
          }
        }}
      />
    </button>
  );
};

export default ThemeToggle;
