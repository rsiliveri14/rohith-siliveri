import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cinematicEase, LOADING_MS } from '@/lib/motion';

const LoadingScreen = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !sessionStorage.getItem('rs-visited');
  });

  useEffect(() => {
    if (!isLoading) return;
    const duration = prefersReducedMotion ? 400 : LOADING_MS;
    const timer = setTimeout(() => {
      sessionStorage.setItem('rs-visited', '1');
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isLoading, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { clipPath: 'inset(0 0 100% 0)', opacity: 1 }
          }
          transition={{ duration: prefersReducedMotion ? 0.25 : 0.9, ease: cinematicEase }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="text-center">
            <motion.p
              className="section-title-small mb-3"
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.2em' }}
              transition={{ duration: 0.8, ease: cinematicEase }}
            >
              Portfolio
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: cinematicEase }}
              className="mb-4 overflow-hidden"
            >
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-foreground"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 1, delay: 0.15, ease: cinematicEase }}
              >
                Rohith Siliveri
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: cinematicEase }}
              className="text-muted-foreground text-sm mb-8"
            >
              Applied AI Engineer
            </motion.p>

            <motion.div
              className="w-48 h-px bg-border mx-auto overflow-hidden"
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.6, ease: cinematicEase }}
            >
              <motion.div
                className="h-full bg-foreground origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.3 : 1.45, ease: cinematicEase }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
