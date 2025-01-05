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
      price: "12",
      description: "For professional content creators and small teams",
      features: [
        "All Free Features",
        "600 Minutes of Video/Audio processing",
        "150K Words of Content Generation",
        "Export without watermark",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Creator",
      price: "50",
      description: "For large teams and organizations",
      features: [
        "All Pro Features",
        "6000 minutes of content processing",
        "1M Words of Content Generation ",
        "Export in 4K",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your content creation needs. All plans
            include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border-2 border-brand-black p-8 flex flex-col
                ${
                  plan.popular
                    ? "bg-white shadow-lg transform md:-translate-y-4"
                    : "bg-brand-gray-50"
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Best Value
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-brand-gray-800">
                    $
                  </span>
                  <span className="text-6xl font-bold text-brand-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-brand-gray-600 ml-2">/month</span>
                </div>
                <p className="text-brand-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-brand-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors
                  ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "border-2 border-brand-black text-brand-gray-800 hover:bg-brand-gray-100"
                  }
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
