import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Safa Cyber Point</h3>
                <p className="text-xs text-orange-400 font-medium">DIGITAL SERVICES</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for all digital services. We make essential government 
              and private services accessible through technology with professional support.
            </p>
            <a
              href="https://wa.me/919209934667?text=Hello%2C%20I%20need%20information%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Support</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="tel:+91 9209934667" className="hover:text-white transition-colors">
                  +91 9209934667
                </a>
              </p>
              <p>
                <a href="mailto:info@safacyberpoint.com" className="hover:text-white transition-colors">
                 safacybers@gmail.com

                </a>
              </p>
              <p>Address Laxmi Nagar, Yerwada</p>
              <p>Pune - 411006</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Safa Cyber Point. All rights reserved. | 
            <span className="text-green-400"> WhatsApp Support Available 24/7</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
