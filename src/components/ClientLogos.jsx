import React from 'react';

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0b1c3a] border-y border-white/10 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0CA59D]/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffa800]/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 mb-10 text-center relative z-10">
         <p className="text-[#0CA59D] font-bold tracking-[0.2em] uppercase text-sm mb-2">Trusted By Innovators</p>
         <h2 className="text-white text-2xl md:text-3xl font-extrabold opacity-90">Powering the Next Generation of AI Infrastructures</h2>
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
        
        {/* Gradient Masks for smooth fading edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0b1c3a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0b1c3a] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll items-center">
          
          {/* Logo Set 1 */}
          <div className="flex w-1/2 justify-around items-center">
             
             {/* Quantum Core */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0CA59D] to-[#ffa800] flex items-center justify-center shadow-[0_0_20px_rgba(12,165,157,0.4)] group-hover:rotate-180 transition-transform duration-700">
                      <div className="w-4 h-4 bg-[#0b1c3a] rounded-sm transform rotate-45"></div>
                   </div>
                   <span className="font-extrabold text-[32px] tracking-tight text-white group-hover:text-[#0CA59D] transition-colors">Quantum<span className="font-light">Core</span></span>
                </div>
             </div>

             {/* NeuralMesh */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div className="flex items-center gap-2">
                   <svg className="w-12 h-12 text-[#ffa800] group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,168,0,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                   <span className="font-black text-[28px] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 group-hover:from-white group-hover:to-white transition-all">NEURALMESH</span>
                </div>
             </div>

             {/* Synthetica */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div className="relative">
                   <span className="font-serif italic text-[36px] text-white opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Synthetica</span>
                   <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#0CA59D] group-hover:w-full transition-all duration-500"></div>
                </div>
             </div>

             {/* DeepVision */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 border-4 border-[#0CA59D] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-[0_0_20px_rgba(12,165,157,0.3)]">
                      <div className="w-3 h-3 bg-[#ffa800] rounded-full animate-pulse"></div>
                   </div>
                   <span className="font-sans font-bold text-[34px] tracking-tighter text-white">Deep<span className="text-[#0CA59D]">Vision</span></span>
                </div>
             </div>

             {/* OmniData */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <span className="font-sans font-black text-[38px] uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 group-hover:from-[#ffa800] group-hover:to-[#ffc14d] transition-all">
                  OMNI<span className="font-light">DATA</span>
                </span>
             </div>
          </div>

          {/* Logo Set 2 (Duplicate for infinite scroll) */}
          <div className="flex w-1/2 justify-around items-center">
             
             {/* Quantum Core */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0CA59D] to-[#ffa800] flex items-center justify-center shadow-[0_0_20px_rgba(12,165,157,0.4)] group-hover:rotate-180 transition-transform duration-700">
                      <div className="w-4 h-4 bg-[#0b1c3a] rounded-sm transform rotate-45"></div>
                   </div>
                   <span className="font-extrabold text-[32px] tracking-tight text-white group-hover:text-[#0CA59D] transition-colors">Quantum<span className="font-light">Core</span></span>
                </div>
             </div>

             {/* NeuralMesh */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div className="flex items-center gap-2">
                   <svg className="w-12 h-12 text-[#ffa800] group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,168,0,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                   <span className="font-black text-[28px] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 group-hover:from-white group-hover:to-white transition-all">NEURALMESH</span>
                </div>
             </div>

             {/* Synthetica */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div className="relative">
                   <span className="font-serif italic text-[36px] text-white opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Synthetica</span>
                   <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#0CA59D] group-hover:w-full transition-all duration-500"></div>
                </div>
             </div>

             {/* DeepVision */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 border-4 border-[#0CA59D] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-[0_0_20px_rgba(12,165,157,0.3)]">
                      <div className="w-3 h-3 bg-[#ffa800] rounded-full animate-pulse"></div>
                   </div>
                   <span className="font-sans font-bold text-[34px] tracking-tighter text-white">Deep<span className="text-[#0CA59D]">Vision</span></span>
                </div>
             </div>

             {/* OmniData */}
             <div className="flex flex-col items-center justify-center cursor-pointer group">
                <span className="font-sans font-black text-[38px] uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 group-hover:from-[#ffa800] group-hover:to-[#ffc14d] transition-all">
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
