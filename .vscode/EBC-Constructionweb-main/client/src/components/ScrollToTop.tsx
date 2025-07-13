import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / windowHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToTop}
        className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Scroll to top"
      >
        {/* Progress Circle */}
        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
          {/* Background Circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="3"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ChevronUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default ScrollToTop; 