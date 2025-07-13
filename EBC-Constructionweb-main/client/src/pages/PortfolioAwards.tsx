import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PortfolioAwards() {
  const awards = [
    {
      id: 1,
      title: "Excellence in Infrastructure Development",
      organization: "Ministry of Power, Government of India",
      year: "2024",
      category: "National Recognition",
      description: "Recognition for outstanding contribution to electrical infrastructure development and rural electrification projects.",
      highlights: ["National Level Award", "Infrastructure Excellence", "Government Recognition", "Industry Leadership"],
      icon: "🏆",
      image: "/assets/photos/construction photos/Networks_Telecommunications (1).jpg"
    },
    {
      id: 2,
      title: "Best Solar Project Implementation",
      organization: "Solar Energy Society of India",
      year: "2023",
      category: "Renewable Energy",
      description: "Award for innovative solar microgrid deployment and sustainable energy solutions in rural areas.",
      highlights: ["Solar Innovation", "Rural Development", "Sustainable Energy", "Community Impact"],
      icon: "☀️",
      image: "/assets/photos/construction photos/solar microgrid.webp"
    },
    {
      id: 3,
      title: "Railway Infrastructure Excellence",
      organization: "Indian Railways",
      year: "2023",
      category: "Railway Sector",
      description: "Recognition for excellence in railway signaling systems and telecommunications infrastructure.",
      highlights: ["Railway Excellence", "Safety Standards", "Technical Innovation", "Operational Efficiency"],
      icon: "🚂",
      image: "/assets/photos/construction photos/Railway-Signaling.jpg"
    },
    {
      id: 4,
      title: "Quality Management Excellence",
      organization: "Bureau of Indian Standards",
      year: "2023",
      category: "Quality Standards",
      description: "ISO 9001:2015 certification and recognition for maintaining highest quality standards in all projects.",
      highlights: ["ISO Certification", "Quality Standards", "Process Excellence", "Continuous Improvement"],
      icon: "⭐",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg"
    },
    {
      id: 5,
      title: "Safety Excellence Award",
      organization: "National Safety Council",
      year: "2023",
      category: "Safety & Health",
      description: "Recognition for maintaining zero major safety incidents and implementing best safety practices.",
      highlights: ["Zero Incidents", "Safety Leadership", "Best Practices", "Employee Safety"],
      icon: "🛡️",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_54608a98.jpg"
    },
    {
      id: 6,
      title: "Rural Development Champion",
      organization: "Ministry of Rural Development",
      year: "2022",
      category: "Rural Development",
      description: "Award for significant contribution to rural infrastructure development and community empowerment.",
      highlights: ["Rural Development", "Community Impact", "Infrastructure", "Social Responsibility"],
      icon: "🏘️",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_639cb6f3.jpg"
    },
    {
      id: 7,
      title: "Innovation in Electrical Engineering",
      organization: "Institution of Engineers India",
      year: "2022",
      category: "Engineering Excellence",
      description: "Recognition for innovative approaches in electrical infrastructure and engineering solutions.",
      highlights: ["Engineering Innovation", "Technical Excellence", "Problem Solving", "Industry Advancement"],
      icon: "⚡",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_b126fb06.jpg"
    },
    {
      id: 8,
      title: "Corporate Social Responsibility Excellence",
      organization: "Confederation of Indian Industry",
      year: "2022",
      category: "CSR",
      description: "Award for outstanding contribution to community development and sustainable business practices.",
      highlights: ["CSR Excellence", "Community Development", "Sustainable Practices", "Social Impact"],
      icon: "🤝",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_5277bd48.jpg"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      year: "2023",
      status: "Active",
      icon: "📋"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System",
      year: "2023",
      status: "Active",
      icon: "🌱"
    },
    {
      name: "OHSAS 18001:2007",
      description: "Occupational Health & Safety",
      year: "2023",
      status: "Active",
      icon: "🛡️"
    },
    {
      name: "CEA License",
      description: "Central Electricity Authority",
      year: "2022",
      status: "Active",
      icon: "⚡"
    },
    {
      name: "BIS Certification",
      description: "Bureau of Indian Standards",
      year: "2022",
      status: "Active",
      icon: "🏛️"
    },
    {
      name: "MSME Registration",
      description: "Ministry of MSME",
      year: "2021",
      status: "Active",
      icon: "🏢"
    }
  ];

  const achievements = [
    {
      metric: "Awards Won",
      value: "8+",
      description: "National and regional awards",
      icon: "🏆"
    },
    {
      metric: "Certifications",
      value: "6",
      description: "Quality and safety certifications",
      icon: "📜"
    },
    {
      metric: "Years of Excellence",
      value: "8+",
      description: "Consistent performance",
      icon: "⭐"
    },
    {
      metric: "Client Satisfaction",
      value: "98%",
      description: "Average satisfaction rate",
      icon: "😊"
    }
  ];

  const recognitionCategories = [
    {
      name: "National Awards",
      count: 3,
      icon: "🏛️",
      description: "Government and national level recognition"
    },
    {
      name: "Industry Awards",
      count: 2,
      icon: "🏭",
      description: "Sector-specific excellence awards"
    },
    {
      name: "Quality Certifications",
      count: 6,
      icon: "📋",
      description: "International quality standards"
    },
    {
      name: "Safety Recognition",
      count: 1,
      icon: "🛡️",
      description: "Safety and health excellence"
    }
  ];

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
              Awards & <span className="text-yellow-400">Recognition</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">
              Celebrating excellence and recognition in infrastructure development
            </p>
          </motion.div>
        </div>
      </div>

      {/* Achievements Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Achievement <span className="text-yellow-600">Overview</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized through numerous awards, 
              certifications, and industry accolades.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.metric}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recognition <span className="text-yellow-600">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse recognition across multiple sectors and standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitionCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <div className="text-3xl font-bold text-yellow-600 mb-3">{category.count}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Award <span className="text-yellow-600">Showcase</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our prestigious awards and recognitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-yellow-500 to-orange-600">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl">{award.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                      {award.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
                    <p className="text-yellow-100 text-sm">{award.organization}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-2">🏆</span>
                    <span className="text-sm font-medium">{award.category}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">{award.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {award.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Award Year: {award.year}</span>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors duration-300 text-sm">
                      View Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality <span className="text-yellow-600">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International standards and quality certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{cert.description}</p>
                <div className="text-sm text-gray-600">Certified: {cert.year}</div>
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
              Excellence <span className="text-yellow-400">Recognized</span>
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Our awards and certifications reflect our commitment to quality, 
              safety, and excellence in every project we undertake.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/landmarks/awards" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Download Certificates
              </Link>
              <Link to="/landmarks/awards" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-yellow-600 transition-colors duration-300 text-lg">
                View All Awards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 