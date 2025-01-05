import React from 'react';
import { BadgeCheck, Zap, TrendingUp, Timer, Share2, BarChart3 } from 'lucide-react';
import Card from '../Card.astro';

export const ComparisonSection = () => {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-gray-800 mb-4">
              Why Choose Our AI Content Assistant?
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              See how our platform transforms your content creation process compared to traditional methods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6 border-2 border-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-gray-800 mb-6 text-center">Traditional Method</h3>
              <div className="space-y-4">
                {[
                  'Manual video editing and clip selection',
                  'Time-consuming transcript creation',
                  'Multiple tools for different content types',
                  'Hours spent reformatting content',
                  'Limited content variations',
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-3 text-brand-gray-600">
                    <div className="w-5 h-5 shrink-0 rounded-full bg-gray-200 flex items-center justify-center border border-black">
                      <span className="text-gray-500">✕</span>
                    </div>
                    <span className="text-center">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6 border-2 border-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">With Fireshort</h3>
              <div className="space-y-4">
                {[
                  'AI-powered smart clip detection',
                  'Automatic transcript generation',
                  'All-in-one content transformation',
                  'Instant multi-format conversion',
                  'Endless content possibilities',
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-3 text-brand-gray-600">
                    <div className="w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center border border-black">
                      <BadgeCheck className="w-4 h-4 text-primary" />
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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-gray-800 mb-4">
            Maximize Your Content ROI
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
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
            <div key={i} className="p-6 text-center bg-white">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-brand-gray-700 mb-2">{label}</h4>
              <p className="text-brand-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const IntegrationSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-gray-800 mb-4">
            Seamless Integration
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Connect with your favorite platforms and streamline your workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <Share2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-gray-800 mb-2">
                  Direct Publishing
                </h3>
                <p className="text-brand-gray-600">
                  Automatically publish your transformed content to social media platforms, blogs, and content management systems
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-gray-800 mb-2">
                  Analytics Integration
                </h3>
                <p className="text-brand-gray-600">
                  Track performance across platforms with integrated analytics and get actionable insights for content optimization
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {[
              'YouTube',
              'Twitter',
              'LinkedIn',
              'WordPress',
              'Medium',
              'Instagram'
            ].map((platform) => (
              <div key={platform} className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-brand-gray-600 font-medium">{platform}</span>
              </div>
            ))}
          </div>
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