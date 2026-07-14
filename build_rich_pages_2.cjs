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

// 7. BlogGrid
pages['BlogGrid'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Our Blog')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3, 4, 5, 6].map((item) => (
             <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-60 bg-gray-200 relative overflow-hidden">
                   <div className="absolute top-4 left-4 bg-[#1fb2a6] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">Technology</div>
                   <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-8">
                   <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span><span className="text-[#ffa800] mr-1">✍</span> Admin</span>
                      <span><span className="text-[#ffa800] mr-1">📅</span> Aug 15, 2026</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 hover:text-[#1fb2a6] transition-colors">
                      <Link to="/blog-details">The Future of AI and Machine Learning in Daily Life</Link>
                   </h3>
                   <p className="text-gray-600 mb-6 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                   <Link to="/blog-details" className="text-[#1fb2a6] font-bold hover:text-[#ffa800] transition-colors flex items-center gap-2">
                      Read More <span>→</span>
                   </Link>
                </div>
             </div>
           ))}
        </div>
        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-2">
           <button className="w-10 h-10 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-[#1fb2a6] hover:text-white hover:border-[#1fb2a6] transition-all font-bold">1</button>
           <button className="w-10 h-10 rounded-md bg-[#1fb2a6] text-white border border-[#1fb2a6] font-bold shadow-md">2</button>
           <button className="w-10 h-10 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-[#1fb2a6] hover:text-white hover:border-[#1fb2a6] transition-all font-bold">3</button>
           <button className="w-10 h-10 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-[#1fb2a6] hover:text-white hover:border-[#1fb2a6] transition-all font-bold">→</button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default BlogGrid;
`;

// 8. BlogRightSidebar
pages['BlogRightSidebar'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

const BlogRightSidebar = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Blog Right Sidebar')}
      
      <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full flex flex-col lg:flex-row gap-12">
        {/* Main Feed */}
        <div className="lg:w-2/3 space-y-12">
           {[1, 2, 3].map((item) => (
             <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-80 bg-gray-200 relative overflow-hidden">
                   <div className="absolute top-6 left-6 bg-[#1fb2a6] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider z-10">AI & Tech</div>
                </div>
                <div className="p-8 md:p-10">
                   <div className="flex items-center gap-6 text-sm text-gray-500 mb-4 border-b pb-4">
                      <span className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-300"></div> Admin</span>
                      <span>📅 August 15, 2026</span>
                      <span>💬 3 Comments</span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hover:text-[#1fb2a6] transition-colors leading-tight">
                      <Link to="/blog-details">Making Peace With The Feast Or Famine Of Freelancing</Link>
                   </h3>
                   <p className="text-gray-600 mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   <Link to="/blog-details" className="inline-block bg-[#1fb2a6] hover:bg-[#169a8f] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all">
                      Read More
                   </Link>
                </div>
             </div>
           ))}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Search</h3>
              <div className="flex">
                 <input type="text" placeholder="Search..." className="w-full border border-r-0 rounded-l-md px-4 py-3 outline-none focus:border-[#1fb2a6]" />
                 <button className="bg-[#1fb2a6] hover:bg-[#169a8f] text-white px-4 py-3 rounded-r-md transition-colors">🔍</button>
              </div>
           </div>
           
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Categories</h3>
              <ul className="space-y-4 text-gray-600">
                 <li className="hover:text-[#1fb2a6] cursor-pointer flex items-center justify-between"><span className="flex items-center gap-2"><span className="text-[#ffa800]">▶</span> Technology</span> <span>(12)</span></li>
                 <li className="hover:text-[#1fb2a6] cursor-pointer flex items-center justify-between"><span className="flex items-center gap-2"><span className="text-[#ffa800]">▶</span> Business</span> <span>(8)</span></li>
                 <li className="hover:text-[#1fb2a6] cursor-pointer flex items-center justify-between"><span className="flex items-center gap-2"><span className="text-[#ffa800]">▶</span> Startups</span> <span>(5)</span></li>
                 <li className="hover:text-[#1fb2a6] cursor-pointer flex items-center justify-between"><span className="flex items-center gap-2"><span className="text-[#ffa800]">▶</span> AI Solutions</span> <span>(10)</span></li>
              </ul>
           </div>
           
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Recent Posts</h3>
              <div className="space-y-6">
                 {[1, 2, 3].map(item => (
                   <div key={item} className="flex gap-4 items-center group cursor-pointer">
                      <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"></div>
                      <div>
                         <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#1fb2a6] transition-colors leading-tight mb-2">The standard Lorem Ipsum passage, used since the 1500s</h4>
                         <p className="text-xs text-gray-500">August 12, 2026</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default BlogRightSidebar;
`;

