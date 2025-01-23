import React from "react";
import { motion, useInView } from "framer-motion";
import { 
  Video, 
  Film, 
  FileText, 
  Type, 
  Instagram, 
  Facebook, 
  Linkedin,
  Twitter,
  Youtube,
  ListTodo
} from "lucide-react";

type Props = {};

const VideoRepurposeUI = (props: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const repurposeItems = [
    { icon: <Video className="w-4 h-4" />, label: "Video", isActive: false },
    { icon: <Film className="w-4 h-4" />, label: "Clips", isActive: true },
    { icon: <FileText className="w-4 h-4" />, label: "Articles", isActive: false },
    { icon: <Type className="w-4 h-4" />, label: "Titles", isActive: false },
    { icon: <Instagram className="w-4 h-4" />, label: "Instagram captions", isActive: false },
    { icon: <Facebook className="w-4 h-4" />, label: "Facebook posts", isActive: false },
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn post", isActive: false },
    { icon: <Twitter className="w-4 h-4" />, label: "Twitter post", isActive: false },
    { icon: <Youtube className="w-4 h-4" />, label: "YouTube", isActive: false },
    { icon: <ListTodo className="w-4 h-4" />, label: "Thread", isActive: false },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateZ: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: -5,
      transition: {
        duration: 0.5,
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
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
      className="absolute top-[-20px]"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="bg-zinc-900/90 backdrop-blur-sm rounded-lg shadow-lg w-[230px] md:w-[350px] py-2"
        initial={false}
        whileHover={{ scale: 1.02 }}
      >
        {repurposeItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`
              flex items-center gap-3 px-4 py-2 cursor-pointer
              ${item.isActive ? 'bg-red-500/20 text-red-400' : 'text-zinc-400 hover:text-zinc-200'}
              transition-colors duration-200
            `}
            whileHover={{
              x: 4,
              transition: { duration: 0.2 },
            }}
          >
            <div className={`${item.isActive ? 'text-red-400' : 'text-zinc-400'}`}>
              {item.icon}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default VideoRepurposeUI; 