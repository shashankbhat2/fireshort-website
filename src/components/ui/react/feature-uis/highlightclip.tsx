import React from "react";
import { Play, Download, Share2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

type Props = {};

const HighlightClipUI = (props: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clips = [
    {
      title: "Preparing for a Jobless Future",
      duration: "0:51",
      description: "Exploring the societal implications of AI",
      thumbnail: "/clip_1.png",
      score: 90,
    },
    {
      title: "Impact of Automation",
      duration: "1:24",
      description: "Discussion about future jobs",
      thumbnail: "/clip_2.png",
      score: 85,
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateZ: 0, // Right tilt
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0, // Right tilt
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="space-y-3 preserve-3d absolute left-10 top-[10px] md:left-auto md:translate-x-0 md:top-[10px]"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {clips.map((clip, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            rotateX: 5,
            transition: { duration: 0.2 },
          }}
          className="bg-zinc-900/90 rounded-lg flex shadow-lg backdrop-blur-sm w-[350px] translate-z-0 overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)",
          }}
        >
          <div className="relative">
            <div className="absolute top-2 right-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {clip.score}
            </div>
            <img
              src={clip.thumbnail}
              alt={clip.title}
              className="w-full w-[120px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {clip.duration}
            </div>
          </div>
          
          <div className="p-3">
            <h3 className="text-white text-sm font-medium mb-1 line-clamp-1">
              {clip.title}
            </h3>
            <p className="text-zinc-400 text-xs mb-2 line-clamp-1">
              {clip.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <motion.button
                  className="p-1 hover:bg-zinc-800 rounded-full"
                  whileHover={{ scale: 1.1, translateZ: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-3 h-3 text-zinc-400" />
                </motion.button>
                <motion.button
                  className="p-1 hover:bg-zinc-800 rounded-full"
                  whileHover={{ scale: 1.1, translateZ: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-3 h-3 text-zinc-400" />
                </motion.button>
                <motion.button
                  className="p-1 hover:bg-zinc-800 rounded-full"
                  whileHover={{ scale: 1.1, translateZ: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-3 h-3 text-zinc-400" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HighlightClipUI; 