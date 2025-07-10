import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, Briefcase, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { 
    name: "Home", 
    href: "/",
    subItems: []
  },
  { 
    name: "About Us", 
    href: "/about",
    subItems: [
      { name: "Company Overview", href: "/about/overview" },
      { name: "Our Philosophy", href: "/about/philosophy" },
      { name: "Board of Directors", href: "/about/board" },
      { name: "Global Presence", href: "/about/presence" },
      { name: "Ramsethu Urban", href: "/about/ebc-urban" }
    ]
  },
  { 
    name: "Services", 
    href: "/expertise",
    subItems: [
      { name: "Networking & Telecommunications", href: "/expertise/networking" },
      { name: "Electrical Grid Solutions", href: "/expertise/electrical-grid" },
      { name: "High Quality Installation & Maintenance", href: "/expertise/installation-maintenance" },
      { name: "Solar Microgrid Deployment", href: "/expertise/solar-microgrid" },
      { name: "Railway Signalling Systems", href: "/expertise/railway-signalling" },
      { name: "Solar Rooftop Solutions", href: "/expertise/solar-rooftop" }
    ]
  },
  { 
    name: "Our Values", 
    href: "/commitment",
    subItems: [
      { name: "Mission & Vision", href: "/commitment/mission-vision" },
      { name: "Sustainability", href: "/commitment/sustainability" },
      { name: "Quality Assurance", href: "/commitment/quality-assurance" },
      { name: "Safety (HSE)", href: "/commitment/safety" },
      { name: "ESG Initiatives", href: "/commitment/esg" }
    ]
  },
  { 
    name: "Investors", 
    href: "/investors",
    subItems: [
      { name: "Financial Information", href: "/investors/financial" },
      { name: "Corporate Governance", href: "/investors/governance" },
      { name: "Stock Exchange Filings", href: "/investors/filings" },
      { name: "Stakeholder Information", href: "/investors/stakeholders" },
      { name: "Annual Reports", href: "/investors/reports" },
      { name: "Quarterly Results", href: "/investors/quarterly" }
    ]
  },
  { 
    name: "Portfolio", 
    href: "/landmarks",
    subItems: [
      { name: "Projects", href: "/projects" },
      { name: "Featured Projects", href: "/landmarks/featured" },
      { name: "Completed Projects", href: "/landmarks/completed" },
      { name: "Ongoing Projects", href: "/landmarks/ongoing" },
      { name: "Project Gallery", href: "/landmarks/gallery" },
      { name: "Awards & Recognition", href: "/landmarks/awards" }
    ]
  },
  { 
    name: "Media", 
    href: "/media",
    subItems: [
      { name: "Press Releases", href: "/media/press" },
      { name: "News Articles", href: "/media/news" },
      { name: "Video Gallery", href: "/media/videos" },
      { name: "Photo Gallery", href: "/media/photos" },
      { name: "Media Coverage", href: "/media/coverage" }
    ]
  },
  { 
    name: "Human Capital", 
    href: "/human-capital",
    subItems: [
      { name: "Leadership Team", href: "/human-capital/leadership" },
      { name: "Career Opportunities", href: "/human-capital/careers" },
      { name: "Training & Development", href: "/human-capital/training" },
      { name: "Employee Benefits", href: "/human-capital/benefits" },
      { name: "Work Culture", href: "/human-capital/culture" }
    ]
  },
  { 
    name: "Contact", 
    href: "/contact",
    subItems: []
  },
];

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null); // For mobile accordion

  return (
    <header className="bg-gradient-to-b from-blue-100 via-white to-blue-50 border-b border-blue-200 shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white text-xs py-1 px-2">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-0.5 md:gap-0">
          <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2">
            <span className="font-semibold text-[11px] flex items-center gap-1"><Briefcase className="h-3 w-3" /> Ramsethu Electrical & Mechanical Solutions Pvt. Ltd.</span>
            <span className="hidden md:inline">|</span>
            <span className="text-[11px] flex items-center gap-1">🏢 Sijhua, Bariyath, Ichak, Hazaribagh, Jharkhand</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0 md:mt-0">
            <a href="tel:+918340360437" className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-blue-800 transition-colors" title="Call">
              <Phone className="h-4 w-4" />
            </a>
            <a href="mailto:ramsethu.spl@gmail.com" className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-blue-800 transition-colors" title="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-blue-200 bg-blue-50/80 shadow-sm">
        <div className="flex justify-between items-center px-0 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3 pl-0 bg-blue-100/80 border border-blue-200 rounded-xl shadow px-3 py-1.5 ml-4 sm:ml-0">
              <img
                src="/assets/photos/logo.png"
                alt="EBC Logo"
                className="h-12 w-auto mr-2"
                style={{ objectFit: "contain" }}
              />
              <div>
                <div className="text-xl font-bold text-gray-900">Ramsethu Construction</div>
                <div className="text-xs text-gray-600">Infrastructure Excellence</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 pl-10">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link to={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center space-x-0 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-100 hover:text-primary",
                      location.pathname === item.href ? "text-primary bg-blue-100" : "text-gray-700"
                    )}
                  >
                    <span>{item.name}</span>
                    {item.subItems.length > 0 && (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 ml-0" />
                    )}
                  </Button>
                </Link>

                {/* Dropdown Menu */}
                {item.subItems.length > 0 && hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border border-gray-200 rounded-lg py-2 z-50">
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.name} to={subItem.href}>
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors cursor-pointer">
                          {subItem.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-9 w-9" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-2 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <div
                      className={cn(
                        "flex items-center justify-between cursor-pointer px-2 py-2 text-lg font-medium transition-colors",
                        location.pathname === item.href ? "text-primary" : "text-gray-700 hover:text-primary"
                      )}
                      onClick={() => {
                        if (item.subItems.length > 0) {
                          setOpenAccordion(openAccordion === item.name ? null : item.name);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    >
                      <Link to={item.href} className="flex-1" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>
                      {item.subItems.length > 0 && (
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 ml-2 transition-transform",
                            openAccordion === item.name ? "rotate-180" : "rotate-0"
                          )}
                        />
                      )}
                    </div>
                    {item.subItems.length > 0 && openAccordion === item.name && (
                      <div className="pl-4 pb-2 space-y-1 animate-slide-down">
                        {item.subItems.map((subItem) => (
                          <Link key={subItem.name} to={subItem.href} onClick={() => setIsOpen(false)}>
                            <span className="block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                              {subItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
