import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Pricing Plans</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold mb-4">Choose The Best Plan For You</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">We offer flexible pricing options designed to fit teams and projects of any size.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Basic Plan */}
           <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-all text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Basic</h3>
              <div className="text-4xl font-extrabold text-[#0CA59D] mb-6">$29<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-gray-600">
                 <li>5 Projects</li>
                 <li>Basic Analytics</li>
                 <li>24/7 Support</li>
                 <li className="text-gray-400 line-through">Custom Domains</li>
                 <li className="text-gray-400 line-through">Advanced Security</li>
              </ul>
              <button className="w-full bg-gray-100 hover:bg-[#0CA59D] hover:text-white text-gray-800 font-bold py-3 rounded-full transition-colors">Select Plan</button>
           </div>

           {/* Pro Plan */}
           <div className="bg-[#0CA59D] rounded-lg shadow-xl p-8 text-center text-white transform md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffa800] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Popular</div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-4xl font-extrabold mb-6">$59<span className="text-lg opacity-80 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                 <li>15 Projects</li>
                 <li>Advanced Analytics</li>
                 <li>24/7 Priority Support</li>
                 <li>Custom Domains</li>
                 <li className="opacity-50 line-through">Advanced Security</li>
              </ul>
              <button className="w-full bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-3 rounded-full transition-colors shadow-lg">Select Plan</button>
           </div>

           {/* Enterprise Plan */}
           <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-all text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise</h3>
              <div className="text-4xl font-extrabold text-[#0CA59D] mb-6">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-gray-600">
                 <li>Unlimited Projects</li>
                 <li>Advanced Analytics</li>
                 <li>24/7 Priority Support</li>
                 <li>Custom Domains</li>
                 <li>Advanced Security</li>
              </ul>
              <button className="w-full bg-gray-100 hover:bg-[#0CA59D] hover:text-white text-gray-800 font-bold py-3 rounded-full transition-colors">Select Plan</button>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
