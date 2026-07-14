import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Newsletter Form */}
        <div className="w-full md:w-5/12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Signup to the free newsletter</h2>
          <form className="flex w-full">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-gray-50 border border-gray-200 rounded-l-md px-6 py-4 outline-none focus:border-primary transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-secondary hover:bg-secondary-hover text-white font-bold px-8 py-4 rounded-r-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle: Illustration (Customer Support Agent) */}
        <div className="hidden md:flex w-2/12 justify-center relative">
           {/* Simple SVG placeholder for the agent illustration */}
           <div className="w-48 h-48 relative -mt-12">
              <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                 {/* Body */}
                 <path d="M70,200 L70,120 C70,100 130,100 130,120 L130,200 Z" fill="#1d4ed8" />
                 {/* Face */}
                 <circle cx="100" cy="70" r="30" fill="#fcd34d" />
                 {/* Hair */}
                 <path d="M70,70 C70,40 130,40 130,70 L130,80 C130,80 100,50 70,80 Z" fill="#451a03" />
                 {/* Headset */}
                 <path d="M70,70 A30,30 0 0,1 130,70" fill="none" stroke="#1f2937" strokeWidth="4" />
                 <circle cx="65" cy="75" r="8" fill="#1f2937" />
                 <circle cx="135" cy="75" r="8" fill="#1f2937" />
                 {/* Mic */}
                 <path d="M65,75 L80,90" fill="none" stroke="#1f2937" strokeWidth="3" />
                 {/* 24 Hours Badge */}
                 <circle cx="50" cy="50" r="20" fill="white" stroke="#3b82f6" strokeWidth="2" />
                 <text x="50" y="55" fontSize="16" fontWeight="bold" fill="#3b82f6" textAnchor="middle">24</text>
                 <text x="50" y="65" fontSize="8" fill="#3b82f6" textAnchor="middle">HOURS</text>
              </svg>
           </div>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full md:w-4/12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Have any questions?</h2>
          <p className="text-3xl font-bold text-secondary">Call: +440458954</p>
        </div>
        
      </div>
    </section>
  );
};

export default NewsletterSection;
