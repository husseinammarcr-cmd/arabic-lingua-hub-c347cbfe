import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePrefersReducedMotion, useIsMobileDevice } from '@/hooks/useAnimations';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
}

interface MiniConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
}

const COLORS = ['#22d3ee', '#0ea5e9', '#06b6d4', '#38bdf8', '#67e8f9'];

export const MiniConfetti = ({ trigger, onComplete }: MiniConfettiProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobileDevice();

  useEffect(() => {
    if (!trigger || prefersReducedMotion) return;

    const particleCount = isMobile ? 8 : 15;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * -150 - 50,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360
      });
    }

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
      onComplete?.();
    }, 1000);

    return () => clearTimeout(timer);
  }, [trigger, prefersReducedMotion, isMobile, onComplete]);

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute left-1/2 top-1/2"
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0,
              rotate: 0
            }}
            animate={{ 
              x: particle.x, 
              y: particle.y, 
              scale: [0, 1, 0.8],
              rotate: particle.rotation
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
