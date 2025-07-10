import { motion } from "framer-motion";

export default function AboutPresence() {
  const locations = [
    {
      state: "Bihar",
      capital: "Patna",
      description: "Eastern Regional Hub - Infrastructure & Development Projects",
      projects: 35,
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg",
      highlights: ["Road Infrastructure", "Building Construction", "Irrigation Projects"]
    },
    {
      state: "Jharkhand",
      capital: "Ranchi",
      description: "Mining & Industrial Infrastructure Specialists",
      projects: 45,
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_54608a98.jpg",
      highlights: ["Mining Infrastructure", "Industrial Projects", "Power Systems"]
    },
    {
      state: "Uttar Pradesh",
      capital: "Lucknow",
      description: "Northern Operations Center - Mega Infrastructure Projects",
      projects: 28,
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_639cb6f3.jpg",
      highlights: ["Highway Projects", "Railway Infrastructure", "Urban Development"]
    },
    {
      state: "West Bengal",
      capital: "Kolkata",
      description: "Eastern Coastal Hub - Port & Urban Development",
      projects: 22,
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_b126fb06.jpg",
      highlights: ["Port Infrastructure", "Coastal Projects", "Smart Cities"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Presence</span> Across India
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Strategic Regional Hubs Delivering Infrastructure Excellence Across Four Key States
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic <span className="text-blue-600">Geographic Presence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With strategically located operations across four key states, Ramsethu Construction 
              has established a strong regional presence that enables us to serve diverse markets 
              and deliver projects efficiently. Each location serves as a specialized hub for 
              specific types of infrastructure development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regional Hubs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img
                      src={location.image}
                      alt={location.state}
                      className="w-full h-full object-cover rounded-xl border-2 border-blue-200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.state}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{location.capital}</p>
                    <p className="text-gray-700 mb-4">{location.description}</p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {location.projects} Projects
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 text-sm">Key Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-medium border border-blue-200"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Geographic Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic presence across four key states enables us to serve diverse markets 
              and deliver projects efficiently.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Regional Distribution</h3>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${
                          index === 0 ? 'bg-yellow-400' :
                          index === 1 ? 'bg-cyan-400' :
                          index === 2 ? 'bg-indigo-400' : 'bg-pink-400'
                        }`}></div>
                        <span className="font-medium text-gray-900">{location.state}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">{location.projects}</div>
                        <div className="text-sm text-gray-500">Projects</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">130+</div>
                    <div className="text-sm text-gray-600">Total Projects Across All Regions</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/assets/photos/indiapresencemap.jpg"
                  alt="India Presence Map"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Capabilities */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Regional <span className="text-yellow-400">Capabilities</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Each regional hub specializes in specific infrastructure sectors, 
              enabling us to deliver specialized solutions and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Eastern Hub",
                location: "Bihar & West Bengal",
                focus: "Transportation & Urban Development",
                icon: "🏙️"
              },
              {
                title: "Central Hub",
                location: "Jharkhand",
                focus: "Mining & Industrial Projects",
                icon: "⛏️"
              },
              {
                title: "Northern Hub",
                location: "Uttar Pradesh",
                focus: "Highway & Railway Infrastructure",
                icon: "🛣️"
              },
              {
                title: "Coastal Hub",
                location: "West Bengal Coast",
                focus: "Port & Marine Infrastructure",
                icon: "🚢"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-blue-100 mb-3">{capability.location}</p>
                <p className="text-sm text-blue-200">{capability.focus}</p>
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
              Partner with <span className="text-blue-600">Regional Experts</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leverage our regional expertise and local presence to deliver your infrastructure 
              projects with efficiency and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300">
                Contact Regional Office
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                View Regional Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 