import { motion } from "framer-motion";

export default function AboutBoard() {
  const directors = [
    {
      name: "Sanjeet Kumar",
      position: "Managing Director",
      image: "/assets/administration/Sanjeet-Kumar-MD-225x300.jpeg",
      description: "Leading the company's strategic vision and growth initiatives with over 15 years of experience in infrastructure development.",
      expertise: ["Strategic Planning", "Business Development", "Project Management"],
      experience: "15+ Years"
    },
    {
      name: "Abhishek",
      position: "Director",
      image: "/assets/administration/Abhishek-Director-258x300.jpeg",
      description: "Overseeing operations and ensuring excellence in project delivery across all business verticals.",
      expertise: ["Operations Management", "Quality Control", "Team Leadership"],
      experience: "12+ Years"
    },
    {
      name: "Dheeraj",
      position: "Director & Procurement Head",
      image: "/assets/administration/Dheeraj-Director-cum-Procurement-head-e1649271054262-172x300.jpeg",
      description: "Managing procurement strategies and ensuring cost-effective resource allocation for all projects.",
      expertise: ["Procurement", "Supply Chain", "Cost Management"],
      experience: "10+ Years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Board of <span className="text-yellow-400">Directors</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Meet the Visionary Leaders Driving Ramsethu Construction's Success and Growth
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
              Leadership <span className="text-purple-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Board of Directors brings together decades of combined experience in infrastructure development, 
              construction management, and business leadership. Their strategic vision and operational expertise 
              have been instrumental in establishing Ramsethu Construction as a trusted name in the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover rounded-full border-4 border-purple-200 shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">{director.position}</p>
                  <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {director.experience} Experience
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {director.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 mb-3">Key Expertise:</h4>
                  {director.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
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
                Our <span className="text-purple-600">Leadership Philosophy</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visionary Leadership</h3>
                    <p className="text-gray-700">Our directors provide strategic direction and long-term vision, ensuring sustainable growth and market leadership.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Excellence</h3>
                    <p className="text-gray-700">Hands-on involvement in key operations ensures quality standards and efficient project delivery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Team Development</h3>
                    <p className="text-gray-700">Fostering a culture of continuous learning and professional development across the organization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stakeholder Value</h3>
                    <p className="text-gray-700">Creating value for all stakeholders - employees, clients, partners, and communities we serve.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/photos/construction photos/solar microgrid.webp"
                alt="Leadership"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leadership <span className="text-yellow-400">Achievements</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Under the guidance of our board, Ramsethu Construction has achieved remarkable milestones 
              and established itself as a trusted partner in infrastructure development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "120+", label: "Projects Completed" },
              { number: "4", label: "States Presence" },
              { number: "8+", label: "Years of Excellence" },
              { number: "500+", label: "Team Members" }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{achievement.number}</div>
                <div className="text-purple-100 font-medium">{achievement.label}</div>
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
              Experience <span className="text-purple-600">Leadership Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with a company led by experienced professionals committed to delivering 
              exceptional results and building lasting relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors duration-300">
                Contact Leadership
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-600 hover:text-white transition-colors duration-300">
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 