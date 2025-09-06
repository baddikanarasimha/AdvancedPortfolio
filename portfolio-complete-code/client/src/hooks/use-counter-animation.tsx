import { useState, useEffect, useRef } from "react";

export function useCounterAnimation(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            
            let start = 0;
            const startTime = performance.now();
            
            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              const current = start + (target - start) * progress;
              setCount(current);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Find the element with counter class
    const counterElement = document.querySelector('[data-testid*="counter"]');
    if (counterElement) {
      elementRef.current = counterElement as HTMLElement;
      observer.observe(counterElement);
    }

    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return count;
}
