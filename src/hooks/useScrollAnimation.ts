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
          // Only reset if element is far out of view
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          
          // Reset only if element is more than 50% of viewport height away
          const isFarAbove = rect.bottom < -viewportHeight * 0.5;
          const isFarBelow = rect.top > viewportHeight * 1.5;
          
          if (isFarAbove || isFarBelow) {
            setIsVisible(false);
            hasAnimatedRef.current = false;
          }
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};