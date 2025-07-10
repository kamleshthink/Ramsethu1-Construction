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
    <Card ref={ref} className="group relative overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/50 backdrop-blur-sm border border-blue-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform h-48">
      {/* Default gradient background - always visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/10"></div>
      
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Border glow - subtle by default, stronger on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200/20 via-indigo-200/20 to-purple-200/20 group-hover:from-primary/20 group-hover:via-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-500 blur-sm"></div>
      
      <CardContent className="p-4 relative h-full flex flex-col justify-center">
        {/* Icon with enhanced styling - attractive by default */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 group-hover:from-primary group-hover:via-blue-600 group-hover:to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <span className="text-lg text-white drop-shadow-lg">{icon}</span>
          </div>
          {/* Icon glow effect - subtle by default */}
          <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 group-hover:from-primary/30 group-hover:via-blue-600/30 group-hover:to-indigo-600/30 rounded-xl blur-xl transition-all duration-500"></div>
        </div>
        
        {/* Number with enhanced typography - attractive by default */}
        <div className="relative mb-2 flex-shrink-0">
          <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:from-primary group-hover:via-blue-600 group-hover:to-indigo-600 bg-clip-text text-transparent animate-counter drop-shadow-sm transition-all duration-500 text-center">
            {count.toLocaleString()}{suffix}
          </div>
          {/* Number glow - subtle by default */}
          <div className="absolute inset-0 text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400/15 via-indigo-400/15 to-purple-400/15 group-hover:from-primary/20 group-hover:via-blue-600/20 group-hover:to-indigo-600/20 bg-clip-text text-transparent blur-sm transition-all duration-500 text-center">
            {count.toLocaleString()}{suffix}
          </div>
        </div>
        
        {/* Label with enhanced styling - attractive by default */}
        <div className="text-xs md:text-sm text-gray-700 font-bold leading-tight text-center group-hover:text-gray-800 transition-colors duration-300 flex-1 flex items-center justify-center">
          {label}
        </div>
        
        {/* Bottom accent line - visible by default */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 group-hover:from-primary group-hover:via-blue-600 group-hover:to-indigo-600 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
      </CardContent>
    </Card>
  );
}
