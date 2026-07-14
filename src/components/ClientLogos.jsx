import React from 'react';

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20">
          
          {/* Smile Logo */}
          <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="relative inline-block font-sans font-light text-[38px] tracking-wide leading-none">
              <div className="absolute left-0 top-0 h-[110%] w-[1.4em] bg-[#89A4E8] -z-10 -mt-[2%]"></div>
              <span className="text-white relative z-10 pl-1">Sm</span><span className="text-[#D1D5DB]">ile</span>
            </div>
          </div>

          {/* Hipster Logo */}
          <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="font-serif text-[38px] text-[#A6AEB8] leading-none">
              Hipster
            </span>
            <span className="text-[10px] tracking-[0.2em] mt-2 text-[#D1D5DB] uppercase">
              DESIGN STUDIO
            </span>
          </div>

          {/* Urban Logo */}
          <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="font-sans font-extrabold text-[38px] tracking-tight text-[#A6AEB8] leading-none">
              Urban
            </span>
            <span className="text-[10px] tracking-[0.2em] mt-2 bg-[#DFE3E8] text-white rounded-sm px-2 font-bold uppercase">
              EATERY
            </span>
          </div>

          {/* Mockup Logo */}
          <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="font-sans font-light text-[38px] tracking-wide text-[#C7CDD4] leading-none">
              Mockup
            </span>
          </div>

          {/* Iconic Logo */}
          <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="font-sans font-black text-[38px] tracking-tighter text-[#A6AEB8] leading-none">
              Iconic
            </span>
            <span className="text-[10px] tracking-[0.2em] mt-2 text-[#D1D5DB] uppercase">
              MENSWEAR
            </span>
          </div>

          {/* RETRO Logo */}
          <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="font-sans font-black text-[38px] uppercase tracking-wide text-[#A6AEB8] leading-none">
              RETRO
            </span>
            <span className="text-[10px] tracking-[0.2em] mt-2 text-[#D1D5DB] uppercase">
              STUDIO
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
