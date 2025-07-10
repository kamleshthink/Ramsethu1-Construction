import { motion } from "framer-motion";

export default function ValuesMissionVision() {
  const missionPoints = [
    "Technically superior infrastructure solutions",
    "Financially sustainable projects",
    "Socially responsible development",
    "Unwavering focus on safety",
    "Integrity in all operations",
    "Timely execution and delivery"
  ];

  const visionPoints = [
    "Nationally recognized EPC leader",
    "Electrical infrastructure excellence",
    "Mechanical systems expertise",
    "Renewable energy solutions",
    "Railway infrastructure development",
    "Quality and reliability focus",
    "Community impact and development"
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "Striving for technical superiority in every project",
      icon: "⭐",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Integrity",
      description: "Maintaining highest ethical standards in all operations",
      icon: "🤝",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Safety",
      description: "Prioritizing safety above all else in every project",
      icon: "🛡️",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and sustainable solutions",
      icon: "💡",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const achievements = [
    {
      number: "4+",
      label: "Decades of Excellence",
      description: "Over 40 years of infrastructure development"
    },
    {
      number: "300+",
      label: "Projects Completed",
      description: "Successfully delivered infrastructure projects"
    },
    {
      number: "50+",
      label: "Villages Electrified",
      description: "Rural electrification through solar microgrids"
    },
    {
      number: "100%",
      label: "Safety Record",
      description: "Zero-fatality safety record maintained"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
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
              Mission & <span className="text-yellow-400">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Building Progress, Powering India's Infrastructure Future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
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
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">🎯</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Our <span className="text-blue-600">Mission</span>
                  </h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  To deliver infrastructure solutions that are technically superior, financially sustainable, 
                  and socially responsible, with unwavering focus on safety, integrity, and timely execution.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <p className="text-lg font-semibold text-gray-800 italic">
                    "We don't just build projects — we build progress."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-6">🏗️</div>
                <h3 className="text-2xl font-bold mb-4">Infrastructure Excellence</h3>
                <p className="text-blue-100 leading-relaxed">
                  We are committed to building infrastructure that not only meets today's needs 
                  but also creates a foundation for tomorrow's growth and development.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-6">🔭</div>
                <h3 className="text-2xl font-bold mb-4">Future-Focused</h3>
                <p className="text-purple-100 leading-relaxed">
                  Our vision extends beyond current projects to shape the future of 
                  infrastructure development in India.
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-20"></div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">🔭</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Our <span className="text-purple-600">Vision</span>
                  </h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  To be a nationally recognized EPC leader in the domains of Electrical, Mechanical, 
                  Renewable Energy, and Railway Infrastructure, known for quality, reliability, and community impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our every decision and action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${value.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence and progress
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.label}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us in <span className="text-yellow-400">Building Progress</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with us to create infrastructure solutions that drive India's growth 
              and development while maintaining the highest standards of quality and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 