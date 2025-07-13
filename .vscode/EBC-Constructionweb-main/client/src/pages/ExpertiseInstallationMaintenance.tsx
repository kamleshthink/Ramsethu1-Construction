import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExpertiseInstallationMaintenance() {
  const services = [
    {
      title: "System Installation",
      description: "Professional installation of electrical and mechanical systems with precision and quality assurance.",
      icon: "🔧",
      features: ["Electrical Systems", "Mechanical Equipment", "Quality Control", "Safety Protocols"]
    },
    {
      title: "Preventive Maintenance",
      description: "Comprehensive preventive maintenance programs to ensure optimal system performance and longevity.",
      icon: "🛠️",
      features: ["Regular Inspections", "Performance Monitoring", "Predictive Maintenance", "Documentation"]
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency maintenance and repair services for critical infrastructure and systems.",
      icon: "🚨",
      features: ["24/7 Support", "Rapid Response", "Emergency Repairs", "Backup Systems"]
    }
  ];

  const capabilities = [
    {
      title: "Electrical Installation",
      description: "Complete electrical system installation and commissioning",
      icon: "⚡"
    },
    {
      title: "Mechanical Installation",
      description: "Heavy industrial and process-based mechanical installations",
      icon: "🏭"
    },
    {
      title: "Quality Testing",
      description: "Rigorous testing and quality assurance procedures",
      icon: "✅"
    },
    {
      title: "AMC Services",
      description: "Annual Maintenance Contracts for ongoing support",
      icon: "📋"
    }
  ];

  const projects = [
    {
      name: "BHEL Power Plant Maintenance",
      location: "Bihar",
      scope: "Annual maintenance contract for power plant systems",
      status: "Ongoing",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_cb8829dd.jpg"
    },
    {
      name: "NTPC Equipment Installation",
      location: "Jharkhand",
      scope: "Heavy equipment installation and commissioning",
      status: "Completed",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_f1e98f35.jpg"
    },
    {
      name: "GE T&D System Upgrade",
      location: "Uttar Pradesh",
      scope: "System modernization and maintenance",
      status: "Planning",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_0335104f.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              High Quality <span className="text-yellow-400">Installation & Maintenance</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
              Professional Installation and Comprehensive Maintenance Services for Optimal Performance
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
                Excellence in <span className="text-green-600">Every Detail</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mechanical division handles heavy industrial and process-based installations, 
                including pipeline networks, industrial boilers, and mechanical support systems. 
                We provide comprehensive AMC (Annual Maintenance Contracts) services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Trusted by PSU and private industries for reliability and safety, we ensure 
                that every installation meets the highest quality standards and every maintenance 
                service extends equipment lifespan.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-green-600">200+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">AMC Contracts</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_cb8829dd.jpg"
                alt="Installation & Maintenance"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
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
              Our <span className="text-green-600">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive installation and maintenance solutions for industrial and commercial systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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
              Technical <span className="text-green-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technical expertise in installation and maintenance services.
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

      {/* Equipment & Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipment & <span className="text-green-600">Systems</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of equipment and systems we install and maintain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pipeline Networks",
              "Industrial Boilers",
              "Mechanical Support Systems",
              "Fabrication Services",
              "Alignment Services",
              "Welding Services",
              "Electrical Panels",
              "Control Systems",
              "Safety Equipment"
            ].map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
              Featured <span className="text-green-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in installation and maintenance services.
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
                  <p className="text-green-600 font-semibold mb-2">{project.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{project.scope}</p>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-yellow-400">Our Services</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our commitment to quality and reliability in installation and maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Rigorous quality control and testing at every stage of installation and maintenance.",
                icon: "✅"
              },
              {
                title: "Expert Team",
                description: "Skilled professionals with years of experience in industrial installations.",
                icon: "👥"
              },
              {
                title: "Reliability",
                description: "Trusted by PSU and private industries for consistent, reliable service delivery.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-green-100">{value.description}</p>
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
              Ensure <span className="text-green-600">Optimal Performance</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with us for professional installation and comprehensive maintenance 
              services that keep your systems running at peak efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300">
                Get Quote
              </Link>
              <Link to="/landmarks" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-colors duration-300">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 