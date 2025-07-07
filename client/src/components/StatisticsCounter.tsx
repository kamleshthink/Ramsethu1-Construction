import { useEffect, useState, useRef } from "react";

interface StatisticsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatisticsCounter({ 
  value, 
  suffix = "+", 
  label, 
  duration = 2000 
}: StatisticsCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const increment = value / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-counter">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600 font-medium">{label}</div>
    </div>
  );
}
