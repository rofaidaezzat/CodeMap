import React, { useEffect, useRef, useState } from "react";
import Image from "@/components/Image";
import { motion } from "framer-motion";
import SearchChatbot from "@/components/SearchChatbot/SearchChatbot";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
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
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const hasMessages = messages.length > 0;

  const sendMessage = async (text: string) => {
    console.log("Will send to sessionId:", sessionId);
    console.log("Text:", text);

    const accessToken = localStorage.getItem("accessToken");
    if (!text || !sessionId || !accessToken) return;

    // add user message to list
    setMessages((prev) => [...prev, { type: "user", text }]);

    try {
      const { data } = await axios.post(
        `https://f910-105-197-145-76.ngrok-free.app/chatbot/sessions/${sessionId}/messages`,
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

  // ✅ Auto scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Fetch messages when sessionId changes
  useEffect(() => {
    const fetchMessages = async () => {
      if (!sessionId) {
        setMessages([]); // Clear messages when no session
        return;
      }

      console.log("Fetching messages for sessionId:", sessionId);
      setIsLoadingMessages(true);

      try {
        const accessToken = localStorage.getItem("accessToken");
        const { data } = await axios.get(
          `https://f910-105-197-145-76.ngrok-free.app/chatbot/sessions/${sessionId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("API Response:", data);

        // Handle different possible response structures
        let messagesArray = [];

        if (data && data.data) {
          if (Array.isArray(data.data.messages)) {
            messagesArray = data.data.messages;
          } else if (
            data.data.messages === null ||
            data.data.messages === undefined
          ) {
            messagesArray = [];
          }
        }

        console.log("Messages array:", messagesArray);

        const loadedMessages = messagesArray.map((msg: APISessionMessage) => ({
          type: msg.role === "user" ? "user" : "bot",
          text: msg.content,
        }));

        console.log("Loaded messages:", loadedMessages);
        setMessages(loadedMessages);
      } catch (error) {
        const errorObj = error as AxiosError<IErrorResponse>;
        console.error("Error fetching messages:", error);
        setMessages([]); // Set empty array on error
        toast.error(`Failed to load messages: ${errorObj.message}`, {
          position: "bottom-center",
          duration: 4000,
        });
      } finally {
        setIsLoadingMessages(false);
      }
    };

    fetchMessages();
  }, [sessionId]); // ✅ This will trigger whenever sessionId changes

  return (
    <div className="flex-1 ml-64 relative h-[calc(100vh-4rem)] mt-24">
      {!hasMessages && !isLoadingMessages && (
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

      {/* ✅ Loading indicator for messages */}
      {isLoadingMessages && (
        <div className="flex justify-center items-center h-64">
          <div className="text-white text-lg">Loading messages...</div>
        </div>
      )}

      {/* ✅ Messages display - only show when we have messages and not loading */}
      {hasMessages && !isLoadingMessages && (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-3 px-8 pb-32 pt-8 overflow-y-auto h-full">
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
          <div ref={chatEndRef} />
        </div>
      )}

      {/* ✅ Search input - always at bottom */}
      <div className="fixed left-64 bottom-0 w-[calc(100%-16rem)] flex justify-center z-20 pb-6">
        <SearchChatbot onSubmit={sendMessage} />
      </div>
    </div>
  );
};

export default MainContent;
