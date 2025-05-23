import ButtonChatbot from "@/components/ButtonChatbot/Button";
import CardChatbot from "@/components/CardChatbot";
import { InfoChatbot } from "@/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GradualSpacing } from "@/components/eldoraui/gradualspacing";

const Welcome = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#371F5A] h-screen lg:pt-28 flex items-center  flex-col  space-y-7">
      <div className="flex flex-col items-center gap-7 max-w-3xl mx-auto text-center px-4 md:px-0">
        <GradualSpacing
          className="text-[#852FFF] text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          text="Transform Your Learning Journey With"
        />
        <p className="text-white text-base md:text-lg leading-relaxed">
          Let our AI Chatbot guide you through personalized questions to
          recommend the best learning roadmap, complete with courses, tasks, and
          progress tracking.
        </p>
        <Link to="services">
          <ButtonChatbot />
        </Link>
      </div>
      {/* Card */}
      <div className="py-12 px-4 text-center">
        <h3 className="text-3xl font-bold text-[#852FFF] mb-6">
          Explore AI Chatbots
        </h3>
        <div className="flex flex-wrap justify-center  gap-6">
          {InfoChatbot.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.2,
                ease: "easeOut",
              }}
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
      </div>
    </div>
  );
};

export default Welcome;
