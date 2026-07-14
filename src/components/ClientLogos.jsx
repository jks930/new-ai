import React from 'react';

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100 overflow-hidden relative">
      
      {/* Background Glows (Light Theme) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0CA59D]/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffa800]/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 mb-10 text-center relative z-10">
         <p className="text-[#0CA59D] font-bold tracking-[0.2em] uppercase text-sm mb-2">Trusted By Innovators</p>
         <h2 className="text-[#0b1c3a] text-2xl md:text-3xl font-extrabold opacity-90">Powering the Next Generation of AI Infrastructures</h2>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: 200%;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full overflow-hidden mt-10">
        
        {/* Gradient Masks for smooth fading edges (Light Theme) */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll items-center">
          
          {/* Logo Set 1 */}
          <div className="flex w-max justify-around items-center gap-12 md:gap-24 px-6 md:px-12">
             
             {/* Quantum Core */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#0CA59D] to-[#ffa800] flex items-center justify-center shadow-[0_5px_15px_rgba(12,165,157,0.2)] group-hover:rotate-180 transition-transform duration-700">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm transform rotate-45 shadow-sm"></div>
                   </div>
                   <span className="font-extrabold text-[24px] md:text-[32px] tracking-tight text-gray-800 group-hover:text-[#0CA59D] transition-colors">Quantum<span className="font-light text-gray-500">Core</span></span>
                </div>
             </div>

             {/* NeuralMesh */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <div className="flex items-center gap-2">
                   <svg className="w-10 h-10 md:w-12 md:h-12 text-[#ffa800] group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                   <span className="font-black text-[22px] md:text-[28px] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 group-hover:from-gray-700 group-hover:to-gray-900 transition-all">NEURALMESH</span>
                </div>
             </div>

             {/* Synthetica */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <div className="relative">
                   <span className="font-serif italic text-[28px] md:text-[36px] text-gray-800 opacity-70 group-hover:opacity-100 transition-opacity">Synthetica</span>
                   <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0CA59D] group-hover:w-full transition-all duration-500"></div>
                </div>
             </div>

             {/* DeepVision */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <div className="flex items-center gap-2 md:gap-3">
                   <div className="w-8 h-8 md:w-10 md:h-10 border-[3px] md:border-4 border-[#0CA59D] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-[0_4px_10px_rgba(12,165,157,0.15)]">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#ffa800] rounded-full animate-pulse shadow-sm"></div>
                   </div>
                   <span className="font-sans font-bold text-[26px] md:text-[34px] tracking-tighter text-gray-800">Deep<span className="text-[#0CA59D]">Vision</span></span>
                </div>
             </div>

             {/* OmniData */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <span className="font-sans font-black text-[30px] md:text-[38px] uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 group-hover:from-[#ffa800] group-hover:to-[#ffc14d] transition-all">
                  OMNI<span className="font-light">DATA</span>
                </span>
             </div>
          </div>

          {/* Logo Set 2 (Duplicate for infinite scroll) */}
          <div className="flex w-max justify-around items-center gap-12 md:gap-24 px-6 md:px-12">
             
             {/* Quantum Core */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#0CA59D] to-[#ffa800] flex items-center justify-center shadow-[0_5px_15px_rgba(12,165,157,0.2)] group-hover:rotate-180 transition-transform duration-700">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm transform rotate-45 shadow-sm"></div>
                   </div>
                   <span className="font-extrabold text-[24px] md:text-[32px] tracking-tight text-gray-800 group-hover:text-[#0CA59D] transition-colors">Quantum<span className="font-light text-gray-500">Core</span></span>
                </div>
             </div>

             {/* NeuralMesh */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <div className="flex items-center gap-2">
                   <svg className="w-10 h-10 md:w-12 md:h-12 text-[#ffa800] group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                   <span className="font-black text-[22px] md:text-[28px] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 group-hover:from-gray-700 group-hover:to-gray-900 transition-all">NEURALMESH</span>
                </div>
             </div>

             {/* Synthetica */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <div className="relative">
                   <span className="font-serif italic text-[28px] md:text-[36px] text-gray-800 opacity-70 group-hover:opacity-100 transition-opacity">Synthetica</span>
                   <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0CA59D] group-hover:w-full transition-all duration-500"></div>
                </div>
             </div>

             {/* DeepVision */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <div className="flex items-center gap-2 md:gap-3">
                   <div className="w-8 h-8 md:w-10 md:h-10 border-[3px] md:border-4 border-[#0CA59D] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-[0_4px_10px_rgba(12,165,157,0.15)]">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#ffa800] rounded-full animate-pulse shadow-sm"></div>
                   </div>
                   <span className="font-sans font-bold text-[26px] md:text-[34px] tracking-tighter text-gray-800">Deep<span className="text-[#0CA59D]">Vision</span></span>
                </div>
             </div>

             {/* OmniData */}
             <div className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0">
                <span className="font-sans font-black text-[30px] md:text-[38px] uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 group-hover:from-[#ffa800] group-hover:to-[#ffc14d] transition-all">
                  OMNI<span className="font-light">DATA</span>
                </span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
