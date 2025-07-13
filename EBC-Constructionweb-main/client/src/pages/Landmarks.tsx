import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet";
import { Search, Filter, MapPin, Calendar, User, Layers, CheckCircle, Loader2 } from "lucide-react";
import { completedProjects, ongoingProjects } from "./Projects";
import { expertiseData } from "@/data/expertiseData";

// Projects को expertiseData से enrich करें ताकि image, title, category मिल सके
function enrichProject(project: any) {
  // expertiseData में client/location/description/value से match करें
  const match = expertiseData.find(ed => {
    // title या description या client/location से loose match
    return (
      (ed.title && project.description && project.description.toLowerCase().includes(ed.title.toLowerCase())) ||
      (ed.projects && ed.projects.some(p => project.description && project.description.toLowerCase().includes(p.toLowerCase()))) ||
      (ed.title && project.client && project.client.toLowerCase().includes(ed.title.toLowerCase().split(" ")[0]))
    );
  });
  return {
    ...project,
    image: match?.image,
    category: match?.title,
    title: match?.title || project.client
  };
}

const allProjects = [
  ...completedProjects.map((p: any) => enrichProject({ ...p, status: "Completed" })),
  ...ongoingProjects.map((p: any) => enrichProject({ ...p, status: "Ongoing" }))
];

const allClients = Array.from(new Set(allProjects.map(p => p.client)));
const allLocations = Array.from(new Set(allProjects.map(p => p.location)));
const allCategories = Array.from(new Set(allProjects.map(p => p.category || "Other")));
const allStatus = ["All", "Completed", "Ongoing"];

export default function Landmarks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedClient, setSelectedClient] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const handleFilter = () => {
    let filtered = allProjects;
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => (project.category || "Other") === selectedCategory);
    }
    if (selectedClient !== "All") {
      filtered = filtered.filter(project => project.client === selectedClient);
    }
    if (selectedLocation !== "All") {
      filtered = filtered.filter(project => project.location === selectedLocation);
    }
    if (selectedStatus !== "All") {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }
    setFilteredProjects(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [searchTerm, selectedCategory, selectedClient, selectedLocation, selectedStatus]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Helmet>
        <title>Landmark Projects - Ramsethu Construction </title>
        <meta name="description" content="Explore Ramsethu Construction's landmark infrastructure projects across India including electrical, solar, railway, and more." />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Landmark Projects</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              हमारी कंपनी के असली प्रोजेक्ट्स और उपलब्धियां
            </p>
          </div>
        </div>
      </section>
      {/* Advanced Filters */}
      <section className="py-8 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="col-span-2 flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <Layers className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                {allCategories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedClient} onValueChange={setSelectedClient}>
              <SelectTrigger className="w-full">
                <User className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Clients</SelectItem>
                {allClients.map((client) => (
                  <SelectItem key={client} value={client}>{client}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Locations</SelectItem>
                {allLocations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full">
                <CheckCircle className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {allStatus.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project: any, idx) => (
              <div
                key={idx}
                className="rounded-3xl shadow-2xl bg-blue-100 border border-blue-100 overflow-hidden group hover:scale-105 hover:shadow-blue-300 transition-all duration-300 text-blue-900"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title || project.client}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-200 text-6xl text-blue-400">
                      <Layers />
                    </div>
                  )}
                  <div className="absolute top-2 left-2 flex gap-2">
                    <Badge variant="secondary" className="bg-white/80 text-blue-800 font-bold shadow">{project.category || "Other"}</Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className={`font-bold px-3 py-1 text-xs shadow ${project.status === "Completed" ? "bg-green-500/90 text-white animate-pulse" : "bg-yellow-400/90 text-gray-900 animate-bounce"}`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-blue-700" />
                    <span className="font-bold text-blue-900 text-lg">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="text-gray-700 mb-2 text-sm min-h-[48px]">{project.description}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">{project.value}</span>
                  </div>
                  <Button size="sm" variant="outline" className="mt-2 w-full group-hover:bg-blue-100 group-hover:text-blue-900 transition-all duration-200">
                    View Project Details
                  </Button>
                </CardContent>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center text-gray-500 py-20 flex flex-col items-center">
              <Loader2 className="h-10 w-10 animate-spin mb-4 text-blue-400" />
              <div className="text-xl font-bold">कोई प्रोजेक्ट नहीं मिला!</div>
              <div className="text-gray-500">Filter बदलें या search करें।</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
