import ButtonChatbot from "@/components/ButtonChatbot/Button";
import CardChatbot from "@/components/CardChatbot";
import { InfoChatbot } from "@/data";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#371F5A] h-screen lg:pt-28 flex items-center flex-col  space-y-3">
      <div className="flex flex-col items-center gap-7 max-w-3xl mx-auto text-center px-4 md:px-0">
        <h1 className="text-4xl font-bold text-[#852FFF]">
          Transform Your Learning Journey With
        </h1>
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
        <div className="flex flex-wrap justify-center gap-6">
          {InfoChatbot.map((item, idx) => (
            <CardChatbot
              key={idx}
              title={item.title}
              description={item.description}
              alt={item.alt}
              imageurl={item.imageurl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
