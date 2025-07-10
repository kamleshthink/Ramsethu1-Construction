import { motion } from "framer-motion";

const programs = [
  {
    title: "Onboarding & Induction",
    description: "Comprehensive orientation for new hires covering company values, safety, and project processes.",
    highlights: ["Company Culture", "Safety Training", "Process Orientation"],
    icon: "🎓"
  },
  {
    title: "Technical Skills Workshops",
    description: "Hands-on workshops on electrical, solar, and railway project execution, led by industry experts.",
    highlights: ["Electrical EPC", "Solar Installation", "Railway Signaling"],
    icon: "🛠️"
  },
  {
    title: "Leadership Development",
    description: "Programs to nurture future leaders with focus on project management, communication, and decision-making.",
    highlights: ["Project Management", "Team Leadership", "Strategic Thinking"],
    icon: "🚀"
  },
  {
    title: "Safety & Compliance",
    description: "Mandatory safety, HSE, and compliance training for all site and office staff.",
    highlights: ["HSE Protocols", "Zero Accident Mission", "Compliance"],
    icon: "🦺"
  },
  {
    title: "Digital Skills & Innovation",
    description: "Training on digital tools, AutoCAD, project management software, and innovation in construction.",
    highlights: ["AutoCAD", "Digital Tools", "Innovation"],
    icon: "💻"
  },
  {
    title: "Continuous Learning",
    description: "Support for certifications, online courses, and self-paced learning for all employees.",
    highlights: ["Certifications", "Online Courses", "Skill Upgradation"],
    icon: "📚"
  }
];

const stats = [
  { metric: "Employees Trained", value: "200+", description: "Across all programs" },
  { metric: "Workshops Conducted", value: "35+", description: "Technical & soft skills" },
  { metric: "Certifications Supported", value: "50+", description: "Industry-recognized" },
  { metric: "Safety Sessions", value: "100%", description: "Staff covered" }
];

export default function HumanCapitalTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Training & <span className="text-yellow-400">Development</span></h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">Empowering our people with skills, knowledge, and growth opportunities</p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.metric}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our <span className="text-orange-600">Programs</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Continuous learning and upskilling for every employee</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((prog, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-yellow-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="text-4xl mb-4">{prog.icon}</div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-2">{prog.title}</h3>
                  <p className="text-gray-700 mb-4">{prog.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {prog.highlights.map((h, i) => (
                      <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">{h}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 