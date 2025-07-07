import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Location {
  id: number;
  name: string;
  state: string;
  x: number;
  y: number;
  projects: number;
  description: string;
}

const presenceLocations: Location[] = [
  { id: 1, name: "Mumbai", state: "Maharashtra", x: 72, y: 19, projects: 45, description: "Western Regional Hub" },
  { id: 2, name: "Delhi", state: "Delhi", x: 77, y: 28, projects: 38, description: "Northern Regional Office" },
  { id: 3, name: "Bangalore", state: "Karnataka", x: 77, y: 13, projects: 42, description: "Southern Technology Center" },
  { id: 4, name: "Hyderabad", state: "Telangana", x: 78, y: 17, projects: 52, description: "Corporate Headquarters" },
  { id: 5, name: "Chennai", state: "Tamil Nadu", x: 80, y: 13, projects: 35, description: "Southern Coastal Operations" },
  { id: 6, name: "Kolkata", state: "West Bengal", x: 88, y: 22, projects: 28, description: "Eastern Regional Office" },
  { id: 7, name: "Pune", state: "Maharashtra", x: 73, y: 18, projects: 31, description: "Maharashtra Operations" },
  { id: 8, name: "Ahmedabad", state: "Gujarat", x: 72, y: 23, projects: 24, description: "Gujarat Regional Hub" },
  { id: 9, name: "Kochi", state: "Kerala", x: 76, y: 10, projects: 19, description: "Kerala Operations" }
];

// Simplified India map coordinates (scaled and adjusted for SVG viewBox)
const indiaMapPath = "M280,20 L320,25 L350,40 L380,60 L390,80 L385,100 L375,120 L360,140 L340,160 L320,180 L300,200 L280,220 L260,240 L240,250 L220,245 L200,235 L180,220 L160,200 L150,180 L145,160 L150,140 L160,120 L180,100 L200,80 L220,60 L240,40 L260,25 Z";

export default function IndiaPresenceMap() {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);

  // Convert lat/long to SVG coordinates (simplified conversion)
  const convertToSVG = (location: Location) => {
    const x = ((location.x - 68) / (97 - 68)) * 400 + 50;
    const y = ((35 - location.y) / (35 - 6)) * 300 + 50;
    return { x, y };
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Our <span className="text-primary">Presence</span> Across India
        </h3>
        <p className="text-lg text-gray-600">
          Strategic locations ensuring nationwide infrastructure development
        </p>
      </div>

      <div className="relative flex justify-center">
        <svg
          viewBox="0 0 500 400"
          className="w-full max-w-2xl h-auto"
        >
          {/* India Map Outline */}
          <path
            d={indiaMapPath}
            fill="rgba(59, 130, 246, 0.1)"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          
          {/* Location Points */}
          {presenceLocations.map((location) => {
            const { x, y } = convertToSVG(location);
            const isHovered = hoveredLocation?.id === location.id;
            
            return (
              <g key={location.id}>
                {/* Pulsing Background Circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill="rgba(59, 130, 246, 0.2)"
                  className={`animate-pulse ${isHovered ? 'opacity-100' : 'opacity-60'}`}
                />
                
                {/* Main Point */}
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="#3b82f6"
                  stroke="white"
                  strokeWidth="3"
                  className={`cursor-pointer transition-all duration-300 ${
                    isHovered ? 'scale-150' : 'hover:scale-125'
                  } drop-shadow-lg`}
                  onMouseEnter={() => setHoveredLocation(location)}
                  onMouseLeave={() => setHoveredLocation(null)}
                />
                
                {/* Location Label */}
                <text
                  x={x}
                  y={y - 20}
                  textAnchor="middle"
                  className="text-sm font-semibold fill-gray-800 pointer-events-none"
                >
                  {location.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Location Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {presenceLocations.map((location) => (
          <div
            key={location.id}
            className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
              hoveredLocation?.id === location.id
                ? 'bg-primary/10 border-primary shadow-lg scale-105'
                : 'bg-white border-gray-200 hover:border-primary/50 hover:shadow-md'
            }`}
            onMouseEnter={() => setHoveredLocation(location)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-900">{location.name}</h4>
              <Badge variant="secondary" className="text-xs">
                {location.projects} Projects
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-2">{location.state}</p>
            <p className="text-xs text-gray-500">{location.description}</p>
          </div>
        ))}
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">9</div>
          <div className="text-sm text-gray-600">Strategic Locations</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">314</div>
          <div className="text-sm text-gray-600">Total Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">28</div>
          <div className="text-sm text-gray-600">States Covered</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">100%</div>
          <div className="text-sm text-gray-600">Pan-India Coverage</div>
        </div>
      </div>
    </div>
  );
}