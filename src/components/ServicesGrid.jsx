import React from 'react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    {
      title: "Generative AI Models",
      desc: "Deploy bespoke large language models (LLMs) and generative adversarial networks (GANs) tailored to your industry syntax. From automated content generation and hyper-personalized marketing copy to synthesizing photorealistic product mockups, our generative AI solutions drastically accelerate your creative and communication pipelines, achieving output scales previously impossible for human teams alone.",
      icon: "/1_1.png"
    },
    {
      title: "Computer Vision Systems",
      desc: "Implement state-of-the-art computer vision systems capable of real-time object detection, facial recognition, and complex spatial analysis. Ideal for automated quality assurance on manufacturing lines, autonomous vehicle navigation, and intelligent retail surveillance, our algorithms are trained on massive datasets to achieve over 99.8% accuracy even in challenging lighting and environmental conditions.",
      icon: "/1_2.png"
    },
    {
      title: "Natural Language Processing",
      desc: "Revolutionize customer interaction with empathetic, context-aware NLP engines. Our models understand nuance, sarcasm, and multi-lingual intent, allowing for the deployment of highly sophisticated virtual assistants that resolve complex customer service inquiries instantly, extract critical sentiment data from millions of social media interactions, and translate global communications seamlessly.",
      icon: "/1_3.png"
    },
    {
      title: "Predictive Big Data Analytics",
      desc: "Turn terabytes of chaotic raw data into clear, actionable roadmaps. We engineer massive data lakes integrated with predictive machine learning algorithms that identify hidden correlations, forecast consumer demand with uncanny precision, optimize inventory routing globally, and provide your C-suite with interactive, real-time dashboards for visionary decision-making.",
      icon: "/2_1.png"
    },
    {
      title: "Robotic Process Automation",
      desc: "Eradicate human error and operational bottlenecks through intelligent Robotic Process Automation (RPA). We deploy autonomous software bots that navigate complex legacy systems, process millions of invoices, handle HR onboarding, and manage regulatory compliance reporting continuously, 24/7/365, without fatigue, freeing your human talent for creative endeavors.",
      icon: "/2_2.png"
    },
    {
      title: "Edge AI & IoT Integration",
      desc: "Push the boundaries of computation with our Edge AI solutions. By deploying lightweight, hyper-efficient machine learning models directly onto IoT devices, we eliminate cloud latency, ensure real-time decision-making for critical infrastructure (like smart grids and remote healthcare monitors), and drastically reduce bandwidth costs while maintaining strict data privacy protocols.",
      icon: "/2_3.png"
    }
  ];

  return (
    <section className="py-24 bg-[#0b1c3a] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/circle-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10 text-center">
        
        <div className="mb-20">
          <p className="text-[#0CA59D] font-bold tracking-widest uppercase mb-3">Enterprise Capabilities</p>
          <h2 className="text-[40px] md:text-[50px] font-extrabold text-white mb-6">Our Core AI Services</h2>
          <div className="w-24 h-1 bg-[#ffa800] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 max-w-4xl mx-auto text-[17px] leading-[1.9]">
            We do not just offer software; we provide a complete paradigm shift in how your business operates. Our comprehensive suite of enterprise-grade AI services covers every facet of digital transformation. By marrying deep technical expertise with strategic industry insights, we engineer custom solutions that are scalable, secure, and incredibly powerful. Explore our core services below and discover how we can architect the future of your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-300 group">
              <div className="w-[80px] h-[80px] rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/5 group-hover:border-[#0CA59D] transition-colors p-4">
                 <img src={srv.icon} alt={srv.title} className="w-full h-full object-contain filter invert brightness-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(12,165,157,0.8)] transition-all" />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-5 group-hover:text-[#0CA59D] transition-colors">{srv.title}</h3>
              <p className="text-gray-400 leading-[1.8] text-[15px] mb-8 group-hover:text-gray-300 transition-colors">
                {srv.desc}
              </p>
              <Link to="/services-details" className="text-[#ffa800] font-bold tracking-wide uppercase text-[14px] flex items-center gap-2 hover:text-white transition-colors">
                Explore Details
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
