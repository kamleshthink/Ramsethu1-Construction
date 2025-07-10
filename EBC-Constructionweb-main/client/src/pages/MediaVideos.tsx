import { motion } from "framer-motion";
import { useState } from "react";

export default function MediaVideos() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const videos = [
    {
      id: 1,
      title: "Ramsethu Construction: Company Overview",
      description: "Comprehensive overview of our company, mission, and capabilities in infrastructure development",
      category: "Company",
      duration: "3:45",
      thumbnail: "/assets/photos/construction photos/Networks_Telecommunications (1).jpg",
      videoUrl: "https://www.youtube.com/embed/example1",
      highlights: ["Company Overview", "Mission & Vision", "Core Capabilities", "Growth Story"],
      views: "2.5K",
      date: "March 2024",
      icon: "🏢"
    },
    {
      id: 2,
      title: "Solar Microgrid Installation Process",
      description: "Step-by-step guide to our solar microgrid installation process in rural areas",
      category: "Projects",
      duration: "5:20",
      thumbnail: "/assets/photos/construction photos/solar microgrid.webp",
      videoUrl: "https://www.youtube.com/embed/example2",
      highlights: ["Solar Installation", "Rural Development", "Technical Process", "Community Impact"],
      views: "1.8K",
      date: "February 2024",
      icon: "☀️"
    },
    {
      id: 3,
      title: "Railway Signaling Systems: Technical Deep Dive",
      description: "Detailed technical explanation of railway signaling and telecommunications systems",
      category: "Technical",
      duration: "7:15",
      thumbnail: "/assets/photos/construction photos/Railway-Signaling.jpg",
      videoUrl: "https://www.youtube.com/embed/example3",
      highlights: ["Railway Signaling", "Technical Details", "Safety Systems", "Innovation"],
      views: "3.2K",
      date: "January 2024",
      icon: "🚂"
    },
    {
      id: 4,
      title: "Project Site Tour: 400kV Substation",
      description: "Virtual tour of our 400kV substation project site showcasing construction progress",
      category: "Projects",
      duration: "4:30",
      thumbnail: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg",
      videoUrl: "https://www.youtube.com/embed/example4",
      highlights: ["400kV Substation", "Site Tour", "Construction Progress", "Engineering Excellence"],
      views: "2.1K",
      date: "December 2023",
      icon: "⚡"
    },
    {
      id: 5,
      title: "Safety Protocols and Best Practices",
      description: "Comprehensive guide to safety protocols and best practices in infrastructure projects",
      category: "Safety",
      duration: "6:45",
      thumbnail: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_54608a98.jpg",
      videoUrl: "https://www.youtube.com/embed/example5",
      highlights: ["Safety Protocols", "Best Practices", "Workplace Safety", "Training"],
      views: "1.5K",
      date: "November 2023",
      icon: "🛡️"
    },
    {
      id: 6,
      title: "Renewable Energy: Our Commitment",
      description: "Showcasing our commitment to renewable energy and sustainable development",
      category: "Sustainability",
      duration: "4:15",
      thumbnail: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_639cb6f3.jpg",
      videoUrl: "https://www.youtube.com/embed/example6",
      highlights: ["Renewable Energy", "Sustainability", "Green Technology", "Environmental Impact"],
      views: "2.8K",
      date: "October 2023",
      icon: "🌱"
    },
    {
      id: 7,
      title: "Team Spotlight: Our Engineers",
      description: "Meet our team of skilled engineers and professionals behind our success",
      category: "Team",
      duration: "5:50",
      thumbnail: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_b126fb06.jpg",
      videoUrl: "https://www.youtube.com/embed/example7",
      highlights: ["Team Spotlight", "Engineers", "Professional Development", "Company Culture"],
      views: "1.9K",
      date: "September 2023",
      icon: "👥"
    },
    {
      id: 8,
      title: "Quality Assurance: Our Standards",
      description: "Detailed look at our quality assurance processes and standards",
      category: "Quality",
      duration: "4:40",
      thumbnail: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_5277bd48.jpg",
      videoUrl: "https://www.youtube.com/embed/example8",
      highlights: ["Quality Assurance", "Standards", "Process Excellence", "Customer Satisfaction"],
      views: "1.7K",
      date: "August 2023",
      icon: "⭐"
    }
  ];

  const categories = ["All", "Company", "Projects", "Technical", "Safety", "Sustainability", "Team", "Quality"];

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const stats = [
    {
      metric: "Videos",
      value: videos.length,
      description: "Total video content"
    },
    {
      metric: "Total Views",
      value: "17.7K+",
      description: "Combined video views"
    },
    {
      metric: "Categories",
      value: "8",
      description: "Diverse content types"
    },
    {
      metric: "Duration",
      value: "42 min",
      description: "Total content length"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-20 overflow-hidden">
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
              Video <span className="text-yellow-400">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Multimedia content showcasing our projects, expertise, and company culture
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
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
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
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-purple-600">Video</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our latest company overview and project highlights
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="relative h-96 bg-gradient-to-br from-purple-500 to-pink-600">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">▶️</div>
                  <h3 className="text-2xl font-bold mb-2">Ramsethu Construction: Company Overview</h3>
                  <p className="text-purple-100">Duration: 3:45 • Views: 2.5K</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed">
                Comprehensive overview of our company, mission, and capabilities in infrastructure development. 
                Learn about our journey from a local contractor to a national infrastructure player.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video <span className="text-purple-600">Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredVideos.length} videos found in {selectedCategory} category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-600">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-2xl">{video.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl text-white">▶️</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <p className="text-purple-100 text-sm">{video.views} views</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className="mr-2">📹</span>
                    <span className="text-sm font-medium">{video.category}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{video.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Highlights:</h4>
                    <div className="space-y-1">
                      {video.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{video.date}</span>
                    <button className="bg-purple-600 text-white px-3 py-1 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300 text-sm">
                      Watch Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Subscribe to <span className="text-yellow-400">Our Channel</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Stay updated with our latest videos, project updates, and company insights 
              by subscribing to our video channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Subscribe Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors duration-300 text-lg">
                Request Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 