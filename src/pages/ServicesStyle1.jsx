import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesStyle1 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Our Services</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What We Offer</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive AI solutions to help automate and scale your business operations securely.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: 'Machine Learning', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3' },
             { title: 'Computer Vision', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
             { title: 'NLP Models', icon: 'M8 10h.01M12 10h.01' },
             { title: 'Predictive Analytics', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
             { title: 'AI Consulting', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
             { title: 'Data Engineering', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' },
           ].map((srv, i) => (
             <div key={i} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center text-[#0CA59D] group-hover:bg-[#0CA59D] group-hover:text-white transition-colors mb-6">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={srv.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 hover:text-[#0CA59D] transition-colors"><Link to="/services-details">{srv.title}</Link></h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                <Link to="/services-details" className="text-[#ffa800] font-bold hover:text-orange-600 transition-colors flex items-center gap-2">
                   Read More <span>→</span>
                </Link>
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default ServicesStyle1;
