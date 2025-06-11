import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bringing Digital Services to{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Your Fingertips
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Smart Services From Home - Get PAN cards, book tickets, pay bills, and more with just a few clicks. 
            Professional, reliable, and always at your service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToServices}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <span>Explore Services</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="https://wa.me/919209934667?text=Hello%2C%20I%20need%20information%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-red-300 transition-colors"
            >
              Get Support
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-gray-700 font-medium">Fast & Reliable</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-gray-700 font-medium">Secure Process</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-gray-700 font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;