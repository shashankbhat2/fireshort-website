import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    {
      title: "Content Generation",
      video: "https://pub-e33b432a715d43bf85bc84d655545d94.r2.dev/Content.mp4",
    },
    {
      title: "Highlight Clips",
      video: "https://pub-e33b432a715d43bf85bc84d655545d94.r2.dev/Clips.mp4",
    },
    {
      title: "AI Powered Video Editing",
      video: "https://pub-e33b432a715d43bf85bc84d655545d94.r2.dev/Editor.mp4",
    },
    {
      title: "Auto B-rolls",
      video: "https://pub-e33b432a715d43bf85bc84d655545d94.r2.dev/Brolls.mp4",   
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

  // Add time update handler with combined progress calculation
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const videoProgress = videoRef.current.currentTime / videoRef.current.duration;
      const combinedProgress = ((activeTab + videoProgress) / tabs.length) * 100;
      setProgress(combinedProgress);
    }
  };

  // Add ended handler
  const handleVideoEnded = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  return (
    <section className="p-0 md:p-6 to-black">
      <div className="md:container md:mx-auto md:max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 md:mb-8"
          >
            <div className="rounded-xl overflow-hidden backdrop-blur-xl backdrop-brightness-125 bg-gradient-to-br from-indigo-500/5 to-red-500/5 border border-indigo-500/20 shadow-xl transition-all duration-300">
              <div className="aspect-video w-[500px] md:w-full h-full bg-black/50 rounded-lg overflow-hidden">
                <video 
                  ref={videoRef}
                  src={tabs[activeTab].video} 
                  autoPlay 
                  loop={false}
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnded}
                />
              </div>
              {/* Add progress bar */}
              <div className="w-full h-1 bg-gray-800">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ease-linear shadow-[0_0_10px_rgba(239,68,68,0.7)] shadow-red-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Tabs below video */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                className={`
                  px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300
                  backdrop-blur-xl backdrop-brightness-125
                  border text-sm md:text-base
                  w-full sm:w-auto
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
        </motion.div>
      </div>
    </section>
  );
};

export default TabsSection;