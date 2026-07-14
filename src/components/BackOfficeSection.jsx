import React from 'react';

const BackOfficeSection = () => {
  const points = [
    "Fully Support",
    "Reliable & Cost Effective",
    "Dedicated Developers",
    "100% Customer Satisfaction"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Do what matters and we'll handle the back office routine.
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          {/* Backoffice Illustration Placeholder */}
          <div className="w-full relative h-[400px] flex items-center justify-center">
             <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3"></div>
             <div className="absolute inset-0 bg-white shadow-xl rounded-3xl z-10 flex flex-col items-center justify-center p-8">
                 {/* Chart drawing */}
                 <div className="w-full max-w-sm h-48 border-l-2 border-b-2 border-gray-300 relative flex items-end">
                     <svg className="w-full h-full text-blue-500 absolute bottom-0 left-0" viewBox="0 0 100 50" preserveAspectRatio="none">
                         <polyline points="0,40 20,30 40,35 60,15 80,20 100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <div className="absolute right-4 top-4 bg-yellow-400 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center text-xl">%</div>
                 </div>
                 {/* People avatars */}
                 <div className="flex gap-4 mt-8">
                     <div className="w-16 h-16 rounded-full bg-blue-200 border-4 border-white -mr-6 shadow-md"></div>
                     <div className="w-16 h-16 rounded-full bg-yellow-200 border-4 border-white shadow-md z-10"></div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackOfficeSection;
