import { useState } from "react";
import { Link, useLocation } from "wouter";
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
      { name: "EBC Urban", href: "/about/ebc-urban" }
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
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-xs">
            <span className="bg-red-600 px-2 py-1 rounded text-white font-medium">
              NSE: EBC | BSE: 500294
            </span>
          </div>
          <div className="flex items-center space-x-6 text-xs">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>Call Us: (+91) 040-23268888</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>Email: info@ebclimited.in</span>
            </div>
            <div className="flex items-center space-x-1">
              <Briefcase className="h-3 w-3" />
              <span>Careers: careers@ebclimited.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-bold">
                <span className="text-blue-600">E</span>
                <span className="text-red-600">B</span>
                <span className="text-green-600">C</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">EBC Limited</div>
                <div className="text-xs text-gray-600">Infrastructure Excellence</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-primary",
                      location === item.href ? "text-primary bg-blue-50" : "text-gray-700"
                    )}
                  >
                    <span>{item.name}</span>
                    {item.subItems.length > 0 && (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Button>
                </Link>

                {/* Dropdown Menu */}
                {item.subItems.length > 0 && hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border border-gray-200 rounded-lg py-2 z-50">
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href}>
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
                    <Link href={item.href}>
                      <span
                        className={cn(
                          "text-lg font-medium transition-colors cursor-pointer block",
                          location === item.href
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
                          <Link key={subItem.name} href={subItem.href}>
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