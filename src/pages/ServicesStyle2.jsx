import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesStyle2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9faff]">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-[54px] font-extrabold text-white relative z-10 tracking-tight">Enterprise Solutions</h1>
        <p className="text-white/80 mt-4 text-lg relative z-10 max-w-2xl mx-auto">Discover how our bespoke AI architectures drive monumental scale.</p>
        
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9faff"></path>
           </svg>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/circle-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>

      
      <main className="flex-grow w-full py-10">
         {/* Service Block 1 */}
         <div className="py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-[45%] relative group">
                  <div className="h-[400px] md:h-[500px] bg-gray-100 rounded-3xl w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10 border border-gray-100">
                     <img src="/3.jpg.jpeg" alt="Neural Networks Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-[#0CA59D]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0CA59D]/5 rounded-full blur-[40px] z-0 pointer-events-none"></div>
               </div>
               <div className="lg:w-[55%]">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="w-3 h-3 rounded-full bg-[#ffa800] animate-pulse"></span>
                     <p className="text-[14px] font-bold tracking-widest text-[#0CA59D] uppercase">Architecture 01</p>
                  </div>
                  <h2 className="text-[36px] md:text-[44px] font-extrabold text-[#0b1c3a] mb-6 tracking-tight leading-[1.2]">Adaptive Neural Processing Pipelines</h2>
                  <p className="text-gray-600 mb-8 leading-[1.9] text-[17px]">
                    Deploy robust, scalable neural networks tailored specifically to your enterprise data. Our adaptive pipelines utilize advanced unsupervised learning to continuously evolve and identify hidden correlations within massive, unstructured data lakes. We engineer infrastructure that doesn't just analyze the past, but probabilistically forecasts future market shifts with unprecedented accuracy.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                     <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-[#0b1c3a] font-bold text-[16px]">Deep Learning Mesh Networks</span>
                     </div>
                     <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-[#0b1c3a] font-bold text-[16px]">Predictive Behavioral Analytics</span>
                     </div>
                     <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-[#0b1c3a] font-bold text-[16px]">Unsupervised Anomaly Detection</span>
                     </div>
                     <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-[#0b1c3a] font-bold text-[16px]">Zero-Latency Big Data Processing</span>
                     </div>
                  </div>
                  
                  <Link to="/services-details" className="inline-flex items-center gap-3 bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-[18px] px-10 rounded-full shadow-[0_10px_25px_rgba(255,168,0,0.3)] transition-all transform hover:-translate-y-1 text-[16px] tracking-wide group">
                     Explore Architecture
                     <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
               </div>
            </div>
         </div>

         {/* Service Block 2 */}
         <div className="py-16 md:py-24 bg-white relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffa800]/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col lg:flex-row-reverse items-center gap-16 relative z-10">
               <div className="lg:w-[45%] relative group">
                  <div className="h-[400px] md:h-[500px] bg-gray-100 rounded-3xl w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
                     <img src="/1.jpg.jpeg" alt="Cognitive Computer Vision" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-[#ffa800]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4 animate-float border border-gray-50">
                     <div className="w-12 h-12 rounded-full bg-[#0CA59D] text-white flex items-center justify-center">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                     </div>
                     <div>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Vision Accuracy</p>
                        <p className="text-xl font-extrabold text-[#0b1c3a]">99.98%</p>
                     </div>
                  </div>
               </div>
               <div className="lg:w-[55%]">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="w-3 h-3 rounded-full bg-[#0CA59D] animate-pulse"></span>
                     <p className="text-[14px] font-bold tracking-widest text-[#ffa800] uppercase">Architecture 02</p>
                  </div>
                  <h2 className="text-[36px] md:text-[44px] font-extrabold text-[#0b1c3a] mb-6 tracking-tight leading-[1.2]">Spatial Cognitive Computer Vision</h2>
                  <p className="text-gray-600 mb-8 leading-[1.9] text-[17px]">
                    Revolutionize your operational awareness with our cutting-edge spatial recognition systems. From autonomous vehicle navigation to highly complex robotic manufacturing quality assurance, our computer vision algorithms process multiple video streams simultaneously in real-time, functioning flawlessly even in compromised environments.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                     <li className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#ffa800]/20 text-[#ffa800] flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                           <h4 className="text-[18px] font-bold text-[#0b1c3a]">Real-Time Object Segmentation</h4>
                           <p className="text-gray-500 text-[15px] mt-1">Isolate and track millions of distinct spatial vectors instantly.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#ffa800]/20 text-[#ffa800] flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                           <h4 className="text-[18px] font-bold text-[#0b1c3a]">Facial Recognition & Emotion Mapping</h4>
                           <p className="text-gray-500 text-[15px] mt-1">Extract deep biometric and psychological sentiment data securely.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#ffa800]/20 text-[#ffa800] flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                           <h4 className="text-[18px] font-bold text-[#0b1c3a]">Defect Detection Robotics</h4>
                           <p className="text-gray-500 text-[15px] mt-1">Achieve zero-defect manufacturing lines using microscopic vision logic.</p>
                        </div>
                     </li>
                  </ul>
                  
                  <Link to="/services-details" className="inline-flex items-center gap-3 bg-[#0CA59D] hover:bg-[#0b9089] text-white font-bold py-[18px] px-10 rounded-full shadow-[0_10px_25px_rgba(12,165,157,0.3)] transition-all transform hover:-translate-y-1 text-[16px] tracking-wide group">
                     View Case Studies
                     <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
               </div>
            </div>
         </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default ServicesStyle2;
