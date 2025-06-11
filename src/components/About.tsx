import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield size={48} />,
      title: 'Secure & Trusted',
      description: 'Your data and transactions are protected with bank-level security measures.'
    },
    {
      icon: <Clock size={48} />,
      title: 'Quick Processing',
      description: 'Fast turnaround times for all services with real-time status updates.'
    },
    {
      icon: <Users size={48} />,
      title: 'Expert Support',
      description: 'Dedicated customer support team to assist you throughout the process.'
    },
    {
      icon: <Award size={48} />,
      title: 'Quality Service',
      description: 'Committed to providing high-quality services with 100% customer satisfaction.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Safa Cyber Point
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for all digital services. We bring convenience, 
            reliability, and professional service to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Safa Cyber Point, we understand the importance of reliable digital services 
              in today's fast-paced world. With years of experience and thousands of satisfied 
              customers, we have established ourselves as a leading provider of digital services.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to make essential government and private services accessible 
              to everyone through technology. Whether you need a PAN card, want to book 
              tickets, or pay bills, we ensure a smooth and hassle-free experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">10,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4 text-red-600">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;