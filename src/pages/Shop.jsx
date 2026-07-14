import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Our Shop</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-16 w-full flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="lg:w-1/4">
           <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Search</h3>
              <input type="text" placeholder="Search products..." className="w-full border rounded px-4 py-2 focus:outline-none focus:border-[#0CA59D]" />
           </div>
           <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Categories</h3>
              <ul className="space-y-3 text-gray-600">
                 <li className="hover:text-[#0CA59D] cursor-pointer flex justify-between"><span>AI Software</span> <span>(12)</span></li>
                 <li className="hover:text-[#0CA59D] cursor-pointer flex justify-between"><span>Hardware</span> <span>(8)</span></li>
                 <li className="hover:text-[#0CA59D] cursor-pointer flex justify-between"><span>Books</span> <span>(5)</span></li>
                 <li className="hover:text-[#0CA59D] cursor-pointer flex justify-between"><span>Courses</span> <span>(10)</span></li>
              </ul>
           </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
             <div key={item} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all border border-gray-100 p-4">
                <div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-3">
                      <Link to="/cart" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#ffa800] hover:text-white text-gray-800 transition-colors">🛒</Link>
                      <Link to="/product-details" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#ffa800] hover:text-white text-gray-800 transition-colors">👁</Link>
                   </div>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                   <Link to="/product-details" className="hover:text-[#0CA59D]">AI Smart Gadget {item}</Link>
                </h3>
                <div className="flex justify-between items-center">
                   <span className="text-[#0CA59D] font-bold text-lg">$99.00</span>
                   <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default Shop;
