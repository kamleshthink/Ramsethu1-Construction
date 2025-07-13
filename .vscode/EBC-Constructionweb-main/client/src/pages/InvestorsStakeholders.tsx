import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function InvestorsStakeholders() {
  const stakeholderGroups = [
    {
      title: "Shareholders",
      description: "Our valued shareholders and investors",
      icon: "👥",
      color: "from-blue-400 to-indigo-500",
      count: "100+",
      engagement: "Quarterly Updates"
    },
    {
      title: "Employees",
      description: "Our dedicated workforce and team members",
      icon: "👷‍♂️",
      color: "from-green-400 to-emerald-500",
      count: "200+",
      engagement: "Regular Communication"
    },
    {
      title: "Clients",
      description: "PSU and private sector clients",
      icon: "🤝",
      color: "from-purple-400 to-pink-500",
      count: "50+",
      engagement: "Project Updates"
    },
    {
      title: "Suppliers",
      description: "Our trusted supply chain partners",
      icon: "🏭",
      color: "from-yellow-400 to-orange-500",
      count: "100+",
      engagement: "Partnership Programs"
    }
  ];

  const stakeholderInitiatives = [
    {
      title: "Shareholder Communication",
      description: "Regular updates and transparent communication with shareholders",
      icon: "📢",
      features: ["Quarterly Reports", "Annual General Meetings", "Investor Relations", "Financial Updates"]
    },
    {
      title: "Employee Development",
      description: "Comprehensive training and development programs for our workforce",
      icon: "🎓",
      features: ["Skill Training", "Career Growth", "Performance Recognition", "Work-Life Balance"]
    },
    {
      title: "Client Partnership",
      description: "Long-term partnerships and collaborative project execution",
      icon: "🤝",
      features: ["Project Collaboration", "Quality Assurance", "Timely Delivery", "Post-Service Support"]
    },
    {
      title: "Supplier Relations",
      description: "Strong relationships with suppliers and vendors",
      icon: "🏭",
      features: ["Fair Pricing", "Quality Standards", "Timely Payments", "Partnership Programs"]
    }
  ];

  const engagementPrograms = [
    {
      program: "Annual General Meeting",
      frequency: "Annual",
      participants: "All Shareholders",
      description: "Comprehensive review of company performance and future plans",
      icon: "🏛️"
    },
    {
      program: "Quarterly Investor Calls",
      frequency: "Quarterly",
      participants: "Institutional Investors",
      description: "Detailed financial and operational updates",
      icon: "📞"
    },
    {
      program: "Employee Town Halls",
      frequency: "Monthly",
      participants: "All Employees",
      description: "Company updates and employee engagement sessions",
      icon: "🎤"
    },
    {
      program: "Client Feedback Sessions",
      frequency: "Project-based",
      participants: "Key Clients",
      description: "Project reviews and relationship building",
      icon: "💬"
    }
  ];

  const stakeholderMetrics = [
    {
      metric: "Shareholder Satisfaction",
      value: "95%",
      description: "High satisfaction rate among shareholders",
      icon: "😊"
    },
    {
      metric: "Employee Retention",
      value: "90%",
      description: "Strong employee retention rate",
      icon: "👥"
    },
    {
      metric: "Client Retention",
      value: "85%",
      description: "Repeat business from existing clients",
      icon: "🤝"
    },
    {
      metric: "Supplier Relations",
      value: "A+",
      description: "Excellent supplier relationship rating",
      icon: "🏭"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20 overflow-hidden">
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
              Stakeholder <span className="text-yellow-400">Information</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Building strong relationships with all our stakeholders for sustainable growth
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
              Our <span className="text-purple-600">Stakeholders</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We believe in building and maintaining strong relationships with all our stakeholders. 
              Our success is built on the trust and collaboration of our shareholders, employees, 
              clients, and suppliers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholderGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${group.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{group.icon}</div>
                  <div className="text-3xl font-bold mb-2">{group.count}</div>
                  <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">{group.description}</p>
                  <div className="text-sm font-medium">{group.engagement}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stakeholder <span className="text-purple-600">Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs and initiatives to engage and support our stakeholders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stakeholderInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-6">{initiative.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
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

      {/* Engagement Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Engagement <span className="text-purple-600">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular engagement programs to maintain strong stakeholder relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.program}</h3>
                <div className="text-purple-600 font-semibold mb-2">{program.frequency}</div>
                <div className="text-sm text-gray-600 mb-3">{program.participants}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stakeholder <span className="text-purple-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators for stakeholder satisfaction and engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholderMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300"
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

      {/* Communication Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Communication <span className="text-purple-600">Channels</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple channels for stakeholder communication and engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                channel: "Investor Relations",
                contact: "investor@ramsethu.com",
                description: "Direct communication for shareholders and investors",
                icon: "📧"
              },
              {
                channel: "Employee Portal",
                contact: "Internal Platform",
                description: "Dedicated portal for employee communication",
                icon: "💻"
              },
              {
                channel: "Client Support",
                contact: "support@ramsethu.com",
                description: "24/7 support for client queries and concerns",
                icon: "🎧"
              },
              {
                channel: "Supplier Relations",
                contact: "procurement@ramsethu.com",
                description: "Direct line for supplier communications",
                icon: "🏭"
              },
              {
                channel: "General Inquiries",
                contact: "info@ramsethu.com",
                description: "General information and inquiries",
                icon: "📞"
              },
              {
                channel: "Media Relations",
                contact: "media@ramsethu.com",
                description: "Press releases and media communications",
                icon: "📰"
              }
            ].map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.channel}</h3>
                <div className="text-purple-600 font-semibold mb-3">{channel.contact}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connect with <span className="text-yellow-400">Us</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              We value your feedback and engagement. Connect with us through 
              any of our communication channels for queries, suggestions, or partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Contact Us
              </Link>
              <Link to="/investors/quarterly" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors duration-300 text-lg">
                Subscribe to Updates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 