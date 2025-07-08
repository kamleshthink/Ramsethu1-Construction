import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet";
import { Search, Filter, MapPin, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AIIMS Hospital Complex",
    description: "State-of-the-art medical facility with advanced healthcare infrastructure and modern amenities.",
    category: "Healthcare",
    location: "New Delhi",
    year: "2023",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Mumbai-Pune Expressway Bridge",
    description: "Major transportation infrastructure connecting Mumbai and Pune with modern engineering solutions.",
    category: "Transportation",
    location: "Maharashtra",
    year: "2022",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "Hyderabad IT Park",
    description: "Modern technology campus with sustainable design features and world-class facilities.",
    category: "Buildings",
    location: "Hyderabad",
    year: "2023",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    title: "Cauvery Water Treatment Plant",
    description: "Large-scale water treatment facility serving millions with advanced purification technology.",
    category: "Water & Environment",
    location: "Karnataka",
    year: "2022",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    title: "Chennai Metro Rail",
    description: "Urban transportation solution connecting major areas of Chennai with modern metro infrastructure.",
    category: "Railways",
    location: "Chennai",
    year: "2021",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    title: "Kaleshwaram Lift Irrigation",
    description: "Massive irrigation project providing water to drought-prone areas with innovative lift technology.",
    category: "Irrigation",
    location: "Telangana",
    year: "2023",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 7,
    title: "Singareni Coal Mining",
    description: "Large-scale coal extraction project with modern mining equipment and safety measures.",
    category: "Mining",
    location: "Telangana",
    year: "2022",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 8,
    title: "Karnataka Power Grid",
    description: "High-voltage transmission infrastructure connecting power generation to distribution networks.",
    category: "Electrical",
    location: "Karnataka",
    year: "2023",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

const categories = ["All", "Healthcare", "Transportation", "Buildings", "Water & Environment", "Railways", "Irrigation", "Mining", "Electrical"];

export default function Landmarks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = () => {
    let filtered = projects;
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    setFilteredProjects(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Landmark Projects - Ramsethu Construction </title>
        <meta name="description" content="Explore Ramsethu Construction's landmark infrastructure projects across India including healthcare, transportation, buildings, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Landmark Projects</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Showcasing our portfolio of transformative infrastructure projects
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={handleFilter} variant="outline">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden card-hover">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to discuss your infrastructure development needs
            </p>
            <Button size="lg" className="bg-primary hover:bg-blue-800">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
