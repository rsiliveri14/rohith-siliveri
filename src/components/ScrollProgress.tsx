import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-foreground origin-left"
        style={{ scaleX: progress / 100 }}
      />
    </div>
  );
};

export default ScrollProgress;
