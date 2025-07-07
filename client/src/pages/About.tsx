import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Calendar, Users, Trophy, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - EBC Limited</title>
        <meta name="description" content="Learn about EBC Limited's 4 decades of excellence in infrastructure development, our mission, vision, and commitment to building India's future." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EBC Limited</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Four decades of unwavering commitment to infrastructure excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy</h2>
                <p className="text-lg text-gray-600 mb-6">
                  EBC Limited has made a mark in the country as one of the largest listed companies in terms of revenue with proven expertise in buildings, transportation, water and environment, irrigation, electrical (T&D), mining and railways sectors.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  In the last 4 decades, we have registered remarkable growth, both in terms of number and variety of projects. We have progressed from strength to strength in building expertise within the organisation to handle complex and challenging projects.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">160+</div>
                    <div className="text-sm text-gray-600">Active Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">9</div>
                    <div className="text-sm text-gray-600">Pan India Offices</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="EBC Construction Projects" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be the premier infrastructure development company in India, delivering world-class projects that contribute to the nation's growth while maintaining the highest standards of quality, safety, and sustainability.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To transform India's infrastructure landscape through innovative engineering solutions, creating sustainable value for all stakeholders while building a legacy of excellence for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our 4-decade journey</p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  year: "1980s",
                  title: "Foundation Years",
                  description: "EBC was established with a vision to contribute to India's infrastructure development."
                },
                {
                  year: "1990s", 
                  title: "Expansion Phase",
                  description: "Expanded operations across multiple states and diversified into various construction sectors."
                },
                {
                  year: "2000s",
                  title: "Technology Integration",
                  description: "Adopted advanced construction technologies and modern project management practices."
                },
                {
                  year: "2010s",
                  title: "Sustainable Growth",
                  description: "Focused on sustainable construction practices and environmental responsibility."
                },
                {
                  year: "2020s",
                  title: "Digital Transformation",
                  description: "Embracing digital technologies and smart construction solutions for the future."
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="secondary" className="mr-3">{milestone.year}</Badge>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide our every action</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  description: "We maintain the highest standards of honesty and ethical behavior in all our dealings."
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in every project, delivering quality that exceeds expectations."
                },
                {
                  title: "Innovation",
                  description: "We embrace innovative solutions and technologies to overcome challenges and create value."
                },
                {
                  title: "Sustainability",
                  description: "We are committed to sustainable practices that protect the environment for future generations."
                },
                {
                  title: "Safety",
                  description: "We prioritize the safety of our workforce and communities in all our operations."
                },
                {
                  title: "Teamwork",
                  description: "We believe in the power of collaboration and teamwork to achieve extraordinary results."
                }
              ].map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