// 9. BlogDetails
pages['BlogDetails'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const BlogDetails = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Blog Details')}
      
      <main className="flex-grow max-w-4xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12 border border-gray-100">
           <div className="h-[450px] bg-gray-200 relative"></div>
           <div className="p-8 md:p-12">
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 border-b pb-6">
                  <span className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-gray-300"></div> By Admin</span>
                  <span>📅 August 15, 2026</span>
                  <span>💬 3 Comments</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight">Making Peace With The Feast Or Famine Of Freelancing</h1>
              
              <div className="prose max-w-none text-gray-600 space-y-6">
                 <p className="text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                 <blockquote className="border-l-4 border-[#1fb2a6] bg-gray-50 p-6 my-8 italic text-xl font-medium text-gray-800">
                    "Artificial Intelligence is not about replacing human creativity; it's about amplifying it to solve problems we never thought possible."
                 </blockquote>
                 <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                 
                 <div className="grid grid-cols-2 gap-6 my-10">
                    <div className="h-64 bg-gray-200 rounded-lg"></div>
                    <div className="h-64 bg-gray-200 rounded-lg"></div>
                 </div>
                 
                 <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </div>
              
              <div className="mt-12 pt-8 border-t flex justify-between items-center">
                 <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-800">Tags:</span>
                    <div className="flex gap-2">
                       <span className="bg-gray-100 px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-[#1fb2a6] hover:text-white cursor-pointer transition-colors">AI</span>
                       <span className="bg-gray-100 px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-[#1fb2a6] hover:text-white cursor-pointer transition-colors">Tech</span>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    {/* Social icons placeholders */}
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#1fb2a6] hover:text-white cursor-pointer transition-colors">in</div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#1fb2a6] hover:text-white cursor-pointer transition-colors">tw</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12 border border-gray-100">
           <h3 className="text-2xl font-bold mb-8">3 Comments</h3>
           <div className="space-y-8">
              {[1, 2, 3].map(comment => (
                <div key={comment} className={\`flex gap-6 \${comment === 2 ? 'ml-12 border-l-2 border-gray-100 pl-6' : ''}\`}>
                   <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0"></div>
                   <div>
                      <div className="flex justify-between items-center mb-2">
                         <h4 className="font-bold text-gray-800">John Doe</h4>
                         <span className="text-sm text-gray-500">August 15, 2026 at 10:30 AM</span>
                      </div>
                      <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button className="text-[#1fb2a6] font-bold text-sm hover:text-[#ffa800] transition-colors">REPLY</button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Leave a Reply */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
           <h3 className="text-2xl font-bold mb-8">Leave A Reply</h3>
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" placeholder="Name" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#1fb2a6]" />
                 <input type="email" placeholder="Email" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#1fb2a6]" />
              </div>
              <input type="text" placeholder="Website" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#1fb2a6]" />
              <textarea rows="6" placeholder="Your Comment" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#1fb2a6]"></textarea>
              <div className="flex items-center gap-3">
                 <input type="checkbox" id="save-info" />
                 <label htmlFor="save-info" className="text-sm text-gray-600">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>
              <button type="button" className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-sm tracking-wide">
                 Post A Comment
              </button>
           </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default BlogDetails;
`;

// 10. FAQ
pages['FAQ'] = `import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      ${generateHero('Frequently Asked Questions')}
      
      <main className="flex-grow max-w-4xl mx-auto px-4 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How Can We Help You?</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our AI solutions and services.</p>
        </div>
        
        <div className="space-y-6">
           {[
             'What is Artificial Intelligence?',
             'How can AI help my business grow?',
             'Is my data secure with your machine learning models?',
             'Do you offer custom AI development?',
             'What industries do you serve?',
             'How much does a typical AI project cost?'
           ].map((q, i) => (
             <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group">
                <div className="p-6 flex justify-between items-center cursor-pointer group-hover:bg-gray-50 transition-colors">
                   <h3 className="font-bold text-gray-800 text-lg">{q}</h3>
                   <div className="w-8 h-8 rounded-full bg-[#1fb2a6]/10 text-[#1fb2a6] flex items-center justify-center font-bold text-xl group-hover:bg-[#1fb2a6] group-hover:text-white transition-colors">
                      {i === 0 ? '-' : '+'}
                   </div>
                </div>
                {i === 0 && (
                   <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   </div>
                )}
             </div>
           ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default FAQ;
`;

Object.keys(pages).forEach(p => {
  fs.writeFileSync(`src/pages/${p}.jsx`, pages[p]);
});
console.log('Batch 2 pages generated successfully!');
