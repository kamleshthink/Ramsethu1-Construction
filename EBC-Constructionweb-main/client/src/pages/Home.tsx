import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Building, Droplets, Train, Construction, TreePine, Pickaxe, Lightbulb, Heart, Cog, Play, Download, FileText, TrendingUp } from "lucide-react";
import StatisticsCounter from "@/components/StatisticsCounter";
import ExpertiseCard from "@/components/ExpertiseCard";
import ProjectCard from "@/components/ProjectCard";
import LeadershipCard from "@/components/LeadershipCard";
import ProjectCarousel from "@/components/ProjectCarousel";
import IndiaPresenceMap from "@/components/IndiaPresenceMap";
import { statistics, expertiseAreas, showcaseProjects, leadershipTeam } from "@/data/content";
import { Helmet } from "react-helmet";
import { useState } from "react";

const annualReports = [
  { year: "2023-24", title: "Annual Report 2023-24", size: "12.5 MB" },
  { year: "2022-23", title: "Annual Report 2022-23", size: "11.2 MB" },
  { year: "2021-22", title: "Annual Report 2021-22", size: "10.8 MB" },
  { year: "2020-21", title: "Annual Report 2020-21", size: "9.5 MB" },
  { year: "2019-20", title: "Annual Report 2019-20", size: "8.9 MB" },
  { year: "2018-19", title: "Annual Report 2018-19", size: "8.2 MB" },
  { year: "2017-18", title: "Annual Report 2017-18", size: "7.8 MB" },
  { year: "2016-17", title: "Annual Report 2016-17", size: "7.4 MB" },
  { year: "2015-16", title: "Annual Report 2015-16", size: "7.1 MB" },
  { year: "2014-15", title: "Annual Report 2014-15", size: "6.8 MB" }
];

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        {/* YouTube video as background */}
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/OknF1lfYCEk?autoplay=1&mute=1&loop=1&playlist=OknF1lfYCEk&controls=0&showinfo=0&modestbranding=1"
          title="Heavy Construction Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                A LEGACY OF
                <br />
                <span className="text-yellow-400">TRANSFORMATION</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-blue-100 font-light">
                Over 4 decades of infrastructure excellence across India
              </p>
              <p className="text-lg md:text-xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Ramsetu Construction has ventured into diverse sectors of construction and infrastructural development. 
                Spanning across the nation, our construction activities bear the indelible stamp of high quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/landmarks">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                    Explore Our Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Achievements</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four decades of excellence reflected in numbers that showcase our commitment to India's infrastructure development
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
              {statistics.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <StatisticsCounter
                      value={stat.value}
                      label={stat.label}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Expertise Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                OUR <span className="text-primary">EXPERTISE</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                India's leading infrastructure conglomerate with expertise across diverse sectors, 
                building the foundation of tomorrow's India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="relative">
                    <ExpertiseCard
                      title={area.title}
                      description={area.description}
                      image={area.image}
                      icon={
                        index === 0 ? <Building className="h-6 w-6" /> :
                        index === 1 ? <Droplets className="h-6 w-6" /> :
                        index === 2 ? <Construction className="h-6 w-6" /> :
                        index === 3 ? <Train className="h-6 w-6" /> :
                        index === 4 ? <TreePine className="h-6 w-6" /> :
                        <Pickaxe className="h-6 w-6" />
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Link href="/expertise">
                <Button size="lg" className="bg-primary hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore All Sectors
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="py-16 bg-primary text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">SPEARHEADED BY A VISIONARY</h2>
              <div className="text-6xl mb-6 text-blue-200">
                <span className="text-4xl">"</span>
              </div>
              <blockquote className="text-lg md:text-xl italic mb-6 leading-relaxed">
                "At Ramsetu Construction, we follow the three fold path of hard work, tenacity and common sense. 
                Because, we believe wisdom is common sense to an uncommon degree. 
                So, we all are attuned to finding new solutions to challenges old and new."
              </blockquote>
              <cite className="text-blue-200 font-medium">
                - Dr. A V S shastri, Padma Shri Awardee<br />
                Founder Chairman Emeritus, Ramsetu Construction
              </cite>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Projects Showcase with Horizontal Carousel */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                COMPLETED <span className="text-primary">PROJECTS</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Landmark projects demonstrating our engineering excellence and commitment to quality across diverse infrastructure sectors
              </p>
            </div>
            
            <ProjectCarousel />
            
            <div className="text-center mt-16">
              <Link href="/landmarks">
                <Button size="lg" className="bg-primary hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Our Strength */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                OUR <span className="text-primary">STRENGTH</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Four decades of excellence built on a foundation of innovation, expertise, and unwavering commitment to quality
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <Card className="relative text-center bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Cog className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-disciplinary Engineering Expertise</h3>
                    <p className="text-gray-600 mb-6 text-lg">Building the future powered by innovation</p>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span>Backed by highly skilled workforce</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span>Exposure and expertise in diversified verticals</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span>Focus on engineering excellence</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span>Experience of building large scale projects</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-3xl transform -rotate-2 group-hover:-rotate-6 transition-transform duration-500"></div>
                <Card className="relative text-center bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Lightbulb className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Driven by Innovation at Every Step</h3>
                    <p className="text-gray-600 mb-6 text-lg">Spearheaded by a visionary leadership</p>
                    <p className="text-gray-700 leading-relaxed">
                      The culture of commitment and diligence in our organisation has been succinctly demonstrated through decades of consistent growth, innovation, and groundbreaking engineering solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl transform rotate-2 group-hover:rotate-6 transition-transform duration-500"></div>
                <Card className="relative text-center bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Strong Foundation of Values</h3>
                    <p className="text-gray-600 mb-6 text-lg">Focus on engineering excellence</p>
                    <p className="text-gray-700 leading-relaxed">
                      Ramsetu Construction has embedded the concept of sustainability in all three perspectives: economic, social and environmental. Values of honesty, integrity and transparency form our founding pillars.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">LEADERSHIP TEAM</h2>
              <p className="text-xl text-gray-600">Experienced professionals driving our vision forward</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((leader, index) => (
                <LeadershipCard
                  key={index}
                  name={leader.name}
                  position={leader.position}
                  description={leader.description}
                  image={leader.image}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/human-capital">
                <Button size="lg" className="bg-primary hover:bg-blue-800">
                  View Leadership Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* India Presence Map Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <IndiaPresenceMap />
          </div>
        </div>
      </section>
      {/* YouTube Achievement Videos Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                ACHIEVEMENT <span className="text-primary">VIDEOS</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Witness our engineering marvels and construction excellence through exclusive project documentaries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  title: "Mega Infrastructure Projects - 2024",
                  description: "Showcasing our latest infrastructure achievements",
                  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
                  videoId: "dQw4w9WgXcQ"
                },
                {
                  title: "Building Tomorrow's India",
                  description: "Documentary on our contribution to India's growth",
                  thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
                  videoId: "dQw4w9WgXcQ"
                },
                {
                  title: "Engineering Excellence",
                  description: "Behind the scenes of our construction prowess",
                  thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
                  videoId: "dQw4w9WgXcQ"
                }
              ].map((video, index) => (
                <div key={index} className="group relative cursor-pointer" onClick={() => setSelectedVideo(video.videoId)}>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl transform rotate-2 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Annual Reports Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                ANNUAL <span className="text-primary">REPORTS</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive financial reports showcasing our growth, performance, and strategic direction
              </p>
            </div>
            
            <div className="relative">
              <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-6 lg:gap-8">
                {annualReports.map((report, index) => (
                  <div key={index} className="flex-none w-80 group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-2 group-hover:rotate-6 transition-transform duration-500"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <FileText className="h-8 w-8 text-white" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-bold text-gray-900">{report.year}</h3>
                            <p className="text-gray-600 text-sm">{report.size}</p>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{report.title}</h4>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-primary border-primary">
                            Financial Report
                          </Badge>
                          <Button size="sm" className="bg-primary hover:bg-blue-800 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Gradient overlays for scroll indication */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="text-center mt-16">
              <Link href="/investors">
                <Button size="lg" className="bg-primary hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  View All Reports
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
