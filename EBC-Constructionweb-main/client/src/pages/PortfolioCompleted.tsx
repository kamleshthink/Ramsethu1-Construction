import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PortfolioCompleted() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedClient, setSelectedClient] = useState("All");

  const completedProjects = [
    {
      id: 1,
      title: "WBSETCL 400kV Substation",
      client: "GE T&D India Ltd.",
      location: "Durgapur, West Bengal",
      description: "Civil & Erection Work at WBSETCL 400kV Substation",
      value: "₹3.49 Crores",
      duration: "18 Months",
      category: "Electrical Infrastructure",
      completionDate: "March 2024",
      highlights: ["400kV High Voltage", "Civil Construction", "Electrical Installation", "Quality Standards"],
      technologies: ["High Voltage Systems", "Civil Engineering", "Electrical Equipment"],
      image: "/assets/photos/construction photos/Networks_Telecommunications (1).jpg",
      icon: "⚡"
    },
    {
      id: 2,
      title: "PGCIL Site Civil & ETC Work",
      client: "GE T&D India Ltd.",
      location: "Dalkhola, West Bengal",
      description: "Civil & ETC Work at PGCIL Site",
      value: "₹1.51 Crores",
      duration: "12 Months",
      category: "Electrical Infrastructure",
      completionDate: "January 2024",
      highlights: ["PGCIL Standards", "Civil Works", "ETC Installation", "Grid Infrastructure"],
      technologies: ["Power Grid", "Civil Construction", "Electrical Systems"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_54608a98.jpg",
      icon: "🏗️"
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
      completionDate: "December 2023",
      highlights: ["25kWp Systems", "Multiple Villages", "Sustainable Energy", "Community Impact"],
      technologies: ["Solar PV", "Microgrid Technology", "Energy Storage"],
      image: "/assets/photos/construction photos/solar microgrid.webp",
      icon: "☀️"
    },
    {
      id: 4,
      title: "Rooftop Solar PV System",
      client: "Arka Jain University",
      location: "Gamharia, Jamshedpur",
      description: "Rooftop Solar PV System – 50kWp",
      value: "₹20 Lakhs",
      duration: "6 Months",
      category: "Solar Rooftop",
      completionDate: "November 2023",
      highlights: ["50kWp System", "Educational Institution", "Cost Savings", "Green Energy"],
      technologies: ["Solar PV", "Rooftop Installation", "Grid Integration"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg",
      icon: "🏫"
    },
    {
      id: 5,
      title: "High Mast Lighting Installation",
      client: "BHEL / PVUNL",
      location: "Patratu, Ramgarh",
      description: "24 Nos. High Mast Erection (30 mtr height)",
      value: "₹9.72 Lakhs",
      duration: "8 Months",
      category: "Industrial Infrastructure",
      completionDate: "October 2023",
      highlights: ["30m High Mast", "Industrial Lighting", "Safety Standards", "Energy Efficiency"],
      technologies: ["High Mast Lighting", "Industrial Installation", "Safety Equipment"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_639cb6f3.jpg",
      icon: "🏭"
    },
    {
      id: 6,
      title: "Biogas Plant Installation",
      client: "Gram Oorja",
      location: "Darhatand, Jharkhand",
      description: "Biogas Plant Installation & Civil Works",
      value: "₹17.15 Lakhs",
      duration: "9 Months",
      category: "Rural Development",
      completionDate: "September 2023",
      highlights: ["Biogas Technology", "Rural Development", "Sustainable Solutions", "Community Impact"],
      technologies: ["Biogas Systems", "Civil Construction", "Rural Infrastructure"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_b126fb06.jpg",
      icon: "🌱"
    },
    {
      id: 7,
      title: "Railway Signaling Systems",
      client: "ECR & SER Railways",
      location: "Tori, Chopan, Patratu, Muri, Hatia",
      description: "Signaling, IBS, RTU, Telecom, DG Room, Track Work",
      value: "₹1.5+ Crores",
      duration: "24 Months",
      category: "Railway Infrastructure",
      completionDate: "August 2023",
      highlights: ["Advanced Signaling", "Telecommunications", "Multiple Locations", "Safety Systems"],
      technologies: ["Railway Signaling", "Telecommunications", "IBS Systems"],
      image: "/assets/photos/construction photos/Railway-Signaling.jpg",
      icon: "🚂"
    },
    {
      id: 8,
      title: "CCTV System Installation",
      client: "BHEL",
      location: "PVUNL Patratu",
      description: "CCTV System Supply & Installation",
      value: "₹5.41 Lakhs",
      duration: "4 Months",
      category: "Security Systems",
      completionDate: "July 2023",
      highlights: ["CCTV Installation", "Security Systems", "Industrial Safety", "Monitoring"],
      technologies: ["CCTV Systems", "Security Infrastructure", "Industrial Safety"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_5277bd48.jpg",
      icon: "📹"
    },
    {
      id: 9,
      title: "Solar Microgrid Projects",
      client: "PRADAN",
      location: "Khunti, Gumla, Raidih, Kharsawan",
      description: "Solar Microgrid & Wiring Projects (Multiple WOs)",
      value: "₹40+ Lakhs",
      duration: "15 Months",
      category: "Renewable Energy",
      completionDate: "June 2023",
      highlights: ["Multiple Locations", "Solar Microgrids", "Rural Electrification", "Community Development"],
      technologies: ["Solar PV", "Microgrid Technology", "Rural Infrastructure"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_7290e3e9.jpg",
      icon: "⚡"
    },
    {
      id: 10,
      title: "Electrical Infrastructure",
      client: "OSAM Dairy Pvt. Ltd.",
      location: "Chandil & Patratu",
      description: "11kV/415V Line, Transformer, Earthing, DG, Wiring",
      value: "₹30.57 Lakhs",
      duration: "7 Months",
      category: "Electrical Infrastructure",
      completionDate: "May 2023",
      highlights: ["11kV/415V Systems", "Transformer Installation", "Earthing Systems", "DG Setup"],
      technologies: ["Electrical Systems", "Transformer Technology", "Earthing Solutions"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_012c8248.jpg",
      icon: "🔌"
    },
    {
      id: 11,
      title: "Transmission Line Projects",
      client: "Gram Oorja",
      location: "Kurdeg, Simdega",
      description: "PCC Poles, Transmission Lines, Insulators",
      value: "₹1.14 Crores",
      duration: "14 Months",
      category: "Electrical Infrastructure",
      completionDate: "April 2023",
      highlights: ["PCC Poles", "Transmission Lines", "Insulator Installation", "Rural Electrification"],
      technologies: ["Transmission Systems", "PCC Technology", "Electrical Infrastructure"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_3264edc3.jpg",
      icon: "🏗️"
    },
    {
      id: 12,
      title: "CCTV Safety Park Package",
      client: "Bhavani Elect. Pvt. Ltd",
      location: "PVUNL Patratu",
      description: "CCTV Package for Safety Park",
      value: "₹18.29 Lakhs",
      duration: "5 Months",
      category: "Security Systems",
      completionDate: "March 2023",
      highlights: ["Safety Park", "CCTV Systems", "Industrial Safety", "Monitoring Solutions"],
      technologies: ["CCTV Technology", "Safety Systems", "Industrial Monitoring"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_ce539a4c.jpg",
      icon: "🛡️"
    }
  ];

  const categories = ["All", "Electrical Infrastructure", "Renewable Energy", "Railway Infrastructure", "Industrial Infrastructure", "Solar Rooftop", "Rural Development", "Security Systems"];
  const clients = ["All", ...Array.from(new Set(completedProjects.map(p => p.client)))];

  const filteredProjects = completedProjects.filter(project => 
    (selectedCategory === "All" || project.category === selectedCategory) &&
    (selectedClient === "All" || project.client === selectedClient)
  );

  const stats = [
    {
      metric: "Total Projects",
      value: completedProjects.length,
      description: "Successfully completed"
    },
    {
      metric: "Total Value",
      value: "₹8.5+ Crores",
      description: "Combined project value"
    },
    {
      metric: "Client Satisfaction",
      value: "98%",
      description: "Average satisfaction rate"
    },
    {
      metric: "On-Time Delivery",
      value: "100%",
      description: "All projects delivered on time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Completed <span className="text-yellow-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              A comprehensive showcase of our successfully delivered infrastructure projects
            </p>
          </motion.div>
        </div>
      </div>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.metric}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select 
                value={selectedClient} 
                onChange={(e) => setSelectedClient(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {clients.map(client => (
                  <option key={client} value={client}>{client}</option>
                ))}
              </select>
            </div>
            {(selectedCategory !== "All" || selectedClient !== "All") && (
              <button 
                onClick={() => { setSelectedCategory("All"); setSelectedClient("All"); }}
                className="text-red-600 underline hover:text-red-800"
              >
                Clear Filters
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project <span className="text-green-600">Showcase</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredProjects.length} projects found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-green-500 to-blue-600">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-green-100 text-sm">{project.client}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className="mr-2">📍</span>
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-600">Value</div>
                      <div className="text-sm font-bold text-green-600">{project.value}</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-600">Duration</div>
                      <div className="text-sm font-bold text-blue-600">{project.duration}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-gray-600 mb-2">Completed: {project.completionDate}</div>
                    <div className="text-xs text-gray-600 mb-2">Category: {project.category}</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Key Highlights:</h4>
                    <div className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 text-sm"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-yellow-400">Start</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our list of satisfied clients and let us deliver your next 
              infrastructure project with the same excellence and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Start Your Project
              </Link>
              <Link to="/landmarks/gallery" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors duration-300 text-lg">
                Download Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 