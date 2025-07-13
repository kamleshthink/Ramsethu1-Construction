import { Card, CardContent } from "@/components/ui/card";

interface ExpertiseCardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

export default function ExpertiseCard({ title, description, image, icon }: ExpertiseCardProps) {
  return (
    <Card className="overflow-hidden card-hover group relative bg-blue-50/30">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>
      
      <CardContent className="p-8 relative">
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="text-white text-xl">{icon}</div>
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent leading-tight mb-3 group-hover:from-primary group-hover:to-blue-600 transition-all duration-300">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-gray-700 text-base leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
        
        {/* Hover indicator */}
        <div className="mt-4 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn More</span>
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
