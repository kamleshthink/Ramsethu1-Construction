import { motion } from "framer-motion";

export default function InvestorsFilings() {
  const filingCategories = [
    {
      title: "Annual Reports",
      description: "Comprehensive annual financial and operational reports",
      icon: "📊",
      color: "from-blue-400 to-indigo-500",
      count: "5+",
      period: "Years"
    },
    {
      title: "Quarterly Results",
      description: "Quarterly financial performance and business updates",
      icon: "📈",
      color: "from-green-400 to-emerald-500",
      count: "20+",
      period: "Reports"
    },
    {
      title: "Corporate Actions",
      description: "Board decisions, AGM notices, and corporate announcements",
      icon: "🏛️",
      color: "from-purple-400 to-pink-500",
      count: "15+",
      period: "Actions"
    },
    {
      title: "Compliance Reports",
      description: "Regulatory compliance and statutory filings",
      icon: "✅",
      color: "from-yellow-400 to-orange-500",
      count: "100%",
      period: "Compliance"
    }
  ];

  const recentFilings = [
    {
      title: "Annual Report FY 2023-24",
      date: "September 2024",
      type: "Annual Report",
      status: "Published",
      description: "Comprehensive annual report covering financial performance, operations, and future outlook"
    },
    {
      title: "Q2 FY 2024-25 Results",
      date: "October 2024",
      type: "Quarterly Results",
      status: "Published",
      description: "Second quarter financial results and business performance update"
    },
    {
      title: "Board Meeting Notice",
      date: "November 2024",
      type: "Corporate Action",
      status: "Scheduled",
      description: "Notice for upcoming board meeting to discuss quarterly results"
    },
    {
      title: "Compliance Certificate",
      date: "October 2024",
      type: "Compliance",
      status: "Filed",
      description: "Certificate of compliance with corporate governance requirements"
    }
  ];

  const filingTimeline = [
    {
      year: "2024",
      filings: [
        { month: "Q4", type: "Annual Report", status: "Published" },
        { month: "Q3", type: "Quarterly Results", status: "Published" },
        { month: "Q2", type: "Quarterly Results", status: "Published" },
        { month: "Q1", type: "Quarterly Results", status: "Published" }
      ]
    },
    {
      year: "2023",
      filings: [
        { month: "Q4", type: "Annual Report", status: "Published" },
        { month: "Q3", type: "Quarterly Results", status: "Published" },
        { month: "Q2", type: "Quarterly Results", status: "Published" },
        { month: "Q1", type: "Quarterly Results", status: "Published" }
      ]
    }
  ];

  const regulatoryCompliance = [
    {
      regulation: "Companies Act, 2013",
      compliance: "Full Compliance",
      status: "✅",
      details: ["Board Meetings", "AGM", "Financial Statements", "Corporate Governance"]
    },
    {
      regulation: "SEBI Regulations",
      compliance: "Full Compliance",
      status: "✅",
      details: ["Disclosure Requirements", "Corporate Governance", "Insider Trading"]
    },
    {
      regulation: "MCA Requirements",
      compliance: "Full Compliance",
      status: "✅",
      details: ["Annual Filings", "Event-based Disclosures", "Compliance Certificates"]
    },
    {
      regulation: "Stock Exchange Rules",
      compliance: "Full Compliance",
      status: "✅",
      details: ["Listing Agreement", "Disclosure Norms", "Corporate Actions"]
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
              Stock Exchange <span className="text-yellow-400">Filings</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Transparent disclosure and regulatory compliance for investor confidence
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
              Transparent <span className="text-green-600">Disclosure</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We maintain complete transparency in all our regulatory filings and corporate disclosures. 
              Our commitment to timely and accurate reporting ensures investors have access to all 
              relevant information for informed decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filingCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{category.icon}</div>
                  <div className="text-3xl font-bold mb-2">{category.count}</div>
                  <div className="text-sm mb-4">{category.period}</div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Filings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recent <span className="text-green-600">Filings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest regulatory filings and corporate disclosures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentFilings.map((filing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{filing.title}</h3>
                    <p className="text-green-600 font-semibold">{filing.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">{filing.date}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      filing.status === 'Published' ? 'bg-green-100 text-green-800' :
                      filing.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {filing.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{filing.description}</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300">
                  View Filing
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filing Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Filing <span className="text-green-600">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Historical record of our regulatory filings and compliance
            </p>
          </motion.div>

          <div className="space-y-8">
            {filingTimeline.map((year, yearIndex) => (
              <motion.div
                key={yearIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{year.year}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {year.filings.map((filing, filingIndex) => (
                    <div key={filingIndex} className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200">
                      <div className="text-lg font-bold text-gray-900 mb-2">{filing.month}</div>
                      <div className="text-sm text-green-600 mb-2">{filing.type}</div>
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {filing.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Regulatory <span className="text-green-600">Compliance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full compliance with all applicable regulatory requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regulatoryCompliance.map((regulation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{regulation.regulation}</h3>
                  <div className="text-2xl">{regulation.status}</div>
                </div>
                <div className="text-green-600 font-semibold mb-4">{regulation.compliance}</div>
                <div className="space-y-2">
                  {regulation.details.map((detail, detailIndex) => (
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

      {/* Filing Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Filing <span className="text-green-600">Statistics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics demonstrating our commitment to transparency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "Timely Filings", value: "100%", description: "On-time regulatory compliance", icon: "⏰" },
              { metric: "Accuracy Rate", value: "100%", description: "Error-free filing submissions", icon: "✅" },
              { metric: "Disclosure Score", value: "A+", description: "Transparency rating", icon: "📊" },
              { metric: "Compliance Years", value: "5+", description: "Years of full compliance", icon: "📅" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.metric}</h3>
                <p className="text-gray-600">{stat.description}</p>
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
              Access <span className="text-yellow-400">Complete Information</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Download all regulatory filings and stay updated with our latest 
              corporate disclosures and compliance reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Download All Filings
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