const fs = require('fs');
const pages = ['AboutUs','FeaturesPage','Team','PricingPage','Shop','SingleProduct','Cart','Checkout','BlogGrid','BlogRightSidebar','BlogDetails','Error404','ComingSoon','FAQ','ServicesStyle1','ServicesStyle2','ServicesDetails','Contact'];
pages.forEach(p => {
  fs.writeFileSync(`src/pages/${p}.jsx`, `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const ${p} = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="bg-primary pt-[180px] pb-[100px] text-center">
        <h1 className="text-4xl font-bold text-white">${p.replace(/([A-Z])/g, ' $1').trim()}</h1>
      </div>
      <main className="flex-grow p-12">
        <div className="max-w-7xl mx-auto bg-white p-8 shadow-sm rounded-md">
          <p className="text-gray-600">This is the ${p.replace(/([A-Z])/g, ' $1').trim()} placeholder page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ${p};
`);
});
console.log('Pages generated.');
