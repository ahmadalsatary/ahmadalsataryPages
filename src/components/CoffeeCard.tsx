import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md w-full sm:w-72 flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={`${title} eyewear`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="text-gray-800 text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
      
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
        <span>Try Now</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;