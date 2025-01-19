import React from "react";
import { motion } from "framer-motion";

const UseCasesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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
        ease: "easeOut",
      },
    },
  };

  const useCards = [
    {
      title: "Content Creators",
      category: "YouTube & Social Media",
      description:
        "Transform long-form content into multiple short-form clips. Perfect for repurposing YouTube videos into TikTok and Reels.",
      gradient: "from-red-500 to-red-600",
      image: "https://images.unsplash.com/photo-1636971828014-0f3493cba88a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Marketing Teams",
      category: "Brand & Product",
      description:
        "Extract the best moments from product launches and marketing campaigns to create compelling social media content.",
      gradient: "from-indigo-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Educational Content",
      category: "Course Creators",
      description:
        "Break down long lectures into digestible highlights and create engaging previews for your courses.",
      gradient: "from-red-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-24 px-4 bg-black/90">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Helping Content Creation <br className="hidden md:block" />
            Across Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how different creators and teams can use our platform to amplify
            their content strategy.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {useCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-[#1E1E2E]/50 backdrop-blur-sm rounded-xl 
                transition-all duration-300 overflow-hidden
                border border-[#2D2D3A] hover:border-indigo-500/30
                shadow-lg hover:shadow-indigo-500/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative p-6">
                <span
                  className="inline-block px-3 py-1 bg-[#2D2D3A]/50 border border-indigo-500/20 
                  rounded-full text-sm font-medium text-gray-300 mb-4"
                >
                  {card.category}
                </span>

                <h3
                  className="text-2xl font-bold text-white mb-3 
                  [text-shadow:0_0_5px_rgba(255,0,68,0.3)]"
                >
                  {card.title}
                </h3>

                <p className="text-gray-300 mb-6">{card.description}</p>

                <div
                  className="rounded-lg overflow-hidden border border-arcade-neon-purple/20
                  shadow-[0_0_10px_rgba(153,0,255,0.1)]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 
                      transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
