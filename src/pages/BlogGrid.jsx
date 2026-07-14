import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Our Blog</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3, 4, 5, 6].map((item) => (
             <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-60 bg-gray-200 relative overflow-hidden">
                   <div className="absolute top-4 left-4 bg-[#0CA59D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">Technology</div>
                   <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-8">
                   <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span><span className="text-[#ffa800] mr-1">✍</span> Admin</span>
                      <span><span className="text-[#ffa800] mr-1">📅</span> Aug 15, 2026</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 hover:text-[#0CA59D] transition-colors">
                      <Link to="/blog-details">The Future of AI and Machine Learning in Daily Life</Link>
                   </h3>
                   <p className="text-gray-600 mb-6 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                   <Link to="/blog-details" className="text-[#0CA59D] font-bold hover:text-[#ffa800] transition-colors flex items-center gap-2">
                      Read More <span>→</span>
                   </Link>
                </div>
             </div>
           ))}
        </div>
        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-2">
           <button className="w-10 h-10 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-[#0CA59D] hover:text-white hover:border-[#0CA59D] transition-all font-bold">1</button>
           <button className="w-10 h-10 rounded-md bg-[#0CA59D] text-white border border-[#0CA59D] font-bold shadow-md">2</button>
           <button className="w-10 h-10 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-[#0CA59D] hover:text-white hover:border-[#0CA59D] transition-all font-bold">3</button>
           <button className="w-10 h-10 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-[#0CA59D] hover:text-white hover:border-[#0CA59D] transition-all font-bold">→</button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default BlogGrid;
