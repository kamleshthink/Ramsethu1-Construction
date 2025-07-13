import { useNavigate } from "react-router-dom";
import { expertiseData } from "@/data/expertiseData";

export default function PortfolioFeatured() {
  const navigate = useNavigate();

  // expertiseData से real featured projects
  const featuredProjects = [
    {
      id: 1,
      title: "Solar Rooftop Solutions",
      client: "Arka Jain University",
      location: "Gamharia, Jamshedpur",
      description: "50kWp Rooftop Solar PV System installation, demonstrating our commitment to sustainable energy solutions in educational institutions.",
      value: "₹20 Lakhs",
      duration: "6 Months",
      category: "Solar Rooftop",
      status: "Completed",
      highlights: [
        "50kWp Rooftop System",
        "Educational Institution",
        "Sustainable Energy",
        "Cost Savings"
      ],
      technologies: ["Solar PV", "Rooftop Installation", "Grid Integration", "Monitoring Systems"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg",
      icon: "🏫"
    },
    {
      id: 2,
      title: "Railway Signalling Systems",
      client: "ECR & SER Railways",
      location: "Tori, Chopan, Patratu, Muri, Hatia",
      description: "Signaling, IBS, RTU, Telecom, DG Room, Track Work",
      value: "₹1.5+ Crores",
      duration: "24 Months",
      category: "Railway Infrastructure",
      status: "Completed",
      highlights: [
        "Advanced Signaling",
        "Telecommunications",
        "Multiple Locations",
        "Safety Systems"
      ],
      technologies: ["Railway Signaling", "Telecommunications", "IBS Systems"],
      image: "/assets/photos/construction photos/Railway-Signaling.jpg",
      icon: "🚆"
    },
    {
      id: 3,
      title: "Solar Microgrid Deployment",
      client: "Azure Power",
      location: "Gumla (Korle, Hisir, Barkani)",
      description: "Installation of 25kWp Solar Microgrids",
      value: "₹20.35 Lakhs",
      duration: "10 Months",
      category: "Renewable Energy",
      status: "Completed",
      highlights: [
        "25kWp Systems",
        "Multiple Villages",
        "Sustainable Energy",
        "Community Impact"
      ],
      technologies: ["Solar PV", "Microgrid Technology", "Energy Storage"],
      image: "/assets/photos/construction photos/solar microgrid.webp",
      icon: "☀️"
    },
    {
      id: 4,
      title: "High Mast Lighting Installation",
      client: "BHEL / PVUNL",
      location: "Patratu, Ramgarh",
      description: "24 Nos. High Mast Erection (30 mtr height)",
      value: "₹9.72 Lakhs",
      duration: "8 Months",
      category: "Industrial Infrastructure",
      status: "Completed",
      highlights: [
        "30m High Mast",
        "Industrial Lighting",
        "Safety Standards",
        "Energy Efficiency"
      ],
      technologies: ["High Mast Lighting", "Industrial Installation", "Safety Equipment"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_54608a98.jpg",
      icon: "🏭"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            Featured <span className="text-yellow-400">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed text-center">
            हमारी कंपनी के सबसे प्रमुख और इनोवेटिव प्रोजेक्ट्स
          </p>
        </div>
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{project.icon}</span>
                    <h2 className="text-xl font-bold text-blue-800">{project.title}</h2>
                  </div>
                  <div className="text-gray-600 mb-1 font-semibold">{project.client}</div>
                  <div className="text-gray-500 mb-1">{project.location}</div>
                  <div className="text-gray-700 mb-2 text-sm">{project.description}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">{h}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((t, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">{project.status}</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">{project.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 