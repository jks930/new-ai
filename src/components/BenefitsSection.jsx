import React from 'react';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Massive Content Area */}
        <div className="lg:w-[55%]">
          <p className="text-[16px] font-bold tracking-widest text-[#0CA59D] uppercase mb-3">
            Why Choose Our AI
          </p>
          <h2 className="text-[40px] md:text-[48px] font-extrabold text-[#0b1c3a] mb-6 tracking-tight leading-[1.15]">
            Transforming Enterprises with Advanced Cognitive Automation
          </h2>
          <p className="text-gray-600 mb-6 leading-[1.9] text-[17px]">
            In today's rapidly evolving digital landscape, artificial intelligence is no longer just a luxury—it is an absolute necessity for survival and growth. Our cutting-edge cognitive automation platforms are meticulously designed to seamlessly integrate into your existing enterprise architecture, bridging the gap between legacy systems and next-generation innovation. We leverage deep neural networks, advanced natural language processing (NLP), and highly sophisticated computer vision algorithms to extract actionable intelligence from unstructured data silos. By automating repetitive cognitive tasks, we empower your human workforce to focus on high-value, strategic initiatives that drive revenue and foster unprecedented creative problem-solving.
          </p>
          <p className="text-gray-600 mb-10 leading-[1.9] text-[17px]">
            Furthermore, our proprietary machine learning pipelines continuously adapt and evolve. They analyze historical trends, predict future market fluctuations, and proactively identify operational bottlenecks before they manifest into critical failures. Whether you are seeking to optimize your global supply chain logistics, revolutionize your customer support with empathetic conversational agents, or fortify your cybersecurity posture against emerging threats, our scalable AI ecosystem provides the robust foundation you need. Experience a paradigm shift in operational efficiency, achieve unprecedented cost reductions, and unlock new avenues for exponential scalability with our bespoke AI solutions.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0CA59D]/10 flex items-center justify-center text-[#0CA59D]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-[#0b1c3a] mb-2">Predictive Scalability</h4>
                <p className="text-gray-500 leading-relaxed text-[15px]">Our AI dynamically provisions resources in real-time based on predictive traffic models, ensuring 99.99% uptime during peak loads while minimizing infrastructure costs during quiet periods.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffa800]/10 flex items-center justify-center text-[#ffa800]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-[#0b1c3a] mb-2">Bank-Grade Security</h4>
                <p className="text-gray-500 leading-relaxed text-[15px]">Utilizing zero-trust architecture and federated learning protocols, we guarantee that your proprietary data remains localized, encrypted, and impervious to external adversarial attacks.</p>
              </div>
            </div>
          </div>
          
          <Link to="/about" className="inline-block bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_8px_20px_rgba(255,168,0,0.4)] transition-all text-[16px] hover:-translate-y-1">
            Discover Our Architecture
          </Link>
        </div>
        
        {/* Right Side: Image/Graphics */}
        <div className="lg:w-[45%] relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-[#0CA59D]/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img src="/3.jpg.jpeg" alt="AI Technology in Action" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[url('/circle-map.png')] bg-cover bg-center opacity-30 animate-[spin_20s_linear_infinite] z-0"></div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
