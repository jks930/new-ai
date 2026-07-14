const fs = require('fs');

const pagesToUpdate = [
  'FeaturesPage', 'Team', 'Shop', 'SingleProduct', 'Cart', 'Checkout', 
  'BlogGrid', 'BlogRightSidebar', 'BlogDetails', 'Error404', 'ComingSoon', 
  'FAQ', 'ServicesStyle1', 'ServicesStyle2', 'ServicesDetails'
];

pagesToUpdate.forEach(p => {
  const title = p.replace(/([A-Z])/g, ' $1').trim();
  
  const content = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const ${p} = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#1fb2a6] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">${title}</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center min-h-[400px] flex flex-col justify-center items-center">
           <div className="w-20 h-20 bg-[#1fb2a6]/10 text-[#1fb2a6] rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
           </div>
           <h2 className="text-2xl font-bold text-gray-800 mb-4">${title} Content</h2>
           <p className="text-gray-600 max-w-lg mx-auto mb-8">This page layout has been set up with the correct header, footer, and responsive spacing. You can now insert specific components like grids, forms, or articles here.</p>
           <button className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">Explore Features</button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ${p};
`;
  
  fs.writeFileSync(`src/pages/${p}.jsx`, content);
});
console.log('All remaining pages updated with hero banners and layouts.');
