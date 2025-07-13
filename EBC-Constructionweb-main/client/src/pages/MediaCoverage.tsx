import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MediaCoverage() {
  const coverage = [
    {
      id: 1,
      title: "Ramsethu Construction: Rising Star in Infrastructure",
      source: "Economic Times",
      date: "March 2024",
      summary: "Feature article on the company's rapid growth and national expansion.",
      link: "https://economictimes.example.com/ramsethu-construction-growth",
      highlights: ["₹10 Cr Turnover", "5+ States", "40+ Projects", "Sustainable Growth"],
      icon: "📰"
    },
    {
      id: 2,
      title: "Solar Microgrids Powering Rural India",
      source: "Hindustan Times",
      date: "Feb 2024",
      summary: "Coverage of Ramsethu's solar microgrid projects in Jharkhand.",
      link: "https://hindustantimes.example.com/solar-microgrids-jharkhand",
      highlights: ["Rural Electrification", "500+ Households", "Renewable Energy"],
      icon: "☀️"
    },
    {
      id: 3,
      title: "Railway Signaling Modernization Success",
      source: "Railway Gazette",
      date: "Jan 2024",
      summary: "Recognition for excellence in railway signaling and telecom projects.",
      link: "https://railwaygazette.example.com/ramsethu-railway-signaling",
      highlights: ["Signaling Excellence", "Safety Standards", "Innovation"],
      icon: "🚂"
    },
    {
      id: 4,
      title: "Business Standard: From Local to National",
      source: "Business Standard",
      date: "Dec 2023",
      summary: "Case study on Ramsethu's strategic expansion and quality focus.",
      link: "https://businessstandard.example.com/ramsethu-expansion",
      highlights: ["Strategic Expansion", "Quality Focus", "Customer Satisfaction"],
      icon: "🌍"
    },
    {
      id: 5,
      title: "Awarded for Safety Excellence",
      source: "Safety & Security Today",
      date: "Aug 2023",
      summary: "Award coverage for industrial safety and security solutions.",
      link: "https://safetysecurity.example.com/ramsethu-safety-award",
      highlights: ["Safety Award", "CCTV Systems", "Workplace Security"],
      icon: "🛡️"
    }
  ];

  const stats = [
    { metric: "Media Mentions", value: "25+", description: "Total media features" },
    { metric: "Top Publications", value: "8+", description: "Leading news sources" },
    { metric: "Awards & Recognition", value: "5", description: "Industry accolades" },
    { metric: "Coverage Years", value: "2019-2024", description: "Timeline of recognition" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Media <span className="text-yellow-400">Coverage</span></h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">Recognition, features, and news about Ramsethu Construction</p>
          </motion.div>
        </div>
      </div>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.value}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.metric}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Coverage List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured <span className="text-green-600">Mentions</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Major news articles, features, and awards</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {coverage.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-40 bg-gradient-to-br from-green-500 to-blue-600">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute top-4 left-4"><span className="text-4xl">{item.icon}</span></div>
                  <div className="absolute top-4 right-4"><span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{item.date}</span></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-green-100 text-sm">{item.source}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">{item.summary}</p>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">{h}</span>
                      ))}
                    </div>
                  </div>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 text-sm">Read Full Article</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Feature Us?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">For media queries, interviews, or to feature Ramsethu Construction in your publication, contact our media team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Contact Media Team
              </Link>
              <Link to="/media/press" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors duration-300 text-lg">
                Download Media Kit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 