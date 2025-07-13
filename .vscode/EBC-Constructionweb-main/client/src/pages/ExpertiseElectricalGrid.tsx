import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExpertiseElectricalGrid() {
  const services = [
    {
      title: "Switchyard Equipment",
      description: "Complete EPC works for high-voltage switchyard equipment including circuit breakers, transformers, and control systems.",
      icon: "⚡",
      features: ["Circuit Breakers", "Power Transformers", "Control Panels", "Protection Systems"]
    },
    {
      title: "Transmission Lines",
      description: "Installation and maintenance of transmission lines up to 132kV and beyond with advanced safety protocols.",
      icon: "🔌",
      features: ["132kV Lines", "ACSR Conductors", "Electrical Poles", "Safety Systems"]
    },
    {
      title: "Grid Modernization",
      description: "Advanced electrical grid modernization solutions for improved efficiency and reliability.",
      icon: "🏗️",
      features: ["Smart Grid", "Automation", "Monitoring", "Control Systems"]
    }
  ];

  const capabilities = [
    {
      title: "Erection, Testing & Commissioning",
      description: "Complete ETC services for electrical infrastructure",
      icon: "🔧"
    },
    {
      title: "LT/HT Panels",
      description: "Design and installation of low and high tension panels",
      icon: "📊"
    },
    {
      title: "Earthing & Cabling",
      description: "Comprehensive earthing systems and cable installation",
      icon: "🔗"
    },
    {
      title: "Safety Audits",
      description: "Electrical safety audits and maintenance services",
      icon: "✅"
    }
  ];

  const projects = [
    {
      name: "BHEL Power Plant Grid",
      location: "Bihar",
      scope: "132kV transmission line installation",
      status: "Completed",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.59_e530fddd.jpg"
    },
    {
      name: "NTPC Switchyard Project",
      location: "Jharkhand",
      scope: "Switchyard equipment and control systems",
      status: "Ongoing",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.44.00_46663714.jpg"
    },
    {
      name: "GE T&D Grid Modernization",
      location: "Uttar Pradesh",
      scope: "Smart grid implementation",
      status: "Planning",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_77ec44ef.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Electrical <span className="text-yellow-400">Grid Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto">
              Comprehensive Electrical Infrastructure for Reliable Power Distribution
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
                Powering <span className="text-orange-600">India's Future</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We undertake complete EPC works related to high-voltage and low-voltage electrical 
                infrastructure. Our expertise spans from switchyard equipment to transmission lines, 
                ensuring reliable power distribution across the nation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With major works executed for GE T&D India Ltd., BHEL, and NTPC Projects, we have 
                established ourselves as a trusted partner in electrical grid development and modernization.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600">Grid Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-orange-600">132kV+</div>
                  <div className="text-sm text-gray-600">Transmission Capacity</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.59_e530fddd.jpg"
                alt="Electrical Grid Solutions"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-2xl"></div>
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
              Our <span className="text-orange-600">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end electrical grid solutions for modern power distribution systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
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
              Technical <span className="text-orange-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technical expertise in electrical grid infrastructure.
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

      {/* Key Equipment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-orange-600">Equipment & Systems</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of electrical equipment and systems we handle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Power Transformers",
              "Control & Relay Panels",
              "LT/HT Panels",
              "Lightning Arrestors",
              "Bus Bar Systems",
              "Earthing Systems",
              "ACSR Conductors",
              "Electrical Poles",
              "Cable Management"
            ].map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">{equipment}</span>
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
              Featured <span className="text-orange-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in electrical grid infrastructure development.
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
                  <p className="text-orange-600 font-semibold mb-2">{project.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{project.scope}</p>
                  <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by <span className="text-yellow-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Our track record with major power sector companies speaks for our expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "GE T&D India Ltd.",
                description: "Major electrical infrastructure projects and grid modernization.",
                icon: "🏭"
              },
              {
                title: "BHEL",
                description: "Power plant electrical systems and switchyard equipment.",
                icon: "⚡"
              },
              {
                title: "NTPC Projects",
                description: "Transmission lines and power distribution infrastructure.",
                icon: "🔌"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{partner.icon}</div>
                <h3 className="text-xl font-bold mb-3">{partner.title}</h3>
                <p className="text-orange-100">{partner.description}</p>
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
              Power Your <span className="text-orange-600">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with us to build reliable electrical grid infrastructure 
              that powers industries, communities, and the nation's growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors duration-300">
                Get Quote
              </Link>
              <Link to="/landmarks" className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition-colors duration-300">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 