import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const BlogRightSidebar = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Blog Right Sidebar</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full flex flex-col lg:flex-row gap-12">
        {/* Main Feed */}
        <div className="lg:w-2/3 space-y-12">
           {[1, 2, 3].map((item) => (
             <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-80 bg-gray-200 relative overflow-hidden">
                   <div className="absolute top-6 left-6 bg-[#0CA59D] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider z-10">AI & Tech</div>
                </div>
                <div className="p-8 md:p-10">
                   <div className="flex items-center gap-6 text-sm text-gray-500 mb-4 border-b pb-4">
                      <span className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-300"></div> Admin</span>
                      <span>📅 August 15, 2026</span>
                      <span>💬 3 Comments</span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hover:text-[#0CA59D] transition-colors leading-tight">
                      <Link to="/blog-details">Making Peace With The Feast Or Famine Of Freelancing</Link>
                   </h3>
                   <p className="text-gray-600 mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   <Link to="/blog-details" className="inline-block bg-[#0CA59D] hover:bg-[#169a8f] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all">
                      Read More
                   </Link>
                </div>
             </div>
           ))}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Search</h3>
              <div className="flex">
                 <input type="text" placeholder="Search..." className="w-full border border-r-0 rounded-l-md px-4 py-3 outline-none focus:border-[#0CA59D]" />
                 <button className="bg-[#0CA59D] hover:bg-[#169a8f] text-white px-4 py-3 rounded-r-md transition-colors">🔍</button>
              </div>
           </div>
           
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Categories</h3>
              <ul className="space-y-4 text-gray-600">
                 <li className="hover:text-[#0CA59D] cursor-pointer flex items-center justify-between"><span className="flex items-center gap-2"><span className="text-[#ffa800]">▶</span> Technology</span> <span>(12)</span></li>
                 <li className="hover:text-[#0CA59D] cursor-pointer flex items-center justify-between"><span className="flex items-center gap-2"><span className="text-[#ffa800]">▶</span> Business</span> <span>(8)</span></li>
                 <li className="hover:text-[#0CA59D] cursor-pointer flex items-center justify-between"><span className="flex items-center gap-2"><span className="text-[#ffa800]">▶</span> Startups</span> <span>(5)</span></li>
                 <li className="hover:text-[#0CA59D] cursor-pointer flex items-center justify-between"><span className="flex items-center gap-2"><span className="text-[#ffa800]">▶</span> AI Solutions</span> <span>(10)</span></li>
              </ul>
           </div>
           
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Recent Posts</h3>
              <div className="space-y-6">
                 {[1, 2, 3].map(item => (
                   <div key={item} className="flex gap-4 items-center group cursor-pointer">
                      <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"></div>
                      <div>
                         <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#0CA59D] transition-colors leading-tight mb-2">The standard Lorem Ipsum passage, used since the 1500s</h4>
                         <p className="text-xs text-gray-500">August 12, 2026</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default BlogRightSidebar;
