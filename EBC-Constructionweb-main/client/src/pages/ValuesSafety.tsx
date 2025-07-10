import { motion } from "framer-motion";

export default function ValuesSafety() {
  const hsePractices = [
    {
      title: "Safety Supervisors",
      description: "Deployment of dedicated safety supervisors at major sites",
      icon: "👷‍♂️",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "PPE Equipment",
      description: "Mandatory Personal Protective Equipment (PPE) for all on-site workers",
      icon: "🧤",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Fire Safety",
      description: "Fire safety kits, electrical hazard protocols, and emergency drills",
      icon: "🔥",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Training Programs",
      description: "Regular toolbox talks, safety training, and mock evacuation sessions",
      icon: "📚",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const safetyProtocols = [
    {
      phase: "Pre-Project",
      description: "Safety planning and risk assessment before project commencement",
      icon: "📋",
      features: ["Risk Assessment", "Safety Planning", "Equipment Check", "Training Schedule"]
    },
    {
      phase: "During Project",
      description: "Continuous safety monitoring and compliance during execution",
      icon: "🔍",
      features: ["Daily Inspections", "Safety Audits", "Compliance Checks", "Incident Prevention"]
    },
    {
      phase: "Emergency Response",
      description: "Comprehensive emergency response and first-aid systems",
      icon: "🚨",
      features: ["First Aid Kits", "Emergency Drills", "Response Teams", "Communication Systems"]
    },
    {
      phase: "Post Project",
      description: "Safety review and continuous improvement processes",
      icon: "📊",
      features: ["Safety Review", "Lessons Learned", "Improvement Plans", "Documentation"]
    }
  ];

  const safetyEquipment = [
    {
      name: "Personal Protective Equipment",
      description: "Complete PPE kits for all workers",
      icon: "🛡️"
    },
    {
      name: "Fire Safety Equipment",
      description: "Fire extinguishers and safety kits",
      icon: "🧯"
    },
    {
      name: "First Aid Kits",
      description: "Comprehensive first aid supplies",
      icon: "🏥"
    },
    {
      name: "Safety Signage",
      description: "Clear safety instructions and warnings",
      icon: "⚠️"
    },
    {
      name: "Emergency Communication",
      description: "Communication systems for emergencies",
      icon: "📞"
    }
  ];

  const safetyMetrics = [
    {
      metric: "Zero Fatalities",
      value: "100%",
      description: "Zero-fatality safety record maintained",
      icon: "🛡️"
    },
    {
      metric: "Safety Training",
      value: "100%",
      description: "All workers receive safety training",
      icon: "📚"
    },
    {
      metric: "PPE Compliance",
      value: "100%",
      description: "Full PPE compliance on all sites",
      icon: "🧤"
    },
    {
      metric: "Safety Audits",
      value: "Daily",
      description: "Daily safety audits conducted",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-20 overflow-hidden">
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
              Health, Safety & <span className="text-yellow-400">Environment</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              At Ramsethu, safety is non-negotiable. Every project site operates under a clear set of safety protocols.
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
                  Safety <span className="text-red-600">First</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Our commitment to safety goes beyond compliance — it's about protecting 
                  our most valuable asset: our people. We believe that every worker has 
                  the right to return home safely every day.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-red-500">
                  <p className="text-lg font-semibold text-gray-800 italic">
                    "Know Safety, No Pain. No Safety, Know Pain."
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
                  <div className="text-3xl">💊</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">First Aid Kits</h4>
                    <p className="text-gray-700">First-aid kits and trained site personnel for basic response</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🏅</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Recognition & Rewards</h4>
                    <p className="text-gray-700">Recognition & rewards for safety compliance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Zero Incidents</h4>
                    <p className="text-gray-700">Maintaining zero-fatality safety record across all projects</p>
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
              <div className="bg-gradient-to-br from-red-500 to-orange-600 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold mb-4">Safety Excellence</h3>
                <p className="text-red-100 leading-relaxed">
                  Our comprehensive safety programs ensure that every worker 
                  operates in a safe and secure environment.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HSE Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              HSE <span className="text-red-600">Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive health, safety, and environment practices that protect our workforce
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hsePractices.map((practice, index) => (
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

      {/* Safety Protocols */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Safety <span className="text-red-600">Protocols</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic safety protocols implemented across all project phases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyProtocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200"
              >
                <div className="text-5xl mb-6">{protocol.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{protocol.phase}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{protocol.description}</p>
                <div className="space-y-2">
                  {protocol.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Safety <span className="text-red-600">Equipment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety equipment and systems for maximum protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {safetyEquipment.map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{equipment.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{equipment.name}</h3>
                <p className="text-gray-600 text-sm">{equipment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Safety <span className="text-red-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable indicators of our safety performance and commitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
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
      <section className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prioritize <span className="text-yellow-400">Safety</span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Partner with us to experience the highest standards of safety and 
              protection for your workforce and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Safety Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors duration-300 text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 