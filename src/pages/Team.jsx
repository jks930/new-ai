import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: 'Steven Smith',
      role: 'Chief AI Scientist',
      bio: 'Leading our core algorithm development with over 15 years in deep learning.',
      image: '/author1.jpg.jpeg',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Lucy',
      role: 'Head of Data Engineering',
      bio: 'Expert in big data architecture, ensuring our models scale globally without latency.',
      image: '/author2.jpg.jpeg',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'James Anderson',
      role: 'Lead NLP Engineer',
      bio: 'Pioneer in natural language processing and conversational agent development.',
      image: '/author3.jpg.jpeg',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Amanda Clark',
      role: 'Computer Vision Lead',
      bio: 'Specialist in real-time object detection and spatial analytics for enterprise solutions.',
      image: '/author4.jpg.jpeg',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'John Doe',
      role: 'Robotics Automation Expert',
      bio: 'Bridging the gap between software intelligence and physical autonomous robotics.',
      image: '/author1.jpg.jpeg',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Jessica Brown',
      role: 'AI Ethics & Compliance',
      bio: 'Ensuring our AI systems remain transparent, unbiased, and regulatory compliant.',
      image: '/author2.jpg.jpeg',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Robert Miles',
      role: 'Senior MLOps Architect',
      bio: 'Streamlining our deployment pipelines from prototype to production at scale.',
      image: '/author3.jpg.jpeg',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Scott',
      role: 'Product Strategy Director',
      bio: 'Translating complex AI capabilities into tangible business value for our clients.',
      image: '/author4.jpg.jpeg',
      socials: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9faff]">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#0CA59D] pt-[180px] pb-[120px] text-center relative overflow-hidden">
        
        {/* Animated Background Decor */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/circle-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-[#ffa800] rounded-full shadow-[0_0_10px_#ffa800] animate-[pulse_3s_ease-in-out_infinite] z-0"></div>
        <div className="absolute bottom-[40%] right-[20%] w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white] animate-[bounce_4s_infinite] z-0"></div>

        <h1 className="text-4xl md:text-[54px] font-extrabold text-white relative z-10 tracking-tight">Our Brilliant Minds</h1>
        <p className="text-white/80 mt-4 text-lg relative z-10 max-w-2xl mx-auto">The visionaries and engineers driving the future of artificial intelligence.</p>
        
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
              <path d="M1200 0L0 120V120H1200V0z" fill="#f9faff"></path>
           </svg>
        </div>
      </div>

      
      <main className="flex-grow max-w-[1400px] mx-auto px-4 lg:px-12 py-24 w-full">
        <div className="text-center mb-20">
           <p className="text-[15px] font-bold tracking-widest text-[#0CA59D] uppercase mb-3">Meet The Experts</p>
           <h2 className="text-[38px] md:text-[46px] font-extrabold text-[#0b1c3a] mb-6 tracking-tight">The Team Behind the AI</h2>
           <div className="w-20 h-1 bg-[#ffa800] mx-auto mb-6 rounded-full"></div>
           <p className="text-gray-600 max-w-3xl mx-auto leading-[1.8] text-[17px]">
             Our interdisciplinary team consists of world-class data scientists, machine learning engineers, and industry strategists. We share a singular passion: to solve the world's most complex problems through cognitive automation.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
           {teamMembers.map((member, i) => (
             <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(12,165,157,0.15)] transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">
                
                {/* Image Container */}
                <div className="h-[280px] w-full overflow-hidden relative bg-gray-100">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   {/* Hover Overlay with Socials */}
                   <div className="absolute inset-0 bg-[#0CA59D]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a href={member.socials.linkedin} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0CA59D] hover:bg-[#ffa800] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                     </a>
                     <a href={member.socials.twitter} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0CA59D] hover:bg-[#ffa800] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                     </a>
                   </div>
                </div>
                
                {/* Content */}
                <div className="p-8 text-center flex-grow flex flex-col justify-between relative z-10 bg-white">
                   <div>
                     <h3 className="text-[22px] font-bold text-[#0b1c3a] mb-2 group-hover:text-[#0CA59D] transition-colors">{member.name}</h3>
                     <p className="text-[#ffa800] font-bold text-[13px] uppercase tracking-widest mb-4">
                       {member.role}
                     </p>
                   </div>
                   <p className="text-gray-500 leading-relaxed text-[15px]">
                     {member.bio}
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
