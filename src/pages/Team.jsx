import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Team = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Our Team</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet The Experts</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">Our team of data scientists and AI engineers are ready to help you succeed.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {['Steven Smith', 'Sarah Lucy', 'James Anderson', 'John Doe', 'Amanda Clark', 'Robert Miles', 'Jessica Brown', 'Michael Scott'].map((name, i) => (
             <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                   {/* Placeholder for actual images */}
                   <div className="absolute inset-0 bg-[#0CA59D] opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center gap-4">
                     <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0CA59D] hover:bg-[#ffa800] hover:text-white transition-colors">
                       <span className="font-bold">in</span>
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0CA59D] hover:bg-[#ffa800] hover:text-white transition-colors">
                       <span className="font-bold">tw</span>
                     </a>
                   </div>
                </div>
                <div className="p-6 text-center">
                   <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
                   <p className="text-[#0CA59D] font-medium text-sm uppercase tracking-wide">
                     {i % 3 === 0 ? 'Data Scientist' : i % 3 === 1 ? 'AI Engineer' : 'Lead Developer'}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default Team;
