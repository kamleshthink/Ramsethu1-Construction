import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Building, Droplets, Construction, Train, TreePine, Pickaxe, Zap } from "lucide-react";

const expertiseData = [
  {
    id: "buildings",
    title: "Buildings",
    icon: <Building className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    description: "Buildings & housing are key measures of the growth and development of a nation, reflecting the living standards of its citizens. EBC has been a major player in this area, having contributed to construction, including industrial buildings, commercial buildings, housing projects, IT parks, shopping malls, sports complexes, hospitals and stadiums.",
    projects: [
      "Industrial Buildings",
      "Commercial Buildings", 
      "Housing Projects",
      "IT Parks",
      "Shopping Malls",
      "Sports Complexes",
      "Hospitals",
      "Stadiums"
    ]
  },
  {
    id: "water",
    title: "Water & Environment",
    icon: <Droplets className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    description: "Water has become a source of concern across the globe with the rapid degradation of the environment and unbridled exploitation of natural water resources. Management of water and waste water has assumed enormous significance and NCC plays a crucial role in this field. NCC has augmented its expertise to be able to execute various water supply, drainage systems and sewage treatment plants through specialised systems for high-value projects.",
    projects: [
      "Water Supply Systems",
      "Drainage Systems",
      "Sewage Treatment Plants",
      "Water Treatment Plants",
      "Desalination Plants",
      "Environmental Management"
    ]
  },
  {
    id: "transportation",
    title: "Transportation",
    icon: <Construction className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    description: "A strong transportation network shortens the mile, paving the way for better connectivity. Roads form the heart-line of transportation, establishing accessibility to the remotest part of the country, helping maximise economic and social benefits. EBC has proved to be a reliable executor of large-scale contracts within tight schedules. Working hand-in-hand with the government, NCC is working to transform the roads & highways network in the country.",
    projects: [
      "National Highways",
      "State Highways",
      "Urban Roads",
      "Bridges & Flyovers",
      "Expressways",
      "Airport Runways"
    ]
  },
  {
    id: "railways",
    title: "Railways",
    icon: <Train className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    description: "The development of the nation is kept on track by the smooth movement of people and goods. EBC has undertaken to keep the wheels of growth in constant motion by engaging in projects involving dedicated freight corridors, zonal railway projects and private railway sidings.",
    projects: [
      "Dedicated Freight Corridors",
      "Zonal Railway Projects",
      "Private Railway Sidings",
      "Railway Stations",
      "Railway Bridges",
      "Signaling Systems"
    ]
  },
  {
    id: "irrigation",
    title: "Irrigation",
    icon: <TreePine className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    description: "The lifeline of farmers and the basic necessity to feed the vast population, irrigation infrastructure includes a network of major, medium and minor canals from Indian rivers, groundwater, well-based systems, tanks, and other rainwater harvesting projects for agricultural activities.",
    projects: [
      "Major Canals",
      "Medium Canals",
      "Minor Canals",
      "Groundwater Systems",
      "Well-based Systems",
      "Rainwater Harvesting"
    ]
  },
  {
    id: "mining",
    title: "Mining",
    icon: <Pickaxe className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    description: "Spurred by the government of India's firm plans for private sector participation in the mining sector, EBC is digging into this business through Mine Developer-cum-Operator (MDO), removal of overburden and extraction and transportation of coal from Open Cast Mines in India.",
    projects: [
      "Mine Development",
      "Coal Extraction",
      "Overburden Removal",
      "Transportation Systems",
      "Open Cast Mining",
      "Mining Infrastructure"
    ]
  },
  {
    id: "electrical",
    title: "Electrical (T&D)",
    icon: <Zap className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    description: "The growing need for electrification across the nation has resulted in the impetus given by the government to speedily impart accessibility to power. NCC's Electrical Division is equipped to handle extensive and demanding electrical construction projects. The vast repertoire of expertise in design, engineering, erection, testing and commissioning of EHV/HV sub-stations & transmission lines, high voltage distribution systems, feeder separation schemes, have helped NCC plug in its strengths to various projects.",
    projects: [
      "EHV/HV Sub-stations",
      "Transmission Lines",
      "Distribution Systems",
      "Feeder Separation",
      "Power Generation",
      "Grid Connectivity"
    ]
  }
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState("buildings");

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Expertise - NCC Limited</title>
        <meta name="description" content="Explore NCC Limited's expertise across Buildings, Water & Environment, Transportation, Railways, Irrigation, Mining, and Electrical sectors." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive infrastructure solutions across diverse sectors
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
                {expertiseData.map((item) => (
                  <TabsTrigger key={item.id} value={item.id} className="text-xs lg:text-sm">
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {expertiseData.map((item) => (
                <TabsContent key={item.id} value={item.id} className="mt-0">
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-[21/9] overflow-hidden rounded-t-lg">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                            {item.icon}
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
                        </div>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Project Types</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {item.projects.map((project, index) => (
                              <Badge key={index} variant="outline" className="justify-center py-2">
                                {project}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">490+</div>
                <div className="text-gray-600">Building Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20,000+</div>
                <div className="text-gray-600">KM Pipelines</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">350,000+</div>
                <div className="text-gray-600">Acres Irrigated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">35,000+</div>
                <div className="text-gray-600">Villages Electrified</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
