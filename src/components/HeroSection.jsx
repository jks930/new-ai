import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0CA59D] w-full lg:h-[700px] pt-[140px] lg:pt-[80px] pb-[100px] lg:pb-0 flex items-center overflow-visible z-10">
      
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
        className="absolute left-[5%] lg:left-[10%] top-[15%] lg:top-[12%] opacity-80 pointer-events-none w-[120px] lg:w-[160px] z-0 animate-float-delayed hidden md:block" 
      />
      <img 
        src="/banner1.png" 
        alt="Network nodes" 
        className="absolute left-[35%] lg:left-[28%] bottom-[-2%] opacity-80 pointer-events-none w-[200px] lg:w-[280px] z-0 animate-float hidden md:block" 
      />
      
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-between w-full">
        
        {/* Left Content Area */}
        <div className="lg:w-[50%] text-white text-center lg:text-left pt-4 lg:pt-0">
          
          <p className="text-[16px] lg:text-[18px] font-medium tracking-wide mb-4 text-white/90">
            Artificial Intelligence (AI)
          </p>
          
          <h1 className="text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-sm">
             Work smarter, <br/>
             together.
          </h1>
          
          <p className="text-[16px] md:text-[17px] text-white/80 mb-10 max-w-[540px] leading-[1.8] font-normal mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          
          <div className="flex justify-center lg:justify-start">
             <Link to="/contact" className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_8px_20px_rgba(255,168,0,0.4)] transition-all text-[16px] hover:-translate-y-1">
               Get Started
             </Link>
          </div>
        </div>
        
        {/* Right Illustration Area */}
        <div className="lg:w-[50%] flex justify-center lg:justify-end mt-16 lg:mt-0 relative z-10">
          <div className="relative w-full max-w-[550px] flex justify-center items-center">
             
             {/* Tech Rings (AI Animation) */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] border border-[#ffffff]/20 rounded-full border-dashed animate-[spin_20s_linear_infinite] z-0"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[350px] h-[200px] md:h-[350px] border-[2px] border-[#ffa800]/30 rounded-full animate-[spin_15s_linear_infinite_reverse] z-0"></div>
             
             {/* Glowing Pulse Effect */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-[#ffffff]/10 rounded-full blur-[40px] animate-[pulse_3s_ease-in-out_infinite] z-0"></div>
             
             {/* Floating Tech Dots */}
             <div className="absolute top-[20%] right-[10%] w-3 h-3 bg-[#ffa800] rounded-full shadow-[0_0_10px_#ffa800] animate-float z-10"></div>
             <div className="absolute bottom-[20%] left-[10%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white] animate-float-delayed z-10"></div>
             
             {/* Main Robot Image */}
             <img 
                src="/banner-img1.png" 
                alt="AI Robot" 
                className="w-[85%] md:w-full h-auto drop-shadow-2xl animate-float relative z-20" 
             />
          </div>
        </div>
      </div>
      
      {/* Bottom White Slant Divider */}
      <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] lg:h-[120px] block">
            <path d="M1200 0L0 120V120H1200V0z" fill="#ffffff"></path>
        </svg>
      </div>
      
    </section>
  );
};

export default HeroSection;
