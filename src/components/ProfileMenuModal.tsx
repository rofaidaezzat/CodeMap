
import { axiosInstance } from "@/config/axios.config";
import { Link } from "react-router-dom";
type IProfileMenuModalProps = {
    isOpen: boolean;
    onClose: () => void;
};


const ProfileMenuModal = ({ isOpen, onClose }: IProfileMenuModalProps) => {
    
    if (!isOpen) return null;
    ;


    const onLogout = async () => {
        try {
            await axiosInstance.post("/auth/logout");
            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("accessToken");
            
            setTimeout(() => {
            location.replace('/');
            }, 1500);
        } catch (err) {
            console.error("Logout failed", err);
            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("accessToken");
            location.replace("/login");
        }
        };

    return (
    <div className="relative inline-block text-left">
        <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
        ></div>
      {/* Modal Dropdown */}
    <div className="absolute gap-2 flex flex-col mt-2 w-56 right-[-50px] rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 text-black p-2">
        <Link
            to="/Profile"
            className="w-full border-2 border-gray-400 text-left flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
        >
            <img
            src="https://via.placeholder.com/30"
            className="w-7 h-7 rounded-full"
            alt="profile small"
            />
            My profile
        </Link>
        <Link
            to="/settings"
            className="w-full border-2 border-gray-400 text-left flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
        >
            <span className="text-lg">⚙️</span> Settings
        </Link>
        <button
            className="w-full text-left flex items-center gap-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={onLogout}
        >
        <span className="text-lg">↩️</span> Log Out
        </button>
        <div className="text-center text-xs text-gray-400 pt-2">© CODEMAP</div>
        </div>
    </div>
    );
};

export default ProfileMenuModal;