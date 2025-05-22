import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Bell } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import ProfileMenuModal from "./ProfileMenuModal";
import Logo1 from "@/assets/Header/Rectangle 1938.png";
import Logo2 from "@/assets/Header/Rectangle 1939.png";
interface INavbarProps {
  bg?: string;
}
const Navbar = ({ bg }: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  return (
    <nav
      className={`w-full p-3 shadow-md rounded-b-3xl ${bg} bg-neutral-900 fixed top-0 left-0 right-0 z-50`}
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tracks">Tracks</NavLink>
            </li>
            <li>
              <NavLink to="/tasks">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
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
                <CircleUserRound
                  color="white"
                  size={30}
                  className="cursor-pointer rounded-sm"
                />
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
        className={`absolute top-16 left-0 w-full bg-[#5D5A6F] text-white md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tracks" onClick={() => setIsOpen(false)}>
              Tracks
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs" onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactUs" onClick={() => setIsOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {userData ? (
          //
          <div className="flex flex-col items-center space-y-4 no-underline ">
            <li>
              <NavLink to="/notification" onClick={() => setIsOpen(false)}>
                Notification
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" onClick={() => setIsOpen(false)}>
                My Profile
              </NavLink>
            </li>
          </div>
        ) : (
          //Buttons (Mobile)
          <div className="flex flex-col items-center space-y-3 py-4">
            <Link
              to="/login"
              className="px-4 py-2 border-2 border-white rounded-lg text-center w-20"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-[#2F174E] text-white w-20 text-center"
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
