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
    <div className="w-full overflow-x-hidden">
      {" "}
      {/* التغليف الجديد هنا */}
      <motion.div
        className="w-full max-w-full bg-gradient-to-b from-black to-[#371F5A] pt-20 pb-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* العنوان والوصف والزر */}
        <motion.div
          className="flex flex-col items-center gap-7 w-full max-w-3xl text-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <GradualSpacing
              className="text-[#852FFF] text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl"
              text="Transform Your Learning Journey With"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-white text-base md:text-lg leading-relaxed"
          >
            Let our AI Chatbot guide you through personalized questions to
            recommend the best learning roadmap, complete with courses, tasks,
            and progress tracking.
          </motion.p>

          {/* الزر متجاوب */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-xs sm:max-w-md"
          >
            <Link to="services" className="block w-full">
              <ButtonChatbot className="w-full text-center py-3 rounded-md bg-[#852FFF] hover:bg-[#6A1ACF] text-white text-base" />
            </Link>
          </motion.div>
        </motion.div>

        {/* الكروت */}
        <motion.div
          className="py-12 text-center w-full"
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-bold text-[#852FFF] mb-6 sm:text-3xl"
          >
            Explore AI Chatbots
          </motion.h3>

          <div className="w-full flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            {InfoChatbot.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="w-[90%] sm:w-full sm:max-w-sm"
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
    </div>
  );
};

export default Welcome;
