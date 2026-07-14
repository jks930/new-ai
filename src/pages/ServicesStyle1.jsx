import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesStyle1 = () => {
  const services = [
    {
      title: "Natural Language Processing",
      desc: "Deploy sophisticated language models capable of understanding, summarizing, and generating complex corporate documents in milliseconds.",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      image: "/1.jpg.jpeg",
      link: "/services-details"
    },
    {
      title: "Predictive Market Analytics",
      desc: "Transform your raw enterprise data into highly accurate forecasting models that anticipate market shifts before they happen.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      image: "/3.jpg.jpeg",
      link: "/services-details"
    },
    {
      title: "Autonomous Robotics AI",
      desc: "Integrate highly advanced kinematic reinforcement learning into your manufacturing pipelines for zero-defect automation.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      image: "/1.jpg.jpeg",
      link: "/services-details"
    },
    {
      title: "Quantum Cryptography Security",
      desc: "Protect your proprietary datasets with our state-of-the-art AI threat detection and quantum-resistant encryption algorithms.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      image: "/3.jpg.jpeg",
      link: "/services-details"
    },
    {
      title: "Federated Edge Computing",
      desc: "Process complex neural network tasks directly on edge devices to ensure maximum data privacy and zero latency.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      image: "/1.jpg.jpeg",
      link: "/services-details"
    },
    {
      title: "Generative Media Synthesis",
      desc: "Create bespoke, photorealistic 3D assets and dynamic visual media instantly using our proprietary Generative Adversarial Networks.",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      image: "/3.jpg.jpeg",
      link: "/services-details"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9faff]">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-[54px] font-extrabold text-white relative z-10 tracking-tight">Core Competencies</h1>
        <p className="text-white/80 mt-4 text-lg relative z-10 max-w-2xl mx-auto">Explore our suite of enterprise-grade artificial intelligence solutions.</p>
        
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9faff"></path>
           </svg>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/circle-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>

      
      <main className="flex-grow w-full py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
           
           <div className="text-center mb-16">
              <p className="text-[14px] font-bold tracking-widest text-[#ffa800] uppercase mb-3">Enterprise AI Portfolio</p>
              <h2 className="text-[36px] md:text-[46px] font-extrabold text-[#0b1c3a] mb-5 tracking-tight leading-[1.2]">Transforming Complexity into Capability</h2>
              <div className="w-20 h-1.5 bg-[#0CA59D] mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-[17px] leading-[1.8]">
                 Our proprietary cognitive architectures are engineered to solve the most complex data challenges facing modern enterprises. From massive language modeling to quantum-resistant encryption, we deliver scalable intelligence.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                 <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(12,165,157,0.1)] transition-all duration-300 border border-gray-100 group flex flex-col transform hover:-translate-y-2 relative">
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0CA59D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>

                    {/* Image Header */}
                    <div className="h-56 overflow-hidden relative z-10">
                       <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-[#0b1c3a]/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       
                       {/* Floating Icon */}
                       <div className="absolute -bottom-8 left-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300">
                          <svg className="w-8 h-8 text-[#ffa800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                          </svg>
                       </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 pt-14 flex-grow flex flex-col relative z-10">
                       <h3 className="text-[24px] font-bold text-[#0b1c3a] mb-4 group-hover:text-[#0CA59D] transition-colors leading-[1.3]">{service.title}</h3>
                       <p className="text-gray-500 mb-8 leading-[1.8] text-[16px] flex-grow">{service.desc}</p>
                       
                       <Link to={service.link} className="inline-flex items-center gap-2 text-[#0b1c3a] font-bold hover:text-[#ffa800] transition-colors uppercase tracking-widest text-[13px] mt-auto group/btn">
                          View Specification
                          <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </Link>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default ServicesStyle1;
