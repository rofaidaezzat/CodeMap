import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Bell, CircleUserRound } from "lucide-react";
import ProfileMenuModal from "./ProfileMenuModal";
import Logo1 from "@/assets/Header/Rectangle 1938.png";
import Logo2 from "@/assets/Header/Rectangle 1939.png";
import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";
interface INavbarProps {
  bg?: string;
}
interface IUser {
  profile_image: string;
}
const Navbar = ({ bg }: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const IdUser = userData && userData.id ? userData.id : null;
  const getUserById = async (): Promise<IUser> => {
    if (!IdUser) throw new Error("No User ID Provided");
    const { data } = await axiosInstance.get(`users/${IdUser}`);
    return data;
  };

  // fetch image from database
  const { data } = useQuery({
    queryKey: ["oneUser", IdUser],
    queryFn: getUserById,
    enabled: !!IdUser,
  });
  const onLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("accessToken");

      setTimeout(() => {
        location.replace("/");
      }, 1500);
    } catch (err) {
      console.error("Logout failed", err);
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("accessToken");
      location.replace("/login");
    }
  };
  return (
    <nav
      className={`w-full p-3 shadow-md rounded-b-3xl ${bg} fixed top-0 left-0 right-0 z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white font-semibold">
        {/* Logo & Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo1} alt="Logo" className="h-10" />
            <img src={Logo2} alt="Logo" className="h-10" />
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors duration-200 ${
                    isActive
                      ? " text-[#bd97f2] underline"
                      : " hover:text-[#bd97f2]"
                  }
                  `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tracks"
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors duration-200 ${
                    isActive
                      ? " text-[#bd97f2] underline"
                      : " hover:text-[#bd97f2]"
                  }
                  `
                }
              >
                Tracks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors duration-200 ${
                    isActive
                      ? " text-[#bd97f2] underline"
                      : " hover:text-[#bd97f2]"
                  }
                  `
                }
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors duration-200 ${
                    isActive
                      ? " text-[#bd97f2] underline"
                      : " hover:text-[#bd97f2]"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors duration-200 ${
                    isActive
                      ? " text-[#bd97f2] underline"
                      : " hover:text-[#bd97f2]"
                  }
                  `
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {userData ? (
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/notification">
              <Bell
                size={30}
                color="white"
                className="cursor-pointer rounded-sm"
              />
            </Link>
            <div className="relative">
              <button onClick={() => setIsOpenModal(!isOpenModal)}>
                {data && data.profile_image ? (
                  <img
                    src={`https://b684-102-189-220-226.ngrok-free.app/${data.profile_image.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover cursor-pointer border-2 border-white"
                  />
                ) : (
                  <CircleUserRound
                    color="white"
                    size={30}
                    className="cursor-pointer rounded-sm"
                  />
                )}
              </button>
              {isOpenModal && (
                <div className="absolute right-0 mt-2 z-50">
                  <ProfileMenuModal
                    isOpen={isOpenModal}
                    onClose={() => setIsOpenModal(false)}
                  />
                </div>
              )}
            </div>

            {/* <Button className="cursor-pointer" onClick={onLogout}>
              {" "}
              Logout
            </Button> */}
          </div>
        ) : (
          // Buttons (Desktop)
          <div className="hidden md:flex space-x-4 ">
            <Link
              to="/login"
              className="px-4 py-2 border-2 border-white rounded-lg text-center w-20"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg w-20 text-center register"
            >
              Signup
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}

      <div
        className={`absolute top-16 left-0  w-[300px] min-h-screen bg-[#371F5A] text-white md:hidden transition-all duration-300 ease-in-out  ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full hidden"
        }`}
      >
        <ul className="flex flex-col items-start p-5 space-y-4 py-4">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-1 rounded font-medium  transition-colors duration-200 w-full block ${
                  isActive ? " text-[#bd97f2]" : " hover:text-[#bd97f2]"
                }
                `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tracks"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-1 rounded transition-colors font-medium  duration-200 w-full block ${
                  isActive ? " text-[#bd97f2]" : " hover:text-[#bd97f2]"
                }
                `
              }
            >
              Tracks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-1 rounded transition-colors font-medium  duration-200 w-full block ${
                  isActive ? " text-[#bd97f2]" : " hover:text-[#bd97f2]"
                }
                `
              }
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-1 font-medium  rounded transition-colors duration-200 w-full block ${
                  isActive ? " text-[#bd97f2]" : " hover:text-[#bd97f2]"
                }
                `
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-1 font-medium  rounded transition-colors duration-200 w-full block ${
                  isActive ? " text-[#bd97f2]" : " hover:text-[#bd97f2]"
                }
                `
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {userData ? (
          <ul className="flex flex-col items-center space-y-2 no-underline w-full px-2">
            <li className="flex items-center gap-2 w-full">
              <CircleUserRound size={20} />
              <NavLink to="/Profile" onClick={() => setIsOpen(false)} className="flex-1 py-2">
                My Profile
              </NavLink>
            </li>
            <li className="flex items-center gap-2 w-full">
              <Bell size={20} />
              <NavLink to="/notification" onClick={() => setIsOpen(false)} className="flex-1 py-2">
                Notification
              </NavLink>
            </li>
            <li className="flex items-center gap-2 w-full">
              <span className="text-lg">⚙️</span>
              <NavLink to="/settings" onClick={() => setIsOpen(false)} className="flex-1 py-2">
                Settings
              </NavLink>
            </li>
            <li className="flex items-center gap-2 w-full">
              <button
                className="w-full text-left flex items-center gap-2 p-2 text-white rounded-md bg-red-700 hover:bg-red-600 transition-colors"
                onClick={onLogout}
              >
                <span className="text-lg">↩️</span> Log Out
              </button>
            </li>
          </ul>
        ) : (
          //Buttons (Mobile)
          <div className="flex flex-col items-start  p-5 space-y-3 py-2">
            <Link
              to="/login"
              className="px-4 py-2 border-2 border-white rounded-lg text-center w-20"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-[#ffff] text-black w-20 text-center"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
