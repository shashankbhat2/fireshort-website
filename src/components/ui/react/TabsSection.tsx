import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    {
      title: "Content Generation",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Highlight Clips",
      video: "https://pub-e33b432a715d43bf85bc84d655545d94.r2.dev/Smart%20Clips.webm",
    },
    {
      title: "AI Powered Video Editing",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Auto B-rolls",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="p-6 to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all duration-300
                  backdrop-blur-xl backdrop-brightness-125
                  border 
                  ${
                    activeTab === index
                      ? "bg-gradient-to-r from-red-500/20 to-red-600/20 border-red-500/50 text-white shadow-lg shadow-red-500/20 scale-105"
                      : "bg-indigo-500/5 border-indigo-500/20 text-gray-300 hover:border-indigo-500/50 hover:text-white"
                  }
                  hover:shadow-lg hover:scale-105
                `}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className={`
              rounded-xl
              overflow-hidden
              backdrop-blur-xl backdrop-brightness-125
              bg-gradient-to-br from-indigo-500/5 to-red-500/5
              border border-indigo-500/20
              shadow-xl
              transition-all duration-300
            `}
          >
            <div className="aspect-video w-full bg-black/50 rounded-lg overflow-hidden">
              <video src={tabs[activeTab].video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TabsSection;