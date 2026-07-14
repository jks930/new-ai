import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesStyle2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Our Services (Style 2)</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow w-full">
         {/* Service Block 1 */}
         <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2">
                  <div className="h-96 bg-gray-200 rounded-xl w-full"></div>
               </div>
               <div className="lg:w-1/2">
                  <div className="text-[#ffa800] font-bold uppercase tracking-wider mb-2">Service 01</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Machine Learning Models</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center text-sm font-bold">✓</span> Supervised Learning</li>
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center text-sm font-bold">✓</span> Unsupervised Learning</li>
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center text-sm font-bold">✓</span> Reinforcement Learning</li>
                  </ul>
                  <Link to="/services-details" className="inline-block bg-[#0CA59D] hover:bg-[#169a8f] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all">Discover More</Link>
               </div>
            </div>
         </div>

         {/* Service Block 2 */}
         <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
               <div className="lg:w-1/2">
                  <div className="h-96 bg-gray-300 rounded-xl w-full"></div>
               </div>
               <div className="lg:w-1/2">
                  <div className="text-[#ffa800] font-bold uppercase tracking-wider mb-2">Service 02</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Computer Vision Systems</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center text-sm font-bold">✓</span> Image Recognition</li>
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center text-sm font-bold">✓</span> Object Detection</li>
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center text-sm font-bold">✓</span> Video Analysis</li>
                  </ul>
                  <Link to="/services-details" className="inline-block bg-[#0CA59D] hover:bg-[#169a8f] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all">Discover More</Link>
               </div>
            </div>
         </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default ServicesStyle2;
