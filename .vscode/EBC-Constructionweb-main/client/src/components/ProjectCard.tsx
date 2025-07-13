import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col gap-2 hover:shadow-xl transition-all duration-200">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <Badge variant="secondary">{project.category}</Badge>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          {project.location && <span>{project.location}</span>}
          <span>{project.year}</span>
        </div>
      </CardContent>
    </div>
  );
}
