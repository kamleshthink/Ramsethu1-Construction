import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExpertiseRailwaySignalling() {
  const services = [
    {
      title: "Signalling Systems",
      description: "Advanced railway signalling systems for safe and efficient train operations.",
      icon: "🚦",
      features: ["Signal Installation", "Control Systems", "Safety Protocols", "Testing & Commissioning"]
    },
    {
      title: "Telecommunications",
      description: "Railway telecommunications infrastructure for seamless communication and control.",
      icon: "📡",
      features: ["Communication Networks", "Data Transmission", "Remote Monitoring", "System Integration"]
    },
    {
      title: "Track Circuit Systems",
      description: "Track circuit and detection systems for train position monitoring and safety.",
      icon: "🛤️",
      features: ["Track Detection", "Position Monitoring", "Safety Systems", "Maintenance"]
    }
  ];

  const capabilities = [
    {
      title: "Signal Installation",
      description: "Complete signal system installation and commissioning",
      icon: "🚦"
    },
    {
      title: "Control Centers",
      description: "Advanced control center systems and operations",
      icon: "🏢"
    },
    {
      title: "Safety Systems",
      description: "Comprehensive railway safety and security systems",
      icon: "🛡️"
    },
    {
      title: "Maintenance",
      description: "Preventive and corrective maintenance services",
      icon: "🔧"
    }
  ];

  const projects = [
    {
      name: "IR Railway Signalling",
      location: "Indian Railways",
      scope: "Advanced signalling system installation and maintenance",
      status: "Ongoing",
      image: "/assets/photos/construction photos/Railway-Signaling.jpg"
    },
    {
      name: "Metro Signalling Upgrade",
      location: "Metro Cities",
      scope: "Metro rail signalling system modernization",
      status: "Completed",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.42_a4a64f3d.jpg"
    },
    {
      name: "Freight Corridor Signalling",
      location: "Dedicated Freight Corridors",
      scope: "Heavy freight corridor signalling systems",
      status: "Planning",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.42_dda9968c.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Railway <span className="text-yellow-400">Signalling Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Advanced Signalling and Telecommunications Solutions for Safe Railway Operations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ensuring <span className="text-blue-600">Railway Safety</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our railway division specializes in advanced signalling systems, telecommunications 
                infrastructure, and track circuit systems. We provide comprehensive solutions for 
                Indian Railways and metro systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With cutting-edge technology and experienced teams, we ensure safe, efficient, 
                and reliable railway operations through state-of-the-art signalling and 
                communication systems.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Signal Installations</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Safety Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/Railway-Signaling.jpg"
                alt="Railway Signalling Systems"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive railway signalling and telecommunications solutions for modern rail networks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Technical Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical <span className="text-blue-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technical expertise in railway signalling and safety systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems & Equipment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Systems & <span className="text-blue-600">Equipment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of railway signalling and telecommunications equipment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Signal Lights & Indicators",
              "Control Panels",
              "Track Circuits",
              "Communication Systems",
              "Safety Interlocking",
              "Remote Monitoring",
              "Data Transmission",
              "Emergency Systems",
              "Backup Power Systems"
            ].map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">{system}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in railway signalling and telecommunications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
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
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{project.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{project.scope}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Safety & <span className="text-yellow-400">Standards</span>
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Our commitment to railway safety and international standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description: "Rigorous safety protocols and fail-safe systems for railway operations.",
                icon: "🛡️"
              },
              {
                title: "International Standards",
                description: "Compliance with international railway safety and signalling standards.",
                icon: "🌐"
              },
              {
                title: "Quality Assurance",
                description: "Comprehensive testing and quality assurance for all systems.",
                icon: "✅"
              }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold mb-3">{standard.title}</h3>
                <p className="text-red-100">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modernize Your <span className="text-blue-600">Railway Systems</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with us to implement advanced signalling and telecommunications 
              solutions for safe and efficient railway operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300">
                Get Quote
              </Link>
              <Link to="/landmarks" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 