import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1c3a] text-gray-300 pt-20 pb-8 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative">
         {/* Background global map watermark */}
         <div className="absolute right-0 top-0 opacity-5 pointer-events-none hidden md:block">
             <svg width="400" height="400" viewBox="0 0 100 100">
                 <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                 <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                 <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                 <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke="white" strokeWidth="0.5" />
                 <path d="M50,10 Q10,50 50,90 Q90,50 50,10" fill="none" stroke="white" strokeWidth="0.5" />
             </svg>
         </div>

         {/* Newsletter Subscribe Section */}
         <div className="bg-[#0CA59D] rounded-xl p-8 md:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-20 shadow-2xl">
            <div className="text-white lg:w-1/2">
               <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe To Our Newsletter</h2>
               <p className="text-gray-100 opacity-90">Get the latest updates, AI news, and special offers delivered directly to your inbox.</p>
            </div>
            <div className="lg:w-1/2 w-full flex">
               <input type="email" placeholder="Enter your email address" className="w-full bg-white text-gray-800 rounded-l-full px-6 py-4 outline-none focus:ring-2 focus:ring-[#ffa800]" />
               <button className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-r-full transition-colors whitespace-nowrap shadow-md">
                  Subscribe
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16 relative z-10">
            {/* Column 1 */}
            <div>
               <div className="flex items-center gap-2 text-white font-bold text-3xl tracking-wide mb-6">
                 <svg className="w-9 h-9 text-[#0CA59D]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z" />
                    <circle cx="7" cy="12" r="1.5" />
                    <circle cx="17" cy="12" r="1.5" />
                    <path d="M8.5 12h7" stroke="currentColor" strokeWidth="1" />
                 </svg>
                 Evolta
               </div>
               <p className="mb-8 leading-relaxed text-gray-400">
                 Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan. We build AI for the future.
               </p>
               <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#162747] hover:bg-[#0CA59D] hover:text-white flex items-center justify-center transition-all shadow-md">
                     <span className="font-bold">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#162747] hover:bg-[#0CA59D] hover:text-white flex items-center justify-center transition-all shadow-md">
                     <span className="font-bold">tw</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#162747] hover:bg-[#0CA59D] hover:text-white flex items-center justify-center transition-all shadow-md">
                     <span className="font-bold">fb</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#162747] hover:bg-[#0CA59D] hover:text-white flex items-center justify-center transition-all shadow-md">
                     <span className="font-bold">ig</span>
                  </a>
               </div>
            </div>

            {/* Column 2 */}
            <div>
               <h3 className="text-xl font-bold text-white mb-6 relative inline-block pb-2">
                  Services
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#ffa800]"></span>
               </h3>
               <ul className="space-y-3">
                  <li><Link to="/services-1" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">Machine Learning</Link></li>
                  <li><Link to="/services-2" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">Computer Vision</Link></li>
                  <li><Link to="/services-details" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">NLP Models</Link></li>
                  <li><Link to="/services-1" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">Predictive Analytics</Link></li>
                  <li><Link to="/services-2" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">Data Engineering</Link></li>
               </ul>
            </div>

            {/* Column 3 */}
            <div>
               <h3 className="text-xl font-bold text-white mb-6 relative inline-block pb-2">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#ffa800]"></span>
               </h3>
               <ul className="space-y-3">
                  <li><Link to="/about" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">About Us</Link></li>
                  <li><Link to="/blog" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">Blog</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">Contact</Link></li>
                  <li><Link to="/faq" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">FAQ</Link></li>
                  <li><Link to="/shop" className="text-gray-400 hover:text-[#0CA59D] hover:pl-2 transition-all block">Shop</Link></li>
               </ul>
            </div>

            {/* Column 4 */}
            <div>
               <h3 className="text-xl font-bold text-white mb-6 relative inline-block pb-2">
                  Contacts
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#ffa800]"></span>
               </h3>
               <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-400 items-start">
                     <span className="text-[#0CA59D] mt-1">📍</span> 
                     <span>2750 Quadra Street<br/>Victoria, Canada</span>
                  </li>
                  <li className="flex gap-3 text-gray-400 items-center">
                     <span className="text-[#0CA59D]">📧</span> 
                     <a href="mailto:evolta@gmail.com" className="hover:text-[#ffa800] transition-colors">hello@evolta.com</a>
                  </li>
                  <li className="flex gap-3 text-gray-400 items-center">
                     <span className="text-[#0CA59D]">📞</span> 
                     <a href="tel:+44587154756" className="hover:text-[#ffa800] transition-colors">+44 587 154756</a>
                  </li>
               </ul>
            </div>
         </div>

         {/* Bottom Bar */}
         <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm relative z-10 text-gray-500 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Evolta is Proudly Owned by <span className="text-[#0CA59D] font-bold">EnvyTheme</span></p>
            <div className="space-x-4 flex items-center justify-center">
               <Link to="#" className="hover:text-[#ffa800] transition-colors">Privacy Policy</Link>
               <span>|</span>
               <Link to="#" className="hover:text-[#ffa800] transition-colors">Terms & Conditions</Link>
            </div>
         </div>
      </div>
      
      {/* Floating back to top button */}
      <button 
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#0CA59D] hover:bg-teal-600 text-white w-12 h-12 rounded-full shadow-[0_4px_14px_0_rgba(31,178,166,0.39)] flex items-center justify-center transition-all z-50 hover:-translate-y-1"
      >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
         </svg>
      </button>
    </footer>
  );
};

export default Footer;
