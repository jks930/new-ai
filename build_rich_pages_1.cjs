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

// 1. FeaturesPage
pages['FeaturesPage'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Our Features')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Evolta AI?</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">Discover the amazing features and tools we provide to supercharge your business.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {[
             { title: 'Machine Learning', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
             { title: 'Data Analytics', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
             { title: 'Predictive Modeling', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
             { title: 'Natural Language Processing', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
             { title: 'Computer Vision', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
             { title: 'Robotics & Automation', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
           ].map((item, i) => (
             <div key={i} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-50 flex flex-col items-center text-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-[#1fb2a6]/10 flex items-center justify-center text-[#1fb2a6] group-hover:bg-[#1fb2a6] group-hover:text-white transition-colors mb-6">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default FeaturesPage;
`;

// 2. Team
pages['Team'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Team = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Our Team')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet The Experts</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">Our team of data scientists and AI engineers are ready to help you succeed.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {['Steven Smith', 'Sarah Lucy', 'James Anderson', 'John Doe', 'Amanda Clark', 'Robert Miles', 'Jessica Brown', 'Michael Scott'].map((name, i) => (
             <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                   {/* Placeholder for actual images */}
                   <div className="absolute inset-0 bg-[#1fb2a6] opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center gap-4">
                     <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1fb2a6] hover:bg-[#ffa800] hover:text-white transition-colors">
                       <span className="font-bold">in</span>
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1fb2a6] hover:bg-[#ffa800] hover:text-white transition-colors">
                       <span className="font-bold">tw</span>
                     </a>
                   </div>
                </div>
                <div className="p-6 text-center">
                   <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
                   <p className="text-[#1fb2a6] font-medium text-sm uppercase tracking-wide">
                     {i % 3 === 0 ? 'Data Scientist' : i % 3 === 1 ? 'AI Engineer' : 'Lead Developer'}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default Team;
`;

// 3. Shop
pages['Shop'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Our Shop')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-16 w-full flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="lg:w-1/4">
           <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Search</h3>
              <input type="text" placeholder="Search products..." className="w-full border rounded px-4 py-2 focus:outline-none focus:border-[#1fb2a6]" />
           </div>
           <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Categories</h3>
              <ul className="space-y-3 text-gray-600">
                 <li className="hover:text-[#1fb2a6] cursor-pointer flex justify-between"><span>AI Software</span> <span>(12)</span></li>
                 <li className="hover:text-[#1fb2a6] cursor-pointer flex justify-between"><span>Hardware</span> <span>(8)</span></li>
                 <li className="hover:text-[#1fb2a6] cursor-pointer flex justify-between"><span>Books</span> <span>(5)</span></li>
                 <li className="hover:text-[#1fb2a6] cursor-pointer flex justify-between"><span>Courses</span> <span>(10)</span></li>
              </ul>
           </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
             <div key={item} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all border border-gray-100 p-4">
                <div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-3">
                      <Link to="/cart" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#ffa800] hover:text-white text-gray-800 transition-colors">🛒</Link>
                      <Link to="/product-details" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#ffa800] hover:text-white text-gray-800 transition-colors">👁</Link>
                   </div>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                   <Link to="/product-details" className="hover:text-[#1fb2a6]">AI Smart Gadget {item}</Link>
                </h3>
                <div className="flex justify-between items-center">
                   <span className="text-[#1fb2a6] font-bold text-lg">$99.00</span>
                   <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default Shop;
`;

// 4. SingleProduct
pages['SingleProduct'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const SingleProduct = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Product Details')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row gap-12">
           {/* Image Gallery */}
           <div className="lg:w-1/2">
              <div className="h-[400px] bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">Main Product Image</div>
              <div className="grid grid-cols-4 gap-4">
                 <div className="h-24 bg-gray-100 rounded-lg border-2 border-[#1fb2a6] cursor-pointer"></div>
                 <div className="h-24 bg-gray-100 rounded-lg cursor-pointer"></div>
                 <div className="h-24 bg-gray-100 rounded-lg cursor-pointer"></div>
                 <div className="h-24 bg-gray-100 rounded-lg cursor-pointer"></div>
              </div>
           </div>

           {/* Details */}
           <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">AI Smart Vision Camera</h2>
              <div className="flex items-center gap-4 mb-4">
                 <div className="text-yellow-400">★★★★★</div>
                 <span className="text-gray-500 text-sm">(24 Customer Reviews)</span>
              </div>
              <div className="text-3xl font-extrabold text-[#1fb2a6] mb-6">$149.00</div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 A comprehensive solution for real-time computer vision tasks. Equipped with the latest neural processing unit to handle complex AI models directly on the edge. Perfect for robotics and automation projects.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                 <div className="flex border rounded-md">
                    <button className="px-4 py-2 border-r hover:bg-gray-100">-</button>
                    <input type="text" value="1" className="w-16 text-center outline-none" readOnly />
                    <button className="px-4 py-2 border-l hover:bg-gray-100">+</button>
                 </div>
                 <button className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all flex-grow text-center">
                    Add to Cart
                 </button>
              </div>
              
              <ul className="text-sm text-gray-600 space-y-2 border-t pt-6">
                 <li><span className="font-bold text-gray-800">SKU:</span> AI-VC-001</li>
                 <li><span className="font-bold text-gray-800">Category:</span> Hardware, AI</li>
                 <li><span className="font-bold text-gray-800">Tags:</span> Vision, Edge Computing, Camera</li>
              </ul>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default SingleProduct;
`;

// 5. Cart
pages['Cart'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Shopping Cart')}
      
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
                          <td className="p-4 text-[#1fb2a6] font-bold">$49.00</td>
                          <td className="p-4 text-red-500 cursor-pointer font-bold hover:text-red-700">✕</td>
                       </tr>
                       ))}
                    </tbody>
                 </table>
                 <div className="p-6 border-t flex justify-between items-center bg-gray-50">
                    <div className="flex gap-4">
                       <input type="text" placeholder="Coupon code" className="border rounded-md px-4 py-2 outline-none focus:border-[#1fb2a6]" />
                       <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-bold transition-colors">Apply</button>
                    </div>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-bold transition-colors">Update Cart</button>
                 </div>
              </div>
           </div>

           {/* Cart Totals */}
           <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#1fb2a6]">
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
                    <span className="text-2xl font-extrabold text-[#1fb2a6]">$108.00</span>
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
`;

// 6. Checkout
pages['Checkout'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Checkout')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
           {/* Billing Details */}
           <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 border-b pb-4">Billing Details</h2>
              <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <label className="block text-gray-600 text-sm mb-2">First Name *</label>
                       <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50" />
                    </div>
                    <div>
                       <label className="block text-gray-600 text-sm mb-2">Last Name *</label>
                       <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-2">Company Name (Optional)</label>
                    <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50" />
                 </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-2">Country / Region *</label>
                    <select className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50">
                       <option>United States</option>
                       <option>United Kingdom</option>
                       <option>Canada</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-2">Street Address *</label>
                    <input type="text" placeholder="House number and street name" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50 mb-3" />
                    <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50" />
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <label className="block text-gray-600 text-sm mb-2">Town / City *</label>
                       <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50" />
                    </div>
                    <div>
                       <label className="block text-gray-600 text-sm mb-2">ZIP Code *</label>
                       <input type="text" className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-2">Order Notes (Optional)</label>
                    <textarea rows="4" placeholder="Notes about your order, e.g. special notes for delivery." className="w-full border rounded-md px-4 py-3 outline-none focus:border-[#1fb2a6] bg-gray-50"></textarea>
                 </div>
              </form>
           </div>

           {/* Your Order */}
           <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#1fb2a6]">
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
                    <span className="text-2xl font-extrabold text-[#1fb2a6]">$98.00</span>
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
`;

Object.keys(pages).forEach(p => {
  fs.writeFileSync(`src/pages/${p}.jsx`, pages[p]);
});
console.log('Batch 1 pages generated successfully!');
