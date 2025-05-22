import Image from "@/components/Image";
import Input from "@/Ui/Input";
import chatbot5 from "../../assets/Chatbot/chatbot5.jpg";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#11071F] to-[#371F5A] flex flex-col justify-center items-center relative">
      {/* Main content centered */}
      <div className="flex flex-col items-center justify-center flex-1 mt-16 mb-32">
        <Image
          imageurl={chatbot5}
          alt={""}
          className={"w-32 h-32 mb-4 rounded-full bg-gray-200"}
        />
        <h3 className="text-2xl font-bold text-white mb-2 text-center">
          Your Learning Journey Starts Here
        </h3>
        <p className="text-lg text-gray-200 text-center max-w-md">
          Discover curated tracks designed to guide you step-by-step in
          mastering programming skills. Tailored to match your goals and
          expertise.
        </p>
      </div>
      {/* Fixed input at the bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#11071F] to-transparent px-4 py-8 flex justify-center z-50">
        <div className="relative w-full max-w-lg">
          <Input
            placeholder="Message Chatbot.."
            className="w-full pr-16 pl-6 bg-white/10 border border-[#A259FF] rounded-2xl text-[#A259FF] placeholder-[#C7AFFF] focus:border-[#A259FF] focus:ring-0 shadow-lg h-12 text-lg transition-all duration-200"
            style={{ boxShadow: "0 4px 24px 0 rgba(162,89,255,0.10)" }}
          />
          {/* Arrow Icon in purple circle, slightly overlapping input */}
          <span className="absolute top-1/2 right-3 -translate-y-1/2">
            <span className="bg-[#A259FF] hover:bg-[#c7afff] transition-colors border-2 border-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#fff"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12h10.5m0 0l-4.5-4.5m4.5 4.5l-4.5 4.5"
                />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
