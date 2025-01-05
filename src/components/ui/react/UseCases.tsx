import React from 'react';
import { Play, Users, TrendingUp, Clock } from 'lucide-react';

const UseCasesSection = () => {
  const useCards = [
    {
      title: "Content Creators",
      category: "YouTube & Social Media",
      description: "Transform long-form content into multiple short-form clips. Perfect for repurposing YouTube videos into TikTok and Reels.",
      gradient: "from-rose-500/10 to-orange-500/10",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Marketing Teams",
      category: "Brand & Product",
      description: "Extract the best moments from product launches and marketing campaigns to create compelling social media content.",
      gradient: "from-blue-500/10 to-purple-500/10",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Educational Content",
      category: "Course Creators",
      description: "Break down long lectures into digestible highlights and create engaging previews for your courses.",
      gradient: "from-green-500/10 to-emerald-500/10",
      image: "https://placehold.co/600x400"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-gray-800 mb-6">
            Helping Content Creation <br className="hidden md:block" />
            Across Industries
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            See how different creators and teams can use our platform to amplify their content strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border-2 border-brand-black hover:border-primary transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-40`} />
              
              <div className="relative p-6">
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-brand-gray-600 mb-4">
                  {card.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-brand-gray-800 mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-brand-gray-600 mb-6">
                  {card.description}
                </p>
                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;