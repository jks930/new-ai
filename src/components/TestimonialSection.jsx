import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Steven Smith",
      role: "Developer",
      text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."',
      initials: "SS",
      color: "bg-blue-500"
    },
    {
      name: "Sarah Lucy",
      role: "Designer",
      text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."',
      initials: "SL",
      color: "bg-pink-500"
    },
    {
      name: "James Anderson",
      role: "Manager",
      text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."',
      initials: "JA",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Network background graphic placeholder */}
      <div className="absolute top-0 right-0 opacity-10">
         <svg width="400" height="400" viewBox="0 0 100 100">
             <circle cx="20" cy="20" r="2" fill="white" />
             <circle cx="50" cy="10" r="2" fill="white" />
             <circle cx="80" cy="30" r="2" fill="white" />
             <line x1="20" y1="20" x2="50" y2="10" stroke="white" strokeWidth="0.5" />
             <line x1="50" y1="10" x2="80" y2="30" stroke="white" strokeWidth="0.5" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by over 250,000 business<br/>owners</h2>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="flex flex-col relative">
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white z-20 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Card content */}
              <div className="bg-white rounded-t-xl rounded-br-xl p-8 pt-12 relative shadow-lg mb-6 flex-grow">
                <p className="text-gray-500 italic leading-relaxed">
                  {testi.text}
                </p>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-4 left-8 w-8 h-8 bg-white transform rotate-45"></div>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 mt-2 px-8">
                <div className={`w-12 h-12 rounded-full ${testi.color} text-white flex items-center justify-center font-bold shadow-md`}>
                  {testi.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testi.name}</h4>
                  <p className="text-secondary text-sm font-medium">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
