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
                <div className="h-48 bg-gray-50 rounded-md mb-4 flex items-center justify-center relative overflow-hidden group border border-gray-100">
                   <img src={`/${(item % 6) + 1}.png`} alt="AI Product" className="w-[70%] h-auto object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md" />
                   <div className="absolute inset-0 bg-[#0CA59D]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-3 z-10">
                      <Link to="/cart" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#ffa800] hover:text-white text-[#0CA59D] transition-colors shadow-lg transform hover:-translate-y-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      </Link>
                      <Link to="/product-details" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#ffa800] hover:text-white text-[#0CA59D] transition-colors shadow-lg transform hover:-translate-y-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </Link>
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
