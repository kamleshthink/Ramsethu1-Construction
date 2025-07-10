import { motion } from "framer-motion";

const benefits = [
  {
    title: "Competitive Salary & Incentives",
    description: "Attractive compensation packages with performance-based incentives and annual appraisals.",
    icon: "💰"
  },
  {
    title: "Health & Accident Insurance",
    description: "Comprehensive medical, health, and accident insurance coverage for employees and their families.",
    icon: "🏥"
  },
  {
    title: "Provident Fund & Gratuity",
    description: "Retirement benefits including EPF, gratuity, and long-term financial security.",
    icon: "🏦"
  },
  {
    title: "On-site Allowances",
    description: "Daily allowances, travel, and accommodation support for project site staff.",
    icon: "🚗"
  },
  {
    title: "Training & Certification Support",
    description: "Company-sponsored training, certifications, and skill upgradation programs.",
    icon: "🎓"
  },
  {
    title: "Leave & Holidays",
    description: "Paid annual leave, festival holidays, and special leave for personal needs.",
    icon: "🌴"
  },
  {
    title: "Employee Recognition",
    description: "Awards, bonuses, and recognition programs for outstanding performance.",
    icon: "🏆"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work policies, supportive environment, and focus on employee well-being.",
    icon: "⚖️"
  }
];

const stats = [
  { metric: "Employees Covered", value: "100%", description: "All full-time staff" },
  { metric: "Insurance Claims Settled", value: "98%", description: "Quick & hassle-free" },
  { metric: "Recognition Awards", value: "25+", description: "Annual employee awards" },
  { metric: "Training Sponsored", value: "50+", description: "Certifications & courses" }
];

export default function HumanCapitalBenefits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Employee <span className="text-yellow-400">Benefits</span></h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">We care for our people with industry-best benefits and support</p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.value}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.metric}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our <span className="text-green-600">Benefits</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive support for every stage of your career</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-green-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 mb-2">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 