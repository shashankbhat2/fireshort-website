import React from "react";
import { motion } from "framer-motion";
import SubtitleUI from "./feature-uis/subtitles";
import BrollsUI from "./feature-uis/brolls";
import HighlightClipUI from "./feature-uis/highlightclip";
import VideoRepurposeUI from "./feature-uis/videorepurpose";

const EmptyUISection = (props: { children: React.ReactNode }) => (
  <motion.div
    className="relative h-64 w-full mb-6 flex justify-center items-center rounded-lg overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.01 }}
  >
    
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
    
    <div className="absolute -top-8 -left-8 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl" />
    <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
    
    <div className="relative w-full h-full flex justify-center items-center backdrop-blur-sm">
      {props.children}
    </div>
  </motion.div>
);


const features = [
  {
    title: "AI Subtitles & Captions",
    description: "Generate perfect subtitles in multiple languages with automatic timing and style customization. Automatically highlight words and emojis.",
    component: <SubtitleUI />
  },
  {
    title: "Smart B-Roll Generator",
    description: "Instantly find and insert relevant B-roll footage that matches your narration.",
    component: <BrollsUI />
  },
  {
    title: "Video Repurposing",
    description: "Transform long-form videos into short-form content for any social platform.",
    component: <VideoRepurposeUI />
  },
  {
    title: "AI Highlight Clips",
    description: "Automatically generate engaging short clips from your long-form content.",
    component: <HighlightClipUI />
  },
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            Powerful Features for Content Creators
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform your content into engaging,
            share-worthy material that resonates with your audience.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.2 }
              }}
              className={`group p-4 bg-[#1E1E2E]/50 backdrop-blur-lg rounded-lg 
                border border-indigo-500/20 hover:border-indigo-500/40
                shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                transition-all duration-300
                md:col-span-2`}
            >
              <div className="relative flex flex-col h-full">
                
                <div className="flex flex-col flex-1">
                  <EmptyUISection>
                    {feature.component}
                  </EmptyUISection>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2 text-lg 
                      group-hover:[text-shadow:0_0_5px_rgba(59,130,246,0.3)]
                      transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed
                      group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
