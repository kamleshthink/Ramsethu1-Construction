import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExpertiseSolarRooftop() {
  const services = [
    {
      title: "Rooftop Solar PV",
      description: "Complete rooftop solar photovoltaic system design, installation, and maintenance.",
      icon: "🏠",
      features: ["System Design", "Installation", "Grid Integration", "O&M Services"]
    },
    {
      title: "Commercial Solar",
      description: "Large-scale commercial and industrial rooftop solar solutions for businesses.",
      icon: "🏢",
      features: ["Commercial Systems", "Industrial Solutions", "Energy Savings", "ROI Optimization"]
    },
    {
      title: "Residential Solar",
      description: "Home solar systems for residential properties with battery backup options.",
      icon: "🏡",
      features: ["Home Systems", "Battery Backup", "Net Metering", "Energy Independence"]
    }
  ];

  const capabilities = [
    {
      title: "System Design",
      description: "Optimal solar system design and sizing",
      icon: "📐"
    },
    {
      title: "Installation",
      description: "Professional installation and commissioning",
      icon: "🔧"
    },
    {
      title: "Grid Integration",
      description: "Seamless grid integration and net metering",
      icon: "⚡"
    },
    {
      title: "Maintenance",
      description: "Comprehensive O&M and monitoring services",
      icon: "🛠️"
    }
  ];

  const projects = [
    {
      name: "Commercial Rooftop Solar",
      location: "Bihar",
      scope: "500kWp rooftop solar system for commercial complex",
      status: "Completed",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.43_71f61428.jpg"
    },
    {
      name: "Industrial Solar Installation",
      location: "Jharkhand",
      scope: "1MWp rooftop solar for manufacturing facility",
      status: "Ongoing",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_77ec44ef.jpg"
    },
    {
      name: "Residential Solar Systems",
      location: "Uttar Pradesh",
      scope: "Multiple residential rooftop solar installations",
      status: "Planning",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_cb8829dd.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solar <span className="text-yellow-400">Rooftop Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto">
              Harness Solar Energy from Your Rooftop for Sustainable Power Generation
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
                Power Your <span className="text-orange-600">Future</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer complete rooftop solar PV system solutions including design, sizing, 
                installation, and O&M services. Our systems are designed for optimal energy 
                generation and maximum return on investment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From residential homes to large commercial complexes, we provide customized 
                solar solutions that reduce electricity bills and contribute to environmental 
                sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-orange-600">1.5+</div>
                  <div className="text-sm text-gray-600">MWp Installed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.43_71f61428.jpg"
                alt="Solar Rooftop Solutions"
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
              Comprehensive rooftop solar solutions for residential, commercial, and industrial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300"
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
              Advanced technical expertise in rooftop solar system design and installation.
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

      {/* System Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System <span className="text-orange-600">Components</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality components for reliable and efficient solar power generation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Solar Panels",
              "Inverters",
              "Mounting Structures",
              "Cabling & Connectors",
              "Monitoring Systems",
              "Battery Storage",
              "Grid Connection",
              "Safety Equipment",
              "Performance Monitoring"
            ].map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">{component}</span>
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
              Showcasing our expertise in rooftop solar installations across different sectors.
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

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of <span className="text-yellow-400">Rooftop Solar</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover the advantages of installing rooftop solar systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Savings",
                description: "Significant reduction in electricity bills and long-term cost savings.",
                icon: "💰"
              },
              {
                title: "Environmental Impact",
                description: "Reduce carbon footprint and contribute to clean energy generation.",
                icon: "🌱"
              },
              {
                title: "Energy Independence",
                description: "Generate your own power and reduce dependence on grid electricity.",
                icon: "⚡"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-green-100">{benefit.description}</p>
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
              Start Your <span className="text-orange-600">Solar Journey</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your rooftop into a power generation asset and start saving on 
              electricity bills while contributing to a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors duration-300">
                Get Free Quote
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