import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -450]);
  const rotate1 = useTransform(scrollY, [0, 3000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 3000], [0, -30]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs with parallax */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03] dark:opacity-[0.05]"
        style={{
          y: y1,
          rotate: rotate1,
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.02] dark:opacity-[0.04]"
        style={{
          y: y2,
          rotate: rotate2,
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
          top: '40%',
          right: '-5%',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.02] dark:opacity-[0.03]"
        style={{
          y: y3,
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
          bottom: '10%',
          left: '30%',
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
