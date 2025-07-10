import { motion } from "framer-motion";

export default function InvestorsQuarterly() {
  const quarterlyResults = [
    {
      quarter: "Q2 FY 2024-25",
      period: "July - September 2024",
      revenue: "₹6.5 Crores",
      growth: "+15%",
      profit: "₹1.2 Crores",
      margin: "18.5%",
      description: "Strong performance driven by solar and railway projects",
      highlights: ["Solar Project Wins", "Railway Infrastructure", "Client Expansion", "Operational Efficiency"],
      status: "Published",
      icon: "📊"
    },
    {
      quarter: "Q1 FY 2024-25",
      period: "April - June 2024",
      revenue: "₹5.8 Crores",
      growth: "+12%",
      profit: "₹1.0 Crores",
      margin: "17.2%",
      description: "Solid start to the financial year with new project wins",
      highlights: ["New Project Awards", "Market Expansion", "Technology Adoption", "Quality Excellence"],
      status: "Published",
      icon: "📈"
    },
    {
      quarter: "Q4 FY 2023-24",
      period: "January - March 2024",
      revenue: "₹7.2 Crores",
      growth: "+18%",
      profit: "₹1.4 Crores",
      margin: "19.4%",
      description: "Excellent quarter with record project completions",
      highlights: ["Record Completions", "High Margins", "Client Satisfaction", "Market Leadership"],
      status: "Published",
      icon: "🏆"
    },
    {
      quarter: "Q3 FY 2023-24",
      period: "October - December 2023",
      revenue: "₹6.1 Crores",
      growth: "+14%",
      profit: "₹1.1 Crores",
      margin: "18.0%",
      description: "Steady growth with focus on quality and efficiency",
      highlights: ["Steady Growth", "Quality Focus", "Efficiency Gains", "Client Retention"],
      status: "Published",
      icon: "📊"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Revenue Growth",
      value: "15.2%",
      trend: "Increasing",
      description: "Year-over-year revenue growth",
      icon: "📈",
      color: "from-green-400 to-emerald-500"
    },
    {
      metric: "Profit Margin",
      value: "18.3%",
      trend: "Stable",
      description: "Average profit margin across quarters",
      icon: "💰",
      color: "from-blue-400 to-indigo-500"
    },
    {
      metric: "Project Success Rate",
      value: "98%",
      trend: "Consistent",
      description: "Successful project completion rate",
      icon: "✅",
      color: "from-purple-400 to-pink-500"
    },
    {
      metric: "Client Satisfaction",
      value: "95%",
      trend: "High",
      description: "Client satisfaction score",
      icon: "😊",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const businessSegments = [
    {
      segment: "Electrical Infrastructure",
      revenue: "₹2.6 Crores",
      percentage: 40,
      growth: "+16%",
      description: "Power transmission and distribution projects"
    },
    {
      segment: "Renewable Energy",
      revenue: "₹1.95 Crores",
      percentage: 30,
      growth: "+20%",
      description: "Solar and microgrid projects"
    },
    {
      segment: "Railway Systems",
      revenue: "₹1.3 Crores",
      percentage: 20,
      growth: "+12%",
      description: "Signalling and telecommunications"
    },
    {
      segment: "Installation & Maintenance",
      revenue: "₹0.65 Crores",
      percentage: 10,
      growth: "+8%",
      description: "AMC and maintenance services"
    }
  ];

  const quarterlyHighlights = [
    {
      title: "Project Portfolio",
      description: "Diversified project portfolio across multiple sectors",
      icon: "🏗️",
      details: ["300+ Projects", "4 States", "50+ Clients", "Multiple Sectors"]
    },
    {
      title: "Operational Excellence",
      description: "Focus on quality, safety, and timely delivery",
      icon: "⭐",
      details: ["Quality Standards", "Safety Protocols", "Timely Delivery", "Cost Efficiency"]
    },
    {
      title: "Market Position",
      description: "Strong market position in key infrastructure segments",
      icon: "🎯",
      details: ["Market Leadership", "Client Trust", "Brand Recognition", "Competitive Edge"]
    },
    {
      title: "Future Outlook",
      description: "Positive outlook with strong order book and growth opportunities",
      icon: "🔮",
      details: ["Strong Pipeline", "Growth Opportunities", "Market Expansion", "Technology Innovation"]
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
              Quarterly <span className="text-yellow-400">Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Regular quarterly updates on financial performance and business achievements
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
              Quarterly <span className="text-green-600">Performance</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our quarterly results demonstrate consistent growth and strong performance 
              across all business segments. We maintain transparency in our financial 
              reporting to keep investors informed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${metric.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{metric.icon}</div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <h3 className="text-xl font-bold mb-4">{metric.metric}</h3>
                  <div className="text-sm font-medium mb-2">{metric.trend}</div>
                  <p className="text-white/90 text-sm leading-relaxed">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quarterly Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest <span className="text-green-600">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed quarterly financial and operational performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quarterlyResults.map((quarter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{quarter.icon}</div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {quarter.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{quarter.quarter}</h3>
                <div className="text-green-600 font-semibold mb-4">{quarter.period}</div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Revenue</div>
                    <div className="text-xl font-bold text-gray-900">{quarter.revenue}</div>
                    <div className="text-sm text-green-600">+{quarter.growth}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Profit</div>
                    <div className="text-xl font-bold text-gray-900">{quarter.profit}</div>
                    <div className="text-sm text-green-600">{quarter.margin}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{quarter.description}</p>
                
                <div className="space-y-2 mb-6">
                  {quarter.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                  View Full Report
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business <span className="text-green-600">Segments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revenue breakdown across our diversified business segments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                {businessSegments.map((segment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{segment.segment}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{segment.percentage}%</div>
                        <div className="text-sm text-gray-600">{segment.revenue}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{segment.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-green-600 font-semibold">Growth: {segment.growth}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${segment.percentage}%` }}
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
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-2xl font-bold mb-4">Diversified Portfolio</h3>
                <p className="text-green-100 leading-relaxed mb-6">
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

      {/* Quarterly Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quarterly <span className="text-green-600">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key achievements and milestones from our quarterly performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quarterlyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-6">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">{highlight.description}</p>
                <div className="space-y-2">
                  {highlight.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
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
              Stay <span className="text-yellow-400">Updated</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our quarterly updates and get notified about our latest 
              financial results and business achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Download Reports
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors duration-300 text-lg">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 