import React from "react";
import { Eye, Trash2, PlusCircle, Smile } from "lucide-react";
import { motion, useInView } from "framer-motion";

type Props = {};

const SubtitleUI = (props: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const subtitles = [
    {
      timeRange: "0.1s - 1.0s",
      text: "In today's video, I'm",
      isSelected: true,
    },
    {
      timeRange: "1.0s - 2.0s",
      text: "gonna share with you",
      isSelected: false,
    },
    {
      timeRange: "2.0s - 4.1s",
      text: "5 simple habits that",
      isSelected: false,
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateZ: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
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
      className="space-y-3 preserve-3d mt-[100px] mx-auto md:mx-0"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {subtitles.map((subtitle, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            rotateX: 5,
            transition: { duration: 0.2 },
          }}
          className={`
                ${
                  subtitle.isSelected
                    ? "bg-zinc-950 border-l-2 border-red-500"
                    : "bg-zinc-900"
                } 
                rounded-lg shadow-lg backdrop-blur-sm w-[300px] md:w-[350px] translate-z-0
              `}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)",
          }}
        >
          <div className="p-3">
            <motion.div
              className="flex items-center justify-between mb-2"
              initial={false}
              whileHover={{ scale: 1.01 }}
            >
              <span className="text-zinc-500 flex items-center gap-2 text-sm">
                {subtitle.timeRange}
                {subtitle.isSelected && <motion.button 
                whileHover={{ scale: 1.1, translateZ: 10 }}
                whileTap={{ scale: 0.95 }}
                >
                    <Smile className="w-4 h-4 text-zinc-400" />
                </motion.button>}
              </span>
              <div className="flex space-x-2">
             
                <motion.button
                  className="p-1 hover:bg-zinc-800 rounded"
                  whileHover={{ scale: 1.1, translateZ: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-4 h-4 text-zinc-400" />
                </motion.button>
                <motion.button
                  className="p-1 hover:bg-zinc-800 rounded"
                  whileHover={{ scale: 1.1, translateZ: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </motion.button>
              </div>
            </motion.div>
            <div className="flex items-center justify-between">
              <p
                className={`${
                  subtitle.isSelected ? "text-red-200" : "text-zinc-300"
                }`}
              >
                {subtitle.text}
              </p>
              <motion.button
                className="ml-4 hover:bg-zinc-800 rounded-full p-1"
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                  translateZ: 20,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <PlusCircle className="w-5 h-5 text-zinc-400 hover:text-red-400" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SubtitleUI;
