import { IErrorResponse } from "@/interfaces";
import React, { useEffect } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { FiTrash } from "react-icons/fi";
import CloseChatbot from "@/components/CloseChatbot";
import SessionSkeleton from "@/components/SessionSkeleton";

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
  onCloseSidebar: () => void; // ✅ جديدة
  isOpen: boolean; // ✅ جديد
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
  const getSessions = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const { data } = await axios.get(
        "https://b684-102-189-220-226.ngrok-free.app/chatbot/sessions",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setSessions(data.data); // تحديث الحالة
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;

      toast.error(`${errorObj.message}`, {
        position: "bottom-center",
        duration: 4000,
      });
    }
  };

  useEffect(() => {
    getSessions();
  }, []);

  const onsubmitNewChat = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const { status, data: resData } = await axios.post(
        "https://b684-102-189-220-226.ngrok-free.app/chatbot/sessions",
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
        onNewChat(sessionId); // ✅ هنا هننده على prop مباشرة
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

        await getSessions(); // ⬅️ لكن هنا هتعمل setSessions من الـ props
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`${errorObj.message}`, {
        position: "bottom-center",
        duration: 4000,
      });
    }
  };
  const handleDeleteSession = async (id: string) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const { data } = await axios.delete(
        `https://b684-102-189-220-226.ngrok-free.app/chatbot/sessions/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      toast.success(data.message || "Session deleted");

      // تحدث قائمة السيشنز بعد الحذف
      getSessions();
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`${errorObj.message}`, {
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
        {sessions.length === 0 ? (
          <>
            {[...Array(5)].map((_, i) => (
              <SessionSkeleton key={i} />
            ))}
          </>
        ) : (
          sessions.map((session) => (
            <div
              key={session._id}
              onClick={() => setActiveSessionId(session._id)}
              className={`w-48 mx-auto mb-2 p-3 rounded text-white cursor-pointer transition flex justify-between items-center
        ${
          activeSessionId === session._id
            ? "bg-purple-800"
            : "bg-[#2a1740] hover:bg-[#3a2560]"
        }`}
            >
              <span className="text-white">{session.title}</span>
              <FiTrash
                className="text-red-400 hover:text-red-600 transition ml-2"
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
