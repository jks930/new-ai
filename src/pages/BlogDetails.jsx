import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const BlogDetails = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9faff]">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-[54px] font-extrabold text-white relative z-10 tracking-tight">Blog Insights</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9faff"></path>
           </svg>
        </div>
        {/* Background Decors */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/circle-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>

      
      <main className="flex-grow max-w-[1000px] mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="bg-white rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.04)] overflow-hidden mb-12 border border-gray-100">
           
           {/* Hero Blog Image */}
           <div className="h-[300px] md:h-[500px] relative w-full overflow-hidden group">
              <img src="/3.jpg.jpeg" alt="AI Deep Learning" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 z-10">
                 <span className="bg-[#ffa800] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Deep Learning</span>
              </div>
           </div>

           <div className="p-8 md:p-14">
              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-b pb-6">
                  <span className="flex items-center gap-3 font-semibold text-[#0b1c3a]">
                     <img src="/author1.jpg.jpeg" alt="Admin" className="w-10 h-10 rounded-full object-cover shadow-sm" /> 
                     By Dr. Alan Turing
                  </span>
                  <span className="flex items-center gap-2">📅 August 15, 2026</span>
                  <span className="flex items-center gap-2 text-[#0CA59D]">💬 12 Comments</span>
              </div>
              
              <h1 className="text-[32px] md:text-[44px] font-extrabold text-[#0b1c3a] mb-10 leading-[1.2] tracking-tight">
                How Neural Networks Are Revolutionizing Enterprise Security Infrastructure
              </h1>
              
              {/* Blog Content */}
              <div className="prose max-w-none text-gray-600 space-y-8">
                 <p className="text-[18px] leading-[1.9]">
                   In the rapidly evolving landscape of digital security, traditional firewalls and signature-based antivirus solutions are no longer sufficient to protect enterprise data. Adversaries are employing highly sophisticated, automated techniques to penetrate networks. This is where artificial intelligence, specifically deep neural networks (DNNs), is creating a monumental paradigm shift.
                 </p>
                 <p className="text-[17px] leading-[1.9]">
                   Unlike legacy systems that rely on known threat databases, modern AI cybersecurity platforms utilize unsupervised machine learning to establish a baseline of normal network behavior. By processing terabytes of network telemetry data in real-time, these advanced algorithms can detect subtle anomalies that indicate a zero-day exploit or an insider threat, often neutralizing the attack milliseconds before it can execute.
                 </p>
                 
                 <blockquote className="border-l-[6px] border-[#ffa800] bg-orange-50/50 p-8 my-10 rounded-r-2xl shadow-sm relative">
                    <svg className="absolute top-4 left-4 w-12 h-12 text-[#ffa800] opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    <p className="italic text-[22px] font-semibold text-[#0b1c3a] relative z-10 leading-[1.6]">
                       "We are moving from a reactive security posture to a highly predictive one. AI does not sleep, it does not fatigue, and its capacity to identify complex adversarial patterns vastly exceeds human capability."
                    </p>
                 </blockquote>
                 
                 <h3 className="text-[26px] font-bold text-[#0b1c3a] mt-10 mb-4">The Role of Federated Learning</h3>
                 <p className="text-[17px] leading-[1.9]">
                   One of the most exciting developments in AI security is federated learning. This approach allows multiple organizations to collaboratively train a shared machine learning model without ever exchanging raw, sensitive data. The model learns from the unique cyber threats faced by each entity, synthesizing this knowledge globally. Consequently, an attack vector discovered in a financial institution in Tokyo can instantly immunize a healthcare provider in New York.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    <div className="h-64 rounded-2xl overflow-hidden shadow-lg group">
                       <img src="/1.png" alt="AI Analytics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="h-64 rounded-2xl overflow-hidden shadow-lg group">
                       <img src="/database.png" alt="Data Security" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                 </div>
                 
                 <p className="text-[17px] leading-[1.9]">
                   As we look toward the future, the integration of quantum computing with neural networks promises to shatter current cryptographic standards. Organizations must begin transitioning to quantum-resistant, AI-driven security architectures today. The arms race between offensive AI and defensive AI has already begun; ensuring your enterprise is on the right side of this technological divide is the most critical mandate for the modern CISO.
                 </p>
              </div>
              
              {/* Tags & Social Share */}
              <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="flex items-center gap-4">
                    <span className="font-bold text-[#0b1c3a] uppercase tracking-widest text-sm">Tags:</span>
                    <div className="flex gap-2">
                       <span className="bg-gray-100 px-4 py-1.5 text-sm font-semibold rounded-full text-gray-600 hover:bg-[#0CA59D] hover:text-white cursor-pointer transition-all shadow-sm">Cybersecurity</span>
                       <span className="bg-gray-100 px-4 py-1.5 text-sm font-semibold rounded-full text-gray-600 hover:bg-[#0CA59D] hover:text-white cursor-pointer transition-all shadow-sm">Neural Networks</span>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <span className="font-bold text-[#0b1c3a] uppercase tracking-widest text-sm mr-2 flex items-center">Share:</span>
                    <div className="w-10 h-10 bg-[#0CA59D]/10 rounded-full flex items-center justify-center text-[#0CA59D] hover:bg-[#0CA59D] hover:text-white cursor-pointer transition-all transform hover:-translate-y-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </div>
                    <div className="w-10 h-10 bg-[#0CA59D]/10 rounded-full flex items-center justify-center text-[#0CA59D] hover:bg-[#0CA59D] hover:text-white cursor-pointer transition-all transform hover:-translate-y-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12 border border-gray-100">
           <h3 className="text-2xl font-bold mb-10 text-[#0b1c3a]">Discussion (3 Comments)</h3>
           <div className="space-y-10">
              
              <div className="flex gap-6">
                 <img src="/author2.jpg.jpeg" alt="Commenter" className="w-14 h-14 rounded-full object-cover shadow-sm flex-shrink-0" />
                 <div>
                    <div className="flex justify-between items-center mb-3">
                       <h4 className="font-bold text-[#0b1c3a] text-lg">Elena Rodriguez</h4>
                       <span className="text-sm text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-md">Aug 15, 2026</span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">Fascinating read! The concept of federated learning is definitely the next frontier. How does this apply to smaller enterprises with limited edge computing capacity?</p>
                    <button className="text-[#0CA59D] font-bold text-[13px] uppercase tracking-wider hover:text-[#ffa800] transition-colors flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
                      Reply
                    </button>
                 </div>
              </div>

              {/* Nested Reply */}
              <div className="flex gap-6 ml-12 border-l-[3px] border-[#0CA59D]/20 pl-8">
                 <img src="/author1.jpg.jpeg" alt="Author" className="w-14 h-14 rounded-full object-cover shadow-sm flex-shrink-0 border-2 border-[#0CA59D]" />
                 <div>
                    <div className="flex justify-between items-center mb-3">
                       <h4 className="font-bold text-[#0b1c3a] text-lg flex items-center gap-2">Dr. Alan Turing <span className="bg-[#ffa800] text-white text-[10px] px-2 py-0.5 rounded-full uppercase">Author</span></h4>
                       <span className="text-sm text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-md">Aug 16, 2026</span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">Hi Elena, great question! We're actually deploying lightweight models specifically for IoT devices to handle this. I'll cover this in my next post.</p>
                    <button className="text-[#0CA59D] font-bold text-[13px] uppercase tracking-wider hover:text-[#ffa800] transition-colors flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
                      Reply
                    </button>
                 </div>
              </div>

              <div className="flex gap-6">
                 <img src="/author3.jpg.jpeg" alt="Commenter" className="w-14 h-14 rounded-full object-cover shadow-sm flex-shrink-0" />
                 <div>
                    <div className="flex justify-between items-center mb-3">
                       <h4 className="font-bold text-[#0b1c3a] text-lg">Marcus Chen</h4>
                       <span className="text-sm text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-md">Aug 16, 2026</span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">The article hits the nail on the head regarding zero-day exploits. AI is the only way we can match the speed of automated adversarial attacks today.</p>
                    <button className="text-[#0CA59D] font-bold text-[13px] uppercase tracking-wider hover:text-[#ffa800] transition-colors flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
                      Reply
                    </button>
                 </div>
              </div>

           </div>
        </div>

        {/* Leave a Reply */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
           <h3 className="text-2xl font-bold mb-8 text-[#0b1c3a]">Leave A Reply</h3>
           <p className="text-gray-500 mb-8 text-[15px]">Your email address will not be published. Required fields are marked *</p>
           
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <input type="text" placeholder="Full Name *" className="w-full bg-[#f9faff] border border-gray-200 rounded-xl py-4 px-5 focus:outline-none focus:border-[#0CA59D] focus:ring-2 focus:ring-[#0CA59D]/20 transition-all" />
                 </div>
                 <div>
                   <input type="email" placeholder="Email Address *" className="w-full bg-[#f9faff] border border-gray-200 rounded-xl py-4 px-5 focus:outline-none focus:border-[#0CA59D] focus:ring-2 focus:ring-[#0CA59D]/20 transition-all" />
                 </div>
              </div>
              <textarea rows="6" placeholder="Your Comment *" className="w-full bg-[#f9faff] border border-gray-200 rounded-xl py-4 px-5 focus:outline-none focus:border-[#0CA59D] focus:ring-2 focus:ring-[#0CA59D]/20 transition-all resize-none"></textarea>
              
              <div className="flex items-start gap-3 mt-4">
                 <input type="checkbox" id="save-info" className="mt-1.5 rounded text-[#0CA59D] focus:ring-[#0CA59D]" />
                 <label htmlFor="save-info" className="text-[15px] text-gray-500 cursor-pointer">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>
              
              <button type="button" className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 px-12 rounded-full shadow-[0_10px_20px_rgba(255,168,0,0.3)] transition-all transform hover:-translate-y-1 mt-6 text-[15px] tracking-wide inline-flex items-center gap-2 group">
                 Post Comment
                 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
           </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default BlogDetails;
