import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ValuesSustainability() {
  const sustainabilityCommitments = [
    {
      title: "Solar Power Projects",
      description: "Execution of 300+ kWp of solar power projects across rooftops and remote villages",
      icon: "☀️",
      number: "300+",
      unit: "kWp",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Village Electrification",
      description: "Electrification of 50+ off-grid villages through solar microgrids",
      icon: "🏘️",
      number: "50+",
      unit: "Villages",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Biogas Plants",
      description: "Implementation of biogas plants in rural Jharkhand for clean cooking energy",
      icon: "🌱",
      number: "25+",
      unit: "Plants",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Eco-friendly Materials",
      description: "Use of eco-friendly materials and recyclable packaging in project sites",
      icon: "♻️",
      number: "100%",
      unit: "Compliance",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const environmentalInitiatives = [
    {
      title: "Renewable Energy",
      description: "Promotion of renewable energy systems like solar PV & biogas",
      icon: "⚡",
      features: ["Solar PV Systems", "Biogas Plants", "Microgrids", "Clean Energy"]
    },
    {
      title: "Carbon Reduction",
      description: "Reduction of carbon footprint through solar microgrids and sustainable practices",
      icon: "🌍",
      features: ["Carbon Neutral", "Green Technology", "Emission Reduction", "Clean Energy"]
    },
    {
      title: "Waste Management",
      description: "Responsible waste management on project sites with recycling programs",
      icon: "🗑️",
      features: ["Recycling", "Waste Reduction", "Proper Disposal", "Circular Economy"]
    }
  ];

  const projects = [
    {
      name: "Ranchi Solar Microgrid",
      location: "Ranchi, Jharkhand",
      scope: "50kWp microgrid for rural electrification",
      impact: "500+ households electrified",
      image: "/assets/photos/construction photos/solar microgrid.webp"
    },
    {
      name: "Bihar Village Electrification",
      location: "Bihar",
      scope: "100kWp solar system for 10 villages",
      impact: "1000+ families benefited",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_17e4f444.jpg"
    },
    {
      name: "Jharkhand Biogas Initiative",
      location: "Rural Jharkhand",
      scope: "Biogas plants for clean cooking",
      impact: "200+ families with clean energy",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_95a02def.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20 overflow-hidden">
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
              <span className="text-yellow-400">Sustainability</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              At Ramsethu, sustainability is not an afterthought — it is a strategic pillar
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
              Enabling India's <span className="text-green-600">Clean Energy Transition</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We enable India's clean energy transition, one project at a time. Our commitment to 
              sustainability goes beyond compliance — it's about creating a better future for 
              generations to come.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-6">🌱</div>
                <h3 className="text-2xl font-bold mb-4">Strategic Sustainability</h3>
                <p className="text-green-100 leading-relaxed">
                  Sustainability is embedded in every aspect of our operations, from project 
                  planning to execution and beyond.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">♻️</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Circular Economy</h4>
                  <p className="text-gray-700">Implementing sustainable practices that reduce waste and promote recycling</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Clean Energy</h4>
                  <p className="text-gray-700">Promoting renewable energy solutions for a sustainable future</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Environmental Impact</h4>
                  <p className="text-gray-700">Minimizing our carbon footprint through innovative solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Sustainability Commitments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete actions and measurable impacts in our sustainability journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityCommitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${commitment.color} p-8 rounded-3xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-6">{commitment.icon}</div>
                  <div className="text-4xl font-bold mb-2">
                    {commitment.number}
                    <span className="text-2xl">{commitment.unit}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{commitment.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{commitment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Environmental <span className="text-green-600">Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental programs that make a real difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {environmentalInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200"
              >
                <div className="text-5xl mb-6">{initiative.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{initiative.description}</p>
                <div className="space-y-2">
                  {initiative.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-green-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our commitment to sustainability through real projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{project.location}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.scope}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-700 font-semibold text-sm">{project.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Environmental <span className="text-green-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results of our sustainability initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "300+", label: "kWp Solar Installed", icon: "☀️" },
              { number: "50+", label: "Villages Electrified", icon: "🏘️" },
              { number: "25+", label: "Biogas Plants", icon: "🌱" },
              { number: "100%", label: "Eco-friendly Materials", icon: "♻️" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-yellow-400">Sustainability Journey</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Partner with us to create sustainable infrastructure solutions that benefit 
              communities and protect our environment for future generations.
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