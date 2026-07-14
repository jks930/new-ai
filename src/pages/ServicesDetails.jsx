import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesDetails = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9faff]">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-[54px] font-extrabold text-white relative z-10 tracking-tight">Architecture Specification</h1>
        <p className="text-white/80 mt-4 text-lg relative z-10 max-w-2xl mx-auto">Deep dive into the technical capabilities of our Cognitive AI modules.</p>
        
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9faff"></path>
           </svg>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/circle-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>

      
      <main className="flex-grow max-w-[1400px] mx-auto px-4 lg:px-12 py-16 w-full flex flex-col lg:flex-row gap-12">
         
         {/* Main Content */}
         <div className="lg:w-2/3">
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group border border-gray-100">
               <img src="/3.jpg.jpeg" alt="Neural Network Core" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3a]/80 to-transparent"></div>
               <div className="absolute bottom-10 left-10 text-white z-10">
                  <span className="bg-[#ffa800] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg mb-4 inline-block">Enterprise Scale</span>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">Advanced Cognitive Intelligence Systems</h2>
               </div>
            </div>

            <h3 className="text-[32px] font-extrabold text-[#0b1c3a] mb-6">Redefining Data Synthesis</h3>
            <p className="text-gray-600 mb-8 leading-[1.9] text-[17px]">
               Our Advanced Cognitive Intelligence Systems represent the bleeding edge of enterprise-grade machine learning. Rather than simply categorizing structured data, our proprietary neural meshes are capable of executing complex deductive reasoning on highly unstructured, volatile data streams. Whether you are attempting to optimize a global logistics network or predict macroeconomic financial trends, our system functions as a digital cortex for your organization.
            </p>
            <p className="text-gray-600 mb-10 leading-[1.9] text-[17px]">
               By leveraging next-generation Transformer architectures and massive parallel GPU computing, we have reduced model inference latency to under 5 milliseconds. This allows for true real-time, autonomous decision-making that completely removes the bottleneck of human intervention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-[#0CA59D]/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-[#0CA59D]/10 text-[#0CA59D] flex items-center justify-center mb-6">
                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <h4 className="text-[22px] font-bold text-[#0b1c3a] mb-3">Hyper-Speed Processing</h4>
                  <p className="text-gray-500 leading-relaxed text-[15.5px]">Our highly optimized inference engines are designed to process terabytes of data with near-zero latency.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-[#0CA59D]/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-[#ffa800]/10 text-[#ffa800] flex items-center justify-center mb-6">
                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <h4 className="text-[22px] font-bold text-[#0b1c3a] mb-3">Military-Grade Security</h4>
                  <p className="text-gray-500 leading-relaxed text-[15.5px]">End-to-end homomorphic encryption ensures your proprietary data remains completely opaque, even during processing.</p>
               </div>
            </div>

            <h3 className="text-[32px] font-extrabold text-[#0b1c3a] mb-6">Strategic Implementation Timeline</h3>
            <p className="text-gray-600 mb-8 leading-[1.9] text-[17px]">
               Deploying enterprise AI is not merely a software installation; it is an architectural paradigm shift. Our deployment process is meticulously designed to ensure zero downtime for your existing legacy systems while the neural network learns your operational baseline.
            </p>

            {/* Timeline */}
            <div className="space-y-6 mb-12">
               <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#0CA59D] text-white flex items-center justify-center font-extrabold text-xl flex-shrink-0 shadow-lg">01</div>
                  <div>
                     <h4 className="text-[20px] font-bold text-[#0b1c3a] mb-2">Data Ingestion & Normalization</h4>
                     <p className="text-gray-500 text-[15px] leading-relaxed">Aggregating historical data from disparate silos into a unified, sanitized data lake for initial model training.</p>
                  </div>
               </div>
               <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#0CA59D] text-white flex items-center justify-center font-extrabold text-xl flex-shrink-0 shadow-lg">02</div>
                  <div>
                     <h4 className="text-[20px] font-bold text-[#0b1c3a] mb-2">Unsupervised Baseline Training</h4>
                     <p className="text-gray-500 text-[15px] leading-relaxed">Allowing the neural network to autonomously identify hidden correlations and establish an operational baseline.</p>
                  </div>
               </div>
               <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#ffa800] text-white flex items-center justify-center font-extrabold text-xl flex-shrink-0 shadow-lg">03</div>
                  <div>
                     <h4 className="text-[20px] font-bold text-[#0b1c3a] mb-2">Live Edge Deployment</h4>
                     <p className="text-gray-500 text-[15px] leading-relaxed">Migrating the validated model to edge servers for real-time inference and active decision-making capabilities.</p>
                  </div>
               </div>
            </div>
            
            <div className="bg-[#0b1c3a] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#0CA59D]/30 rounded-full blur-[60px]"></div>
               <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold mb-6">Ready to upgrade your enterprise infrastructure?</h3>
                  <p className="text-gray-400 mb-8 max-w-xl mx-auto">Contact our elite engineering team to schedule a technical architecture review and determine the optimal AI solution for your scale.</p>
                  <Link to="/contact" className="inline-flex items-center gap-3 bg-[#0CA59D] hover:bg-white hover:text-[#0b1c3a] text-white font-bold py-[18px] px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 text-[16px] tracking-wide group">
                     Schedule Technical Review
                     <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
               </div>
            </div>
         </div>

         {/* Sidebar */}
         <div className="lg:w-1/3 space-y-10">
            {/* Sidebar Categories */}
            <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 p-8">
               <h3 className="text-[22px] font-bold text-[#0b1c3a] mb-6 border-b border-gray-100 pb-4">Architecture Modules</h3>
               <ul className="space-y-3">
                  <li><Link to="#" className="flex justify-between items-center p-4 rounded-xl bg-[#0CA59D] text-white font-bold shadow-md"><span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> Cognitive Intelligence</span></Link></li>
                  <li><Link to="#" className="flex justify-between items-center p-4 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#0CA59D] font-semibold transition-colors border border-transparent hover:border-gray-100"><span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> Quantum Cryptography</span></Link></li>
                  <li><Link to="#" className="flex justify-between items-center p-4 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#0CA59D] font-semibold transition-colors border border-transparent hover:border-gray-100"><span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> Edge Computing</span></Link></li>
                  <li><Link to="#" className="flex justify-between items-center p-4 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#0CA59D] font-semibold transition-colors border border-transparent hover:border-gray-100"><span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> Generative Media</span></Link></li>
                  <li><Link to="#" className="flex justify-between items-center p-4 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#0CA59D] font-semibold transition-colors border border-transparent hover:border-gray-100"><span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> Natural Language</span></Link></li>
               </ul>
            </div>

            {/* Sidebar Brochure */}
            <div className="bg-[#ffa800] rounded-3xl shadow-[0_15px_40px_rgba(255,168,0,0.2)] p-10 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-[30px] transform group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="text-2xl font-bold mb-4 relative z-10">Download Architecture Docs</h3>
               <p className="text-white/80 mb-8 relative z-10">Get the full technical specifications of our machine learning models and API integration guidelines.</p>
               
               <div className="space-y-4 relative z-10">
                  <button className="w-full flex items-center justify-center gap-3 bg-white text-[#0b1c3a] font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                     <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8l4-4 4 4h-3v4h-2z"/></svg>
                     Technical Specs (PDF)
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 bg-white text-[#0b1c3a] font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                     <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8l4-4 4 4h-3v4h-2z"/></svg>
                     API Documentation (DOC)
                  </button>
               </div>
            </div>

            {/* Contact Help */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 text-center">
               <div className="w-20 h-20 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center mb-6 border border-gray-100">
                  <svg className="w-10 h-10 text-[#0CA59D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
               </div>
               <h4 className="text-[22px] font-bold text-[#0b1c3a] mb-2">Need Technical Help?</h4>
               <p className="text-gray-500 mb-6">Our senior engineers are available 24/7 for technical consultation.</p>
               <p className="text-[28px] font-extrabold text-[#0CA59D]">+1 (800) 123-4567</p>
               <p className="font-semibold text-gray-700 mt-2">engineering@evolta.ai</p>
            </div>
         </div>

      </main>
      
      <Footer />
    </div>
  );
};
export default ServicesDetails;
