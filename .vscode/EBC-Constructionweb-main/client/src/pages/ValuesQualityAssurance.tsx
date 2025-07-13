import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ValuesQualityAssurance() {
  const qualityPractices = [
    {
      title: "Qualified Engineers",
      description: "Execution through qualified engineers and licensed electricians",
      icon: "👨‍💼",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "QA/QC Checks",
      description: "Regular QA/QC checks on-site and off-site",
      icon: "🔍",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Calibrated Instruments",
      description: "Use of calibrated testing instruments for meggering, earthing, transformer ratio, etc.",
      icon: "📏",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Standards Compliance",
      description: "Compliance with standards: IS, BIS, RDSO, MNRE, CEIG",
      icon: "📜",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const qualityProcess = [
    {
      phase: "Planning",
      description: "Detailed project planning with quality benchmarks",
      icon: "📋",
      features: ["Quality Standards", "Benchmark Setting", "Resource Planning", "Timeline Definition"]
    },
    {
      phase: "Execution",
      description: "Supervised execution with continuous quality monitoring",
      icon: "🔧",
      features: ["Supervised Work", "Quality Monitoring", "Real-time Checks", "Issue Resolution"]
    },
    {
      phase: "Testing",
      description: "Comprehensive testing and validation procedures",
      icon: "🧪",
      features: ["Equipment Testing", "Performance Validation", "Safety Checks", "Documentation"]
    },
    {
      phase: "Delivery",
      description: "Final inspection and client sign-off",
      icon: "✅",
      features: ["Final Inspection", "Client Approval", "Documentation", "Handover"]
    }
  ];

  const standards = [
    {
      name: "IS Standards",
      description: "Indian Standards for electrical installations",
      icon: "🇮🇳"
    },
    {
      name: "BIS Standards",
      description: "Bureau of Indian Standards compliance",
      icon: "🏛️"
    },
    {
      name: "RDSO Standards",
      description: "Railway Design and Standards Organization",
      icon: "🚂"
    },
    {
      name: "MNRE Standards",
      description: "Ministry of New and Renewable Energy",
      icon: "☀️"
    },
    {
      name: "CEIG Standards",
      description: "Chief Electrical Inspector to Government",
      icon: "⚡"
    }
  ];

  const qualityMetrics = [
    {
      metric: "Zero Defect",
      value: "100%",
      description: "First-time quality delivery",
      icon: "🎯"
    },
    {
      metric: "Client Satisfaction",
      value: "98%",
      description: "Client satisfaction rate",
      icon: "😊"
    },
    {
      metric: "Safety Record",
      value: "100%",
      description: "Zero safety incidents",
      icon: "🛡️"
    },
    {
      metric: "Timeline Adherence",
      value: "95%",
      description: "On-time project delivery",
      icon: "⏰"
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
              Quality <span className="text-yellow-400">Assurance</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Quality is embedded into every layer of our work — from material sourcing to final commissioning
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
                  Getting It <span className="text-blue-600">Right</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  We believe in getting it right — the first time, every time. Our quality assurance 
                  processes ensure that every project meets the highest standards of excellence.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <p className="text-lg font-semibold text-gray-800 italic">
                    "Quality is not an act, it is a habit."
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
                  <div className="text-3xl">📋</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Pre-dispatch Inspection</h4>
                    <p className="text-gray-700">Comprehensive inspection reports before project delivery</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📋</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Post-installation Reports</h4>
                    <p className="text-gray-700">Detailed documentation after installation completion</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📋</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Client Sign-off</h4>
                    <p className="text-gray-700">Transparent documentation and client approval at each milestone</p>
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
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold mb-4">Quality Excellence</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our commitment to quality ensures that every project exceeds expectations 
                  and delivers lasting value to our clients.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quality Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality <span className="text-blue-600">Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality assurance practices that ensure excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${practice.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{practice.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{practice.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{practice.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to quality assurance across all project phases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200"
              >
                <div className="text-5xl mb-6">{phase.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{phase.description}</p>
                <div className="space-y-2">
                  {phase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Standards <span className="text-blue-600">Compliance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full compliance with all relevant Indian and international standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality <span className="text-blue-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable indicators of our quality performance and commitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
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
              Experience <span className="text-yellow-400">Quality Excellence</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with us to experience the highest standards of quality and excellence 
              in infrastructure development and project delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Start Project
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 