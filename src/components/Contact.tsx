import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help you with all your digital service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-red-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                <p className="text-gray-600">
                  Address Laxmi Nagar, Yerwada<br />
                  Pune - 411006<br />
                  Maharashtra, India<br />
                 
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">
                  <a href="tel:+919209934667" className="hover:text-green-600 transition-colors">
                    +91 9209934667

                  </a><br />
                  <a href="tel:+919209934667" className="hover:text-green-600 transition-colors">
                    +91 9209934667

                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@safacyberpoint.com" className="hover:text-blue-600 transition-colors">
                    safacybers@gmail.com 

                  </a><br />
                  <a href="mailto:support@safacyberpoint.com" className="hover:text-blue-600 transition-colors">
                    safacybers@gmail.com 

                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-orange-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                  <p className="text-green-600 font-medium">WhatsApp Support: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / Quick Actions */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
            
            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/919209934667?text=Hello%2C%20I%20need%20information%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl flex items-center space-x-3 transition-colors"
              >
                <MessageCircle size={24} />
                <div>
                  <div className="font-semibold">WhatsApp Us</div>
                  <div className="text-sm opacity-90">Get instant support on WhatsApp</div>
                </div>
              </a>

              <a
                href="tel:+919876543210"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl flex items-center space-x-3 transition-colors"
              >
                <Phone size={24} />
                <div>
                  <div className="font-semibold">Call Now</div>
                  <div className="text-sm opacity-90">Speak with our experts</div>
                </div>
              </a>

              <a
                href="mailto:info@safacyberpoint.com"
                className="w-full bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-xl flex items-center space-x-3 transition-colors"
              >
                <Mail size={24} />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm opacity-90">Send us your queries</div>
                </div>
              </a>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                  <span className="text-sm font-bold">y</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;