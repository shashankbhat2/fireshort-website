import React from 'react';
import { Wand2, Subtitles, Film, FileText, Share2, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="w-8 h-8 text-primary" />,
    title: "AI-Powered Highlights",
    description: "Automatically detect and extract the most engaging moments from your content using advanced AI algorithms."
  },
  {
    icon: <Subtitles className="w-8 h-8 text-primary" />,
    title: "Auto Subtitles",
    description: "Generate accurate subtitles in multiple languages with perfect timing and synchronization."
  },
  {
    icon: <Film className="w-8 h-8 text-primary" />,
    title: "Smart B-Roll Generation",
    description: "Let AI suggest and generate relevant B-roll footage to enhance your story and maintain viewer engagement."
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Transcript Analysis",
    description: "Get detailed transcripts with key moments highlighted and semantic analysis for better content understanding."
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Multi-Platform Export",
    description: "Export your content in various formats optimized for different social media platforms."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Custom Branding",
    description: "Add your personal touch with customizable templates, colors, and branding elements."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-gray-800 mb-6">
            Powerful Features for Content Creators
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your content into engaging, share-worthy material that resonates with your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border-2 border-brand-black hover:border-primary transition-colors duration-200"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}