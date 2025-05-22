import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const ChatbotLayout = () => {
  return (
    <div className="">
      <Navbar bg="bg-[#270C4A]" />
      <Outlet />
    </div>
  );
};

export default ChatbotLayout;
