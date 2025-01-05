import React from 'react';
import { Upload, Cpu, Wand2, Share } from 'lucide-react';

const WorkflowSection = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-primary" />,
      title: "Upload Content",
      description: "Simply upload your video or audio file in any format. Our platform supports all major file types.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "AI Analysis",
      description: "Our AI analyzes your content, identifying key moments, generating transcripts, and preparing highlights.",
    },
    {
      icon: <Wand2 className="w-8 h-8 text-primary" />,
      title: "Auto-Generate",
      description: "Get AI-generated subtitles, B-rolls, and multiple highlight clips optimized for engagement.",
    },
    {
      icon: <Share className="w-8 h-8 text-primary" />,
      title: "Export & Share",
      description: "Export your content in multiple formats optimized for different social media platforms.",
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-brand-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-gray-800 mb-6">
            Create Viral Content in Minutes
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Our streamlined workflow makes it easy to transform your content into engaging, share-worthy material.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-6 bg-white rounded-lg border-2 border-brand-black hover:border-primary transition-colors duration-200"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6 p-4 bg-primary/5 rounded-full">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-gray-600 mb-4">
                  {step.description}
                </p>
                              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;