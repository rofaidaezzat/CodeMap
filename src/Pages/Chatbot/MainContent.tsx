import React, { useEffect, useRef, useState } from "react";
import Image from "@/components/Image";
import { motion } from "framer-motion";
import SearchChatbot from "@/components/SearchChatbot/SearchChatbot";
import { axiosInstance } from "@/config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "@/interfaces";

interface Message {
  type: "user" | "bot";
  text: string;
}

interface APISessionMessage {
  role: "user" | "assistant";
  content: string;
}

interface MainContentProps {
  sessionId: string | null;
}

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

const MainContent: React.FC<MainContentProps> = ({ sessionId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const hasMessages = messages.length > 0; // ✅ أضفناه هنا
  const sendMessage = async (text: string) => {
    console.log("Will send to sessionId:", sessionId);
    console.log("Text:", text);

    const accessToken = localStorage.getItem("accessToken");
    if (!text || !sessionId || !accessToken) return;

    // add user message to list
    setMessages((prev) => [...prev, { type: "user", text }]);

    try {
      const { data } = await axiosInstance.post(
        `chatbot/sessions/${sessionId}/messages`,
        { message: text },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setMessages((prev) => [
        ...prev,
        { type: "bot", text: data.data.assistant_response },
      ]);
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`${errorObj.message}`, {
        position: "bottom-center",
        duration: 4000,
      });
    }
  };
  useEffect(() => {
    console.log("Received sessionId:", sessionId); // 👈 أضيفي دي
  }, [sessionId]);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  // -------------fetch chat by id-------------------
  useEffect(() => {
    const fetchMessages = async () => {
      if (!sessionId) return;
      try {
        const accessToken = localStorage.getItem("accessToken");
        const { data } = await axiosInstance.get(
          `chatbot/sessions/${sessionId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const loadedMessages = data.data.messages.map(
          (msg: APISessionMessage) => ({
            type: msg.role === "user" ? "user" : "bot",
            text: msg.content,
          })
        );

        setMessages(loadedMessages);
      } catch (error) {
        const errorObj = error as AxiosError<IErrorResponse>;
        toast.error(`${errorObj.message}`, {
          position: "bottom-center",
          duration: 4000,
        });
      }
    };

    fetchMessages();
  }, [sessionId]);

  return (
    <div className="flex-1 ml-64 relative h-[calc(100vh-4rem)] mt-24">
      {!hasMessages && (
        <motion.div
          className="flex flex-col pt-28 items-center justify-start w-full h-full overflow-y-auto pb-32 px-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Image
              imageurl="/assets/Chatbot/chatbot5.jpg"
              alt=""
              className="w-32 h-32 mb-4 rounded-full bg-gray-200"
            />
          </motion.div>
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-2 text-center"
            >
            Your Learning Journey Starts Here
            </motion.h3>
            <motion.p
            variants={itemVariants}
            className="text-lg text-gray-200 text-center max-w-md"
            >
            Discover curated tracks designed to guide you step-by-step in
            mastering programming skills. Tailored to match your goals and
            expertise.
          </motion.p>
        </motion.div>
      )}

      <div className="w-full max-w-2xl flex flex-col gap-3 px-8">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`rounded-lg px-4 py-2 max-w-[80%] ${
              msg.type === "user"
                ? "bg-purple-800 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div style={{ height: '90px' }} />
        <div ref={chatEndRef} />
      </div>

      <div className="fixed left-64 bottom-0 w-[calc(100%-16rem)] flex justify-center z-20 pb-6">
        <SearchChatbot onSubmit={sendMessage} />
      </div>
    </div>
  );
};

export default MainContent;
