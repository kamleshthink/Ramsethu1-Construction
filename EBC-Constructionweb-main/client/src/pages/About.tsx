import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Calendar, Users, Trophy, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - Ramsethu Construction </title>
        <meta name="description" content="Learn about Ramsethu Construction's 4 decades of excellence in infrastructure development, our mission, vision, and commitment to building India's future." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ramsethu Construction</h1>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview – Ramsethu Electrical & Mechanical Solutions Pvt. Ltd.</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ramsethu Electrical & Mechanical Solutions Pvt. Ltd. is a rapidly emerging force in India’s infrastructure landscape, specializing in Electrical, Mechanical, and Renewable Energy (Solar) solutions. Driven by technical excellence and a vision for a sustainable future, we deliver turnkey projects with precision, safety, and reliability.
                </p>
                <div className="mb-6">
                  <div className="font-semibold text-primary mb-2">🔧 Our Core Capabilities Include:</div>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <span className="font-semibold">Electrical EPC Works:</span> End-to-end erection, commissioning, and testing of high-voltage switchyards, power transformers, control panels, and transmission lines across industrial and public sector infrastructure.
                    </li>
                    <li>
                      <span className="font-semibold">Mechanical Solutions:</span> Professional execution of pipeline systems, boiler erection, and mechanical maintenance across thermal and industrial applications.
                    </li>
                    <li>
                      <span className="font-semibold">Solar Power Systems:</span> We have successfully installed over 300 kWp of solar power systems across rural and urban rooftops. Our landmark achievement includes the installation of 26 kWp solar PV systems across 10 railway stations under East Central Railway — contributing to Indian Railways' sustainability mission.
                    </li>
                    <li>
                      <span className="font-semibold">Railway Signalling & Telecom:</span> Our dedicated team executes complex projects involving signal system modernization, panel installations, switching gear upgrades, and cable laying for Indian Railways, ensuring safety, precision, and long-term reliability.
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="font-semibold text-primary mb-2">🛠️ Value We Bring:</div>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Strong engineering backbone with real-time execution capability</li>
                    <li>In-house facilities, tools, and trained manpower for high-scale operations</li>
                    <li>AMC, renovation, and maintenance-ready services across all verticals</li>
                    <li>Committed to quality, deadlines, and zero-defect delivery</li>
                  </ul>
                </div>
                <p className="text-lg text-gray-700 italic">We don’t just deliver infrastructure — we build the systems that power progress.</p>
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
                  description: "Ramsethu Construction was established with a vision to contribute to India's infrastructure development."
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
