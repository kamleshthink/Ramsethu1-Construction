import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  location?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  category, 
  year, 
  image, 
  location 
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          {location && <span>{location}</span>}
          <span>{year}</span>
        </div>
      </CardContent>
    </Card>
  );
}
