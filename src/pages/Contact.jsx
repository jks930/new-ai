import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Contact Us</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
           <div className="bg-white p-8 rounded-lg shadow-sm text-center">
             <div className="w-16 h-16 bg-[#0CA59D]/10 text-[#0CA59D] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             </div>
             <h3 className="text-xl font-bold mb-2">Our Location</h3>
             <p className="text-gray-600">2750 Quadra Street, Victoria<br/>Canada</p>
           </div>
           
           <div className="bg-white p-8 rounded-lg shadow-sm text-center">
             <div className="w-16 h-16 bg-[#0CA59D]/10 text-[#0CA59D] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
             </div>
             <h3 className="text-xl font-bold mb-2">Call Us</h3>
             <p className="text-gray-600">+1 123 456 7890<br/>+1 987 654 3210</p>
           </div>

           <div className="bg-white p-8 rounded-lg shadow-sm text-center">
             <div className="w-16 h-16 bg-[#0CA59D]/10 text-[#0CA59D] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </div>
             <h3 className="text-xl font-bold mb-2">Email Us</h3>
             <p className="text-gray-600">hello@evolta.com<br/>support@evolta.com</p>
           </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-8">Send Us A Message</h2>
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D] focus:bg-white transition-colors" />
                 </div>
                 <div>
                    <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D] focus:bg-white transition-colors" />
                 </div>
                 <div>
                    <input type="text" placeholder="Your Phone" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D] focus:bg-white transition-colors" />
                 </div>
                 <div>
                    <input type="text" placeholder="Subject" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D] focus:bg-white transition-colors" />
                 </div>
              </div>
              <div>
                 <textarea placeholder="Your Message" rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D] focus:bg-white transition-colors"></textarea>
              </div>
              <div className="text-center">
                 <button type="button" className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-sm tracking-wide">
                    Send Message
                 </button>
              </div>
           </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
