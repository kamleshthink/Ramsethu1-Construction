import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      name: "All",
      count: 20,
      icon: "🖼️"
    },
    {
      name: "Electrical Infrastructure",
      count: 6,
      icon: "⚡"
    },
    {
      name: "Solar Projects",
      count: 5,
      icon: "☀️"
    },
    {
      name: "Railway Infrastructure",
      count: 4,
      icon: "🚂"
    },
    {
      name: "Industrial Projects",
      count: 3,
      icon: "🏭"
    },
    {
      name: "Construction Sites",
      count: 2,
      icon: "🏗️"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/assets/photos/construction photos/Networks_Telecommunications (1).jpg",
      title: "400kV Substation Installation",
      category: "Electrical Infrastructure",
      description: "High-voltage electrical infrastructure installation at WBSETCL substation",
      project: "GE T&D India Ltd. - Durgapur",
      year: "2024"
    },
    {
      id: 2,
      src: "/assets/photos/construction photos/solar microgrid.webp",
      title: "Solar Microgrid Deployment",
      category: "Solar Projects",
      description: "25kWp solar microgrid installation in rural communities",
      project: "Azure Power - Gumla",
      year: "2023"
    },
    {
      id: 3,
      src: "/assets/photos/construction photos/Railway-Signaling.jpg",
      title: "Railway Signaling Systems",
      category: "Railway Infrastructure",
      description: "Advanced railway signaling and telecommunications infrastructure",
      project: "ECR & SER Railways",
      year: "2023"
    },
    {
      id: 4,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg",
      title: "Rooftop Solar Installation",
      category: "Solar Projects",
      description: "50kWp rooftop solar PV system at educational institution",
      project: "Arka Jain University",
      year: "2023"
    },
    {
      id: 5,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_54608a98.jpg",
      title: "Industrial Infrastructure",
      category: "Industrial Projects",
      description: "Industrial lighting and infrastructure development",
      project: "BHEL / PVUNL",
      year: "2023"
    },
    {
      id: 6,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_639cb6f3.jpg",
      title: "High Mast Lighting",
      category: "Industrial Projects",
      description: "30-meter high mast lighting installation",
      project: "BHEL / PVUNL - Patratu",
      year: "2023"
    },
    {
      id: 7,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_b126fb06.jpg",
      title: "Biogas Plant Construction",
      category: "Construction Sites",
      description: "Biogas plant installation and civil works",
      project: "Gram Oorja - Darhatand",
      year: "2023"
    },
    {
      id: 8,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_5277bd48.jpg",
      title: "CCTV System Installation",
      category: "Industrial Projects",
      description: "CCTV system supply and installation",
      project: "BHEL - PVUNL Patratu",
      year: "2023"
    },
    {
      id: 9,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_7290e3e9.jpg",
      title: "Solar Microgrid Projects",
      category: "Solar Projects",
      description: "Multiple solar microgrid installations",
      project: "PRADAN - Multiple Locations",
      year: "2023"
    },
    {
      id: 10,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_012c8248.jpg",
      title: "Electrical Infrastructure",
      category: "Electrical Infrastructure",
      description: "11kV/415V electrical systems installation",
      project: "OSAM Dairy Pvt. Ltd.",
      year: "2023"
    },
    {
      id: 11,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_3264edc3.jpg",
      title: "Transmission Line Construction",
      category: "Electrical Infrastructure",
      description: "PCC poles and transmission line installation",
      project: "Gram Oorja - Kurdeg",
      year: "2023"
    },
    {
      id: 12,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_ce539a4c.jpg",
      title: "CCTV Safety Systems",
      category: "Industrial Projects",
      description: "CCTV package for safety park",
      project: "Bhavani Elect. Pvt. Ltd",
      year: "2023"
    },
    {
      id: 13,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.59_2c0bb881.jpg",
      title: "NTPC Kahalgaon Project",
      category: "Electrical Infrastructure",
      description: "Civil & erection work at NTPC Kahalgaon",
      project: "GE T&D India Ltd. - Kahalgaon",
      year: "2024"
    },
    {
      id: 14,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.59_e530fddd.jpg",
      title: "132kV Substation Control Room",
      category: "Electrical Infrastructure",
      description: "Control room construction for 132kV substation",
      project: "GE T&D India Ltd. - Purulia",
      year: "2024"
    },
    {
      id: 15,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.44.00_46663714.jpg",
      title: "Substation ETC Work",
      category: "Electrical Infrastructure",
      description: "ETC work for 132kV substation",
      project: "GE T&D India Ltd. - Ramkanali",
      year: "2024"
    },
    {
      id: 16,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_77ec44ef.jpg",
      title: "Railway Track Extension",
      category: "Railway Infrastructure",
      description: "Overrun line extension and loop line work",
      project: "SER - Tangarbansali",
      year: "2024"
    },
    {
      id: 17,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_cb8829dd.jpg",
      title: "IBS Signal Construction",
      category: "Railway Infrastructure",
      description: "IBS signal construction between stations",
      project: "SER - Barlanga Harubera",
      year: "2024"
    },
    {
      id: 18,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.40_f1e98f35.jpg",
      title: "RTU Installation",
      category: "Railway Infrastructure",
      description: "RTU installation and monitoring equipment",
      project: "SER - Ranchi Division",
      year: "2024"
    },
    {
      id: 19,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_0335104f.jpg",
      title: "Telecom Rehabilitation",
      category: "Railway Infrastructure",
      description: "Rehabilitation of telecom gears and cables",
      project: "ECR - GMO Tori Section",
      year: "2024"
    },
    {
      id: 20,
      src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 22.21.41_17e4f444.jpg",
      title: "Biogas Plant Installation",
      category: "Construction Sites",
      description: "Biogas plant installation and allied work",
      project: "Gram Oorja - Mukunda",
      year: "2024"
    }
  ];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
              Project <span className="text-yellow-400">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Visual journey through our infrastructure excellence and project achievements
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gallery <span className="text-purple-600">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our projects through different categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryCategories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-6 rounded-2xl text-center transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-bold text-sm mb-1">{category.name}</div>
                <div className="text-xs opacity-75">{category.count} images</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project <span className="text-purple-600">Images</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredImages.length} images in {selectedCategory} category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200 mb-2">{image.project}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span>{image.category}</span>
                        <span>{image.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected project"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Project Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gallery <span className="text-purple-600">Statistics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual documentation of our project achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Images</h3>
              <p className="text-gray-600">High-quality visual documentation</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Categories</h3>
              <p className="text-gray-600">Diverse project types covered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Years</h3>
              <p className="text-gray-600">Project timeline coverage</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Professional photography</p>
            </motion.div>
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
              Visual <span className="text-yellow-400">Excellence</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Our project gallery showcases the visual excellence and technical 
              precision that goes into every infrastructure project we deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/landmarks/gallery" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 text-lg">
                Download Gallery
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors duration-300 text-lg">
                Request Photos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 