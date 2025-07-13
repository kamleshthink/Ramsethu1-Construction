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

      {/* Company Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🏢 Company Information</h2>
              <p className="text-xl text-gray-600">Official company details and legal information</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Established</div>
                        <div className="text-gray-600">Year 2016</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Legal Form</div>
                        <div className="text-gray-600">Private Limited Company</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-900">CIN</div>
                        <div className="text-gray-600">U74999JH2016PTC009115</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Registered Office</div>
                        <div className="text-gray-600">Sijhua, Bariyath, Ichak, Hazaribagh, Jharkhand</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Status</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Active Projects</span>
                      <Badge variant="secondary">40+</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Operational States</span>
                      <Badge variant="secondary">5+</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Workforce</span>
                      <Badge variant="secondary">100+</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Current Turnover</span>
                      <Badge variant="secondary">₹10.00 Cr</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Development Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📈 Year-wise Company Development Timeline</h2>
              <p className="text-xl text-gray-600">Our journey from foundation to national presence</p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  year: "2016",
                  title: "Foundation Year",
                  description: "Company incorporated as a Private Limited Entity. Initial focus on small-scale electrical contracts and local infrastructure services. Set up head office in Hazaribagh, Jharkhand.",
                  turnover: "N/A",
                  icon: "🏢"
                },
                {
                  year: "2017–2018",
                  title: "Infrastructure Groundwork",
                  description: "Built early partnerships with local contractors and vendors. Started supplying manpower and basic electrical works to PSUs and SMEs. Slowly entered mechanical project support (pipe laying, welding, etc.)",
                  turnover: "N/A",
                  icon: "🏗️"
                },
                {
                  year: "2019–2020",
                  title: "First Major Projects",
                  description: "Bagged contracts in electrical EPC including panel installation, transformer wiring. Set up branch office in Ranchi for operations expansion.",
                  turnover: "₹1.04 Cr",
                  icon: "⚡"
                },
                {
                  year: "2020–2021",
                  title: "Entry into Solar & Railways",
                  description: "Entered the Solar EPC segment, delivering small rooftop systems. Started Railway S&T project execution for Indian Railways (RTU, IBS).",
                  turnover: "₹1.05 Cr",
                  icon: "☀️"
                },
                {
                  year: "2021–2022",
                  title: "Expansion of Project Portfolio",
                  description: "Delivered solar microgrids in partnership with Gram Oorja & PRADAN. Installed biogas plants in remote Jharkhand villages. Executed signaling projects in Ranchi & Muri Railway Divisions.",
                  turnover: "₹2.58 Cr",
                  icon: "🚂"
                },
                {
                  year: "2022–2023",
                  title: "PSU Breakthroughs",
                  description: "Awarded large-scale projects from GE T&D India Ltd. (132–400kV substations). Delivered safety and CCTV installations at BHEL PVUNL Project Site. Expanded manpower and machinery.",
                  turnover: "₹5.48 Cr",
                  icon: "🏭"
                },
                {
                  year: "2023–2024",
                  title: "Strong National Presence",
                  description: "Ongoing work worth ₹8+ Cr in Railways, GE Substations, and Biogas. Operational in 5+ States: Jharkhand, Bihar, West Bengal, Uttar Pradesh, Odisha. Workforce expanded to 100+ engineers and skilled staff.",
                  turnover: "₹10.00 Cr",
                  icon: "🇮🇳"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="secondary" className="mr-3">{milestone.year}</Badge>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      {milestone.turnover !== "N/A" && (
                        <Badge variant="outline" className="ml-3 bg-green-50 text-green-700 border-green-200">
                          {milestone.turnover}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🏆 From 2016 to 2024: Key Growth Summary</h2>
              <p className="text-xl text-gray-600">Our remarkable journey of growth and expansion</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Year</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Major Milestone</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Turnover</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "2016", milestone: "Company Founded", turnover: "N/A" },
                    { year: "2019–20", milestone: "First PSU contracts", turnover: "₹1.04 Cr" },
                    { year: "2020–21", milestone: "Railway and Solar entry", turnover: "₹1.05 Cr" },
                    { year: "2021–22", milestone: "Expansion into Biogas & Rural Microgrids", turnover: "₹2.58 Cr" },
                    { year: "2022–23", milestone: "GE T&D, BHEL Projects, Civil Infra", turnover: "₹5.48 Cr" },
                    { year: "2023–24", milestone: "10+ Crore turnover, 40+ projects, PAN India presence", turnover: "₹10.00 Cr (GST)" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">{row.year}</td>
                      <td className="border border-gray-300 px-4 py-3">{row.milestone}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-primary">{row.turnover}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
