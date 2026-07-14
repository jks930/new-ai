import React from 'react';
import { Link } from 'react-router-dom';

const RecentStorySection = () => {
  const stories = [
    {
      author: "Admin",
      date: "August 15, 2026",
      title: "How Deep Learning is Redefining Data Security",
      desc: "Explore how neural networks are proactively identifying and neutralizing cyber threats before they penetrate enterprise firewalls.",
      image: "/1.jpg.jpeg"
    },
    {
      author: "Admin",
      date: "August 18, 2026",
      title: "The Ethical Implications of Generative AI",
      desc: "A deep dive into how startups and tech giants are navigating the complex ethical landscape of automated content creation.",
      image: "/3.jpg.jpeg"
    },
    {
      author: "Admin",
      date: "August 20, 2026",
      title: "Machine Learning in Global Supply Chains",
      desc: "Discover how predictive analytics are optimizing global logistics, reducing waste, and preventing massive inventory shortages.",
      image: "/1.jpg.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0CA59D]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[15px] font-bold tracking-widest text-[#0CA59D] uppercase mb-3">Our Blog</p>
          <h2 className="text-[38px] md:text-[46px] font-extrabold text-[#0b1c3a] mb-5 tracking-tight">Latest Industry Insights</h2>
          <div className="w-20 h-1 bg-[#ffa800] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-[17px] leading-[1.8]">
            Stay updated with the latest trends, breakthroughs, and ethical discussions happening right now in the world of artificial intelligence and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="group cursor-pointer bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(12,165,157,0.1)] transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col transform hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="w-full h-64 overflow-hidden relative">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#0CA59D]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0CA59D] font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">
                   {story.date}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-sm text-[#ffa800] font-semibold mb-4 uppercase tracking-wider">
                  <span>By {story.author}</span>
                  <span className="text-gray-300">•</span>
                  <span>Technology</span>
                </div>
                
                <h3 className="text-[22px] font-bold text-[#0b1c3a] mb-4 group-hover:text-[#0CA59D] transition-colors leading-[1.4]">
                  <Link to="/blog-details">{story.title}</Link>
                </h3>
                
                <p className="text-gray-500 mb-6 leading-relaxed flex-grow text-[15px]">
                  {story.desc}
                </p>
                
                <Link to="/blog-details" className="text-[#0CA59D] font-bold hover:text-[#ffa800] transition-colors flex items-center gap-2 mt-auto w-max group/link">
                  Read Article
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentStorySection;
