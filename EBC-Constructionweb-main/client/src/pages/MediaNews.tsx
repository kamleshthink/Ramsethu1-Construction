import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MediaNews() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const newsArticles = [
    {
      id: 1,
      title: "Ramsethu Construction: Rising Star in India's Infrastructure Sector",
      source: "Economic Times",
      date: "March 20, 2024",
      category: "Business",
      summary: "Feature article highlighting the company's rapid growth and innovative approach to infrastructure development",
      content: "Ramsethu Electrical & Mechanical Solutions Pvt. Ltd. has emerged as a rising star in India's infrastructure sector, achieving remarkable growth from ₹1.04 crore in 2019-20 to ₹10 crore in 2023-24. The company's focus on renewable energy and railway infrastructure has positioned it as a key player in sustainable development.",
      highlights: ["Rapid Growth", "Renewable Energy", "Railway Infrastructure", "Sustainable Development"],
      readTime: "5 min read",
      image: "/assets/photos/construction photos/Networks_Telecommunications (1).jpg",
      icon: "📰"
    },
    {
      id: 2,
      title: "Solar Microgrids Powering Rural Jharkhand",
      source: "Hindustan Times",
      date: "February 15, 2024",
      category: "Technology",
      summary: "Coverage of solar microgrid projects bringing sustainable energy to remote villages",
      content: "Ramsethu Construction's innovative solar microgrid projects are transforming rural electrification in Jharkhand. The company has successfully installed 25kWp systems across multiple villages, providing reliable electricity to over 500 households and supporting local economic development.",
      highlights: ["Solar Microgrids", "Rural Electrification", "500+ Households", "Economic Development"],
      readTime: "4 min read",
      image: "/assets/photos/construction photos/solar microgrid.webp",
      icon: "☀️"
    },
    {
      id: 3,
      title: "Railway Infrastructure Modernization: A Success Story",
      source: "Railway Gazette",
      date: "January 30, 2024",
      category: "Infrastructure",
      summary: "Detailed coverage of railway signaling and telecommunications projects",
      content: "Ramsethu Construction's expertise in railway signaling and telecommunications has contributed significantly to Indian Railways' modernization efforts. The company's projects across Eastern and South Eastern Railway zones have enhanced safety and operational efficiency.",
      highlights: ["Railway Modernization", "Signaling Systems", "Safety Enhancement", "Operational Efficiency"],
      readTime: "6 min read",
      image: "/assets/photos/construction photos/Railway-Signaling.jpg",
      icon: "🚂"
    },
    {
      id: 4,
      title: "From Local to National: Ramsethu's Expansion Journey",
      source: "Business Standard",
      date: "December 25, 2023",
      category: "Business",
      summary: "Business case study on the company's strategic expansion across India",
      content: "Starting from Hazaribagh, Jharkhand in 2016, Ramsethu Construction has strategically expanded its operations across 5 states. The company's focus on quality, innovation, and customer satisfaction has been key to its successful pan-India presence.",
      highlights: ["Strategic Expansion", "5 States", "Quality Focus", "Customer Satisfaction"],
      readTime: "7 min read",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg",
      icon: "🌍"
    },
    {
      id: 5,
      title: "Renewable Energy: The Future of Infrastructure",
      source: "Energy Today",
      date: "November 20, 2023",
      category: "Energy",
      summary: "Feature on renewable energy projects and sustainable infrastructure development",
      content: "Ramsethu Construction is leading the charge in renewable energy infrastructure development. The company's solar rooftop and microgrid projects demonstrate how sustainable energy solutions can drive economic growth while protecting the environment.",
      highlights: ["Renewable Energy", "Solar Projects", "Sustainable Development", "Environmental Protection"],
      readTime: "5 min read",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_54608a98.jpg",
      icon: "⚡"
    },
    {
      id: 6,
      title: "Innovation in Electrical Infrastructure",
      source: "Power Engineering",
      date: "October 15, 2023",
      category: "Technology",
      summary: "Technical article on advanced electrical infrastructure solutions",
      content: "Ramsethu Construction's innovative approach to electrical infrastructure has set new standards in the industry. From 400kV substations to smart grid solutions, the company is at the forefront of electrical engineering excellence.",
      highlights: ["Electrical Innovation", "400kV Substations", "Smart Grid", "Engineering Excellence"],
      readTime: "6 min read",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_639cb6f3.jpg",
      icon: "🔌"
    },
    {
      id: 7,
      title: "Workforce Development: Building India's Future",
      source: "HR Digest",
      date: "September 10, 2023",
      category: "Human Resources",
      summary: "Coverage of workforce expansion and employee development initiatives",
      content: "Ramsethu Construction's commitment to workforce development has created employment opportunities for over 100 engineers and skilled professionals. The company's focus on training and skill development is building India's infrastructure workforce of the future.",
      highlights: ["Workforce Development", "100+ Employees", "Training Programs", "Skill Development"],
      readTime: "4 min read",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_b126fb06.jpg",
      icon: "👥"
    },
    {
      id: 8,
      title: "Safety First: Industrial Security Solutions",
      source: "Safety & Security Today",
      date: "August 25, 2023",
      category: "Safety",
      summary: "Article on industrial safety and security infrastructure projects",
      content: "Ramsethu Construction's expertise in industrial safety and security solutions has made it a trusted partner for major industrial projects. The company's CCTV and safety systems installations ensure workplace security and operational safety.",
      highlights: ["Industrial Safety", "Security Solutions", "CCTV Systems", "Workplace Security"],
      readTime: "5 min read",
      image: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_5277bd48.jpg",
      icon: "🛡️"
    }
  ];

  const categories = ["All", "Business", "Technology", "Infrastructure", "Energy", "Human Resources", "Safety"];

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const stats = [
    {
      metric: "News Articles",
      value: newsArticles.length,
      description: "Total media coverage"
    },
    {
      metric: "Publications",
      value: "8+",
      description: "Leading media outlets"
    },
    {
      metric: "Read Time",
      value: "5 min avg",
      description: "Average article length"
    },
    {
      metric: "Categories",
      value: "7",
      description: "Diverse coverage areas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              News <span className="text-yellow-400">Articles</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Media coverage and news articles featuring Ramsethu Construction
            </p>
          </motion.div>
        </div>
      </div>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.metric}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-green-600">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredArticles.length} articles found in {selectedCategory} category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-green-500 to-blue-600">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl">{article.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.readTime}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{article.title}</h3>
                    <p className="text-green-100 text-sm">{article.source} • {article.date}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-2">📰</span>
                    <span className="text-sm font-medium">{article.category}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">{article.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {article.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{article.source}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 text-sm">
                      Read Article
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Media <span className="text-yellow-400">Coverage</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Our achievements and innovations continue to receive recognition 
              from leading media outlets and industry publications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/media/coverage" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                View All Coverage
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors duration-300 text-lg">
                Contact Media
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 