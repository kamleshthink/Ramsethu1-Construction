import { motion } from "framer-motion";

const jobs = [
  {
    title: "Project Engineer (Electrical)",
    location: "Ranchi, Jharkhand",
    type: "Full Time",
    posted: "2 days ago",
    description: "Lead site execution for electrical EPC projects, manage teams, ensure quality and safety standards.",
    requirements: ["B.E./Diploma in Electrical", "2+ years experience", "Site management", "AutoCAD/Drawings"],
    apply: "mailto:hr@ramsethu.com?subject=Application%20for%20Project%20Engineer%20(Electrical)"
  },
  {
    title: "Procurement Executive",
    location: "Hazaribagh, Jharkhand",
    type: "Full Time",
    posted: "1 week ago",
    description: "Handle vendor management, purchase orders, and material logistics for ongoing projects.",
    requirements: ["Graduate", "1+ year experience", "MS Office", "Negotiation skills"],
    apply: "mailto:hr@ramsethu.com?subject=Application%20for%20Procurement%20Executive"
  },
  {
    title: "Solar Project Supervisor",
    location: "Patna, Bihar",
    type: "Contract",
    posted: "5 days ago",
    description: "Supervise solar rooftop and microgrid installations, coordinate with clients and field teams.",
    requirements: ["Diploma/ITI", "Solar project experience", "Field supervision", "Client coordination"],
    apply: "mailto:hr@ramsethu.com?subject=Application%20for%20Solar%20Project%20Supervisor"
  }
];

const perks = [
  "Competitive Salary & Incentives",
  "Health & Accident Insurance",
  "On-site Allowances",
  "Training & Certification Support",
  "Career Growth Pathways",
  "Employee Recognition Programs"
];

export default function HumanCapitalCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Career <span className="text-yellow-400">Opportunities</span></h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">Join our team and build India’s infrastructure future with us</p>
          </motion.div>
        </div>
      </div>

      {/* Job Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Current <span className="text-green-600">Openings</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore exciting roles and apply to be a part of our growth journey</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((job, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">{job.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="mr-2">📍</span>{job.location}
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="mr-2">🕒</span>{job.type} • {job.posted}
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Requirements:</h4>
                    <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <a href={job.apply} className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 text-sm">Apply Now</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why <span className="text-green-600">Work With Us?</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer a dynamic work environment, growth opportunities, and industry-best benefits</p>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center">
            {perks.map((perk, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="bg-green-50 text-green-700 px-6 py-4 rounded-2xl shadow text-lg font-semibold">
                {perk}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 