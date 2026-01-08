import { useEffect, useRef, useState, useCallback } from 'react';

export const useScrollAnimation = (threshold = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    
    if (entry.isIntersecting) {
      // Element is entering viewport - animate in and mark as animated
      setIsVisible(true);
      hasAnimated.current = true;
    } else if (hasAnimated.current) {
      // Only reset if element is completely out of view (far away)
      // Check if element is far above or below the viewport
      const rect = entry.boundingClientRect;
      const viewportHeight = window.innerHeight;
      
      // Reset only if element is more than 50% of viewport height away
      const isFarAbove = rect.bottom < -viewportHeight * 0.5;
      const isFarBelow = rect.top > viewportHeight * 1.5;
      
      if (isFarAbove || isFarBelow) {
        setIsVisible(false);
        hasAnimated.current = false;
      }
      // Otherwise, keep content visible even if technically "not intersecting"
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold,
      rootMargin: '0px 0px -10% 0px' // Trigger slightly before element reaches bottom
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, handleIntersection]);

  return { ref, isVisible };
};