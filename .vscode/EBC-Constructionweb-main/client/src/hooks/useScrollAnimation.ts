import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before showing the element
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element comes into view
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  return {
    elementRef,
    isVisible,
    animationClass: isVisible 
      ? 'animate-fade-in-up opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8'
  };
};
