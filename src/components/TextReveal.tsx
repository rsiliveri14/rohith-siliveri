import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const TextReveal = ({ 
  children, 
  className, 
  delay = 0,
  as: Component = 'span' 
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: '-5% 0px -5% 0px',
    amount: 0.5
  });

  const words = children.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: 45,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={cn('inline-flex flex-wrap', className)}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
          style={{ transformOrigin: 'center bottom' }}
        >
          <Component className={className}>{word}</Component>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
