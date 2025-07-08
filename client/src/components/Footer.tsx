import { Link } from "wouter";
import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4">Ramsetu Construction</div>
              <p className="text-gray-400 text-sm mb-4">
                India's leading infrastructure conglomerate with over 4 decades of excellence in construction and development.
              </p>
              <div className="text-sm text-gray-400">
                <p>160+ Active projects across India</p>
                <p>Pan India presence with 9 offices</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/expertise">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Expertise</span>
                  </Link>
                </li>
                <li>
                  <Link href="/landmarks">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</span>
                  </Link>
                </li>
                <li>
                  <Link href="/investors">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Investors</span>
                  </Link>
                </li>
                <li>
                  <Link href="/media">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Media</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-400">Buildings</span></li>
                <li><span className="text-gray-400">Transportation</span></li>
                <li><span className="text-gray-400">Water & Environment</span></li>
                <li><span className="text-gray-400">Railways</span></li>
                <li><span className="text-gray-400">Mining</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Hyderabad, Telangana
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (+91) 040-23268888
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@ramsetu.in
                </p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Youtube className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 Ramsetu Construction. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Corporate Governance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
