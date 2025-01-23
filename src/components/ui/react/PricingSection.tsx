import React from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for content creators just getting started",
      features: [
        "120 Minutes of Video/Audio processing",
        "All AI Video Editor Features",
        "100k Words of Content Generation",
        "Export in HD",
        "Export With watermark",
      ],
    },
    {
      name: "Pro",
      price: "14",
      description: "For professional content creators and small teams",
      features: [
        "All Free Features",
        "300 Minutes of Video/Audio processing",
        "5M Words of Content Generation",
        "No Watermark",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Creator",
      price: "40",
      description: "For large teams and organizations",
      features: [
        "All Pro Features",
        "6000 minutes of content processing",
        "Unlimited Content Generation ",
        "Export in 4K",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <section>
      <div className="md:container md:mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-secondary text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your content creation needs. All plans
            include our core AI features.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-6 md:gap-0 px-4 md:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex-1 p-8 flex flex-col backdrop-blur-xl backdrop-brightness-125 rounded-xl
                ${index === 0 ? "md:rounded-r-none" : ""} 
                ${index === plans.length - 1 ? "md:rounded-l-none" : ""}
                ${
                  plan.popular
                    ? "bg-red-500/5 border-red-500/20 shadow-2xl shadow-red-500/10 md:z-10 md:-mx-4 md:-my-4"
                    : "bg-indigo-500/5 border-indigo-500/10 shadow-xl"
                }
                border transition-all duration-300 relative
                hover:transform hover:scale-105 hover:z-20
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-max">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-1 rounded-full text-sm font-medium
                    shadow-lg shadow-red-500/20 border border-red-500/50">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-primary text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className={`font-primary text-4xl font-bold ${plan.popular ? 'text-red-500' : 'text-indigo-400'}`}>
                    ${plan.price}
                  </span>
                  <span className="font-secondary text-gray-300 ml-2">/month</span>
                </div>
                <p className="font-secondary text-gray-300">{plan.description}</p>
              </div>

              <ul className="font-secondary space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start group">
                    <Check className={`h-5 w-5 mt-1 mr-2 flex-shrink-0 ${plan.popular ? 'text-red-500' : 'text-indigo-500'} 
                      group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`font-secondary w-full py-3 px-6 rounded-lg font-medium transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-red-500/25"
                      : "bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 text-white border border-indigo-500/30 hover:border-indigo-500/50"
                  }
                  hover:-translate-y-1 hover:shadow-xl
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;