import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Sidebar from "./SidebarOfChatbot";
import MainContent from "./MainContent";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

interface Session {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

const ServicesPage = () => {
  // ✅ استرجاع الـ activeSessionId من localStorage عند التحميل
  const [activeSessionId, setActiveSessionId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeSessionId");
    }
    return null;
  });

  const [sessions, setSessions] = useState<Session[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    () => window.innerWidth >= 768
  );

  // ✅ حفظ activeSessionId في localStorage كل مرة يتغير
  useEffect(() => {
    if (activeSessionId) {
      localStorage.setItem("activeSessionId", activeSessionId);
    }
  }, [activeSessionId]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#11071F] to-[#371F5A] flex flex-col justify-center items-center relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* زر فتح الـ Sidebar يظهر دائماً عندما يكون مغلق */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-white fixed left-4 top-4 z-[100] bg-purple-700 px-4 py-2 rounded shadow-lg"
        >
          ☰
        </button>
      )}
      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          activeSessionId={activeSessionId}
          setActiveSessionId={setActiveSessionId}
          sessions={sessions}
          setSessions={setSessions}
          onNewChat={(newId) => setActiveSessionId(newId)}
          onCloseSidebar={() => setIsSidebarOpen(false)}
          isOpen={isSidebarOpen}
        />
      )}
      {/* Main content centered with SearchChatbot inside MainContent */}
      <MainContent sessionId={activeSessionId} />
    </motion.div>
  );
};

export default ServicesPage;
