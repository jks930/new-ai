import React from 'react';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-[#f4f7fb] relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0CA59D] opacity-[0.03] rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#ffa800] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-start gap-20 relative z-10">
        
        {/* Left Side: Structured Content Area */}
        <div className="lg:w-[55%]">
          
          <div className="flex items-center gap-3 mb-4">
             <span className="w-3 h-3 rounded-full bg-[#ffa800] animate-pulse"></span>
             <p className="text-[15px] font-bold tracking-widest text-[#0CA59D] uppercase">
               Why Choose Our AI
             </p>
          </div>
          
          <h2 className="text-[38px] md:text-[46px] font-extrabold text-[#0b1c3a] mb-8 tracking-tight leading-[1.15]">
            Transforming Enterprises with Advanced Cognitive Automation
          </h2>
          
          {/* Highlighted Text Box */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border-l-4 border-[#0CA59D] mb-8 relative group">
             <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-[#0CA59D]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
             </div>
             <p className="text-gray-700 leading-[1.9] text-[16px] relative z-10">
               In today's rapidly evolving digital landscape, artificial intelligence is no longer just a luxury—it is an absolute necessity for survival and growth. Our cutting-edge cognitive automation platforms are meticulously designed to seamlessly integrate into your existing enterprise architecture, bridging the gap between legacy systems and next-generation innovation. We leverage deep neural networks, advanced natural language processing (NLP), and highly sophisticated computer vision algorithms to extract actionable intelligence from unstructured data silos. By automating repetitive cognitive tasks, we empower your human workforce to focus on high-value, strategic initiatives that drive revenue and foster unprecedented creative problem-solving.
             </p>
          </div>

          <p className="text-gray-600 mb-12 leading-[1.9] text-[16px] px-2">
            Furthermore, our proprietary machine learning pipelines continuously adapt and evolve. They analyze historical trends, predict future market fluctuations, and proactively identify operational bottlenecks before they manifest into critical failures. Whether you are seeking to optimize your global supply chain logistics, revolutionize your customer support with empathetic conversational agents, or fortify your cybersecurity posture against emerging threats, our scalable AI ecosystem provides the robust foundation you need. Experience a paradigm shift in operational efficiency, achieve unprecedented cost reductions, and unlock new avenues for exponential scalability with our bespoke AI solutions.
          </p>
          
          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(12,165,157,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-50 group">
              <div className="w-14 h-14 rounded-xl bg-[#0CA59D]/10 flex items-center justify-center text-[#0CA59D] mb-5 group-hover:bg-[#0CA59D] group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h4 className="text-[19px] font-bold text-[#0b1c3a] mb-3">Predictive Scalability</h4>
              <p className="text-gray-500 leading-relaxed text-[15px]">Our AI dynamically provisions resources in real-time based on predictive traffic models, ensuring 99.99% uptime during peak loads while minimizing infrastructure costs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(255,168,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-50 group">
              <div className="w-14 h-14 rounded-xl bg-[#ffa800]/10 flex items-center justify-center text-[#ffa800] mb-5 group-hover:bg-[#ffa800] group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="text-[19px] font-bold text-[#0b1c3a] mb-3">Bank-Grade Security</h4>
              <p className="text-gray-500 leading-relaxed text-[15px]">Utilizing zero-trust architecture and federated learning protocols, we guarantee your proprietary data remains localized, encrypted, and impervious to external attacks.</p>
            </div>

          </div>
          
          <Link to="/about" className="inline-block bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-[18px] px-10 rounded-full shadow-[0_10px_30px_rgba(255,168,0,0.4)] transition-all text-[16px] hover:-translate-y-1 tracking-wide flex items-center gap-3 w-max group">
            Discover Our Architecture
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
        
        {/* Right Side: Dynamic Image/Graphics */}
        <div className="lg:w-[45%] relative mt-12 lg:mt-0">
          
          {/* Main Image Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group z-20">
             <div className="absolute inset-0 bg-[#0CA59D]/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 z-10"></div>
             <img src="/3.jpg.jpeg" alt="AI Technology in Action" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000" />
          </div>

          {/* Animated Background Rings */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[url('/circle-map.png')] bg-cover bg-center opacity-40 animate-[spin_30s_linear_infinite] z-0"></div>
          
          {/* Floating UI Glass Card */}
          <div className="absolute top-10 -right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white z-30 animate-float hidden md:flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-[#0CA59D] flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <div>
                <p className="text-[14px] text-gray-500 font-medium">System Uptime</p>
                <p className="text-[22px] font-bold text-[#0b1c3a]">99.99%</p>
             </div>
          </div>
          
          {/* Secondary Floating UI Glass Card */}
          <div className="absolute bottom-20 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white z-30 animate-[float_6s_ease-in-out_infinite_2s] hidden md:flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-[#ffa800]/20 flex items-center justify-center text-[#ffa800]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             <div>
                <p className="text-[13px] text-gray-500 font-medium">Processing Speed</p>
                <p className="text-[18px] font-bold text-[#0b1c3a]">&lt; 10ms</p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
