import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const BlogDetails = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[100px] text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Blog Details</h1>
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9fafb"></path>
           </svg>
        </div>
      </div>

      
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
                 <blockquote className="border-l-4 border-[#0CA59D] bg-gray-50 p-6 my-8 italic text-xl font-medium text-gray-800">
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
                       <span className="bg-gray-100 px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-[#0CA59D] hover:text-white cursor-pointer transition-colors">AI</span>
                       <span className="bg-gray-100 px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-[#0CA59D] hover:text-white cursor-pointer transition-colors">Tech</span>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    {/* Social icons placeholders */}
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#0CA59D] hover:text-white cursor-pointer transition-colors">in</div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#0CA59D] hover:text-white cursor-pointer transition-colors">tw</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12 border border-gray-100">
           <h3 className="text-2xl font-bold mb-8">3 Comments</h3>
           <div className="space-y-8">
              {[1, 2, 3].map(comment => (
                <div key={comment} className={`flex gap-6 ${comment === 2 ? 'ml-12 border-l-2 border-gray-100 pl-6' : ''}`}>
                   <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0"></div>
                   <div>
                      <div className="flex justify-between items-center mb-2">
                         <h4 className="font-bold text-gray-800">John Doe</h4>
                         <span className="text-sm text-gray-500">August 15, 2026 at 10:30 AM</span>
                      </div>
                      <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button className="text-[#0CA59D] font-bold text-sm hover:text-[#ffa800] transition-colors">REPLY</button>
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
                 <input type="text" placeholder="Name" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D]" />
                 <input type="email" placeholder="Email" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D]" />
              </div>
              <input type="text" placeholder="Website" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D]" />
              <textarea rows="6" placeholder="Your Comment" className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 focus:outline-none focus:border-[#0CA59D]"></textarea>
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
