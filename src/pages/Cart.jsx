import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9faff]">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-[54px] font-extrabold text-white relative z-10 tracking-tight">Enterprise Cart</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9faff"></path>
           </svg>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/circle-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>

      
      <main className="flex-grow max-w-[1400px] mx-auto px-4 lg:px-12 py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
           {/* Cart Items */}
           <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden border border-gray-100">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                       <thead className="bg-[#f9faff] border-b border-gray-100">
                          <tr>
                             <th className="p-6 font-bold text-[#0b1c3a] uppercase tracking-widest text-sm">Enterprise License</th>
                             <th className="p-6 font-bold text-[#0b1c3a] uppercase tracking-widest text-sm">Rate</th>
                             <th className="p-6 font-bold text-[#0b1c3a] uppercase tracking-widest text-sm">Nodes</th>
                             <th className="p-6 font-bold text-[#0b1c3a] uppercase tracking-widest text-sm">Total</th>
                             <th className="p-6 font-bold text-[#0b1c3a] uppercase tracking-widest text-sm"></th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100">
                          <tr className="hover:bg-gray-50/50 transition-colors">
                             <td className="p-6 flex items-center gap-6">
                                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex-shrink-0 flex items-center justify-center border border-gray-100 p-2 shadow-sm">
                                   <img src="/2.png" alt="Quantum Neural Processor" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                   <span className="font-extrabold text-[#0b1c3a] text-lg block mb-1">Quantum Neural Processor</span>
                                   <span className="text-[#0CA59D] text-xs font-bold bg-[#0CA59D]/10 px-3 py-1 rounded-full uppercase tracking-wider">Enterprise Tier</span>
                                </div>
                             </td>
                             <td className="p-6 text-gray-600 font-medium">$9,999.00</td>
                             <td className="p-6">
                                <div className="flex border-2 border-gray-100 rounded-full w-max bg-white">
                                   <button className="px-4 py-2 hover:text-[#0CA59D] font-bold transition-colors">-</button>
                                   <input type="text" value="2" className="w-10 text-center outline-none text-[15px] font-bold bg-transparent" readOnly />
                                   <button className="px-4 py-2 hover:text-[#0CA59D] font-bold transition-colors">+</button>
                                </div>
                             </td>
                             <td className="p-6 text-[#0CA59D] font-extrabold text-lg">$19,998.00</td>
                             <td className="p-6 text-center">
                                <button className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm">
                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                             </td>
                          </tr>
                          
                          <tr className="hover:bg-gray-50/50 transition-colors">
                             <td className="p-6 flex items-center gap-6">
                                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex-shrink-0 flex items-center justify-center border border-gray-100 p-2 shadow-sm">
                                   <img src="/3_1.png" alt="Vision Analytics Suite" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                   <span className="font-extrabold text-[#0b1c3a] text-lg block mb-1">Vision Analytics Suite</span>
                                   <span className="text-[#ffa800] text-xs font-bold bg-[#ffa800]/10 px-3 py-1 rounded-full uppercase tracking-wider">Standard Tier</span>
                                </div>
                             </td>
                             <td className="p-6 text-gray-600 font-medium">$4,500.00</td>
                             <td className="p-6">
                                <div className="flex border-2 border-gray-100 rounded-full w-max bg-white">
                                   <button className="px-4 py-2 hover:text-[#0CA59D] font-bold transition-colors">-</button>
                                   <input type="text" value="1" className="w-10 text-center outline-none text-[15px] font-bold bg-transparent" readOnly />
                                   <button className="px-4 py-2 hover:text-[#0CA59D] font-bold transition-colors">+</button>
                                </div>
                             </td>
                             <td className="p-6 text-[#0CA59D] font-extrabold text-lg">$4,500.00</td>
                             <td className="p-6 text-center">
                                <button className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm">
                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                             </td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
                 
                 {/* Coupon & Update */}
                 <div className="p-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center bg-[#f9faff] gap-6">
                    <div className="flex gap-4 w-full md:w-auto">
                       <input type="text" placeholder="Partner Code" className="border border-gray-200 rounded-full px-6 py-3.5 outline-none focus:border-[#0CA59D] focus:ring-2 focus:ring-[#0CA59D]/20 transition-all w-full md:w-64" />
                       <button className="bg-[#0b1c3a] hover:bg-[#1a2d52] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg">Apply</button>
                    </div>
                    <button className="bg-white border-2 border-gray-200 hover:border-[#0CA59D] text-[#0b1c3a] hover:text-[#0CA59D] px-8 py-3.5 rounded-full font-bold transition-all w-full md:w-auto shadow-sm">Update Infrastructure</button>
                 </div>
              </div>
           </div>

           {/* Cart Totals */}
           <div className="lg:w-1/3">
              <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-10 border-t-[6px] border-[#0CA59D]">
                 <h2 className="text-2xl font-extrabold text-[#0b1c3a] mb-8 border-b border-gray-100 pb-6">License Summary</h2>
                 <div className="flex justify-between mb-5 text-gray-600 text-[16px]">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#0b1c3a]">$24,498.00</span>
                 </div>
                 <div className="flex justify-between mb-8 text-gray-600 border-b border-gray-100 pb-8 text-[16px]">
                    <span>Setup & Integration</span>
                    <span className="font-bold text-[#0b1c3a]">Complimentary</span>
                 </div>
                 <div className="flex justify-between mb-10">
                    <span className="text-xl font-bold text-[#0b1c3a]">Total <span className="block text-sm text-gray-400 font-medium mt-1">Billed Monthly</span></span>
                    <span className="text-[32px] font-extrabold text-[#0CA59D] leading-none">$24,498.00</span>
                 </div>
                 <Link to="/checkout" className="flex items-center justify-center gap-3 w-full bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-5 rounded-full shadow-[0_10px_25px_rgba(255,168,0,0.3)] transition-all uppercase tracking-widest text-[14px] transform hover:-translate-y-1 group">
                    Initialize Deployment
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </Link>
                 
                 {/* Secure checkout badges */}
                 <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-6 opacity-60">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                       AES-256
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                       Verified
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default Cart;
