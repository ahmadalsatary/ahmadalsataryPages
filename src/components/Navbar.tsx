import React, { useState, useEffect } from 'react';
import { Glasses } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-10 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900 shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Glasses size={28} className="text-blue-300" />
            <span className="text-2xl font-bold text-white">Ahmad Shop</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Home</a>
            <a href="#menu" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Collection</a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">About</a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <a 
              href="#order" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Book Appointment
            </a>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Navbar;