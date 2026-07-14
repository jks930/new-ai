import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureCards = () => {
  const features = [
    {
      title: "Machine Learning & AI",
      description: "Harness the power of artificial intelligence to automate complex workflows and ensure predictive automation.",
      link: "Read More",
      image: "/deep.png"
    },
    {
      title: "Big Data & Analytics",
      description: "Transform your raw data into actionable insights with robust database structures and real-time analytics.",
      link: "Read More",
      image: "/database.png"
    },
    {
      title: "Augmented Reality",
      description: "Bridge the physical and digital worlds. Our AR solutions create immersive, interactive user experiences.",
      link: "Read More",
      image: "/augmented-reality.png"
    },
    {
      title: "Autonomous Drones",
      description: "Deploy intelligent drone technology for autonomous delivery, scanning, and geographic data processing.",
      link: "Read More",
      image: "/drone.png"
    },
    {
      title: "Smart Sensors & IoT",
      description: "Connect your physical infrastructure to the cloud with real-time tracking and intelligent IoT sensors.",
      link: "Read More",
      image: "/sensor.png"
    },
    {
      title: "Neural Networks",
      description: "Build deep neural network architectures that mimic human learning for advanced pattern recognition.",
      link: "Read More",
      image: "/1.png"
    },
    {
      title: "Computer Vision",
      description: "Enable machines to process, analyze, and understand visual data from the real world with high precision.",
      link: "Read More",
      image: "/2.png"
    },
    {
      title: "Natural Language Processing",
      description: "Develop conversational AI and chatbots that understand human sentiment and speak naturally.",
      link: "Read More",
      image: "/3.png"
    },
    {
      title: "Predictive Analytics",
      description: "Anticipate market trends and consumer behavior using historical data and statistical modeling.",
      link: "Read More",
      image: "/4.png"
    },
    {
      title: "Robotic Automation",
      description: "Streamline enterprise operations by assigning repetitive tasks to software robots and AI agents.",
      link: "Read More",
      image: "/6.png"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(features.length / itemsPerPage);

  const currentFeatures = features.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="pt-24 pb-20 bg-[#f9faff]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 text-center">
        
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-[40px] md:text-[46px] font-extrabold text-[#0b1c3a] mb-5 tracking-tight">Our Featured Solutions</h2>
          <div className="w-20 h-1 bg-[#ffa800] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-[17px] leading-[1.8]">
            Discover our comprehensive suite of cutting-edge AI technologies. From deep learning algorithms to immersive augmented reality, we provide everything your startup needs to disrupt the industry.
          </p>
        </div>

        {/* Feature Cards Grid with Transition */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out min-h-[750px] lg:min-h-[400px]">
          {currentFeatures.map((feature, idx) => (
            <div 
              key={`${currentPage}-${idx}`} 
              className="group relative bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(12,165,157,0.15)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden text-center flex flex-col items-center animate-[fadeIn_0.5s_ease-out]"
            >
              
              {/* Background Decorative Shapes */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0CA59D] opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#ffa800] opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              {/* Image Container */}
              <div className="relative w-[120px] h-[120px] mx-auto mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0CA59D]/10 rounded-full group-hover:bg-[#0CA59D]/20 transition-colors duration-500 transform group-hover:scale-110"></div>
                <img 
                   src={feature.image} 
                   alt={feature.title} 
                   className="w-[70px] h-[70px] object-contain relative z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 drop-shadow-md"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-[22px] font-bold text-[#0b1c3a] mb-4 relative z-20 group-hover:text-[#0CA59D] transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-500 mb-8 leading-[1.8] text-[15px] relative z-20 text-center">
                {feature.description}
              </p>
              
              {/* Button */}
              <Link to="/services-details" className="mt-auto inline-flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#f4f6fa] group-hover:bg-[#ffa800] text-[#0CA59D] group-hover:text-white transition-all duration-300 relative z-20 shadow-sm hover:shadow-md">
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-12 gap-3">
           {Array.from({ length: totalPages }).map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrentPage(idx + 1)}
               className={`w-4 h-4 rounded-full transition-all duration-300 ${
                 currentPage === idx + 1 
                   ? 'bg-[#0CA59D] w-10 shadow-lg' 
                   : 'bg-gray-300 hover:bg-[#ffa800]'
               }`}
               aria-label={`Go to page ${idx + 1}`}
             ></button>
           ))}
        </div>

        {/* Dynamic Keyframes for Fade In */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default FeatureCards;
