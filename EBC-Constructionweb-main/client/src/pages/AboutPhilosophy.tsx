import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
              Our <span className="text-yellow-400">Philosophy</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
              Building Beyond Construction - Creating Sustainable Communities and Lasting Impact
            </p>
          </motion.div>
        </div>
      </div>

      {/* Philosophy Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Core Philosophy</span>
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                "We believe that infrastructure is not just about building structures, but about creating 
                the foundation for human progress, economic growth, and sustainable development. Every 
                project we undertake is an opportunity to transform lives and communities."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-green-600">Four Pillars</span> of Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our approach to every project and decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "People-Centric Approach",
                description: "We believe that every infrastructure project should ultimately serve the people. Our designs and construction methods prioritize human needs, safety, and well-being. We create spaces that enhance quality of life and foster community development.",
                icon: "👥",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Sustainable Development",
                description: "Environmental responsibility is at the heart of our philosophy. We integrate sustainable practices, green technologies, and eco-friendly materials in all our projects to ensure a better future for generations to come.",
                icon: "🌱",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Innovation & Excellence",
                description: "We continuously embrace new technologies, innovative construction methods, and cutting-edge engineering solutions. Our commitment to excellence drives us to exceed industry standards and deliver exceptional results.",
                icon: "🚀",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Community Impact",
                description: "Beyond construction, we focus on creating lasting positive impact on communities. Our projects generate employment, boost local economies, and contribute to the overall development of the regions we serve.",
                icon: "🏘️",
                color: "from-orange-500 to-orange-600"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-white text-3xl">{pillar.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed text-center">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
                Our <span className="text-green-600">Approach</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Planning</h3>
                    <p className="text-gray-700">We begin with thorough research, environmental impact assessment, and community consultation to ensure our projects align with local needs and sustainable development goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-700">Every stage of construction is monitored by experienced professionals, ensuring adherence to the highest quality standards and safety protocols.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stakeholder Engagement</h3>
                    <p className="text-gray-700">We maintain transparent communication with all stakeholders - clients, communities, government bodies, and environmental agencies throughout the project lifecycle.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Long-term Impact</h3>
                    <p className="text-gray-700">Our projects are designed to create lasting positive impact, contributing to economic growth, social development, and environmental sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/Railway-Signaling.jpg"
                alt="Our Approach"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision for Future */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-yellow-400">Vision</span> for the Future
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
              We envision a future where infrastructure development goes hand-in-hand with environmental 
              conservation, social progress, and economic prosperity. Our philosophy drives us to be 
              pioneers in sustainable construction and community development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-3">Smart Infrastructure</h3>
                <p className="text-green-100">Building intelligent, connected infrastructure that adapts to future needs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3">Green Construction</h3>
                <p className="text-green-100">Leading the transition to sustainable, eco-friendly construction practices</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Community Partnership</h3>
                <p className="text-green-100">Creating lasting partnerships with communities for mutual growth</p>
              </div>
            </div>
          </motion.div>
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
              Join Us in <span className="text-green-600">Building the Future</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience our philosophy in action. Let's work together to create infrastructure 
              that not only meets today's needs but also builds a sustainable tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300">
                Start a Project
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 