import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const SingleProduct = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9faff]">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-[54px] font-extrabold text-white relative z-10 tracking-tight">Enterprise License</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9faff"></path>
           </svg>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/circle-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>

      
      <main className="flex-grow max-w-[1400px] mx-auto px-4 lg:px-12 py-20 w-full">
        <div className="bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.04)] p-8 md:p-14 flex flex-col lg:flex-row gap-16 border border-gray-100">
           
           {/* Image Gallery */}
           <div className="lg:w-1/2">
              <div className="h-[400px] md:h-[500px] bg-gray-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden border border-gray-100 shadow-inner group p-8">
                 <img src="/2.png" alt="AI Neural Processor" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl" />
                 <div className="absolute top-6 left-6 bg-[#0CA59D] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">Bestseller</div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                 <div className="h-28 bg-gray-50 rounded-xl border-2 border-[#0CA59D] cursor-pointer flex items-center justify-center p-4">
                    <img src="/2.png" alt="Thumbnail 1" className="w-full h-full object-contain" />
                 </div>
                 <div className="h-28 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer flex items-center justify-center p-4 hover:border-[#0CA59D] transition-colors">
                    <img src="/3_1.png" alt="Thumbnail 2" className="w-full h-full object-contain" />
                 </div>
                 <div className="h-28 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer flex items-center justify-center p-4 hover:border-[#0CA59D] transition-colors">
                    <img src="/3_2.png" alt="Thumbnail 3" className="w-full h-full object-contain" />
                 </div>
                 <div className="h-28 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer flex items-center justify-center p-4 hover:border-[#0CA59D] transition-colors">
                    <img src="/6.png" alt="Thumbnail 4" className="w-full h-full object-contain" />
                 </div>
              </div>
           </div>

           {/* Details */}
           <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                 <span className="text-[#ffa800] text-lg">★★★★★</span>
                 <span className="text-gray-500 font-medium text-sm">(128 Enterprise Reviews)</span>
              </div>
              
              <h2 className="text-[36px] md:text-[42px] font-extrabold text-[#0b1c3a] mb-4 leading-tight">
                 Quantum Neural Processor License (Enterprise Tier)
              </h2>
              
              <div className="text-[40px] font-extrabold text-[#0CA59D] mb-6 flex items-end gap-2">
                 $9,999.00 <span className="text-gray-400 text-lg font-medium pb-2">/ month</span>
              </div>
              
              <p className="text-gray-600 mb-10 leading-[1.9] text-[17px]">
                 Deploy the world's most advanced autonomous neural processing engine directly into your enterprise architecture. This exclusive enterprise license grants unlimited API calls to our quantum-resistant ML models, real-time computer vision suites, and dedicated 24/7 hyper-care support from our elite data scientists. 
              </p>
              
              <ul className="space-y-4 mb-10">
                 <li className="flex items-center gap-4 text-gray-700 text-[16px]">
                   <div className="w-6 h-6 rounded-full bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center">✓</div>
                   Unlimited Neural API Calls
                 </li>
                 <li className="flex items-center gap-4 text-gray-700 text-[16px]">
                   <div className="w-6 h-6 rounded-full bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center">✓</div>
                   Zero-Latency Edge Deployment
                 </li>
                 <li className="flex items-center gap-4 text-gray-700 text-[16px]">
                   <div className="w-6 h-6 rounded-full bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center">✓</div>
                   Bank-Grade Federated Learning Security
                 </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                 <div className="flex border-2 border-gray-100 rounded-full bg-gray-50 overflow-hidden w-full sm:w-auto">
                    <button className="px-6 py-4 text-gray-600 hover:text-[#0CA59D] hover:bg-white transition-colors font-bold text-lg">-</button>
                    <input type="text" value="1" className="w-16 text-center outline-none bg-transparent font-bold text-gray-800 text-lg" readOnly />
                    <button className="px-6 py-4 text-gray-600 hover:text-[#0CA59D] hover:bg-white transition-colors font-bold text-lg">+</button>
                 </div>
                 <button className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-5 px-10 rounded-full shadow-[0_10px_25px_rgba(255,168,0,0.3)] transition-all flex-grow text-center text-lg transform hover:-translate-y-1 w-full sm:w-auto flex justify-center items-center gap-3">
                    Add to Enterprise Dashboard
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </button>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 text-[15px] border-t border-gray-100 pt-8 bg-gray-50/50 p-6 rounded-2xl">
                 <div className="text-gray-500 uppercase tracking-widest font-bold text-xs mb-1 col-span-2">Specifications</div>
                 <div className="text-gray-500"><span className="font-bold text-[#0b1c3a]">License ID:</span></div>
                 <div className="text-gray-700">QNP-ENT-2026</div>
                 <div className="text-gray-500"><span className="font-bold text-[#0b1c3a]">Category:</span></div>
                 <div className="text-[#0CA59D] hover:underline cursor-pointer">Enterprise Software, Machine Learning</div>
                 <div className="text-gray-500"><span className="font-bold text-[#0b1c3a]">Tags:</span></div>
                 <div className="text-[#0CA59D] hover:underline cursor-pointer">Quantum, Vision, Edge AI</div>
              </div>
           </div>
        </div>

        {/* Extended Description Tabs */}
        <div className="mt-16 bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-14">
           <div className="flex gap-10 border-b border-gray-200 pb-4 mb-8 overflow-x-auto">
              <button className="text-[18px] font-bold text-[#0CA59D] border-b-2 border-[#0CA59D] pb-4 whitespace-nowrap">Full Architecture Description</button>
              <button className="text-[18px] font-bold text-gray-400 hover:text-[#0b1c3a] transition-colors pb-4 whitespace-nowrap">Integration Docs</button>
              <button className="text-[18px] font-bold text-gray-400 hover:text-[#0b1c3a] transition-colors pb-4 whitespace-nowrap">Client Reviews (128)</button>
           </div>
           
           <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-[16px] leading-[1.9]">
                 The Quantum Neural Processor (QNP) represents the absolute pinnacle of current artificial intelligence capabilities. Designed specifically for Fortune 500 enterprises, this architecture bypasses traditional cloud latency by establishing a hybrid edge-to-cloud mesh network. This ensures that your critical AI tasks—whether they involve real-time financial fraud detection, autonomous manufacturing quality control, or massive natural language processing—are executed in under 10 milliseconds.
              </p>
              <p className="text-[16px] leading-[1.9]">
                 Every QNP license comes with our proprietary Zero-Trust Security Module. Using advanced federated learning techniques, your proprietary data never leaves your localized servers. Instead, only encrypted model weight updates are transmitted, ensuring absolute compliance with GDPR, HIPAA, and emerging global data privacy standards. 
              </p>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default SingleProduct;
