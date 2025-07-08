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
    name: "Expertise", 
    href: "/expertise",
    subItems: [
      { name: "Building Construction", href: "/expertise/buildings" },
      { name: "Transportation Infrastructure", href: "/expertise/transportation" },
      { name: "Water & Environment", href: "/expertise/water-environment" },
      { name: "Railway Projects", href: "/expertise/railways" },
      { name: "Irrigation Systems", href: "/expertise/irrigation" },
      { name: "Mining Operations", href: "/expertise/mining" },
      { name: "Electrical Systems", href: "/expertise/electrical" }
    ]
  },
  { 
    name: "Commitment", 
    href: "/commitment",
    subItems: [
      { name: "Mission & Vision", href: "/commitment/mission-vision" },
      { name: "Sustainability", href: "/commitment/sustainability" },
      { name: "Quality Assurance", href: "/commitment/quality" },
      { name: "Safety Standards", href: "/commitment/safety" },
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
    name: "Landmarks", 
    href: "/landmarks",
    subItems: [
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

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2 px-4 text-xs md:text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-1 md:gap-0">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
            <span className="font-semibold">Ramsethu Electrical & Mechanical Solutions Pvt. Ltd.</span>
            <span className="hidden md:inline">|</span>
            <span>CIN: U74999JH2016PTC009115</span>
            <span className="hidden md:inline">|</span>
            <span>🏢 Sijhua, Bariyath, Ichak, Hazaribagh, Jharkhand</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 md:mt-0">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91-8340360437</span>
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91-9601874348</span>
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91-6202464498</span>
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91-6207510117</span>
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91-8758871045</span>
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" />
              <a href="mailto:ramsethu.spl@gmail.com" className="underline hover:text-blue-200">ramsethu.spl@gmail.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="flex justify-between items-center px-0 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3 pl-0">
              <img
                src="/assets/photos/logo.png"
                alt="EBC Logo"
                className="h-14 w-auto mr-2"
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
                      "flex items-center space-x-0 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-primary",
                      location.pathname === item.href ? "text-primary bg-blue-50" : "text-gray-700"
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
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link to={item.href}>
                      <span
                        className={cn(
                          "text-lg font-medium transition-colors cursor-pointer block",
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-gray-700 hover:text-primary"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                    {item.subItems.length > 0 && (
                      <div className="pl-4 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link key={subItem.name} to={subItem.href}>
                            <span
                              className="text-sm text-gray-600 hover:text-primary transition-colors cursor-pointer block"
                              onClick={() => setIsOpen(false)}
                            >
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
