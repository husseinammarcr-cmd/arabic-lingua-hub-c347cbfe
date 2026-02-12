import { useCallback, useEffect, useState, useRef } from 'react';

/**
 * Hook for text-to-speech using the Web Speech API
 * Uses American English (en-US) with a slower rate for language learners
 */
export const useSpeech = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isReady, setIsReady] = useState(false);
  const voicesLoadedRef = useRef(false);

  // SSR guard - check if running in browser
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Load voices with retry mechanism
  useEffect(() => {
    if (!isSupported) {
      console.log('[useSpeech] Speech synthesis not supported');
      return;
    }

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      console.log('[useSpeech] Loading voices, count:', availableVoices.length);
      
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        setIsReady(true);
        voicesLoadedRef.current = true;
        console.log('[useSpeech] Voices loaded successfully:', availableVoices.map(v => `${v.name} (${v.lang})`).slice(0, 5));
      }
    };

    // Try loading immediately
    loadVoices();

    // Also listen for voiceschanged event (required for Chrome)
    if (!voicesLoadedRef.current) {
      const handleVoicesChanged = () => {
        console.log('[useSpeech] voiceschanged event fired');
        loadVoices();
      };
      
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      
      // Fallback: retry after a short delay if voices aren't loaded
      const retryTimeout = setTimeout(() => {
        if (!voicesLoadedRef.current) {
          console.log('[useSpeech] Retry loading voices');
          loadVoices();
        }
      }, 100);

      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
        clearTimeout(retryTimeout);
      };
    }
  }, [isSupported]);

  const speak = useCallback((text: string, options?: { rate?: number; lang?: string }) => {
    // SSR guard
    if (typeof window === 'undefined') {
      console.warn('[useSpeech] Cannot speak - running on server');
      return false;
    }

    if (!isSupported) {
      console.warn('[useSpeech] Speech synthesis is not supported in this browser');
      return false;
    }

    // Validate text
    const cleanText = (text || '').trim();
    if (!cleanText) {
      console.warn('[useSpeech] Cannot speak - empty text provided');
      return false;
    }

    console.log('[useSpeech] Speaking:', cleanText);
    console.log('[useSpeech] Available voices:', window.speechSynthesis.getVoices().length);

    // Cancel any ongoing speech to prevent overlap
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = options?.lang || 'en-US';
    utterance.rate = options?.rate || 0.9; // Slightly slower for beginners
    utterance.pitch = 1;
    utterance.volume = 1;

    // Get fresh voices list
    const currentVoices = window.speechSynthesis.getVoices();
    
    // Try to find a good English voice
    const englishVoice = currentVoices.find(
      (voice) => voice.lang === 'en-US'
    ) || currentVoices.find(
      (voice) => voice.lang.startsWith('en-US')
    ) || currentVoices.find(
      (voice) => voice.lang.startsWith('en')
    );

    if (englishVoice) {
      utterance.voice = englishVoice;
      console.log('[useSpeech] Using voice:', englishVoice.name, englishVoice.lang);
    } else {
      console.log('[useSpeech] No English voice found, using default');
    }

    // Add event listeners for debugging
    utterance.onstart = () => console.log('[useSpeech] Started speaking');
    utterance.onend = () => console.log('[useSpeech] Finished speaking');
    utterance.onerror = (event) => console.error('[useSpeech] Error:', event.error);

    window.speechSynthesis.speak(utterance);
    return true;
  }, [isSupported]);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && isSupported) {
      window.speechSynthesis.cancel();
    }
  }, [isSupported]);

  return { 
    speak, 
    stop, 
    isSupported, 
    isReady, 
    voiceCount: voices.length 
  };
};
