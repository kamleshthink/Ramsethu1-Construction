import { motion } from "framer-motion";

const leaders = [
  {
    name: "Sanjeet Kumar",
    position: "Managing Director",
    image: "/assets/administration/Sanjeet-Kumar-MD-225x300.jpeg",
    bio: "30+ years experience in infrastructure, electrical EPC, and business leadership. Visionary behind Ramsethu’s growth.",
    highlights: ["Strategic Leadership", "Business Growth", "Project Delivery", "Client Relations"],
    linkedin: "#"
  },
  {
    name: "Abhishek Kumar",
    position: "Director",
    image: "/assets/administration/Abhishek-Director-258x300.jpeg",
    bio: "Expert in project management, operations, and technical execution. Drives innovation and quality standards.",
    highlights: ["Project Management", "Technical Excellence", "Innovation", "Quality Assurance"],
    linkedin: "#"
  },
  {
    name: "Dheeraj Kumar",
    position: "Director (Procurement)",
    image: "/assets/administration/Dheeraj-Director-cum-Procurement-head-e1649271054262-172x300.jpeg",
    bio: "Specialist in procurement, vendor management, and supply chain. Ensures timely delivery and cost efficiency.",
    highlights: ["Procurement", "Vendor Management", "Cost Control", "Supply Chain"],
    linkedin: "#"
  }
];

export default function HumanCapitalLeadership() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Leadership <span className="text-yellow-400">Team</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">Meet the visionaries and experts driving Ramsethu Construction’s success</p>
          </motion.div>
        </div>
      </div>

      {/* Leadership Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 text-center">
                <div className="flex flex-col items-center p-8">
                  <img src={leader.image} alt={leader.name} className="w-40 h-52 object-cover rounded-2xl shadow mb-6 border-4 border-blue-100" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <div className="text-blue-600 font-semibold mb-2">{leader.position}</div>
                  <p className="text-gray-700 mb-4">{leader.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {leader.highlights.map((h, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">{h}</span>
                    ))}
                  </div>
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">LinkedIn</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 