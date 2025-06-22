import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { FiTrash } from "react-icons/fi";
import CloseChatbot from "@/components/CloseChatbot";
import SessionSkeleton from "@/components/SessionSkeleton";
import axios from "axios";

interface Session {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
interface SidebarProps {
  activeSessionId: string | null;
  setActiveSessionId: (id: string) => void;
  sessions: Session[];
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>;
  onNewChat: (id: string) => void;
  onCloseSidebar: () => void;
  isOpen: boolean;
  mobileClass?: string;
  desktopClass?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSessionId,
  setActiveSessionId,
  sessions,
  setSessions,
  onNewChat,
  onCloseSidebar,
  mobileClass = "",
  desktopClass = "",
}) => {
  // ✅ أضافة state للتحكم في loading
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const getSessions = async (currentActiveId?: string, skipLoading = false) => {
    try {
      // ✅ فقط اعرض loading في أول مرة أو لما مفيش sessions
      if (!skipLoading && (isInitialLoad || sessions.length === 0)) {
        setIsLoading(true);
      }
      const accessToken = localStorage.getItem("accessToken");

      const { data } = await axios.get(
        "https://f910-105-197-145-76.ngrok-free.app/chatbot/sessions",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      let sessionsData = [];
      // Handle different possible response structures
      if (data && data.data && Array.isArray(data.data)) {
        sessionsData = data.data;
      } else if (data && Array.isArray(data)) {
        sessionsData = data;
      } else {
        sessionsData = [];
      }

      // Sort sessions by creation date (newest first)
      const sortedSessions = sessionsData.sort(
        (a: Session, b: Session) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setSessions(sortedSessions);
      setIsInitialLoad(false); // ✅ أول تحميل خلص

      // Use the passed currentActiveId or the current activeSessionId
      const activeId = currentActiveId || activeSessionId;

      // If no active session is set and we have sessions, set the first one as active
      if (!activeId && sortedSessions.length > 0) {
        const firstSessionId = sortedSessions[0]._id;
        setActiveSessionId(firstSessionId);
        // ✅ حفظ الـ active session في localStorage
        localStorage.setItem("activeSessionId", firstSessionId);
      }
    } catch (err) {
      console.error("Error fetching sessions:", err);
      setSessions([]);
      setIsInitialLoad(false);
      toast.error("Failed to load sessions", {
        position: "bottom-center",
        duration: 4000,
      });
    } finally {
      if (!skipLoading) {
        setIsLoading(false); // ✅ انتهاء التحميل
      }
    }
  };

  useEffect(() => {
    // ✅ استرجاع الـ active session من localStorage عند التحميل
    const savedActiveSessionId = localStorage.getItem("activeSessionId");
    if (savedActiveSessionId && !activeSessionId) {
      setActiveSessionId(savedActiveSessionId);
    }
    getSessions();
  }, []);

  const onsubmitNewChat = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const { status, data: resData } = await axios.post(
        "https://f910-105-197-145-76.ngrok-free.app/chatbot/sessions",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (status === 201) {
        const sessionId = resData.data.session_id;
        localStorage.setItem("my_chat_session_id", sessionId);

        // Create the new session object with proper structure
        const newSession: Session = {
          _id: sessionId,
          title: resData.data.title || "New Chat",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        // Add the new session to the top of the list immediately
        setSessions((prevSessions) => {
          // Check if session already exists to avoid duplicates
          const sessionExists = prevSessions.some(
            (session) => session._id === sessionId
          );
          if (sessionExists) {
            return prevSessions;
          }
          return [newSession, ...prevSessions];
        });

        // Set as active session
        setActiveSessionId(sessionId);
        // ✅ حفظ الـ session الجديد في localStorage
        localStorage.setItem("activeSessionId", sessionId);
        onNewChat(sessionId);

        console.log("Saved session_id:", sessionId);
        toast.success("new chat created", {
          position: "bottom-center",
          duration: 1000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });

        // ✅ حذف الـ background refresh اللي بيسبب المشكلة
        // setTimeout(async () => {
        //   try {
        //     await getSessions(sessionId);
        //   } catch (err) {
        //     console.log("Background refresh failed, but UI session is already added");
        //   }
        // }, 1000);
      }
    } catch (err) {
      console.error("Error creating new chat:", err);
      toast.error("Failed to create new chat", {
        position: "bottom-center",
        duration: 4000,
      });
    }
  };

  const handleDeleteSession = async (id: string) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const { data } = await axios.delete(
        `https://f910-105-197-145-76.ngrok-free.app/chatbot/sessions/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      toast.success(data.message || "Session deleted");

      // If the deleted session was the active one, clear it
      if (activeSessionId === id) {
        setActiveSessionId("");
        // ✅ حذف الـ active session من localStorage
        localStorage.removeItem("activeSessionId");
      }

      // Remove session from UI immediately
      setSessions((prev) => prev.filter((session) => session._id !== id));
    } catch (err) {
      console.error("Error deleting session:", err);
      toast.error("Failed to delete session", {
        position: "bottom-center",
        duration: 4000,
      });
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-br from-[#11071F] to-[#371F5A] flex flex-col items-center py-8 z-50 shadow-lg ${mobileClass} ${desktopClass}`}
    >
      <div className="absolute top-4 right-4 mb-4">
        <CloseChatbot onClick={onCloseSidebar} />
      </div>
      <button
        className="bg-purple-700 text-white px-4 py-2 rounded mb-6 w-48 font-bold hover:bg-purple-800 transition mt-12"
        onClick={onsubmitNewChat}
      >
        + New Chat
      </button>
      <div className="flex-1 w-full overflow-y-auto">
        {/* ✅ الحل الصحيح: استخدام isLoading و isInitialLoad */}
        {isLoading && isInitialLoad ? (
          <>
            {[...Array(5)].map((_, i) => (
              <SessionSkeleton key={i} />
            ))}
          </>
        ) : sessions.length === 0 ? (
          <div className="text-white text-center mt-8 px-4">
            <p className="text-gray-300 text-sm">No chat sessions yet</p>
            <p className="text-gray-400 text-xs mt-2">
              Click "New Chat" to start
            </p>
          </div>
        ) : (
          sessions.map((session) => (
            <div
              key={session._id}
              onClick={() => {
                setActiveSessionId(session._id);
                // ✅ حفظ الـ session المحدد في localStorage
                localStorage.setItem("activeSessionId", session._id);
              }}
              className={`w-48 mx-auto mb-2 p-3 rounded text-white cursor-pointer transition flex justify-between items-center
        ${
          activeSessionId === session._id
            ? "bg-purple-800"
            : "bg-[#2a1740] hover:bg-[#3a2560]"
        }`}
            >
              <span className="text-white text-sm truncate">
                {session.title}
              </span>
              <FiTrash
                className="text-red-400 hover:text-red-600 transition ml-2 flex-shrink-0"
                size={18}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteSession(session._id);
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
