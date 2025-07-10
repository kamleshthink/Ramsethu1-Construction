import { motion } from "framer-motion";
import { useState } from "react";

export default function MediaPhotos() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { name: "All", icon: "🖼️" },
    { name: "Projects", icon: "🏗️" },
    { name: "Events", icon: "🎉" },
    { name: "Team", icon: "👥" },
    { name: "Awards", icon: "🏆" },
    { name: "CSR", icon: "🤝" }
  ];

  const images = [
    { src: "/assets/photos/construction photos/Networks_Telecommunications (1).jpg", title: "400kV Substation", category: "Projects", description: "High-voltage substation site" },
    { src: "/assets/photos/construction photos/solar microgrid.webp", title: "Solar Microgrid", category: "Projects", description: "Solar microgrid installation" },
    { src: "/assets/photos/construction photos/Railway-Signaling.jpg", title: "Railway Signaling", category: "Projects", description: "Railway signaling project" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg", title: "Rooftop Solar", category: "Projects", description: "Rooftop solar installation" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_54608a98.jpg", title: "Industrial Lighting", category: "Projects", description: "High mast lighting" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_639cb6f3.jpg", title: "Biogas Plant", category: "CSR", description: "Biogas plant installation" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.56_b126fb06.jpg", title: "Team Event", category: "Team", description: "Annual team event" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_5277bd48.jpg", title: "CCTV Installation", category: "Projects", description: "Industrial CCTV system" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.57_7290e3e9.jpg", title: "Solar Microgrid", category: "CSR", description: "Solar for rural development" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_012c8248.jpg", title: "Electrical Infra", category: "Projects", description: "Electrical infrastructure" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_3264edc3.jpg", title: "Transmission Line", category: "Projects", description: "Transmission line work" },
    { src: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.58_ce539a4c.jpg", title: "Safety Park", category: "Awards", description: "Award-winning safety park" }
  ];

  const filteredImages = selectedCategory === "All" ? images : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Photo <span className="text-yellow-400">Gallery</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">Company events, project sites, and team moments</p>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map(cat => (
              <button key={cat.name} onClick={() => setSelectedCategory(cat.name)} className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === cat.name ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'}`}>{cat.icon} {cat.name}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredImages.map((img, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="cursor-pointer group" onClick={() => setSelectedImage(img.src)}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={img.src} alt={img.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                    <h3 className="font-bold text-lg text-white mb-1">{img.title}</h3>
                    <p className="text-sm text-gray-200">{img.description}</p>
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
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10">×</button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
} 