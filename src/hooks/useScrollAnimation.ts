import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          // Element is entering viewport - animate in
          setIsVisible(true);
          hasAnimatedRef.current = true;
        } else if (hasAnimatedRef.current) {
          // Reset if element is out of view (less strict threshold)
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          
          // Reset when element is just outside viewport (20% buffer)
          const isFarAbove = rect.bottom < -viewportHeight * 0.2;
          const isFarBelow = rect.top > viewportHeight * 1.2;
          
          if (isFarAbove || isFarBelow) {
            setIsVisible(false);
            hasAnimatedRef.current = false;
          }
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};