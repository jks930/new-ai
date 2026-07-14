const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');

const benefitsCode = `import React from 'react';
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
\`;

const servicesCode = \`import React from 'react';
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
\`;

const backOfficeCode = \`import React from 'react';

const BackOfficeSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Images */}
        <div className="lg:w-[45%] relative">
           <img src="/3.jpg.jpeg" alt="Back office operations" className="w-full h-auto rounded-[2rem] shadow-2xl relative z-20" />
           <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#0CA59D]/10 rounded-full z-10 animate-pulse"></div>
           <div className="absolute top-10 -left-10 w-32 h-32 bg-[#ffa800]/10 rounded-full z-10 animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>

        {/* Right Side: Massive Content */}
        <div className="lg:w-[55%]">
           <p className="text-[16px] font-bold tracking-widest text-[#ffa800] uppercase mb-3">
             Operational Excellence
           </p>
           <h2 className="text-[40px] md:text-[48px] font-extrabold text-[#0b1c3a] mb-6 tracking-tight leading-[1.15]">
             Automating the Back-Office: A Symphony of Efficiency
           </h2>
           <p className="text-gray-600 mb-6 leading-[1.9] text-[17px]">
             The modern enterprise is often weighed down by the invisible anchor of back-office inefficiencies. Manual data entry, endless compliance checks, convoluted supply chain logistics, and tedious invoice processing consume thousands of human hours and millions of dollars annually. We bring a definitive end to this archaic approach. By deploying advanced algorithmic pipelines and sophisticated optical character recognition (OCR) enhanced by contextual language models, we completely digitize and automate your entire back-office infrastructure. What once took days of human labor is now accomplished in milliseconds with zero margin for error.
           </p>
           <p className="text-gray-600 mb-6 leading-[1.9] text-[17px]">
             Imagine a financial department where ledgers balance themselves autonomously, anomalies are flagged instantly using unsupervised anomaly detection networks, and predictive cash-flow forecasting allows CFOs to make strategic investments with absolute confidence. Imagine an HR department where AI screens thousands of resumes, conducts initial interactive interviews via conversational bots, and personalizes the onboarding experience for every single employee, drastically reducing turnover rates and boosting morale from day one.
           </p>
           <p className="text-gray-600 mb-8 leading-[1.9] text-[17px]">
             This is not a distant vision of the future; this is the reality we are deploying for our enterprise partners today. We ensure seamless API integrations with major ERP systems like SAP, Oracle, and Salesforce, guaranteeing that our AI engines act as the intelligent central nervous system of your organization, coordinating disparate departments into a unified, frictionless, and incredibly profitable operation.
           </p>

           <ul className="space-y-4">
             <li className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center flex-shrink-0">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
               </div>
               <span className="text-[#0b1c3a] font-bold text-[18px]">100% Automated Invoice & Payroll Processing</span>
             </li>
             <li className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center flex-shrink-0">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
               </div>
               <span className="text-[#0b1c3a] font-bold text-[18px]">Real-Time Regulatory & Compliance Monitoring</span>
             </li>
             <li className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full bg-[#0CA59D]/20 text-[#0CA59D] flex items-center justify-center flex-shrink-0">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
               </div>
               <span className="text-[#0b1c3a] font-bold text-[18px]">Zero-Latency Supply Chain Optimization</span>
             </li>
           </ul>
        </div>
      </div>
    </section>
  );
};

export default BackOfficeSection;
\`;

fs.writeFileSync(path.join(srcDir, 'BenefitsSection.jsx'), benefitsCode);
fs.writeFileSync(path.join(srcDir, 'ServicesGrid.jsx'), servicesCode);
fs.writeFileSync(path.join(srcDir, 'BackOfficeSection.jsx'), backOfficeCode);

console.log('Successfully injected massive 1k+ word content into Home Page components!');
