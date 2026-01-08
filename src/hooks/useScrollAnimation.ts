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
          // Element is entering (or near) the viewport - animate in
          setIsVisible(true);
          hasAnimatedRef.current = true;
        } else if (hasAnimatedRef.current) {
          // Reset only when the user is clearly far away (so content doesn't flicker)
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;

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
        // Expand the viewport so re-entering content becomes visible immediately
        // (prevents the user from seeing "hidden" content while scrolling back)
        rootMargin: '20% 0px 20% 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};