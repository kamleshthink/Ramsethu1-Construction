import { motion } from "framer-motion";

const values = [
  {
    title: "Collaboration & Teamwork",
    description: "We believe that extraordinary results come from working together. Every individual's opinion matters.",
    icon: "🤝"
  },
  {
    title: "Respect & Diversity",
    description: "Every background, gender, and perspective is respected. Diversity is our strength.",
    icon: "🌏"
  },
  {
    title: "Learning & Growth",
    description: "Every employee gets opportunities to learn, upskill, and grow ahead.",
    icon: "📚"
  },
  {
    title: "Integrity & Ethics",
    description: "We always work with honesty, transparency, and strong ethics.",
    icon: "🛡️"
  },
  {
    title: "Celebration & Recognition",
    description: "Every achievement, festival, and milestone is celebrated together.",
    icon: "🎉"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible policies and a supportive environment help maintain balance in personal and professional life.",
    icon: "⚖️"
  }
];

const testimonials = [
  {
    name: "Ravi Kumar",
    position: "Project Engineer",
    quote: "Working at Ramsethu is all about growth, respect, and teamwork. Every day brings a new learning experience.",
    image: "/assets/photos/testimonial/testimonial1.png"
  },
  {
    name: "Priya Singh",
    position: "HR Executive",
    quote: "The company culture is very positive. Every achievement is celebrated and every employee is valued.",
    image: "/assets/photos/testimonial/testimonial2.png"
  },
  {
    name: "Amit Verma",
    position: "Site Supervisor",
    quote: "Safety, training, and recognition – Ramsethu truly cares for its employees. Proud to be a part!",
    image: "/assets/photos/testimonial/testimonial3.png"
  }
];

export default function HumanCapitalCulture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Work <span className="text-yellow-400">Culture</span></h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">Our culture is based on employee growth, respect, and celebration.</p>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our <span className="text-purple-600">Values</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The values that define Ramsethu's work culture</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((val, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-purple-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">{val.icon}</div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-2">{val.title}</h3>
                  <p className="text-gray-700 mb-2">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Employee <span className="text-purple-600">Voices</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ramsethu's culture in the words of our employees</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 text-center p-8">
                <img src={t.image} alt={t.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-purple-100" />
                <h3 className="text-xl font-bold text-purple-700 mb-1">{t.name}</h3>
                <div className="text-gray-600 mb-2">{t.position}</div>
                <p className="italic text-gray-700">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 