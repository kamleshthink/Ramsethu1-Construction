import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutOverview() {
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
              Company <span className="text-yellow-400">Overview</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Building India's Infrastructure Future with Excellence, Innovation, and Sustainable Growth
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Introduction */}
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
                Ramsethu Construction: <span className="text-blue-600">A Legacy of Excellence</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established in 2016, Ramsethu Electrical & Mechanical Solutions Pvt. Ltd. has emerged as a 
                leading electrical and mechanical solutions company, specializing in networking, telecommunications, 
                electrical grid solutions, and solar energy systems across multiple sectors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With our headquarters in Hazaribagh, Jharkhand, and strategic presence across four key states 
                - Bihar, Jharkhand, Uttar Pradesh, and West Bengal - we have successfully delivered over 120 
                projects, establishing ourselves as a trusted partner in India's infrastructure development.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600">120+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/Networks_Telecommunications (1).jpg"
                alt="Company Overview"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Business Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in diverse infrastructure sectors, delivering comprehensive solutions 
              that drive economic growth and community development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Networking & Telecommunications",
                description: "Advanced networking solutions, telecommunications infrastructure, and connectivity systems for modern businesses.",
                icon: "📡"
              },
              {
                title: "Electrical Grid Solutions",
                description: "Comprehensive electrical grid design, installation, and maintenance solutions for reliable power distribution.",
                icon: "⚡"
              },
              {
                title: "High Quality Installation & Maintenance",
                description: "Professional installation services and comprehensive maintenance solutions for all electrical and mechanical systems.",
                icon: "🔧"
              },
              {
                title: "Solar Microgrid Deployment",
                description: "Advanced solar microgrid systems for sustainable energy generation and distribution in remote and urban areas.",
                icon: "🌞"
              },
              {
                title: "Railway Signalling Systems",
                description: "State-of-the-art railway signalling and control systems for enhanced safety and operational efficiency.",
                icon: "🚆"
              },
              {
                title: "Solar Rooftop Solutions",
                description: "Complete solar rooftop installation and maintenance services for residential and commercial properties.",
                icon: "🏠"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every project, maintaining the highest standards of quality and craftsmanship.",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Innovation",
                description: "Embracing new technologies and innovative solutions to deliver cutting-edge infrastructure projects.",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Integrity",
                description: "Operating with complete transparency, honesty, and ethical practices in all our business dealings.",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Sustainability",
                description: "Committed to environmental responsibility and sustainable development practices for future generations.",
                color: "from-orange-500 to-orange-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-white text-2xl font-bold">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build the Future <span className="text-yellow-400">Together?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join us in creating sustainable, innovative infrastructure solutions that drive progress 
              and prosperity across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300">
                Get In Touch
              </Link>
              <Link to="/landmarks" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 