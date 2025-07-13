import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutEbcUrban() {
  const urbanServices = [
    {
      title: "Networking & Telecommunications",
      description: "Advanced networking solutions and telecommunications infrastructure for urban connectivity and smart city applications.",
      icon: "📡",
      features: ["Fiber Optic Networks", "5G Infrastructure", "Smart City Connectivity"]
    },
    {
      title: "Electrical Grid Solutions",
      description: "Comprehensive electrical grid design, installation, and maintenance for urban power distribution systems.",
      icon: "⚡",
      features: ["Power Distribution", "Grid Modernization", "Smart Grid Solutions"]
    },
    {
      title: "High Quality Installation & Maintenance",
      description: "Professional installation and comprehensive maintenance services for all electrical and mechanical urban systems.",
      icon: "🔧",
      features: ["System Installation", "Preventive Maintenance", "Emergency Services"]
    },
    {
      title: "Solar Microgrid Deployment",
      description: "Advanced solar microgrid systems for sustainable energy generation in urban and peri-urban areas.",
      icon: "🌞",
      features: ["Solar Power Systems", "Microgrid Solutions", "Energy Storage"]
    },
    {
      title: "Railway Signalling Systems",
      description: "State-of-the-art railway signalling and control systems for urban rail networks and metro systems.",
      icon: "🚆",
      features: ["Signalling Systems", "Control Centers", "Safety Systems"]
    },
    {
      title: "Solar Rooftop Solutions",
      description: "Complete solar rooftop installation and maintenance services for urban residential and commercial properties.",
      icon: "🏠",
      features: ["Rooftop Solar", "Grid Integration", "Maintenance Services"]
    }
  ];

  const projects = [
    {
      name: "Patna Smart City Network",
      location: "Patna, Bihar",
      type: "Telecommunications Infrastructure",
      status: "Completed",
      image: "/assets/photos/construction photos/Networks_Telecommunications (1).jpg"
    },
    {
      name: "Ranchi Solar Microgrid",
      location: "Ranchi, Jharkhand",
      type: "Solar Energy Project",
      status: "Ongoing",
      image: "/assets/photos/construction photos/solar microgrid.webp"
    },
    {
      name: "Lucknow Railway Signalling",
      location: "Lucknow, Uttar Pradesh",
      type: "Railway Infrastructure",
      status: "Planning",
      image: "/assets/photos/construction photos/Railway-Signaling.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 via-green-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ramsethu <span className="text-yellow-400">Urban</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
              Transforming Urban Landscapes with Smart, Sustainable, and Innovative Development Solutions
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
                Urban Development <span className="text-green-600">Excellence</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ramsethu Urban is our specialized division dedicated to providing advanced electrical, 
                mechanical, and telecommunications solutions for urban environments. We combine cutting-edge 
                technology, innovative engineering, and sustainable practices to power smart cities of the future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From networking and telecommunications to solar energy solutions, from electrical grid 
                modernization to railway signalling systems, we deliver comprehensive urban infrastructure 
                solutions that enhance connectivity, efficiency, and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-gray-600">Urban Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-green-600">4</div>
                  <div className="text-sm text-gray-600">Cities Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_3264edc3.jpg"
                alt="Urban Development"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Urban Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive urban development solutions designed to create sustainable, 
              smart, and livable communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {urbanServices.map((service, index) => (
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
              Featured <span className="text-green-600">Urban Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our commitment to creating sustainable and innovative urban environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
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
                  <p className="text-gray-600 text-sm mb-4">{project.type}</p>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sustainable <span className="text-yellow-400">Urban Development</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our commitment to sustainability drives every aspect of our urban development projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Green Building Standards",
                description: "All our projects adhere to international green building standards and LEED certification requirements.",
                icon: "🌿"
              },
              {
                title: "Energy Efficiency",
                description: "Integration of renewable energy sources and energy-efficient systems to reduce carbon footprint.",
                icon: "⚡"
              },
              {
                title: "Water Conservation",
                description: "Advanced water management systems including rainwater harvesting and wastewater treatment.",
                icon: "💧"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
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
              Build the <span className="text-green-600">Future of Urban Living</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with Ramsethu Urban to create sustainable, smart, and innovative 
              urban environments that enhance quality of life and drive economic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300">
                Start Urban Project
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