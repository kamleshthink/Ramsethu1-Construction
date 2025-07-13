import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  category: string;
  image: string;
  value: string;
}

const completedProjects: Project[] = [
  {
    id: 1,
    title: "Mumbai Metro Line 3",
    description: "Underground metro rail project connecting key areas of Mumbai",
    location: "Mumbai, Maharashtra",
    year: "2024",
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    value: "₹23,136 Cr"
  },
  {
    id: 2,
    title: "Chennai International Airport Terminal",
    description: "Modern international terminal with state-of-the-art facilities",
    location: "Chennai, Tamil Nadu",
    year: "2023",
    category: "Buildings",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    value: "₹2,467 Cr"
  },
  {
    id: 3,
    title: "Bangalore IT Corridor",
    description: "Premium IT park with sustainable design and smart infrastructure",
    location: "Bangalore, Karnataka",
    year: "2023",
    category: "Buildings",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    value: "₹1,845 Cr"
  },
  {
    id: 4,
    title: "Hyderabad Water Treatment Plant",
    description: "Advanced water treatment facility serving 2 million residents",
    location: "Hyderabad, Telangana",
    year: "2022",
    category: "Water & Environment",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    value: "₹987 Cr"
  },
  {
    id: 5,
    title: "Delhi-NCR Expressway",
    description: "High-speed expressway connecting Delhi to satellite cities",
    location: "Delhi NCR",
    year: "2022",
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    value: "₹4,521 Cr"
  },
  {
    id: 6,
    title: "Pune Smart City Project",
    description: "Integrated smart city infrastructure with IoT and automation",
    location: "Pune, Maharashtra",
    year: "2021",
    category: "Smart Infrastructure",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    value: "₹3,245 Cr"
  }
];

const categoryColors = {
  "Transportation": "bg-blue-500",
  "Buildings": "bg-green-500",
  "Water & Environment": "bg-cyan-500",
  "Smart Infrastructure": "bg-purple-500",
};

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projectsPerView = 3;
  const maxIndex = Math.max(0, completedProjects.length - projectsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={carouselRef}>
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)`,
            width: `${(completedProjects.length / projectsPerView) * 100}%`
          }}
        >
          {completedProjects.map((project) => (
            <div 
              key={project.id} 
              className="w-full flex-shrink-0 px-4"
              style={{ width: `${100 / completedProjects.length}%` }}
            >
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className={cn(
                    "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white",
                    categoryColors[project.category as keyof typeof categoryColors] || "bg-gray-500"
                  )}>
                    {project.category}
                  </div>

                  {/* Project Value */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-gray-900">{project.value}</span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-4 text-xs mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-primary scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}