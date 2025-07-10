import { motion } from "framer-motion";

export default function InvestorsFinancial() {
  const financialHighlights = [
    {
      title: "Revenue Growth",
      value: "₹25+ Crores",
      description: "Annual revenue with consistent growth",
      icon: "📈",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Project Portfolio",
      value: "300+",
      description: "Successfully completed projects",
      icon: "🏗️",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Market Presence",
      value: "4 States",
      description: "Bihar, Jharkhand, UP, West Bengal",
      icon: "🗺️",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Client Base",
      value: "50+",
      description: "PSU and private sector clients",
      icon: "🤝",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const revenueBreakdown = [
    {
      sector: "Electrical Infrastructure",
      percentage: 40,
      amount: "₹10 Crores",
      description: "Power transmission and distribution projects"
    },
    {
      sector: "Renewable Energy",
      percentage: 30,
      amount: "₹7.5 Crores",
      description: "Solar and microgrid projects"
    },
    {
      sector: "Railway Systems",
      percentage: 20,
      amount: "₹5 Crores",
      description: "Signalling and telecommunications"
    },
    {
      sector: "Installation & Maintenance",
      percentage: 10,
      amount: "₹2.5 Crores",
      description: "AMC and maintenance services"
    }
  ];

  const keyMetrics = [
    {
      metric: "EBITDA Margin",
      value: "15-20%",
      trend: "Stable",
      icon: "💰"
    },
    {
      metric: "Debt-to-Equity",
      value: "0.5:1",
      trend: "Conservative",
      icon: "⚖️"
    },
    {
      metric: "Current Ratio",
      value: "1.8:1",
      trend: "Healthy",
      icon: "📊"
    },
    {
      metric: "ROE",
      value: "18-22%",
      trend: "Growing",
      icon: "📈"
    }
  ];

  const growthAreas = [
    {
      area: "Solar Energy",
      potential: "High",
      description: "Expanding solar microgrid and rooftop solutions",
      icon: "☀️"
    },
    {
      area: "Railway Infrastructure",
      potential: "High",
      description: "Growing railway signalling and telecom market",
      icon: "🚂"
    },
    {
      area: "Smart Cities",
      potential: "Medium",
      description: "Urban infrastructure development opportunities",
      icon: "🏙️"
    },
    {
      area: "Rural Electrification",
      potential: "High",
      description: "Government focus on rural power infrastructure",
      icon: "🏘️"
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
              Financial <span className="text-yellow-400">Information</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive financial performance and growth metrics for investors
            </p>
          </motion.div>
        </div>
      </div>

      {/* Financial Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Financial <span className="text-blue-600">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators and financial metrics showcasing our growth trajectory
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${highlight.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{highlight.icon}</div>
                  <div className="text-3xl font-bold mb-2">{highlight.value}</div>
                  <h3 className="text-xl font-bold mb-4">{highlight.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revenue <span className="text-blue-600">Breakdown</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversified revenue streams across multiple infrastructure sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                {revenueBreakdown.map((sector, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{sector.sector}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{sector.percentage}%</div>
                        <div className="text-sm text-gray-600">{sector.amount}</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{sector.description}</p>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${sector.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-2xl font-bold mb-4">Diversified Portfolio</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Our revenue is well-diversified across multiple infrastructure sectors, 
                  reducing dependency on any single market segment.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Electrical Infrastructure</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Renewable Energy</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Railway Systems</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Installation & Maintenance</span>
                    <span className="font-bold">10%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Financial Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Financial <span className="text-blue-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important financial ratios and performance indicators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.metric}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 font-medium">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Growth <span className="text-blue-600">Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic focus areas for future growth and expansion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-6">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.area}</h3>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {area.potential} Potential
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Investment <span className="text-blue-600">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why Ramsethu represents an attractive investment opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Strong Market Position",
                description: "Established presence in key infrastructure sectors with proven track record",
                icon: "🏆"
              },
              {
                title: "Government Focus",
                description: "Benefiting from government's infrastructure push and renewable energy targets",
                icon: "🏛️"
              },
              {
                title: "Diversified Portfolio",
                description: "Multiple revenue streams reducing business risk and dependency",
                icon: "📊"
              },
              {
                title: "Experienced Management",
                description: "Strong leadership team with decades of industry experience",
                icon: "👥"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
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
              Invest in <span className="text-yellow-400">Infrastructure Growth</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with us to capitalize on India's infrastructure development 
              and renewable energy transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Download Financial Report
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg">
                Contact Investor Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 