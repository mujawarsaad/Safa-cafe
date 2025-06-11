import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  whatsappMessage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features = [], 
  whatsappMessage 
}) => {
  const handleApply = () => {
    const phoneNumber = '919209934667'; // Replace with your WhatsApp number in international format
    const encodedMessage = encodeURIComponent(`Hello! I would like to apply for: ${whatsappMessage}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl mb-4 mx-auto">
        <div className="text-red-600">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 mb-4 text-center leading-relaxed">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <button
        onClick={handleApply}
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
      >
        <MessageCircle size={18} />
        <span>Apply Now</span>
      </button>
    </div>
  );
};

export default ServiceCard;