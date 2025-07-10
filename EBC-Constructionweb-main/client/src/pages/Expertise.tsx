import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Building, Droplets, Construction, Train, TreePine, Pickaxe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { expertiseData } from "@/data/expertiseData";

export default function Expertise() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Core Specializations - Ramsethu Construction </title>
        <meta name="description" content="Explore Ramsethu Construction's core specializations in solar, railway, microgrid, networking, electrical, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Core Specializations</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Our expertise in modern infrastructure, energy, and technology
            </p>
          </div>
        </div>
      </section>

      {/* Specialization Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {expertiseData.map((item) => (
              <Link key={item.id} to={`/expertise/${item.id}`} className="block group">
                <Card className="transition-transform duration-300 group-hover:scale-105 shadow-lg cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-[21/9] overflow-hidden rounded-t-lg">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h2>
                      </div>
                      <p className="text-base text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <span className="text-primary font-semibold">View Details →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">120+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <div className="text-gray-600">Railway Signalling</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">60+</div>
                <div className="text-gray-600">Solar Microgrids</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600">Electrical Grids</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-gray-600">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
