import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Checkout</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
           {/* Billing Details */}
           <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 border-b pb-4">Billing Details</h2>
              <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <label className="block text-gray-600 text-sm mb-2">First Name *</label>
                       <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50" />
                    </div>
                    <div>
                       <label className="block text-gray-600 text-sm mb-2">Last Name *</label>
                       <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-2">Company Name (Optional)</label>
                    <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50" />
                 </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-2">Country / Region *</label>
                    <select className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50">
                       <option>United States</option>
                       <option>United Kingdom</option>
                       <option>Canada</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-2">Street Address *</label>
                    <input type="text" placeholder="House number and street name" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50 mb-3" />
                    <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50" />
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <label className="block text-gray-600 text-sm mb-2">Town / City *</label>
                       <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50" />
                    </div>
                    <div>
                       <label className="block text-gray-600 text-sm mb-2">ZIP Code *</label>
                       <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-2">Order Notes (Optional)</label>
                    <textarea rows="4" placeholder="Notes about your order, e.g. special notes for delivery." className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#0CA59D] bg-gray-50"></textarea>
                 </div>
              </form>
           </div>

           {/* Your Order */}
           <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#0CA59D]">
                 <h2 className="text-2xl font-bold mb-6 border-b pb-4">Your Order</h2>
                 <div className="space-y-4 mb-6 border-b pb-6 text-gray-600">
                    <div className="flex justify-between font-bold text-gray-800">
                       <span>Product</span>
                       <span>Total</span>
                    </div>
                    <div className="flex justify-between">
                       <span>AI Component 1 × 1</span>
                       <span>$49.00</span>
                    </div>
                    <div className="flex justify-between">
                       <span>AI Component 2 × 1</span>
                       <span>$49.00</span>
                    </div>
                 </div>
                 <div className="flex justify-between mb-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-800">$98.00</span>
                 </div>
                 <div className="flex justify-between mb-8 border-b pb-8">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-extrabold text-[#0CA59D]">$98.00</span>
                 </div>
                 
                 <div className="space-y-4 mb-8">
                    <label className="flex items-start gap-3 cursor-pointer">
                       <input type="radio" name="payment" className="mt-1" defaultChecked />
                       <div>
                          <p className="font-bold text-gray-800">Direct Bank Transfer</p>
                          <p className="text-sm text-gray-500 mt-1">Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                       </div>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                       <input type="radio" name="payment" />
                       <span className="font-bold text-gray-800">PayPal</span>
                    </label>
                 </div>

                 <button className="w-full bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 rounded-md shadow-md transition-all uppercase tracking-wide">
                    Place Order
                 </button>
              </div>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default Checkout;
