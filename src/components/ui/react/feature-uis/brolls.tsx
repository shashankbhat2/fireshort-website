import React from "react";
import { Eye, Trash2, PlusCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

type Props = {};

const BrollsUI = (props: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brolls = [
    {
        timeRange: "2.0s - 4.1s",
        description: "5 simple habits that",
        image: "https://www.clevergirlfinance.com/wp-content/uploads/2022/12/Good-habits-list.jpg", 
        isSelected: false,
      },
    {
      timeRange: "1.0s - 2.0s",
      description: "I'm going to show you",
      image: "https://blog.prezi.com/wp-content/uploads/2022/08/GettyImages-1383023289.jpg",
      isSelected: false,
    },
  ];
  

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateZ: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 10,
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
      rotateX: -10,
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
      className="space-y-3 preserve-3d absolute left-10 top-[10px] md:left-auto md:translate-x-0 md:top-[10px] md:right-[100px]"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {brolls.map((broll, index) => (
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
              broll.isSelected
                ? "bg-zinc-950 border-l-2 border-red-500 p-2"
                : "bg-zinc-900"
            } 
            rounded-lg shadow-lg backdrop-blur-sm w-[350px] translate-z-0 flex overflow-hidden
          `}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)",
          }}
        >
          <div className="w-[90px] h-[150px] relative">
            <img
              src={`${broll.image}?auto=format&fit=crop&w=320&q=80`}
              alt={broll.description}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <motion.div
              className="flex items-center justify-between mb-2"
              initial={false}
              whileHover={{ scale: 1.01 }}
            >
              <span className="text-zinc-500 text-xs">{broll.timeRange}</span>
            </motion.div>
            <div className="flex items-center justify-between">
              <p
                className={`${
                  broll.isSelected ? "text-red-200" : "text-zinc-300"
                } text-xs`}
              >
                {broll.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BrollsUI;
