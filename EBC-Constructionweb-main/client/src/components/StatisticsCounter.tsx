import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatisticsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
  duration?: number;
}

export default function StatisticsCounter({ 
  value, 
  suffix = "+", 
  label, 
  icon,
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
    <Card ref={ref} className="group relative overflow-hidden bg-blue-500 border border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform h-48 text-white">
      {/* Solid lighter blue background */}
      <CardContent className="p-4 relative h-full flex flex-col justify-center">
        {/* Icon */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-xl">
            <span className="text-lg text-white drop-shadow-lg">{icon}</span>
          </div>
        </div>
        {/* Number */}
        <div className="relative mb-2 flex-shrink-0">
          <div className="text-2xl md:text-3xl font-black text-white text-center">
            {count.toLocaleString()}{suffix}
          </div>
        </div>
        {/* Label */}
        <div className="text-xs md:text-sm text-blue-100 font-bold leading-tight text-center flex-1 flex items-center justify-center">
          {label}
        </div>
        {/* Bottom accent line - blue */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-blue-100 transition-all duration-500 rounded-full"></div>
      </CardContent>
    </Card>
  );
}
