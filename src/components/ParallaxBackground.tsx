import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  
  // Much subtler parallax movement
  const y1 = useTransform(scrollY, [0, 5000], [0, -80]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -40]);
  
  // Very low opacity - background should be barely perceptible
  const opacity1 = useTransform(scrollY, [0, 2000], [0.015, 0.008]);
  const opacity2 = useTransform(scrollY, [0, 2000], [0.01, 0.005]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Single subtle gradient orb - minimal, non-distracting */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full"
        style={{
          y: y1,
          opacity: opacity1,
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
          top: '-10%',
          left: '-20%',
          filter: 'blur(100px)',
        }}
      />
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          y: y2,
          opacity: opacity2,
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
          bottom: '-5%',
          right: '-15%',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
