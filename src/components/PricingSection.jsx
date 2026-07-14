import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$29",
      period: "/month",
      features: ["5 GB Bandwidth", "Highest Speed", "1 GB Storage", "Unlimited Website", "Unlimited Users", "24x7 Great Support"],
      isPopular: false
    },
    {
      name: "Advanced Plan",
      price: "$49",
      period: "/month",
      features: ["10 GB Bandwidth", "Highest Speed", "3 GB Storage", "Unlimited Website", "Unlimited Users", "24x7 Great Support"],
      isPopular: true
    },
    {
      name: "Expert Plan",
      price: "$69",
      period: "/month",
      features: ["15 GB Bandwidth", "Highest Speed", "5 GB Storage", "Unlimited Website", "Unlimited Users", "24x7 Great Support"],
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Pricing Plan</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-300 ${plan.isPopular ? 'border-t-4 border-primary' : ''}`}>
              <div className="p-8 text-center border-b border-gray-100 relative">
                {plan.isPopular && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400 font-medium">{plan.period}</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-colors ${plan.isPopular ? 'bg-primary hover:bg-primary-hover text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
