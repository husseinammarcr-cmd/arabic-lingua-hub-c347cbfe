import { useCallback, useRef } from 'react';

export const useSoundEffects = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.3) => {
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type;

      gainNode.gain.setValueAtTime(volume, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (error) {
      console.warn('Could not play sound:', error);
    }
  }, [getAudioContext]);

  const playSuccess = useCallback(() => {
    // Pleasant ascending chime
    playTone(523.25, 0.1, 'sine', 0.2); // C5
    setTimeout(() => playTone(659.25, 0.1, 'sine', 0.2), 100); // E5
    setTimeout(() => playTone(783.99, 0.15, 'sine', 0.2), 200); // G5
  }, [playTone]);

  const playError = useCallback(() => {
    // Soft descending tone
    playTone(349.23, 0.15, 'sine', 0.15); // F4
    setTimeout(() => playTone(293.66, 0.2, 'sine', 0.15), 120); // D4
  }, [playTone]);

  const playClick = useCallback(() => {
    // Subtle click sound
    playTone(800, 0.05, 'sine', 0.1);
  }, [playTone]);

  const playSelect = useCallback(() => {
    // Soft selection sound
    playTone(440, 0.08, 'sine', 0.15);
  }, [playTone]);

  return {
    playSuccess,
    playError,
    playClick,
    playSelect,
  };
};
