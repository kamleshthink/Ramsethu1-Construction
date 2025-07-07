import { Card, CardContent } from "@/components/ui/card";

interface ExpertiseCardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

export default function ExpertiseCard({ title, description, image, icon }: ExpertiseCardProps) {
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
        <div className="flex items-center gap-3 mb-3">
          {icon && <div className="text-primary">{icon}</div>}
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
