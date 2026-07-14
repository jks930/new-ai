import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0CA59D] w-full lg:h-[550px] pt-[130px] lg:pt-[70px] pb-[80px] lg:pb-0 flex items-center overflow-visible z-10">
      
      {/* Subtle floating animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Network Background Images (Precisely Placed) */}
      <img 
        src="/banner2.png" 
        alt="Network" 
        className="absolute left-[5%] lg:left-[10%] top-[15%] lg:top-[12%] opacity-80 pointer-events-none w-[100px] lg:w-[140px] z-0 animate-float-delayed hidden md:block" 
      />
      <img 
        src="/banner1.png" 
        alt="Network nodes" 
        className="absolute left-[35%] lg:left-[28%] bottom-[-2%] opacity-80 pointer-events-none w-[180px] lg:w-[240px] z-0 animate-float hidden md:block" 
      />
      
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-between w-full">
        
        {/* Left Content Area */}
        <div className="lg:w-[55%] text-white text-center lg:text-left pt-6 lg:pt-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5 mx-auto lg:mx-0">
             <span className="w-2 h-2 rounded-full bg-[#ffa800] animate-pulse"></span>
             <span className="text-[12px] md:text-[13px] font-bold tracking-widest text-[#ffa800] uppercase">Next-Gen Cognitive Intelligence</span>
          </div>
          
          <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-extrabold leading-[1.1] mb-5 tracking-tight text-white drop-shadow-lg">
             The Future of <br className="hidden lg:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ffa800]">Autonomous</span> AI.
          </h1>
          
          <p className="text-[15px] md:text-[17px] text-white/90 mb-8 max-w-[550px] leading-[1.8] font-medium mx-auto lg:mx-0 drop-shadow-sm">
            Deploy scalable, hyper-secure neural processing pipelines directly into your enterprise architecture. Automate the impossible, predict market shifts in real-time, and eradicate latency with our quantum-resistant edge computing models.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
             <Link to="/contact" className="w-full sm:w-auto bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_10px_25px_rgba(255,168,0,0.4)] transition-all text-[15px] transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
               Deploy Architecture
               <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </Link>
             <Link to="/services-1" className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-3.5 px-8 rounded-full transition-all text-[15px] hover:bg-white/10 flex items-center justify-center">
               View Documentation
             </Link>
          </div>
        </div>
        
        {/* Right Illustration Area */}
        <div className="lg:w-[45%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-10">
          <div className="relative w-full max-w-[450px] flex justify-center items-center">
             
             {/* Tech Rings (AI Animation) */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[380px] h-[250px] md:h-[380px] border border-[#ffffff]/20 rounded-full border-dashed animate-[spin_20s_linear_infinite] z-0"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[280px] h-[180px] md:h-[280px] border-[2px] border-[#ffa800]/30 rounded-full animate-[spin_15s_linear_infinite_reverse] z-0"></div>
             
             {/* Glowing Pulse Effect */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130px] md:w-[200px] h-[130px] md:h-[200px] bg-[#ffffff]/10 rounded-full blur-[30px] animate-[pulse_3s_ease-in-out_infinite] z-0"></div>
             
             {/* Floating Tech Dots */}
             <div className="absolute top-[20%] right-[10%] w-2.5 h-2.5 bg-[#ffa800] rounded-full shadow-[0_0_8px_#ffa800] animate-float z-10"></div>
             <div className="absolute bottom-[20%] left-[10%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] animate-float-delayed z-10"></div>
             
             {/* Main Robot Image */}
             <img 
                src="/banner-img1.png" 
                alt="AI Robot" 
                className="w-[75%] md:w-[85%] h-auto drop-shadow-2xl animate-float relative z-20" 
             />
          </div>
        </div>
      </div>
      
      {/* Bottom White Slant Divider */}
      <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] lg:h-[90px] block">
            <path d="M1200 0L0 120V120H1200V0z" fill="#ffffff"></path>
        </svg>
      </div>
      
    </section>
  );
};

export default HeroSection;
