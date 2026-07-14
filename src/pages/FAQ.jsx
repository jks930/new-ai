import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Frequently Asked Questions</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-4xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How Can We Help You?</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our AI solutions and services.</p>
        </div>
        
        <div className="space-y-6">
           {[
             'What is Artificial Intelligence?',
             'How can AI help my business grow?',
             'Is my data secure with your machine learning models?',
             'Do you offer custom AI development?',
             'What industries do you serve?',
             'How much does a typical AI project cost?'
           ].map((q, i) => (
             <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group">
                <div className="p-6 flex justify-between items-center cursor-pointer group-hover:bg-gray-50 transition-colors">
                   <h3 className="font-bold text-gray-800 text-lg">{q}</h3>
                   <div className="w-8 h-8 rounded-full bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center font-bold text-xl group-hover:bg-[#0CA59D] group-hover:text-white transition-colors">
                      {i === 0 ? '-' : '+'}
                   </div>
                </div>
                {i === 0 && (
                   <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   </div>
                )}
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default FAQ;
