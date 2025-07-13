import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExpertiseSolarMicrogrid() {
  const services = [
    {
      title: "Solar Power Systems",
      description: "Complete solar power system design, sizing, installation, and O&M for sustainable energy generation.",
      icon: "☀️",
      features: ["System Design", "Power Sizing", "Installation", "O&M Services"]
    },
    {
      title: "Microgrid Solutions",
      description: "Advanced microgrid systems for rural and tribal electrification with battery backup solutions.",
      icon: "🔋",
      features: ["Rural Electrification", "Battery Systems", "Grid Integration", "Remote Monitoring"]
    },
    {
      title: "Street Lighting",
      description: "Solar street lighting and home systems for sustainable urban and rural lighting solutions.",
      icon: "💡",
      features: ["Street Lights", "Home Systems", "LED Technology", "Smart Controls"]
    }
  ];

  const capabilities = [
    {
      title: "300+ kWp Installed",
      description: "Total solar capacity installed across projects",
      icon: "⚡"
    },
    {
      title: "50+ Villages",
      description: "Villages electrified with solar microgrids",
      icon: "🏘️"
    },
    {
      title: "Remote Monitoring",
      description: "Advanced monitoring and control systems",
      icon: "📡"
    },
    {
      title: "Battery Backup",
      description: "Reliable energy storage solutions",
      icon: "🔋"
    }
  ];

  const projects = [
    {
      name: "Ranchi Solar Microgrid",
      location: "Ranchi, Jharkhand",
      scope: "50kWp microgrid for rural electrification",
      status: "Completed",
      image: "/assets/photos/construction photos/solar microgrid.webp"
    },
    {
      name: "Bihar Village Electrification",
      location: "Bihar",
      scope: "100kWp solar system for 10 villages",
      status: "Ongoing",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_17e4f444.jpg"
    },
    {
      name: "UP Solar Street Lighting",
      location: "Uttar Pradesh",
      scope: "Solar street lighting for urban areas",
      status: "Planning",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_95a02def.jpg"
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
              Solar <span className="text-yellow-400">Microgrid Deployment</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto">
              Sustainable Energy Solutions for Rural Electrification and Green Power Generation
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
                Powering <span className="text-orange-600">India's Green Future</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ramsethu is actively engaged in India's green energy transition. We offer complete 
                solutions for rooftop solar PV systems, solar microgrids for rural and tribal 
                electrification, and solar street lighting systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With over 300+ kWp capacity installed and 50+ villages electrified, we are leading 
                the charge towards sustainable energy solutions that benefit communities and the environment.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-orange-600">300+</div>
                  <div className="text-sm text-gray-600">kWp Installed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Villages Electrified</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/solar microgrid.webp"
                alt="Solar Microgrid Deployment"
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
              Comprehensive solar energy solutions for sustainable power generation and distribution.
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

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-600">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Significant milestones in solar energy deployment and rural electrification.
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

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solar <span className="text-orange-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of solar energy solutions we provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Rooftop Solar PV Systems",
              "Grid-connected Systems",
              "Off-grid Systems",
              "Solar Microgrids",
              "Battery Backup Systems",
              "Solar Street Lighting",
              "Home Solar Systems",
              "Remote Monitoring",
              "O&M Services"
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">{solution}</span>
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
              Showcasing our expertise in solar microgrid deployment and rural electrification.
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

      {/* Environmental Impact */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Environmental <span className="text-yellow-400">Impact</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Contributing to India's sustainable energy goals and environmental conservation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Carbon Reduction",
                description: "Significant reduction in carbon emissions through clean energy generation.",
                icon: "🌱"
              },
              {
                title: "Rural Development",
                description: "Empowering rural communities with reliable electricity access.",
                icon: "🏘️"
              },
              {
                title: "Sustainable Future",
                description: "Building a sustainable energy infrastructure for future generations.",
                icon: "🌍"
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{impact.icon}</div>
                <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                <p className="text-green-100">{impact.description}</p>
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
              Go <span className="text-orange-600">Solar Today</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with us to harness the power of the sun and create sustainable 
              energy solutions for your community or business.
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