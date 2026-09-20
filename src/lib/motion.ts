import type { Transition, Variants } from 'framer-motion';

/** Slow settle — closer to a camera move than a UI snap. */
export const cinematicEase = [0.16, 1, 0.3, 1] as const;

export const cinematicTransition: Transition = {
  duration: 0.85,
  ease: cinematicEase,
};

export const cinematicSpring: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 0.85,
};

export const cinematicViewport = {
  once: true,
  amount: 0.18,
} as const;

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: cinematicTransition,
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: cinematicTransition,
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1, ease: cinematicEase },
  },
};

export const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: '0 24px 48px -20px hsl(var(--foreground) / 0.28)',
};

export const pageTransition: Transition = {
  duration: 0.55,
  ease: cinematicEase,
};

export const LOADING_MS = 2000;

/** Delay hero/nav until the opening curtain lifts on a first visit. */
export const getIntroDelay = () => {
  if (typeof window === 'undefined') return 0.2;
  if (sessionStorage.getItem('rs-visited')) return 0.15;
  if (window.location.pathname !== '/') return 0.15;
  return LOADING_MS / 1000 + 0.08;
};
