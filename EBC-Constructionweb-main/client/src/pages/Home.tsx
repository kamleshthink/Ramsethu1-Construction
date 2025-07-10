import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Droplets, Train, Construction, TreePine, Pickaxe, Lightbulb, Heart, Cog, Play, Download, FileText, TrendingUp } from "lucide-react";
import StatisticsCounter from "@/components/StatisticsCounter";
import ExpertiseCard from "@/components/ExpertiseCard";
import ProjectCard from "@/components/ProjectCard";
import LeadershipCard from "@/components/LeadershipCard";
import ProjectCarousel from "@/components/ProjectCarousel";
import IndiaPresenceMap from "@/components/IndiaPresenceMap";
import { statistics, showcaseProjects, leadershipTeam } from "@/data/content";
import { expertiseData } from "@/data/expertiseData";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Projects from "@/pages/Projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollToTop from "@/components/ScrollToTop";

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

//  data for Major Clients
const majorClients = {
  government: [
    {
      id: 'ir',
      name: 'Indian Railways',
      logo: '/assets/clients/ir.png',
      description: 'Signal & Telecom System Projects in Ranchi & Dhanbad',
    },
    {
      id: 'jharkhand',
      name: 'Govt. of Jharkhand',
      logo: '/assets/clients/jharkhand.png',
      description: 'Solar Microgrids in Simdega & Khunti Districts',
    },
    {
      id: 'bihar',
      name: 'Govt. of Bihar',
      logo: '/assets/clients/bihar.png',
      description: 'Electrification Projects in Bhagalpur, Kahalgaon',
    },
  ],
  psu: [
    {
     id: 'ge',
      name: 'GE T&D India Ltd.',
      logo: '/assets/clients/ge.png',
      description: 'Substation EPC Works in Durgapur, Ramkanali, Purulia',
    },
    {
      id: 'bhel',
      name: 'BHEL',
      logo: '/assets/clients/bhel.png',
      description: 'High Mast & Safety Projects at PVUNL Patratu',
    },
    {
      id: 'ntpc',
      name: 'NTPC (PVUNL)',
      logo: '/assets/clients/ntpc.png',
      description: 'CCTV & Energy Projects at 3×800MW Plant',
    },
  ],
  private: [
    {
      id: 'osam',
      name: 'OSAM Dairy Pvt. Ltd.',
      logo: '/assets/clients/osam.png',
      description: 'Dairy Plant Civil & Electrical Infra Projects',
    },
    {
      id: 'azure',
      name: 'Azure Power',
      logo: '/assets/clients/azure.png',
      description: 'Solar Microgrid Installations in Jharkhand',
    },
    {
      id: 'pradan',
      name: 'PRADAN',
      logo: '/assets/clients/pradan.png',
      description: 'Rural Electrification in Gumla & Khunti',
    },
    {
      id: 'arka',
      name: 'Arka Jain University',
      logo: '/assets/clients/arka.png',
      description: '50kWp Rooftop Solar PV System',
    },
  ],
};

