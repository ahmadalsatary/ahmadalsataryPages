import React from 'react';
import { Glasses } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white mt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-4 bg-blue-600 p-3 rounded-full">
            <Glasses size={32} className="text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            See Better with <span className="text-blue-300">Ahmad Shop</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Discover our premium collection of designer eyewear. Find the perfect frames that match your style and enhance your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center">
              Browse Collection
            </a>
            <a href="#about" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center">
              Our Story
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Hero;