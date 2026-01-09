import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'clipReveal';
}

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: '-10% 0px -10% 0px',
    amount: 0.2
  });

  const getVariants = () => {
    const baseTransition = {
      duration: 0.7,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -60 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0, transition: baseTransition },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 80 },
          visible: { opacity: 1, x: 0, transition: baseTransition },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1, transition: baseTransition },
        };
      case 'clipReveal':
        return {
          hidden: { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
          visible: { 
            opacity: 1, 
            clipPath: 'inset(0% 0% 0% 0%)', 
            transition: { ...baseTransition, duration: 0.9 } 
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getVariants()}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
