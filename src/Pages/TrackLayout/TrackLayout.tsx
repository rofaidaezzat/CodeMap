
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const TrackLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
        <Outlet />
        </div>
        <Footer />
    </div>
  );
};

export default TrackLayout;