import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function InvestorsGovernance() {
  const boardMembers = [
    {
      name: "Sanjeet Kumar",
      position: "Managing Director",
      description: "Independent Director with regulatory oversight",
      image: "/assets/administration/Sanjeet-Kumar-MD-225x300.jpeg",
      expertise: ["Strategic Planning", "Regulatory Compliance", "Business Development"]
    },
    {
      name: "Abhishek",
      position: "Director",
      description: "Leading technical and operational excellence",
      image: "/assets/administration/Abhishek-Director-258x300.jpeg",
      expertise: ["Technical Operations", "Project Management", "Quality Assurance"]
    },
    {
      name: "Dheeraj",
      position: "Director & Procurement Head",
      description: "Overseeing procurement and supply chain management",
      image: "/assets/administration/Dheeraj-Director-cum-Procurement-head-e1649271054262-172x300.jpeg",
      expertise: ["Procurement", "Supply Chain", "Cost Management"]
    }
  ];

  const governancePrinciples = [
    {
      title: "Transparency",
      description: "Open and honest communication with all stakeholders",
      icon: "🔍",
      color: "from-blue-400 to-indigo-500",
      features: ["Regular Disclosures", "Clear Reporting", "Stakeholder Communication"]
    },
    {
      title: "Accountability",
      description: "Clear responsibility and answerability for all actions",
      icon: "📋",
      color: "from-green-400 to-emerald-500",
      features: ["Performance Monitoring", "Responsibility Matrix", "Regular Reviews"]
    },
    {
      title: "Integrity",
      description: "Ethical conduct and moral principles in all operations",
      icon: "🤝",
      color: "from-purple-400 to-pink-500",
      features: ["Ethical Standards", "Code of Conduct", "Anti-Corruption"]
    },
    {
      title: "Independence",
      description: "Independent decision-making and oversight",
      icon: "⚖️",
      color: "from-yellow-400 to-orange-500",
      features: ["Independent Directors", "Audit Committees", "Unbiased Decisions"]
    }
  ];

  const complianceAreas = [
    {
      area: "Legal Compliance",
      description: "Full compliance with all applicable laws and regulations",
      icon: "⚖️",
      status: "Compliant",
      details: ["Company Law", "Labor Laws", "Environmental Regulations"]
    },
    {
      area: "Financial Compliance",
      description: "Adherence to financial reporting and audit standards",
      icon: "💰",
      status: "Compliant",
      details: ["GST Compliance", "PF Registration", "ESIC Coverage"]
    },
    {
      area: "Technical Compliance",
      description: "Meeting all technical and safety standards",
      icon: "🔧",
      status: "Compliant",
      details: ["Electrical License", "Safety Standards", "Quality Certifications"]
    },
    {
      area: "Corporate Governance",
      description: "Following best practices in corporate governance",
      icon: "🏛️",
      status: "Compliant",
      details: ["Board Structure", "Audit Committees", "Risk Management"]
    }
  ];

  const governanceMetrics = [
    {
      metric: "Board Independence",
      value: "33%",
      description: "Independent directors on board",
      icon: "👥"
    },
    {
      metric: "Audit Score",
      value: "A+",
      description: "External audit rating",
      icon: "📊"
    },
    {
      metric: "Compliance Rate",
      value: "100%",
      description: "Regulatory compliance",
      icon: "✅"
    },
    {
      metric: "Ethics Rating",
      value: "Excellent",
      description: "Corporate ethics assessment",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 overflow-hidden">
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
              Corporate <span className="text-yellow-400">Governance</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Strong governance framework ensuring transparency, accountability, and ethical business practices
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Governance <span className="text-purple-600">Excellence</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Our corporate governance framework is built on the pillars of transparency, 
                  accountability, integrity, and independence. We maintain the highest standards 
                  of ethical business practices and regulatory compliance.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-purple-500">
                  <p className="text-lg font-semibold text-gray-800 italic">
                    "Good governance is the foundation of sustainable business success."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🏛️</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Board Structure</h4>
                    <p className="text-gray-700">Well-balanced board with independent directors</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Audit Committees</h4>
                    <p className="text-gray-700">Independent audit and compliance oversight</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">⚖️</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Regulatory Compliance</h4>
                    <p className="text-gray-700">100% compliance with all applicable regulations</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-6">🏛️</div>
                <h3 className="text-2xl font-bold mb-4">Governance Framework</h3>
                <p className="text-purple-100 leading-relaxed mb-6">
                  Our comprehensive governance framework ensures ethical business practices, 
                  regulatory compliance, and stakeholder value creation.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Board Independence</span>
                    <span className="font-bold">33%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Rate</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audit Rating</span>
                    <span className="font-bold">A+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Board of <span className="text-purple-600">Directors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leadership team guiding our strategic direction and governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm mb-4">{member.description}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Governance <span className="text-purple-600">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core principles that guide our governance framework and business practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governancePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${principle.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{principle.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">{principle.description}</p>
                  <div className="space-y-2">
                    {principle.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compliance <span className="text-purple-600">Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive compliance across all regulatory and operational areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-6">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.area}</h3>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {area.status}
                </div>
                <p className="text-gray-700 text-sm mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Governance <span className="text-purple-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators for our governance framework
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trust in <span className="text-yellow-400">Governance Excellence</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Invest with confidence in a company that prioritizes transparency, 
              accountability, and ethical business practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/investors/filings" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Download Governance Report
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors duration-300 text-lg">
                Contact Board
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 