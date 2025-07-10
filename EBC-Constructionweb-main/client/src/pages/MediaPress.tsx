import { motion } from "framer-motion";
import { useState } from "react";

export default function MediaPress() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const pressReleases = [
    {
      id: 1,
      title: "Ramsethu Construction Achieves ₹10 Crore Turnover Milestone",
      date: "March 15, 2024",
      category: "Financial",
      summary: "Company celebrates significant growth milestone with 10+ crore turnover and expansion across 5 states",
      content: "Ramsethu Electrical & Mechanical Solutions Pvt. Ltd. today announced the achievement of ₹10 crore turnover milestone for FY 2023-24, marking a significant growth of 82% compared to the previous year. The company has successfully expanded its operations across 5 states with 40+ active projects.",
      highlights: ["₹10 Crore Turnover", "82% Growth", "5 States", "40+ Projects"],
      status: "Latest",
      icon: "📈"
    },
    {
      id: 2,
      title: "Major Contract Win: GE T&D India Ltd. 400kV Substation Project",
      date: "February 28, 2024",
      category: "Project Win",
      summary: "Secured prestigious contract for 400kV substation construction in West Bengal",
      content: "Ramsethu Construction has been awarded a major contract by GE T&D India Ltd. for the construction and commissioning of a 400kV substation in West Bengal. This project, valued at ₹3.49 crores, represents a significant milestone in the company's electrical infrastructure capabilities.",
      highlights: ["400kV Substation", "GE T&D Contract", "₹3.49 Cr Value", "West Bengal"],
      status: "Featured",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Solar Microgrid Project Completion in Rural Jharkhand",
      date: "January 20, 2024",
      category: "Project Completion",
      summary: "Successfully completed solar microgrid installation benefiting 500+ rural households",
      content: "Ramsethu Construction has successfully completed the installation of solar microgrid systems in remote villages of Jharkhand. The project, executed in partnership with Gram Oorja, provides sustainable energy solutions to over 500 households, contributing to rural electrification and community development.",
      highlights: ["Solar Microgrid", "500+ Households", "Rural Development", "Sustainable Energy"],
      status: "Published",
      icon: "☀️"
    },
    {
      id: 4,
      title: "Railway Infrastructure Excellence Award",
      date: "December 10, 2023",
      category: "Awards",
      summary: "Recognized for excellence in railway signaling and telecommunications projects",
      content: "Ramsethu Construction has been honored with the Railway Infrastructure Excellence Award by Indian Railways for outstanding performance in signaling and telecommunications projects. The award recognizes the company's commitment to safety, quality, and innovation in railway infrastructure development.",
      highlights: ["Railway Award", "Signaling Excellence", "Safety Standards", "Innovation"],
      status: "Published",
      icon: "🏆"
    },
    {
      id: 5,
      title: "Expansion into Uttar Pradesh and Odisha Markets",
      date: "November 15, 2023",
      category: "Business Expansion",
      summary: "Strategic expansion into new states with focus on renewable energy projects",
      content: "Ramsethu Construction announces strategic expansion into Uttar Pradesh and Odisha markets. The company has established regional offices and secured initial projects in solar energy and electrical infrastructure sectors, strengthening its pan-India presence.",
      highlights: ["Market Expansion", "UP & Odisha", "Regional Offices", "Solar Projects"],
      status: "Published",
      icon: "🌍"
    },
    {
      id: 6,
      title: "Partnership with Azure Power for Solar Rooftop Projects",
      date: "October 25, 2023",
      category: "Partnership",
      summary: "Strategic partnership to deliver 25kWp solar rooftop systems across multiple locations",
      content: "Ramsethu Construction has entered into a strategic partnership with Azure Power to deliver solar rooftop projects across multiple locations. The partnership focuses on installing 25kWp solar systems, contributing to India's renewable energy goals and sustainable development.",
      highlights: ["Azure Power", "25kWp Systems", "Solar Rooftop", "Renewable Energy"],
      status: "Published",
      icon: "🤝"
    },
    {
      id: 7,
      title: "Workforce Expansion: 100+ Engineers and Skilled Staff",
      date: "September 30, 2023",
      category: "Human Resources",
      summary: "Company expands workforce to support growing project portfolio and operations",
      content: "Ramsethu Construction has successfully expanded its workforce to over 100 engineers and skilled professionals. This expansion supports the company's growing project portfolio and enhances its capability to deliver large-scale infrastructure projects across multiple sectors.",
      highlights: ["100+ Workforce", "Engineers", "Skilled Staff", "Growth"],
      status: "Published",
      icon: "👥"
    },
    {
      id: 8,
      title: "BHEL PVUNL Project: Safety and CCTV Installation",
      date: "August 20, 2023",
      category: "Project Win",
      summary: "Secured contract for safety and CCTV systems at BHEL PVUNL project site",
      content: "Ramsethu Construction has been awarded a contract for the installation of comprehensive safety and CCTV systems at the BHEL PVUNL project site. This project underscores the company's expertise in industrial safety solutions and security infrastructure.",
      highlights: ["BHEL Contract", "Safety Systems", "CCTV Installation", "Industrial Security"],
      status: "Published",
      icon: "🛡️"
    }
  ];

  const categories = ["All", "Financial", "Project Win", "Project Completion", "Awards", "Business Expansion", "Partnership", "Human Resources"];

  const filteredReleases = selectedCategory === "All" 
    ? pressReleases 
    : pressReleases.filter(release => release.category === selectedCategory);

  const stats = [
    {
      metric: "Press Releases",
      value: pressReleases.length,
      description: "Total published releases"
    },
    {
      metric: "Media Coverage",
      value: "25+",
      description: "News articles and features"
    },
    {
      metric: "Awards Won",
      value: "3",
      description: "Industry recognition"
    },
    {
      metric: "Partnerships",
      value: "8+",
      description: "Strategic collaborations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
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
              Press <span className="text-yellow-400">Releases</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Official announcements and media communications from Ramsethu Construction
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
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
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
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest <span className="text-blue-600">Releases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredReleases.length} press releases found in {selectedCategory} category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl">{release.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      release.status === 'Latest' ? 'bg-yellow-100 text-yellow-800' :
                      release.status === 'Featured' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {release.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{release.title}</h3>
                    <p className="text-blue-100 text-sm">{release.date}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-2">📅</span>
                    <span className="text-sm font-medium">{release.category}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">{release.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {release.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{release.date}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-sm">
                      Read Full Release
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay <span className="text-yellow-400">Updated</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our press releases and stay informed about our latest 
              achievements, project wins, and company developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Subscribe to Updates
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg">
                Contact Media Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 