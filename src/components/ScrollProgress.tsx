import { motion } from 'framer-motion';
import { useActiveSection } from '@/hooks/useActiveSection';

const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

const ScrollProgress = () => {
  const activeSection = useActiveSection();
  
  // Find the index of the active section
  const activeIndex = sections.indexOf(activeSection);
  // Calculate progress as segments (0 to 1)
  const progress = activeIndex >= 0 ? (activeIndex + 1) / sections.length : 0;

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-border/30">
      {/* Segmented background indicators */}
      <div className="absolute inset-0 flex">
        {sections.map((section, index) => (
          <div
            key={section}
            className="flex-1 border-r border-background/50 last:border-r-0"
          />
        ))}
      </div>
      
      {/* Animated progress fill */}
      <motion.div
        className="h-full bg-foreground origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={{ 
          duration: 0.4, 
          ease: [0.25, 0.4, 0.25, 1] 
        }}
      />
      
      {/* Section indicator dots */}
      <div className="absolute inset-0 flex items-center">
        {sections.map((section, index) => {
          const isActive = index <= activeIndex;
          const isCurrent = section === activeSection;
          return (
            <div
              key={section}
              className="flex-1 flex justify-end"
            >
              <motion.div
                className={`w-2 h-2 rounded-full -translate-x-1/2 transition-colors duration-300 ${
                  isCurrent 
                    ? 'bg-foreground shadow-lg' 
                    : isActive 
                      ? 'bg-foreground/60' 
                      : 'bg-border'
                }`}
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: isCurrent ? 1.3 : isActive ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollProgress;
