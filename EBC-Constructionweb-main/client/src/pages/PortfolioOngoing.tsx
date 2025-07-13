import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PortfolioOngoing() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedClient, setSelectedClient] = useState("All");

  const ongoingProjects = [
    {
      id: 1,
      title: "NTPC Kahalgaon Civil & Erection",
      client: "GE T&D India Ltd.",
      location: "Kahalgaon, Bihar",
      description: "Civil & Erection Work at NTPC Kahalgaon",
      value: "₹2.68 Crores",
      duration: "18 Months",
      category: "Electrical Infrastructure",
      startDate: "January 2024",
      expectedCompletion: "June 2025",
      progress: 65,
      highlights: ["NTPC Standards", "High Voltage Systems", "Civil Construction", "Electrical Installation"],
      technologies: ["High Voltage", "Civil Engineering", "Electrical Systems", "Safety Protocols"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.59_2c0bb881.jpg",
      icon: "⚡"
    },
    {
      id: 2,
      title: "132kV Substation Control Room",
      client: "GE T&D India Ltd.",
      location: "Purulia & Ramkanali (WB)",
      description: "Control Room Construction – 132kV Substation",
      value: "₹5.13 Crores",
      duration: "20 Months",
      category: "Electrical Infrastructure",
      startDate: "March 2024",
      expectedCompletion: "October 2025",
      progress: 45,
      highlights: ["132kV Systems", "Control Room", "Substation Construction", "Advanced Technology"],
      technologies: ["Substation Design", "Control Systems", "Civil Construction", "Electrical Integration"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.59_e530fddd.jpg",
      icon: "🏗️"
    },
    {
      id: 3,
      title: "132kV Substation ETC Work",
      client: "GE T&D India Ltd.",
      location: "Purulia & Ramkanali (WB)",
      description: "ETC Work – 132kV Substation",
      value: "₹1.48 Crores",
      duration: "16 Months",
      category: "Electrical Infrastructure",
      startDate: "April 2024",
      expectedCompletion: "August 2025",
      progress: 55,
      highlights: ["ETC Installation", "132kV Systems", "Quality Standards", "Technical Excellence"],
      technologies: ["ETC Systems", "High Voltage", "Electrical Installation", "Quality Control"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.44.00_46663714.jpg",
      icon: "🔌"
    },
    {
      id: 4,
      title: "Railway Signal Gear Projects",
      client: "ECR - Indian Railways",
      location: "Dhanbad Division",
      description: "Signal Gear Removal & Gate Closure Projects",
      value: "₹62.67 Lakhs",
      duration: "12 Months",
      category: "Railway Infrastructure",
      startDate: "February 2024",
      expectedCompletion: "February 2025",
      progress: 75,
      highlights: ["Signal Systems", "Railway Safety", "Gate Operations", "Infrastructure Upgrade"],
      technologies: ["Railway Signaling", "Safety Systems", "Infrastructure", "Automation"],
      image: "/assets/photos/construction photos/Railway-Signaling.jpg",
      icon: "🚂"
    },
    {
      id: 5,
      title: "Overrun Line Extension",
      client: "SER - Indian Railways",
      location: "Tangarbansali, Ranchi Division",
      description: "Extension of Overrun Line & Additional Loop Line Work",
      value: "₹49.26 Lakhs",
      duration: "10 Months",
      category: "Railway Infrastructure",
      startDate: "March 2024",
      expectedCompletion: "January 2025",
      progress: 80,
      highlights: ["Track Extension", "Loop Line", "Railway Infrastructure", "Operational Efficiency"],
      technologies: ["Track Construction", "Railway Engineering", "Infrastructure Development"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_77ec44ef.jpg",
      icon: "🛤️"
    },
    {
      id: 6,
      title: "IBS Signal Construction",
      client: "SER - Indian Railways",
      location: "Barlanga – Harubera, Muri Division",
      description: "IBS Signal Construction between Stations",
      value: "₹83.21 Lakhs",
      duration: "14 Months",
      category: "Railway Infrastructure",
      startDate: "January 2024",
      expectedCompletion: "March 2025",
      progress: 60,
      highlights: ["IBS Systems", "Inter-Station Signaling", "Safety Enhancement", "Modern Technology"],
      technologies: ["IBS Signaling", "Railway Safety", "Modern Systems", "Inter-Station Communication"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_cb8829dd.jpg",
      icon: "🚦"
    },
    {
      id: 7,
      title: "RTU Installation & Monitoring",
      client: "SER - Indian Railways",
      location: "Ranchi Division",
      description: "RTU Installation + Monitoring Equipment",
      value: "₹1.14 Crores",
      duration: "16 Months",
      category: "Railway Infrastructure",
      startDate: "December 2023",
      expectedCompletion: "April 2025",
      progress: 70,
      highlights: ["RTU Systems", "Monitoring Equipment", "Railway Technology", "Operational Control"],
      technologies: ["RTU Technology", "Monitoring Systems", "Railway Control", "Data Management"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_f1e98f35.jpg",
      icon: "📊"
    },
    {
      id: 8,
      title: "Telecom Gears Rehabilitation",
      client: "ECR - Indian Railways",
      location: "GMO – Tori Section",
      description: "Rehabilitation of Telecom Gears & Cables",
      value: "₹19.44 Lakhs",
      duration: "8 Months",
      category: "Railway Infrastructure",
      startDate: "May 2024",
      expectedCompletion: "January 2025",
      progress: 85,
      highlights: ["Telecom Rehabilitation", "Cable Systems", "Infrastructure Upgrade", "Communication Enhancement"],
      technologies: ["Telecommunications", "Cable Systems", "Infrastructure Rehabilitation", "Communication Technology"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_0335104f.jpg",
      icon: "📡"
    },
    {
      id: 9,
      title: "Biogas Plant Installation",
      client: "Gram Oorja",
      location: "Mukunda & Hurhuri, Ranchi",
      description: "Biogas Plant Installation & Allied Work",
      value: "₹37+ Lakhs",
      duration: "12 Months",
      category: "Rural Development",
      startDate: "March 2024",
      expectedCompletion: "March 2025",
      progress: 50,
      highlights: ["Biogas Technology", "Rural Development", "Sustainable Energy", "Community Impact"],
      technologies: ["Biogas Systems", "Rural Infrastructure", "Sustainable Technology", "Community Development"],
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_17e4f444.jpg",
      icon: "🌱"
    }
  ];

  const categories = ["All", "Electrical Infrastructure", "Railway Infrastructure", "Rural Development"];
  const clients = ["All", ...Array.from(new Set(ongoingProjects.map(p => p.client)))];

  const filteredProjects = ongoingProjects.filter(project => 
    (selectedCategory === "All" || project.category === selectedCategory) &&
    (selectedClient === "All" || project.client === selectedClient)
  );

  const stats = [
    {
      metric: "Active Projects",
      value: ongoingProjects.length,
      description: "Currently in progress"
    },
    {
      metric: "Total Value",
      value: "₹12+ Crores",
      description: "Combined project value"
    },
    {
      metric: "Average Progress",
      value: "65%",
      description: "Overall completion rate"
    },
    {
      metric: "On-Schedule",
      value: "100%",
      description: "All projects on track"
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-20 overflow-hidden">
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
              Ongoing <span className="text-yellow-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">
              Real-time progress of our active infrastructure development projects
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
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
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
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select 
                value={selectedClient} 
                onChange={(e) => setSelectedClient(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
              Active <span className="text-orange-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredProjects.length} projects currently in progress
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
                <div className="relative h-48 bg-gradient-to-br from-orange-500 to-red-600">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Ongoing
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-orange-100 text-sm">{project.client}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className="mr-2">📍</span>
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${getProgressColor(project.progress)}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-600">Value</div>
                      <div className="text-sm font-bold text-orange-600">{project.value}</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-600">Duration</div>
                      <div className="text-sm font-bold text-blue-600">{project.duration}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-gray-600 mb-1">Started: {project.startDate}</div>
                    <div className="text-xs text-gray-600 mb-1">Expected: {project.expectedCompletion}</div>
                    <div className="text-xs text-gray-600 mb-2">Category: {project.category}</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Key Highlights:</h4>
                    <div className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300 text-sm"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project <span className="text-orange-600">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expected completion schedule for our ongoing projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{project.icon}</span>
                  <span className="text-sm font-medium text-orange-600">{project.progress}%</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.client}</p>
                <div className="space-y-2 text-xs text-gray-600">
                  <div>Start: {project.startDate}</div>
                  <div>Expected: {project.expectedCompletion}</div>
                  <div>Value: {project.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-yellow-400">Success</span>
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Be part of our ongoing success story and let us deliver your 
              infrastructure project with the same dedication and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Start Your Project
              </Link>
              <Link to="/landmarks/ongoing" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors duration-300 text-lg">
                Get Project Updates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 