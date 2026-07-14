import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#0b1c3a] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         {/* Abstract background pattern placeholder */}
         <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-[#0CA59D] rounded-full mix-blend-multiply filter blur-[100px]"></div>
         <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-[#ffa800] rounded-full mix-blend-multiply filter blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-3xl mx-auto">
         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Coming Soon</h1>
         <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            We are currently working hard to launch our new website. We'll be here soon. Subscribe to be notified!
         </p>
         
         <div className="flex justify-center gap-4 md:gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 w-24 md:w-32 border border-white/10">
               <div className="text-4xl md:text-6xl font-extrabold text-[#ffa800] mb-2">14</div>
               <div className="text-gray-300 text-sm md:text-base uppercase tracking-wider">Days</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 w-24 md:w-32 border border-white/10">
               <div className="text-4xl md:text-6xl font-extrabold text-[#0CA59D] mb-2">08</div>
               <div className="text-gray-300 text-sm md:text-base uppercase tracking-wider">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 w-24 md:w-32 border border-white/10">
               <div className="text-4xl md:text-6xl font-extrabold text-[#0CA59D] mb-2">45</div>
               <div className="text-gray-300 text-sm md:text-base uppercase tracking-wider">Mins</div>
            </div>
         </div>
         
         <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-grow bg-white/10 border border-white/20 text-white rounded-full px-6 py-4 outline-none focus:border-[#ffa800] transition-colors placeholder-gray-400" />
            <button className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all whitespace-nowrap">Notify Me</button>
         </form>
         
         <div className="mt-16">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors underline">← Back to Home</Link>
         </div>
      </div>
    </div>
  );
};
export default ComingSoon;
