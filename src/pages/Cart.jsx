import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Shopping Cart</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
           {/* Cart Items */}
           <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b">
                       <tr>
                          <th className="p-4 font-bold text-gray-700">Product</th>
                          <th className="p-4 font-bold text-gray-700">Price</th>
                          <th className="p-4 font-bold text-gray-700">Quantity</th>
                          <th className="p-4 font-bold text-gray-700">Total</th>
                          <th className="p-4 font-bold text-gray-700"></th>
                       </tr>
                    </thead>
                    <tbody className="divide-y">
                       {[1, 2].map((item) => (
                       <tr key={item}>
                          <td className="p-4 flex items-center gap-4">
                             <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0"></div>
                             <span className="font-bold text-gray-800">AI Component {item}</span>
                          </td>
                          <td className="p-4 text-gray-600">$49.00</td>
                          <td className="p-4">
                             <div className="flex border rounded-md w-max">
                                <button className="px-3 py-1 border-r hover:bg-gray-100">-</button>
                                <input type="text" value="1" className="w-12 text-center outline-none text-sm" readOnly />
                                <button className="px-3 py-1 border-l hover:bg-gray-100">+</button>
                             </div>
                          </td>
                          <td className="p-4 text-[#0CA59D] font-bold">$49.00</td>
                          <td className="p-4 text-red-500 cursor-pointer font-bold hover:text-red-700">✕</td>
                       </tr>
                       ))}
                    </tbody>
                 </table>
                 <div className="p-6 border-t flex justify-between items-center bg-gray-50">
                    <div className="flex gap-4">
                       <input type="text" placeholder="Coupon code" className="border rounded-md px-4 py-2 outline-none focus:border-[#0CA59D]" />
                       <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-bold transition-colors">Apply</button>
                    </div>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-bold transition-colors">Update Cart</button>
                 </div>
              </div>
           </div>

           {/* Cart Totals */}
           <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#0CA59D]">
                 <h2 className="text-2xl font-bold mb-6 border-b pb-4">Cart Totals</h2>
                 <div className="flex justify-between mb-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-800">$98.00</span>
                 </div>
                 <div className="flex justify-between mb-6 text-gray-600 border-b pb-6">
                    <span>Shipping</span>
                    <span className="font-bold text-gray-800">Flat rate: $10.00</span>
                 </div>
                 <div className="flex justify-between mb-8">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-extrabold text-[#0CA59D]">$108.00</span>
                 </div>
                 <Link to="/checkout" className="block text-center w-full bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 rounded-md shadow-md transition-all uppercase tracking-wide">
                    Proceed to Checkout
                 </Link>
              </div>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default Cart;
