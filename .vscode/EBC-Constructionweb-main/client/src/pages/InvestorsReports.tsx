import { motion } from "framer-motion";

export default function InvestorsReports() {
  const annualReports = [
    {
      year: "2023-24",
      title: "Annual Report FY 2023-24",
      description: "Comprehensive annual report covering financial performance, operations, and future outlook",
      highlights: ["Revenue Growth", "Project Portfolio", "Market Expansion", "Sustainability Initiatives"],
      status: "Published",
      size: "5.2 MB",
      icon: "📊"
    },
    {
      year: "2022-23",
      title: "Annual Report FY 2022-23",
      description: "Annual report highlighting business growth and strategic achievements",
      highlights: ["Business Growth", "Client Acquisition", "Technology Adoption", "Quality Excellence"],
      status: "Published",
      size: "4.8 MB",
      icon: "📈"
    },
    {
      year: "2021-22",
      title: "Annual Report FY 2021-22",
      description: "Annual report showcasing resilience and growth during challenging times",
      highlights: ["Resilience", "Operational Excellence", "Cost Optimization", "Market Leadership"],
      status: "Published",
      size: "4.5 MB",
      icon: "🏆"
    },
    {
      year: "2020-21",
      title: "Annual Report FY 2020-21",
      description: "Annual report demonstrating adaptability and strategic focus",
      highlights: ["Adaptability", "Strategic Focus", "Digital Transformation", "Sustainability"],
      status: "Published",
      size: "4.2 MB",
      icon: "🔄"
    }
  ];

  const quarterlyResults = [
    {
      quarter: "Q2 FY 2024-25",
      period: "July - September 2024",
      revenue: "₹6.5 Crores",
      growth: "+15%",
      description: "Strong performance driven by solar and railway projects",
      status: "Published",
      icon: "📊"
    },
    {
      quarter: "Q1 FY 2024-25",
      period: "April - June 2024",
      revenue: "₹5.8 Crores",
      growth: "+12%",
      description: "Solid start to the financial year with new project wins",
      status: "Published",
      icon: "📈"
    },
    {
      quarter: "Q4 FY 2023-24",
      period: "January - March 2024",
      revenue: "₹7.2 Crores",
      growth: "+18%",
      description: "Excellent quarter with record project completions",
      status: "Published",
      icon: "🏆"
    },
    {
      quarter: "Q3 FY 2023-24",
      period: "October - December 2023",
      revenue: "₹6.1 Crores",
      growth: "+14%",
      description: "Steady growth with focus on quality and efficiency",
      status: "Published",
      icon: "📊"
    }
  ];

  const reportSections = [
    {
      title: "Financial Performance",
      description: "Comprehensive financial statements and analysis",
      icon: "💰",
      features: ["Balance Sheet", "Profit & Loss", "Cash Flow", "Financial Ratios"]
    },
    {
      title: "Operational Review",
      description: "Detailed review of business operations and projects",
      icon: "🏗️",
      features: ["Project Portfolio", "Client Base", "Market Position", "Operational Excellence"]
    },
    {
      title: "Strategic Overview",
      description: "Strategic direction and future outlook",
      icon: "🎯",
      features: ["Business Strategy", "Market Opportunities", "Growth Plans", "Risk Management"]
    },
    {
      title: "Corporate Governance",
      description: "Governance framework and compliance",
      icon: "🏛️",
      features: ["Board Structure", "Compliance", "Audit Reports", "Corporate Ethics"]
    }
  ];

  const keyMetrics = [
    {
      metric: "Revenue Growth",
      value: "15-20%",
      description: "Annual revenue growth rate",
      icon: "📈"
    },
    {
      metric: "Project Success Rate",
      value: "98%",
      description: "Successful project completion rate",
      icon: "✅"
    },
    {
      metric: "Client Satisfaction",
      value: "95%",
      description: "Client satisfaction score",
      icon: "😊"
    },
    {
      metric: "Market Share",
      value: "Growing",
      description: "Market position in key segments",
      icon: "📊"
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
              Annual <span className="text-yellow-400">Reports</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive financial and operational reports for investors and stakeholders
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
              Comprehensive <span className="text-blue-600">Reporting</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our annual reports provide detailed insights into our financial performance, 
              operational achievements, strategic direction, and corporate governance. 
              We believe in complete transparency to build investor confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {reportSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-5xl mb-6">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">{section.description}</p>
                <div className="space-y-2">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Annual <span className="text-blue-600">Reports</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive annual reports covering all aspects of our business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{report.icon}</div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">{report.size}</div>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {report.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                <div className="text-blue-600 font-semibold mb-3">{report.year}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{report.description}</p>
                <div className="space-y-2 mb-6">
                  {report.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  Download Report
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quarterly <span className="text-blue-600">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular quarterly updates on our financial and operational performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quarterlyResults.map((quarter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{quarter.icon}</div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {quarter.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{quarter.quarter}</h3>
                <div className="text-blue-600 font-semibold mb-3">{quarter.period}</div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Revenue</div>
                    <div className="text-xl font-bold text-gray-900">{quarter.revenue}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Growth</div>
                    <div className="text-xl font-bold text-green-600">{quarter.growth}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{quarter.description}</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key <span className="text-blue-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important performance indicators from our reports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.metric}</h3>
                <p className="text-gray-600">{metric.description}</p>
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
              Access <span className="text-yellow-400">Complete Reports</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Download our comprehensive annual reports and quarterly results 
              for detailed insights into our performance and future outlook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Download All Reports
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 