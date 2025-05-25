import ButtonChatbot from "@/components/ButtonChatbot/Button";
import CardChatbot from "@/components/CardChatbot";
import { InfoChatbot } from "@/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GradualSpacing } from "@/components/eldoraui/gradualspacing";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Welcome = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-black to-[#371F5A] h-screen lg:pt-28 flex items-center flex-col space-y-7"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-center gap-7 max-w-3xl mx-auto text-center px-4 md:px-0"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <GradualSpacing
            className="text-[#852FFF] text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            text="Transform Your Learning Journey With"
          />
        </motion.div>
        <motion.p variants={itemVariants} className="text-white text-base md:text-lg leading-relaxed">
          Let our AI Chatbot guide you through personalized questions to
          recommend the best learning roadmap, complete with courses, tasks, and
          progress tracking.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link to="services">
            <ButtonChatbot />
          </Link>
        </motion.div>
      </motion.div>
      {/* Card */}
      <motion.div className="py-12 px-4 text-center" variants={containerVariants}>
        <motion.h3 variants={itemVariants} className="text-3xl font-bold text-[#852FFF] mb-6">
          Explore AI Chatbots
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-6">
          {InfoChatbot.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
            >
              <CardChatbot
                title={item.title}
                description={item.description}
                alt={item.alt}
                imageurl={item.imageurl}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;
