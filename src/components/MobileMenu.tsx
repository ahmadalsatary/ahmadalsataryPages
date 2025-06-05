import React, { useState, useEffect, useRef } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300">
      <div 
        ref={menuRef}
        className="fixed right-0 top-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out"
      >
        <div className="p-5">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-300 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors duration-300"
                  onClick={onClose}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors duration-300"
                  onClick={onClose}
                >
                  Collection
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors duration-300"
                  onClick={onClose}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors duration-300"
                  onClick={onClose}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="mt-8 pt-6 border-t border-gray-800">
            <a 
              href="#order" 
              className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded text-center font-semibold transition-colors duration-300"
              onClick={onClose}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;