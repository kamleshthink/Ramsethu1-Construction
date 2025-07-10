import { Card, CardContent } from "@/components/ui/card";

interface LeadershipCardProps {
  name: string;
  position: string;
  image: string;
  description?: string;
}

export default function LeadershipCard({ name, position, image, description }: LeadershipCardProps) {
  return (
    <Card className="text-center card-hover bg-pink-50/30">
      <CardContent className="p-6">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{position}</p>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </CardContent>
    </Card>
  );
}
