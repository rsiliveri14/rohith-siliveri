import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 3000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -100]);
  const opacity1 = useTransform(scrollY, [0, 1500], [0.03, 0.015]);
  const opacity2 = useTransform(scrollY, [0, 1500], [0.02, 0.01]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft gradient orbs - no intersecting lines */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          y: y1,
          opacity: opacity1,
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 60%)',
          top: '5%',
          left: '-15%',
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          y: y2,
          opacity: opacity2,
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 60%)',
          top: '50%',
          right: '-10%',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.015] dark:opacity-[0.02]"
        style={{
          y: y1,
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 60%)',
          bottom: '20%',
          left: '40%',
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
