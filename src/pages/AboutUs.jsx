import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">About Us</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">We Are The Best AI Solution Provider</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-[#ffa800]">✓</span> Machine Learning</li>
               <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-[#ffa800]">✓</span> Data Science</li>
               <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-[#ffa800]">✓</span> Predictive Analysis</li>
            </ul>
            <button className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all text-sm">Read More</button>
          </div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img src="/banner-img1.png" alt="About AI" className="w-full h-auto bg-[#0CA59D] p-8" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
