import React from 'react';
import { 
  CreditCard, 
  Train, 
  Bus, 
  Plane, 
  Smartphone, 
  Zap, 
  Car, 
  Shield,
  Building2,
  FileText
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <CreditCard size={32} />,
      title: 'PAN Card (Create & Update)',
      description: 'Apply for a new PAN card or update your existing PAN card details through our secure service.',
      features: ['New PAN application', 'PAN card correction', 'Digital delivery', 'Status tracking'],
      whatsappMessage: 'PAN Card Service (Create/Update)'
    },
    {
      icon: <Train size={32} />,
      title: 'Train Ticket Booking',
      description: 'Book train tickets for anywhere in India with best deals and instant confirmations.',
      features: ['All trains available', 'Instant booking', 'E-tickets', 'Seat selection'],
      whatsappMessage: 'Train Ticket Booking'
    },
    {
      icon: <Bus size={32} />,
      title: 'Bus Ticket Booking',
      description: 'Book bus tickets for local and outstation travel with a wide range of options.',
      features: ['Multiple operators', 'Route options', 'Live tracking', 'Easy cancellation'],
      whatsappMessage: 'Bus Ticket Booking'
    },
    {
      icon: <Plane size={32} />,
      title: 'Flight Ticket Booking',
      description: 'Book domestic and international flights at the best prices with instant confirmation.',
      features: ['Best price guarantee', 'All airlines', 'Flexible dates', '24/7 support'],
      whatsappMessage: 'Flight Ticket Booking'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Recharge',
      description: 'Quick and secure mobile recharge for all operators with exciting offers and cashbacks.',
      features: ['All operators', 'Instant recharge', 'Special offers', 'Bill payment'],
      whatsappMessage: 'Mobile Recharge Service'
    },
    {
      icon: <Zap size={32} />,
      title: 'Electricity Bill Payment',
      description: 'Pay your electricity bills online for all major electricity boards across the country.',
      features: ['All state boards', 'Instant payment', 'Payment history', 'Auto reminders'],
      whatsappMessage: 'Electricity Bill Payment'
    },
    {
      icon: <Car size={32} />,
      title: 'FASTag',
      description: 'Apply for new FASTag or recharge your existing FASTag account for seamless highway travel.',
      features: ['New FASTag', 'Recharge service', 'All banks', 'Vehicle linking'],
      whatsappMessage: 'FASTag Service'
    },
    {
      icon: <Shield size={32} />,
      title: 'Insurance',
      description: 'Get the best insurance policies for life, health, vehicle, and more with expert guidance.',
      features: ['Life insurance', 'Health insurance', 'Vehicle insurance', 'Expert advice'],
      whatsappMessage: 'Insurance Service'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Bank Account Opening',
      description: 'Open bank accounts with leading banks through our assisted service with minimal documentation.',
      features: ['All major banks', 'Minimal documents', 'Home service', 'Quick approval'],
      whatsappMessage: 'Bank Account Opening'
    },
    {
      icon: <FileText size={32} />,
      title: 'Document Services',
      description: 'Various document related services including Aadhaar, voter ID, passport assistance and more.',
      features: ['Aadhaar services', 'Voter ID', 'Passport help', 'Certificate services'],
      whatsappMessage: 'Document Services'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete range of digital services to make your life easier. 
            Fast, secure, and reliable solutions for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              whatsappMessage={service.whatsappMessage}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for?
          </p>
          <a
            href="https://wa.me/919209934667?text=Hello%2C%20I%20need%20help%20with%20a%20service%20not%20listed%20on%20your%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Contact Us for Custom Services</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;