import { useState } from "react";

// State center coordinates for marker placement (approximate, SVG viewBox 800x900)
const stateMarkers = [
  {
    name: "Bihar",
    city: "Patna",
    x: 570,
    y: 350,
    color: "#facc15" // yellow
  },
  {
    name: "Jharkhand",
    city: "Ranchi",
    x: 570,
    y: 420,
    color: "#22d3ee" // cyan
  },
  {
    name: "Uttar Pradesh",
    city: "Lucknow",
    x: 480,
    y: 300,
    color: "#6366f1" // indigo
  },
  {
    name: "West Bengal",
    city: "Kolkata",
    x: 700,
    y: 400,
    color: "#f472b6" // pink
  }
];

// State path IDs for highlight
const highlightStates = {
  Bihar: { id: "BR", color: "#fde68a" },
  Jharkhand: { id: "JH", color: "#a7f3d0" },
  "Uttar Pradesh": { id: "UP", color: "#c7d2fe" },
  "West Bengal": { id: "WB", color: "#fbcfe8" }
};

export default function IndiaPresenceMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
          OUR <span className="text-yellow-400">PRESENCE</span> ACROSS INDIA
        </h3>
        <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 rounded-full mx-auto mb-4 opacity-80"></div>
        <p className="text-xl md:text-2xl text-gray-700 font-medium">
          Strategic Branch Offices Ensuring Nationwide Infrastructure Excellence
        </p>
      </div>
      
      <div className="flex justify-center">
        <svg
          viewBox="0 0 800 900"
          className="w-full max-w-3xl h-auto"
        >
          {/* India Map SVG paths (simplified, real state boundaries) */}
          {/* All other states in light gray, 4 states highlighted */}
          <g>
            {/* Uttar Pradesh */}
            <path id="UP" d="M 400 200 L 500 200 L 550 300 L 480 350 L 400 300 Z" fill={highlightStates["Uttar Pradesh"].color} stroke="#6366f1" strokeWidth="2" />
            {/* Bihar */}
            <path id="BR" d="M 550 300 L 600 320 L 570 400 L 480 350 Z" fill={highlightStates["Bihar"].color} stroke="#facc15" strokeWidth="2" />
            {/* Jharkhand */}
            <path id="JH" d="M 570 400 L 600 480 L 520 500 L 480 350 Z" fill={highlightStates["Jharkhand"].color} stroke="#22d3ee" strokeWidth="2" />
            {/* West Bengal */}
            <path id="WB" d="M 600 320 L 700 400 L 600 480 L 570 400 Z" fill={highlightStates["West Bengal"].color} stroke="#f472b6" strokeWidth="2" />
            {/* Other states (dummy shapes for demo) */}
            <path d="M 400 200 L 400 300 L 480 350 L 520 500 L 400 600 L 300 500 L 350 350 L 400 300 Z" fill="#e5e7eb" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 400 600 L 520 500 L 600 480 L 700 700 L 600 800 L 400 800 Z" fill="#e5e7eb" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 400 800 L 600 800 L 700 850 L 400 900 Z" fill="#e5e7eb" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 400 200 L 300 200 L 200 300 L 350 350 L 400 300 Z" fill="#e5e7eb" stroke="#cbd5e1" strokeWidth="2" />
          </g>
          {/* Markers for 4 states */}
          {stateMarkers.map((marker) => (
            <g key={marker.name}>
              {/* Glowing background */}
              <circle
                cx={marker.x}
                cy={marker.y}
                r="22"
                fill={marker.color}
                opacity="0.25"
                className="animate-pulse"
              />
              {/* Main marker */}
              <circle
                cx={marker.x}
                cy={marker.y}
                r="10"
                fill={marker.color}
                stroke="#fff"
                strokeWidth="3"
                className="drop-shadow-xl cursor-pointer"
                onMouseEnter={() => setHovered(marker.name)}
                onMouseLeave={() => setHovered(null)}
              />
              {/* Tooltip/label */}
              {hovered === marker.name && (
                <g>
                  <rect x={marker.x - 50} y={marker.y - 50} width="100" height="32" rx="8" fill="#fff" opacity="0.95" />
                  <text x={marker.x} y={marker.y - 30} textAnchor="middle" className="font-bold fill-gray-800 text-lg">
                    {marker.name}
                  </text>
                  <text x={marker.x} y={marker.y - 15} textAnchor="middle" className="fill-gray-500 text-sm">
                    {marker.city}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>
      
      {/* State Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {stateMarkers.map((marker) => (
          <div
            key={marker.name}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
              hovered === marker.name
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300 shadow-xl scale-105'
                : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
            }`}
            onMouseEnter={() => setHovered(marker.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center mb-3">
              <div
                className="w-4 h-4 rounded-full mr-3"
                style={{ backgroundColor: marker.color }}
              ></div>
              <h4 className="font-bold text-xl text-gray-900">{marker.name}</h4>
            </div>
            <p className="text-lg text-blue-600 font-semibold mb-2">{marker.city}</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {marker.name === "Bihar" && "Eastern Regional Hub - Infrastructure & Development Projects"}
              {marker.name === "Jharkhand" && "Mining & Industrial Infrastructure Specialists"}
              {marker.name === "Uttar Pradesh" && "Northern Operations Center - Mega Infrastructure Projects"}
              {marker.name === "West Bengal" && "Eastern Coastal Hub - Port & Urban Development"}
            </p>
          </div>
        ))}
      </div>
      
      {/* Statistics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t-2 border-gray-200">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">4</div>
          <div className="text-sm text-gray-600 font-semibold">Branch Offices</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">120</div>
          <div className="text-sm text-gray-600 font-semibold">Total Projects</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">4</div>
          <div className="text-sm text-gray-600 font-semibold">States Covered</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">15+</div>
          <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
        </div>
      </div>
    </div>
  );
}