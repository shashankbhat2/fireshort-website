import React from 'react';
import { BadgeCheck, Zap, TrendingUp, Timer, Share2, BarChart3 } from 'lucide-react';
import Card from '../Card.astro';

export const ComparisonSection = () => {
  return (
    <section className="py-24 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Our AI Content platform?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how our platform transforms your content creation process compared to traditional methods
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6 border border-[#2D2D3A] p-8 rounded-lg bg-[#1E1E2E]/50 backdrop-blur-sm
            shadow-lg hover:shadow-indigo-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Traditional Method
            </h3>
            <div className="space-y-4">
              {[
                'Manual video editing and clip selection',
                'Time-consuming transcript creation',
                'Multiple tools for different content types',
                'Hours spent reformatting content',
                'Limited content variations',
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 text-gray-300">
                  <div className="w-5 h-5 shrink-0 rounded-full bg-[#2D2D3A]/50 flex items-center justify-center border border-red-500/30">
                    <span className="text-red-500">✕</span>
                  </div>
                  <span className="text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 border border-red-500/30 p-8 rounded-lg bg-[#1E1E2E]/50 backdrop-blur-sm
            shadow-lg hover:shadow-red-500/10">
            <h3 className="text-2xl font-bold text-red-500 mb-6 text-center">
              With Fireshort
            </h3>
            <div className="space-y-4">
              {[
                'AI-powered smart clip detection',
                'Automatic transcript generation',
                'All-in-one content transformation',
                'Instant multi-format conversion',
                'Endless content possibilities',
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 text-gray-300">
                  <div className="w-5 h-5 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30">
                    <BadgeCheck className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MetricsSection = () => {
  return (
    <section className="py-24 bg-black/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Maximize Your Content ROI
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform helps you get more value from every piece of content
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              label: 'Faster Content Creation',
              description: 'Transform hours of content into multiple formats in minutes',
              icon: Zap
            },
            {
              label: 'More Content Generated',
              description: 'Create multiple pieces of content from a single source',
              icon: TrendingUp
            },
            {
              label: 'Time Saved',
              description: 'Reduce manual editing and reformatting work',
              icon: Timer
            }
          ].map(({ label, description, icon: Icon }, i) => (
            <div key={i} className="group p-6 text-center bg-[#1E1E2E]/50 backdrop-blur-sm rounded-lg
              border border-[#2D2D3A] hover:border-indigo-500/30
              shadow-lg hover:shadow-indigo-500/10
              transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2D2D3A]/50 flex items-center justify-center
                  group-hover:bg-indigo-500/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {label}
              </h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const AdditionalSections = () => {
  return (
    <>
      <ComparisonSection />
      <MetricsSection />
    </>
  );
};

export default AdditionalSections;