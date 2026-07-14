import React from 'react';

const StatsSection = () => {
  const stats = [
    { percent: 60, title1: "DESIGN", title2: "Codes" },
    { percent: 75, title1: "OUR HAPPY", title2: "Clients" },
    { percent: 85, title1: "PROJECTS", title2: "Design" },
    { percent: 95, title1: "COMPLETED", title2: "Projects" },
  ];

  return (
    <section className="bg-primary py-20 border-t border-b border-teal-500">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-teal-500">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center justify-center gap-4 py-8 sm:py-0 px-4">
              {/* Circular Progress Placeholder */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Circle */}
                  <path
                    className="text-teal-400 opacity-30"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Progress Circle */}
                  <path
                    className="text-secondary"
                    strokeWidth="2"
                    strokeDasharray={`${stat.percent}, 100`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  {stat.percent}%
                </div>
              </div>
              <div className="text-white">
                <p className="text-xs tracking-wider uppercase opacity-80">{stat.title1}</p>
                <h4 className="text-2xl font-bold">{stat.title2}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
