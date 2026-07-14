import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const SingleProduct = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Product Details</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row gap-12">
           {/* Image Gallery */}
           <div className="lg:w-1/2">
              <div className="h-[400px] bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">Main Product Image</div>
              <div className="grid grid-cols-4 gap-4">
                 <div className="h-24 bg-gray-100 rounded-lg border-2 border-[#0CA59D] cursor-pointer"></div>
                 <div className="h-24 bg-gray-100 rounded-lg cursor-pointer"></div>
                 <div className="h-24 bg-gray-100 rounded-lg cursor-pointer"></div>
                 <div className="h-24 bg-gray-100 rounded-lg cursor-pointer"></div>
              </div>
           </div>

           {/* Details */}
           <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">AI Smart Vision Camera</h2>
              <div className="flex items-center gap-4 mb-4">
                 <div className="text-yellow-400">★★★★★</div>
                 <span className="text-gray-500 text-sm">(24 Customer Reviews)</span>
              </div>
              <div className="text-3xl font-extrabold text-[#0CA59D] mb-6">$149.00</div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 A comprehensive solution for real-time computer vision tasks. Equipped with the latest neural processing unit to handle complex AI models directly on the edge. Perfect for robotics and automation projects.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                 <div className="flex border rounded-md">
                    <button className="px-4 py-2 border-r hover:bg-gray-100">-</button>
                    <input type="text" value="1" className="w-16 text-center outline-none" readOnly />
                    <button className="px-4 py-2 border-l hover:bg-gray-100">+</button>
                 </div>
                 <button className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all flex-grow text-center">
                    Add to Cart
                 </button>
              </div>
              
              <ul className="text-sm text-gray-600 space-y-2 border-t pt-6">
                 <li><span className="font-bold text-gray-800">SKU:</span> AI-VC-001</li>
                 <li><span className="font-bold text-gray-800">Category:</span> Hardware, AI</li>
                 <li><span className="font-bold text-gray-800">Tags:</span> Vision, Edge Computing, Camera</li>
              </ul>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default SingleProduct;
