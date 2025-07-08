import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Leaf, Shield, Users, Award, Target, Heart } from "lucide-react";

export default function Commitment() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Commitment - Ramsethu Construction </title>
        <meta name="description" content="Ramsethu Construction's commitment to sustainability, safety, quality, and corporate social responsibility in all our infrastructure projects." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building a sustainable future with integrity and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strong Foundation of Values</h2>
              <p className="text-xl text-gray-600">
                Outgrowing the belief that business exists for the sole purpose of profits, Ramsethu Construction has embedded the concept of sustainability in all three perspectives: economic, social and environmental.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental</h3>
                  <p className="text-gray-600">
                    We are committed to minimizing our environmental footprint through sustainable construction practices and green technologies.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Social</h3>
                  <p className="text-gray-600">
                    We believe in creating positive social impact through community development and inclusive growth initiatives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Economic</h3>
                  <p className="text-gray-600">
                    We strive for sustainable economic growth that benefits all stakeholders while maintaining financial prudence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ESG Goals & Initiatives</h2>
              <p className="text-xl text-gray-600">
                Our Environmental, Social, and Governance framework guides every aspect of our operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Stewardship</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Carbon footprint reduction through green construction practices</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Water conservation and efficient resource management</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Waste reduction and recycling initiatives</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Biodiversity protection and habitat restoration</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Community development and local employment generation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Education and skill development programs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Healthcare and wellness initiatives</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Women empowerment and inclusive workplace practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety First</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Safety is not just a priority at Ramsethu Construction - it's a core value that permeates every aspect of our operations. We believe that every worker has the right to return home safely every day.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                    <div className="text-sm text-gray-600">Accident Goal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-gray-600">Safety Training</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline">ISO 45001 Certified</Badge>
                  <Badge variant="outline">Safety Management System</Badge>
                  <Badge variant="outline">Regular Safety Audits</Badge>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Safety First" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Corporate Social Responsibility</h2>
              <p className="text-xl text-gray-600">
                Committed to creating positive impact in the communities where we operate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
                  <p className="text-gray-600 text-sm">
                    Supporting education initiatives through scholarships, school infrastructure development, and digital learning programs.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
                  <p className="text-gray-600 text-sm">
                    Providing healthcare services, medical camps, and health awareness programs in rural and underserved areas.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Skill Development</h3>
                  <p className="text-gray-600 text-sm">
                    Empowering communities through vocational training, skill development programs, and employment opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-6 text-blue-200">
              <span className="text-3xl">"</span>
            </div>
            <blockquote className="text-lg md:text-xl italic mb-6 leading-relaxed">
              Values of honesty, integrity and transparency form the founding pillars of the company. 
              The company's goals are strategically aligned to ensure balanced growth by giving back to society.
            </blockquote>
            <cite className="text-blue-200 font-medium">
              - Ramsethu Construction Core Values
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
}
