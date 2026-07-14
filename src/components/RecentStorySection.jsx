import React from 'react';

const RecentStorySection = () => {
  const stories = [
    {
      author: "Admin",
      date: "August 15, 2026",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      imgColor: "bg-gray-300" // Placeholder for image
    },
    {
      author: "Admin",
      date: "August 18, 2026",
      title: "I Used The Web For A Day On A 50 MB Budget",
      imgColor: "bg-gray-400" // Placeholder for image
    },
    {
      author: "Admin",
      date: "August 15, 2026",
      title: "Here are the 5 most telling signs of micromanagement",
      imgColor: "bg-gray-300" // Placeholder for image
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our recent story</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Image Placeholder */}
              <div className={`w-full h-64 ${story.imgColor} rounded-xl mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                {/* Simulated abstract content for the image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <span className="text-primary hover:text-primary-hover transition-colors">{story.author}</span>
                <span>/</span>
                <span>{story.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors leading-tight">
                {story.title}
              </h3>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
              </p>
              <a href="#" className="text-secondary font-semibold hover:text-secondary-hover transition-colors flex items-center gap-1">
                Read More +
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentStorySection;
