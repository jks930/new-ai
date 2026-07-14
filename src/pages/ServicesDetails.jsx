import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const ServicesDetails = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Service Details</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="lg:w-1/3">
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">All Services</h3>
              <ul className="space-y-2">
                 <li><Link to="#" className="block px-4 py-3 bg-[#0CA59D] text-white font-bold rounded-md">Machine Learning</Link></li>
                 <li><Link to="#" className="block px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#0CA59D] font-bold rounded-md transition-colors">Computer Vision</Link></li>
                 <li><Link to="#" className="block px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#0CA59D] font-bold rounded-md transition-colors">NLP Models</Link></li>
                 <li><Link to="#" className="block px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#0CA59D] font-bold rounded-md transition-colors">Predictive Analytics</Link></li>
                 <li><Link to="#" className="block px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#0CA59D] font-bold rounded-md transition-colors">Data Engineering</Link></li>
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
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm border-l-4 border-l-[#0CA59D]">
                 <h4 className="text-xl font-bold mb-3">1. Data Collection</h4>
                 <p className="text-gray-600 text-sm">Gathering and cleaning massive datasets to train our robust AI models efficiently.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm border-l-4 border-l-[#ffa800]">
                 <h4 className="text-xl font-bold mb-3">2. Model Training</h4>
                 <p className="text-gray-600 text-sm">Utilizing deep neural networks to extract patterns and learn from the historical data.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm border-l-4 border-l-[#0CA59D]">
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
