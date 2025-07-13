import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ValuesESG() {
  const environmentalInitiatives = [
    {
      title: "Renewable Energy",
      description: "Promotion of renewable energy systems like solar PV & biogas",
      icon: "☀️",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Carbon Reduction",
      description: "Reduction of carbon footprint through solar microgrids",
      icon: "🌍",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Waste Management",
      description: "Responsible waste management on project sites",
      icon: "♻️",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const socialInitiatives = [
    {
      title: "Skill Training",
      description: "MoUs with 2 ITIs to provide solar skill training to rural youth",
      icon: "📚",
      impact: "100+",
      unit: "Youth Trained"
    },
    {
      title: "Women Empowerment",
      description: "Sponsored 20+ underprivileged girls' marriages",
      icon: "👰",
      impact: "20+",
      unit: "Girls Supported"
    },
    {
      title: "Education Support",
      description: "Promotion of Sanskar Kendras for value education in villages",
      icon: "🏫",
      impact: "5+",
      unit: "Centers"
    },
    {
      title: "Local Employment",
      description: "Local employment generation at every project site",
      icon: "💼",
      impact: "500+",
      unit: "Jobs Created"
    }
  ];

  const governanceInitiatives = [
    {
      title: "Compliance",
      description: "GST, PF, ESIC, Electrical License compliance maintained",
      icon: "📋",
      features: ["GST Compliance", "PF Registration", "ESIC Coverage", "Electrical License"]
    },
    {
      title: "Transparency",
      description: "Transparent billing, certified audits, and verified labor records",
      icon: "🔍",
      features: ["Transparent Billing", "Certified Audits", "Labor Records", "Financial Transparency"]
    },
    {
      title: "Independent Oversight",
      description: "Independent Director (Sanjeet Kumar) onboard for regulatory oversight",
      icon: "👥",
      features: ["Independent Director", "Regulatory Oversight", "Board Governance", "Ethical Practices"]
    },
    {
      title: "Ethical Practices",
      description: "Ethics-first bidding & tendering practices",
      icon: "🤝",
      features: ["Ethical Bidding", "Fair Tendering", "Integrity", "Best Practices"]
    }
  ];

  const esgMetrics = [
    {
      category: "Environmental",
      metrics: [
        { label: "Solar Capacity", value: "300+ kWp", icon: "☀️" },
        { label: "Villages Electrified", value: "50+", icon: "🏘️" },
        { label: "Carbon Reduction", value: "Significant", icon: "🌱" }
      ]
    },
    {
      category: "Social",
      metrics: [
        { label: "Youth Trained", value: "100+", icon: "👨‍🎓" },
        { label: "Girls Supported", value: "20+", icon: "👰" },
        { label: "Jobs Created", value: "500+", icon: "💼" }
      ]
    },
    {
      category: "Governance",
      metrics: [
        { label: "Compliance Rate", value: "100%", icon: "✅" },
        { label: "Audit Score", value: "Excellent", icon: "📊" },
        { label: "Ethical Rating", value: "A+", icon: "🏆" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
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
              ESG <span className="text-yellow-400">Initiatives</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Environmental, Social, and Governance excellence embedded in our operations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aligning with <span className="text-green-600">Global ESG Values</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ramsethu aligns with global ESG values by embedding environmental care, social responsibility, 
              and governance ethics into its operations. We believe in creating value that extends beyond 
              financial returns to include positive environmental and social impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl text-white">
              <div className="text-6xl mb-6">🌿</div>
              <h3 className="text-2xl font-bold mb-4">Environmental</h3>
              <p className="text-green-100">Promoting renewable energy and reducing environmental impact</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl text-white">
              <div className="text-6xl mb-6">👥</div>
              <h3 className="text-2xl font-bold mb-4">Social</h3>
              <p className="text-blue-100">Empowering communities and creating social value</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-3xl text-white">
              <div className="text-6xl mb-6">🏛️</div>
              <h3 className="text-2xl font-bold mb-4">Governance</h3>
              <p className="text-purple-100">Maintaining highest ethical and governance standards</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Environmental</span> Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental programs that promote sustainability and reduce impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {environmentalInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${initiative.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{initiative.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{initiative.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Social</span> Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering communities and creating lasting social impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200"
              >
                <div className="text-5xl mb-6">{initiative.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{initiative.description}</p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {initiative.impact}
                  </div>
                  <div className="text-gray-600 text-sm">{initiative.unit}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">Governance</span> Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintaining highest standards of governance and ethical practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-6">{initiative.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{initiative.description}</p>
                <div className="space-y-2">
                  {initiative.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ESG <span className="text-green-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable indicators of our ESG performance and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgMetrics.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{metric.icon}</div>
                        <span className="text-gray-700 font-medium">{metric.label}</span>
                      </div>
                      <div className="text-lg font-bold text-green-600">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-yellow-400">ESG Journey</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Partner with us to create sustainable value that benefits communities, 
              protects the environment, and maintains the highest governance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Partner With Us
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors duration-300 text-lg">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 