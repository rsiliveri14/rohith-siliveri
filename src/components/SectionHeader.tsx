import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { cinematicEase, cinematicViewport, clipReveal } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ eyebrow, title, subtitle, className }: SectionHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, cinematicViewport);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
      transition={{ duration: 0.7, ease: cinematicEase }}
      className={cn('text-center mb-10', className)}
    >
      {eyebrow ? (
        <motion.p
          className="section-title-small"
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={
            isInView
              ? { opacity: 1, letterSpacing: '0.16em' }
              : { opacity: 0, letterSpacing: '0.4em' }
          }
          transition={{ duration: 0.8, ease: cinematicEase }}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        className="section-title"
        variants={clipReveal}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          transition={{ delay: 0.25, duration: 0.6, ease: cinematicEase }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeader;