// Testimonials Data
const testimonials = [
  {
    photo: "/assets/photos/testimonial/testimonial1.png",
    quote: "From the appointment to installation, Ramsethu Solar is great in delivering what is promised. They are very informative and helpful.",
    name: "Jayant Jain",
    designation: "Arka Jain University"
  },
  {
    photo: "/assets/photos/testimonial/testimonial2.png",
    quote: "On schedule installation, great product and service quality, and top-notch after sales support. This is what one looks for. Highly recommended.",
    name: "Swati Singh",
    designation: "Doctor"
  },
  {
    photo: "/assets/photos/testimonial/testimonial3.png",
    quote: "Highly competitive price with a great product and top-class service. Ramsethu has been my go-to place for any solar-related need.",
    name: "Rupesh Dangi",
    designation: "Petrol Pump Owner"
  }
];

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [tab, setTab] = useState<'government' | 'psu' | 'private'>('psu');
  const clients = majorClients[tab as keyof typeof majorClients] || [];
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };
  // Testimonials section ke liye
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);
  const testimonialsScroll = (dir: 'left' | 'right') => {
    if (!testimonialsScrollRef.current) return;
    const amount = 340;
    testimonialsScrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const annualReportsScrollRef = useRef<HTMLDivElement>(null);
  const scrollAnnualReports = (dir: 'left' | 'right') => {
    if (annualReportsScrollRef.current) {
      const { scrollLeft, clientWidth } = annualReportsScrollRef.current;
      annualReportsScrollRef.current.scrollTo({
        left: dir === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  // Animation hooks for each section
  const achievementsAnimation = useScrollAnimation(0);
  const coreSpecialisationAnimation = useScrollAnimation(100);
  const projectsAnimation = useScrollAnimation(200);
  const majorClientsAnimation = useScrollAnimation(300);
  const testimonialsAnimation = useScrollAnimation(400);
  const ourStrengthAnimation = useScrollAnimation(500);
  const leadershipAnimation = useScrollAnimation(600);
  const indiaPresenceAnimation = useScrollAnimation(700);
  const achievementVideosAnimation = useScrollAnimation(800);
  const annualReportsAnimation = useScrollAnimation(900);

  return (
    <div>
      <section className="relative w-screen h-screen overflow-hidden z-0 bg-black">
        {/* YouTube video as background */}
        <iframe
          className="absolute top-0 left-0 w-full h-full hero-video"
          src="https://www.youtube.com/embed/OknF1lfYCEk?autoplay=1&mute=1&loop=1&playlist=OknF1lfYCEk&controls=0&showinfo=0&modestbranding=1&playsinline=1"
          title="Heavy Construction Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center',
            pointerEvents: 'none',
            width: '100vw',
            height: '100vh'
          }}
        ></iframe>
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center text-white px-4 py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight">
                BUILDING INDIA FOR
                <br />
                <span className="text-yellow-400">DECADES</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 sm:mb-4 md:mb-6 text-blue-100 font-light">
                Decades of trusted infrastructure excellence, transforming skylines and communities across India.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-blue-100 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                For decades, Ramsethu Construction has delivered landmark projects in diverse sectors, setting benchmarks in quality, safety, and innovation nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
                <Link to="/landmarks">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg">
                    Explore Our Projects
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white bg-black/40 hover:bg-white hover:text-primary px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold visible">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rectangle wrapper ke andar section order sahi karo:
          // 1. Achievements
          // 2. Annual Reports (last)
          // 3. Core Specialisation
          // 4. Projects
          // 5. Major Clients
          // 6. Testimonials */}
      <div className="w-full bg-black/10 rounded-2xl py-8 md:py-12 px-2 md:px-8 my-8">
        {/* 1. Achievements (numbers) */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div 
                ref={achievementsAnimation.elementRef}
                className={`text-center mb-16 transition-all duration-500 ease-out ${achievementsAnimation.animationClass}`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="text-primary">Achievements</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                   Decades of excellence reflected in numbers that showcase our commitment to India's infrastructure development
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                {statistics.map((stat, index) => (
                  <div key={index} className="relative group">
                    <StatisticsCounter
                      value={stat.value}
                      label={stat.label}
                      icon={stat.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* 2. Core Specialisation */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div 
                ref={coreSpecialisationAnimation.elementRef}
                className={`text-center mb-20 transition-all duration-500 ease-out ${coreSpecialisationAnimation.animationClass}`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  CORE <span className="text-primary">SPECIALISATIONS</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  India's leading infrastructure with core specialisations across diverse sectors, building the foundation of tomorrow's India
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {expertiseData.map((item) => (
                  <Link key={item.id} to={`/expertise/${item.id}`} className="group relative block">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative">
                      <ExpertiseCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        icon={<span className="text-3xl">{item.icon}</span>}
                      />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-16">
                <Link to="/expertise">
                  <Button size="lg" className="bg-primary hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore All Sectors
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* 3. Projects */}
        <section 
          ref={projectsAnimation.elementRef}
          className={`py-20 bg-emerald-50 transition-all duration-500 ease-out ${projectsAnimation.animationClass}`}
        >
          <Projects compactHeading={true} />
        </section>
        {/* 4. Major Clients */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div 
                ref={majorClientsAnimation.elementRef}
                className={`text-center mb-8 transition-all duration-500 ease-out ${majorClientsAnimation.animationClass}`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Major Clients</h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Serving the nation’s top government bodies, PSUs, and private sector leaders with trust and excellence.</p>
                <div className="mt-4 text-primary font-semibold">Trusted by 40+ Clients Nationwide</div>
              </div>
              {/* Tabs */}
              <div className="flex justify-center gap-4 mb-10">
                <button onClick={() => setTab('government')} className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 focus:outline-none ${tab==='government' ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary border-primary hover:bg-blue-50'}`}>Government Clients</button>
                <button onClick={() => setTab('psu')} className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 focus:outline-none ${tab==='psu' ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary border-primary hover:bg-blue-50'}`}>PSU Clients</button>
                <button onClick={() => setTab('private')} className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 focus:outline-none ${tab==='private' ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary border-primary hover:bg-blue-50'}`}>Private & NGO Clients</button>
              </div>
              {/* Horizontal Scrollable Grid with Arrows */}
              <div className="relative">
                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-blue-100 focus:outline-none"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                <div ref={scrollRef} className="overflow-x-auto scrollbar-hide flex gap-8 pb-2 px-10" style={{scrollSnapType:'x mandatory'}} tabIndex={0}>
                  {clients.map((client) => (
                    <div key={client.id} className="min-w-[380px] max-w-sm bg-gradient-to-br from-purple-50/40 via-blue-50/30 to-indigo-50/40 rounded-3xl shadow-xl border border-purple-100/50 flex flex-col items-center p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105 cursor-pointer group" tabIndex={0} onClick={()=>window.location.href=`/clients/${client.id}`}
                      style={{scrollSnapAlign:'start'}}>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/10 via-blue-100/10 to-indigo-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      
                      {/* Icon container with enhanced styling */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                          <img src={client.logo} alt={client.name + ' logo'} className="h-12 w-12 object-contain" />
                        </div>
                        {/* Icon glow */}
                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Client name with enhanced typography */}
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 text-center group-hover:from-purple-700 group-hover:via-blue-700 group-hover:to-indigo-700 transition-all duration-500">
                        {client.name}
                      </div>
                      
                      {/* Description with better styling */}
                      <div className="text-gray-700 text-base mb-6 text-center leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300">
                        {client.description}
                      </div>
                      
                      {/* Enhanced button */}
                      <button className="mt-auto bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                        View Case Study
                      </button>
                    </div>
                  ))}
                </div>
                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-blue-100 focus:outline-none"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
              </div>
            </div>
          </div>
        </section>
        {/* 5. Testimonials */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4">
            <div
              ref={testimonialsAnimation.elementRef}
                              className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-500 ease-out ${testimonialsAnimation.animationClass}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg md:text-xl text-gray-600">Feedback from our valued clients across education, healthcare, and industry.</p>
            </div>
            <div className="relative min-h-[120px]">
              {/* Left Arrow */}
              <button 
                onClick={() => {
                  if (testimonialsScrollRef.current) {
                    testimonialsScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                  }
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full shadow-lg p-3 hover:bg-blue-50 focus:outline-none transition-all duration-300 hover:scale-110"
                style={{display: 'block'}}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              {/* Right Arrow */}
              <button 
                onClick={() => {
                  if (testimonialsScrollRef.current) {
                    testimonialsScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                  }
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full shadow-lg p-3 hover:bg-blue-50 focus:outline-none transition-all duration-300 hover:scale-110"
                style={{display: 'block'}}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <div ref={testimonialsScrollRef} className="flex gap-8 overflow-x-auto scrollbar-hide px-16 sm:px-24 pb-4" style={{scrollSnapType:'x mandatory'}}>
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className={`min-w-[340px] max-w-sm border-2 border-transparent group rounded-3xl shadow-xl p-8 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/70 relative ${idx % 3 === 0 ? 'bg-blue-50' : idx % 3 === 1 ? 'bg-slate-50' : 'bg-gray-100'}`}
                    style={{scrollSnapAlign:'start'}}
                  >
                    {/* Gradient border ring on hover */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:ring-4 group-hover:ring-primary/20 transition-all duration-300"></div>
                    {/* Stylish faded quote icon background */}
                    <svg className="absolute top-6 left-6 opacity-10 text-primary w-20 h-20 z-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 64 64"><text x="0" y="56" fontSize="64" fontFamily="serif">“</text></svg>
                    <img src={t.photo} alt={t.name + ' photo'} className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg mb-6 z-10 bg-white" />
                    <blockquote className="italic text-gray-800 text-xl leading-relaxed mb-6 z-10 relative text-center font-medium">
                      “{t.quote}”
                    </blockquote>
                    <div className="text-center z-10">
                      <div className="font-bold text-primary text-lg tracking-wide mb-1">{t.name}</div>
                      <div className="text-gray-500 text-base font-semibold">{t.designation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* 6. Our Strength */}
        <section className="py-24 bg-yellow-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div 
                ref={ourStrengthAnimation.elementRef}
                className={`text-center mb-20 transition-all duration-500 ease-out ${ourStrengthAnimation.animationClass}`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  OUR <span className="text-primary">STRENGTH</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                   Decades of excellence built on a foundation of innovation, expertise, and unwavering commitment to quality
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <Card className="relative text-center bg-green-50/30 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
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
                  <Card className="relative text-center bg-green-50/30 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
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
                  <Card className="relative text-center bg-green-50/30 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Heart className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Strong Foundation of Values</h3>
                      <p className="text-gray-600 mb-6 text-lg">Focus on engineering excellence</p>
                      <p className="text-gray-700 leading-relaxed">
                        Ramsethu Construction has embedded the concept of sustainability in all three perspectives: economic, social and environmental. Values of honesty, integrity and transparency form our founding pillars.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 7. Leadership */}
        <section className="py-24 bg-pink-50 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div 
                ref={leadershipAnimation.elementRef}
                className={`text-center mb-16 transition-all duration-500 ease-out ${leadershipAnimation.animationClass}`}
              >
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
                <Link to="/human-capital">
                  <Button size="lg" className="bg-primary hover:bg-blue-800">
                    View Leadership Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* 8. Our Presence Across India */}
        <section 
          ref={indiaPresenceAnimation.elementRef}
          className={`py-24 bg-cyan-50 relative transition-all duration-500 ease-out ${indiaPresenceAnimation.animationClass}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <IndiaPresenceMap />
            </div>
          </div>
        </section>
        {/* 9. Achievement Videos */}
        <section className="py-24 bg-indigo-50 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div 
                ref={achievementVideosAnimation.elementRef}
                className={`text-center mb-20 transition-all duration-500 ease-out ${achievementVideosAnimation.animationClass}`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  ACHIEVEMENT <span className="text-primary">VIDEOS</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Witness our engineering marvels and construction excellence through exclusive project documentaries
                </p>
              </div>
              
              <div className="relative">
                {/* Left Arrow */}
                <button 
                  onClick={() => {
                    const container = document.getElementById('achievement-videos-container');
                    if (container) {
                      container.scrollBy({ left: -400, behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow-lg p-3 hover:bg-blue-50 focus:outline-none transition-all duration-300 hover:scale-110"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                
                {/* Right Arrow */}
                <button 
                  onClick={() => {
                    const container = document.getElementById('achievement-videos-container');
                    if (container) {
                      container.scrollBy({ left: 400, behavior: 'smooth' });
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow-lg p-3 hover:bg-blue-50 focus:outline-none transition-all duration-300 hover:scale-110"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                
                {/* Scrollable Container */}
                <div 
                  id="achievement-videos-container"
                  className="flex gap-8 lg:gap-10 overflow-x-auto scrollbar-hide pb-4 px-4"
                  style={{ scrollSnapType: 'x mandatory' }}
                >
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
                    },
                    {
                      title: "Sustainable Development",
                      description: "Green building initiatives and eco-friendly projects",
                      thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
                      videoId: "dQw4w9WgXcQ"
                    },
                    {
                      title: "Digital Transformation",
                      description: "Technology integration in modern construction",
                      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
                      videoId: "dQw4w9WgXcQ"
                    }
                  ].map((video, index) => (
                    <div key={index} className="group relative cursor-pointer flex-shrink-0 w-80" onClick={() => setSelectedVideo(video.videoId)} style={{ scrollSnapAlign: 'start' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl transform rotate-2 group-hover:rotate-6 transition-transform duration-500"></div>
                      <div className="relative bg-orange-50/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
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
          </div>
        </section>
        {/* 10. Annual Reports (last) */}
        <section
          ref={annualReportsAnimation.elementRef}
          className={`py-20 bg-purple-50 transition-all duration-500 ease-out ${annualReportsAnimation.animationClass}`}
        >
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
                {/* Left Arrow */}
                <button onClick={() => scrollAnnualReports('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-blue-100 focus:outline-none">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <div ref={annualReportsScrollRef} className="flex overflow-x-auto pb-6 scrollbar-hide gap-6 lg:gap-8">
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
                {/* Right Arrow */}
                <button onClick={() => scrollAnnualReports('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-blue-100 focus:outline-none">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                {/* Gradient overlays for scroll indication */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="text-center mt-16">
                <Link to="/investors">
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
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      {selectedVideo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-2xl w-full relative">
      <button onClick={() => setSelectedVideo(null)} className="absolute top-2 right-2 bg-gray-200 hover:bg-red-500 hover:text-white rounded-full p-2 transition-colors">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
          title="Achievement Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

// Major Clients Section Component
function MajorClientsSection() {
  const [tab, setTab] = useState<'government' | 'psu' | 'private'>('psu');
  const scrollRef = useRef<HTMLDivElement>(null);
  const clients = majorClients[tab];

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: dir === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg inline-block relative">
              OUR <span className="text-yellow-400">MAJOR</span> CLIENTS
              <span className="block mx-auto mt-3 w-24 h-2 rounded-full bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 opacity-80"></span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Serving the nation’s top government bodies, PSUs, and private sector leaders with trust and excellence.</p>
            <div className="mt-4 text-primary font-semibold">Trusted by 40+ Clients Nationwide</div>
          </div>
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            <button onClick={() => setTab('government')} className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 focus:outline-none transform hover:scale-105 ${tab==='government' ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white shadow-lg border-transparent scale-105' : 'bg-white text-primary border-primary hover:bg-blue-50 hover:shadow-md'}`}>Government Clients</button>
            <button onClick={() => setTab('psu')} className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 focus:outline-none transform hover:scale-105 ${tab==='psu' ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white shadow-lg border-transparent scale-105' : 'bg-white text-primary border-primary hover:bg-blue-50 hover:shadow-md'}`}>PSU Clients</button>
            <button onClick={() => setTab('private')} className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 focus:outline-none transform hover:scale-105 ${tab==='private' ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white shadow-lg border-transparent scale-105' : 'bg-white text-primary border-primary hover:bg-blue-50 hover:shadow-md'}`}>Private & NGO Clients</button>
          </div>
          {/* Horizontal Scrollable Grid with Arrows */}
          <div className="relative">
            <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-blue-100 focus:outline-none"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <div ref={scrollRef} className="overflow-x-auto scrollbar-hide flex gap-8 pb-2 px-10" style={{scrollSnapType:'x mandatory'}} tabIndex={0}>
              {clients.map((client: any, index: number) => {
                // Different background colors for each card
                const backgrounds = [
                  "bg-gradient-to-br from-blue-100/60 via-indigo-100/50 to-purple-100/60",
                  "bg-gradient-to-br from-green-100/60 via-emerald-100/50 to-teal-100/60", 
                  "bg-gradient-to-br from-orange-100/60 via-amber-100/50 to-yellow-100/60",
                  "bg-gradient-to-br from-pink-100/60 via-rose-100/50 to-red-100/60",
                  "bg-gradient-to-br from-cyan-100/60 via-sky-100/50 to-blue-100/60",
                  "bg-gradient-to-br from-violet-100/60 via-purple-100/50 to-indigo-100/60"
                ];
                
                const borders = [
                  "border-blue-300/70",
                  "border-green-300/70",
                  "border-orange-300/70", 
                  "border-pink-300/70",
                  "border-cyan-300/70",
                  "border-violet-300/70"
                ];
                
                const hoverOverlays = [
                  "bg-gradient-to-br from-blue-200/40 via-indigo-200/35 to-purple-200/40",
                  "bg-gradient-to-br from-green-200/40 via-emerald-200/35 to-teal-200/40",
                  "bg-gradient-to-br from-orange-200/40 via-amber-200/35 to-yellow-200/40", 
                  "bg-gradient-to-br from-pink-200/40 via-rose-200/35 to-red-200/40",
                  "bg-gradient-to-br from-cyan-200/40 via-sky-200/35 to-blue-200/40",
                  "bg-gradient-to-br from-violet-200/40 via-purple-200/35 to-indigo-200/40"
                ];
                
                const bgClass = backgrounds[index % backgrounds.length];
                const borderClass = borders[index % borders.length];
                const overlayClass = hoverOverlays[index % hoverOverlays.length];
                
                return (
                <div key={client.id} className={`min-w-[380px] max-w-sm ${bgClass} rounded-3xl shadow-xl border ${borderClass} flex flex-col items-center p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105 cursor-pointer group relative`} tabIndex={0} onClick={()=>window.location.href=`/clients/${client.id}`}
                  style={{scrollSnapAlign:'start'}}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 ${overlayClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Icon container with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <img src={client.logo} alt={client.name + ' logo'} className="h-12 w-12 object-contain" />
                    </div>
                    {/* Icon glow */}
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Client name with enhanced typography */}
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-3 text-center group-hover:from-blue-800 group-hover:via-indigo-800 group-hover:to-purple-800 transition-all duration-500">
                    {client.name}
                  </div>
                  
                  {/* Description with better styling */}
                  <div className="text-gray-800 text-base mb-6 text-center leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {client.description}
                  </div>
                  
                  {/* Enhanced button */}
                  <button className="mt-auto bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    View Case Study
                  </button>
                </div>
                );
              })}
            </div>
            <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-blue-100 focus:outline-none"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (direction === 'right') {
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            setDirection('left');
          } else {
            scrollRef.current.scrollTo({ left: scrollLeft + 2, behavior: 'smooth' });
          }
        } else {
          if (scrollLeft <= 0) {
            setDirection('right');
          } else {
            scrollRef.current.scrollTo({ left: scrollLeft - 2, behavior: 'smooth' });
          }
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, [direction]);

  // Fade-in effect on scroll
  useEffect(() => {
    const section = document.getElementById('testimonials-section');
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('animate-fade-in');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="testimonials-section" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600">Feedback from our valued clients across education, healthcare, and industry.</p>
        </div>
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow-lg p-3 hover:bg-blue-50 focus:outline-none transition-all duration-300 hover:scale-110"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          {/* Right Arrow */}
          <button 
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow-lg p-3 hover:bg-blue-50 focus:outline-none transition-all duration-300 hover:scale-110"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div ref={scrollRef} className="flex gap-8 overflow-x-auto scrollbar-hide px-12 pb-4" style={{scrollSnapType:'x mandatory'}}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`min-w-[340px] max-w-sm border-2 border-transparent group rounded-3xl shadow-xl p-8 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/70 relative ${idx % 3 === 0 ? 'bg-blue-50' : idx % 3 === 1 ? 'bg-slate-50' : 'bg-gray-100'}`}
                style={{scrollSnapAlign:'start'}}
              >
                {/* Gradient border ring on hover */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:ring-4 group-hover:ring-primary/20 transition-all duration-300"></div>
                {/* Stylish faded quote icon background */}
                <svg className="absolute top-6 left-6 opacity-10 text-primary w-20 h-20 z-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 64 64"><text x="0" y="56" fontSize="64" fontFamily="serif">“</text></svg>
                <img src={t.photo} alt={t.name + ' photo'} className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg mb-6 z-10 bg-white" />
                <blockquote className="italic text-gray-800 text-xl leading-relaxed mb-6 z-10 relative text-center font-medium">
                  “{t.quote}”
                </blockquote>
                <div className="text-center z-10">
                  <div className="font-bold text-primary text-lg tracking-wide mb-1">{t.name}</div>
                  <div className="text-gray-500 text-base font-semibold">{t.designation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
