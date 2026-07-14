const fs = require('fs');

const generateHero = (title) => `
      {/* Page Header */}
      <div className="bg-[#1fb2a6] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">${title}</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>
`;

const pages = {};

// 11. ComingSoon
pages['ComingSoon'] = `import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#0b1c3a] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         {/* Abstract background pattern placeholder */}
         <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-[#1fb2a6] rounded-full mix-blend-multiply filter blur-[100px]"></div>
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
               <div className="text-4xl md:text-6xl font-extrabold text-[#1fb2a6] mb-2">08</div>
               <div className="text-gray-300 text-sm md:text-base uppercase tracking-wider">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 w-24 md:w-32 border border-white/10">
               <div className="text-4xl md:text-6xl font-extrabold text-[#1fb2a6] mb-2">45</div>
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
`;

// 12. Error404
pages['Error404'] = `import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

const Error404 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center p-4 pt-32">
         <div className="text-[150px] md:text-[250px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb2a6] to-[#ffa800] leading-none mb-4 drop-shadow-sm">
            404
         </div>
         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Oops! Page Not Found</h1>
         <p className="text-gray-600 max-w-lg mb-10 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
         </p>
         <Link to="/" className="bg-[#1fb2a6] hover:bg-[#169a8f] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg tracking-wide">
            Go Back Home
         </Link>
      </div>
    </div>
  );
};
export default Error404;
`;

// 13. ServicesStyle1
pages['ServicesStyle1'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesStyle1 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Our Services')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What We Offer</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive AI solutions to help automate and scale your business operations securely.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: 'Machine Learning', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3' },
             { title: 'Computer Vision', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
             { title: 'NLP Models', icon: 'M8 10h.01M12 10h.01' },
             { title: 'Predictive Analytics', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
             { title: 'AI Consulting', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
             { title: 'Data Engineering', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' },
           ].map((srv, i) => (
             <div key={i} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center text-[#1fb2a6] group-hover:bg-[#1fb2a6] group-hover:text-white transition-colors mb-6">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={srv.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 hover:text-[#1fb2a6] transition-colors"><Link to="/services-details">{srv.title}</Link></h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                <Link to="/services-details" className="text-[#ffa800] font-bold hover:text-orange-600 transition-colors flex items-center gap-2">
                   Read More <span>→</span>
                </Link>
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default ServicesStyle1;
`;

// 14. ServicesStyle2
pages['ServicesStyle2'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesStyle2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      ${generateHero('Our Services (Style 2)')}
      
      <main className="flex-grow w-full">
         {/* Service Block 1 */}
         <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2">
                  <div className="h-96 bg-gray-200 rounded-xl w-full"></div>
               </div>
               <div className="lg:w-1/2">
                  <div className="text-[#ffa800] font-bold uppercase tracking-wider mb-2">Service 01</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Machine Learning Models</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#1fb2a6]/20 text-[#1fb2a6] flex items-center justify-center text-sm font-bold">✓</span> Supervised Learning</li>
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#1fb2a6]/20 text-[#1fb2a6] flex items-center justify-center text-sm font-bold">✓</span> Unsupervised Learning</li>
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#1fb2a6]/20 text-[#1fb2a6] flex items-center justify-center text-sm font-bold">✓</span> Reinforcement Learning</li>
                  </ul>
                  <Link to="/services-details" className="inline-block bg-[#1fb2a6] hover:bg-[#169a8f] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all">Discover More</Link>
               </div>
            </div>
         </div>

         {/* Service Block 2 */}
         <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
               <div className="lg:w-1/2">
                  <div className="h-96 bg-gray-300 rounded-xl w-full"></div>
               </div>
               <div className="lg:w-1/2">
                  <div className="text-[#ffa800] font-bold uppercase tracking-wider mb-2">Service 02</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Computer Vision Systems</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#1fb2a6]/20 text-[#1fb2a6] flex items-center justify-center text-sm font-bold">✓</span> Image Recognition</li>
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#1fb2a6]/20 text-[#1fb2a6] flex items-center justify-center text-sm font-bold">✓</span> Object Detection</li>
                     <li className="flex items-center gap-3 text-gray-700"><span className="w-6 h-6 rounded-full bg-[#1fb2a6]/20 text-[#1fb2a6] flex items-center justify-center text-sm font-bold">✓</span> Video Analysis</li>
                  </ul>
                  <Link to="/services-details" className="inline-block bg-[#1fb2a6] hover:bg-[#169a8f] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all">Discover More</Link>
               </div>
            </div>
         </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default ServicesStyle2;
`;

// 15. ServicesDetails
pages['ServicesDetails'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesDetails = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Service Details')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="lg:w-1/3">
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">All Services</h3>
              <ul className="space-y-2">
                 <li><Link to="#" className="block px-4 py-3 bg-[#1fb2a6] text-white font-bold rounded-md">Machine Learning</Link></li>
                 <li><Link to="#" className="block px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#1fb2a6] font-bold rounded-md transition-colors">Computer Vision</Link></li>
                 <li><Link to="#" className="block px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#1fb2a6] font-bold rounded-md transition-colors">NLP Models</Link></li>
                 <li><Link to="#" className="block px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#1fb2a6] font-bold rounded-md transition-colors">Predictive Analytics</Link></li>
                 <li><Link to="#" className="block px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#1fb2a6] font-bold rounded-md transition-colors">Data Engineering</Link></li>
              </ul>
           </div>
           
           <div className="bg-[#0b1c3a] rounded-xl p-8 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6">Contact our support team to get a free consultation for your project.</p>
              <div className="text-[#ffa800] text-2xl font-bold mb-6">+1 (800) 123 4567</div>
              <Link to="/contact" className="inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all">Contact Us</Link>
           </div>
        </div>

        {/* Main Details */}
        <div className="lg:w-2/3">
           <div className="h-[400px] bg-gray-200 rounded-xl mb-8"></div>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Machine Learning Solutions</h2>
           <p className="text-gray-600 mb-6 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <p className="text-gray-600 mb-8 leading-relaxed text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           
           <h3 className="text-2xl font-bold text-gray-800 mb-6">How We Work</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm border-l-4 border-l-[#1fb2a6]">
                 <h4 className="text-xl font-bold mb-3">1. Data Collection</h4>
                 <p className="text-gray-600 text-sm">Gathering and cleaning massive datasets to train our robust AI models efficiently.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm border-l-4 border-l-[#ffa800]">
                 <h4 className="text-xl font-bold mb-3">2. Model Training</h4>
                 <p className="text-gray-600 text-sm">Utilizing deep neural networks to extract patterns and learn from the historical data.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm border-l-4 border-l-[#1fb2a6]">
                 <h4 className="text-xl font-bold mb-3">3. Validation</h4>
                 <p className="text-gray-600 text-sm">Rigorous testing methodologies to ensure high accuracy and zero bias in predictions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm border-l-4 border-l-[#ffa800]">
                 <h4 className="text-xl font-bold mb-3">4. Deployment</h4>
                 <p className="text-gray-600 text-sm">Deploying the trained models into production environments with API endpoints.</p>
              </div>
           </div>
           
           <p className="text-gray-600 leading-relaxed text-lg">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default ServicesDetails;
`;

Object.keys(pages).forEach(p => {
  fs.writeFileSync(`src/pages/${p}.jsx`, pages[p]);
});
console.log('Batch 3 pages generated successfully!');
