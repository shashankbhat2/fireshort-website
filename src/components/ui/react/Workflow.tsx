import React from 'react';
import { Upload, Cpu, Wand2, Share } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkflowSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-indigo-500" />,
      title: "Upload Content",
      description: "Simply upload your video or audio file in any format. Our platform supports all major file types.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      title: "AI Analysis",
      description: "Our AI analyzes your content, identifying key moments, generating transcripts, and preparing highlights.",
    },
    {
      icon: <Wand2 className="w-8 h-8 text-indigo-500" />,
      title: "Auto-Generate",
      description: "Get AI-generated subtitles, B-rolls, and multiple highlight clips optimized for engagement.",
    },
    {
      icon: <Share className="w-8 h-8 text-indigo-400" />,
      title: "Export & Share",
      description: "Export your content in multiple formats optimized for different social media platforms.",
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0A0A0B] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/10 via-[#2D2D3A]/5 to-transparent"></div>
      <div className="container mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6
            bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent
            [text-shadow:0_0_30px_rgba(59,130,246,0.5)] animate-pulse">
            Create Viral Content in Minutes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our streamlined workflow makes it easy to transform your content into engaging, share-worthy material.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-y-1/2 hidden lg:block" />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative flex flex-col items-center text-center p-6 
                  bg-[#1E1E2E]/30 backdrop-blur-sm rounded-xl 
                  border border-[#2D2D3A] hover:border-indigo-500/30
                  shadow-lg hover:shadow-indigo-500/10
                  transition-all duration-300"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full 
                  bg-gradient-to-r from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-bold
                  shadow-lg shadow-indigo-500/20">
                  {index + 1}
                </div>
                
                <div className="mb-6 p-4 bg-[#2D2D3A]/30 rounded-full
                  group-hover:bg-[#2D2D3A]/50 transition-colors duration-300
                  group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3
                  group-hover:[text-shadow:0_0_15px_rgba(59,130,246,0.5)]
                  transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;