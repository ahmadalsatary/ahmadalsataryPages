import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/CoffeeCard';
import Footer from './components/Footer';
import productData from './data/coffeeData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Collection Section */}
      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of designer eyewear, featuring the latest styles and highest quality materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg"
                  alt="Modern optical store interior" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="font-bold text-xl">Since 2023</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Ahmad Shop was founded with a vision to provide premium eyewear that combines style, comfort, and quality. We understand that choosing the right frames is about more than just vision correction – it's about expressing your personal style.
              </p>
              <p className="text-gray-700 mb-6">
                Each pair in our collection is carefully selected to ensure the highest quality materials and craftsmanship. We work with leading brands and designers to bring you the latest trends and timeless classics.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[120px]">
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                  <p className="text-gray-700">Frame Styles</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[120px]">
                  <p className="text-3xl font-bold text-blue-600">3</p>
                  <p className="text-gray-700">Locations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[120px]">
                  <p className="text-3xl font-bold text-blue-600">10k+</p>
                  <p className="text-gray-700">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our VIP List</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive offers, new arrivals, and expert eyewear advice.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;