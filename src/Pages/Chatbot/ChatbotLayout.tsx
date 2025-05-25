import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const ChatbotLayout = () => {
  return (
    <div className="">
      <Navbar bg="bg-[#371F5A]" />
      <Outlet />
    </div>
  );
};

export default ChatbotLayout;
