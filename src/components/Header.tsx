import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Safa Cyber Point</h1>
              <p className="text-xs text-orange-600 font-medium">DIGITAL SERVICES</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/919209934667?text=Hello%2C%20I%20need%20information%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                Contact
              </button>
              <a
                href="https://wa.me/919209934667?text=Hello%2C%20I%20need%20information%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-green-600 font-medium"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;