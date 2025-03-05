import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Bell } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import Button from "../Ui/Button";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const{pathname}=useLocation()
const storageKey = "loggedInUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const onLogout=()=>{
  localStorage.removeItem(storageKey)

  setTimeout(()=>{
    location.replace(pathname)// بيجيب الباث الي واقف فيه دلوقتي 
  },1500)
}
  return (
    <nav className="w-full p-3 shadow-md rounded-b-3xl navbar bg-neutral-900 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white font-semibold">
        {/* Logo & Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="src/assets/Header/Rectangle 1938.png"
              alt="Logo"
              className="h-10"
            />
            <img
              src="src/assets/Header/Rectangle 1939.png"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Tracks">Tracks</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/ContactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        {
          userData?(
          <div  className="hidden md:flex space-x-4">
                <Bell size={40} color="white" className="cursor-pointer rounded-sm"/>
                <CircleUserRound color="white" size={40} className="cursor-pointer rounded-sm" />
                <Button className="cursor-pointer" onClick={onLogout}> Logout</Button>

          </div>
          ):(
            // Buttons (Desktop) 
          <div className="hidden md:flex space-x-4">
            <Link
            to="LogIn"
            className="px-4 py-2 border-2 border-white rounded-lg text-center w-20"
          >
            Login
          </Link>
          <Link
            to="signup"
            className="px-4 py-2 rounded-lg w-20 text-center register"
          >
            Signup
          </Link>
          </div>
          )
        }

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
            <NavLink to="/Tracks" onClick={() => setIsOpen(false)}>
              Tracks
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs" onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" onClick={() => setIsOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {
          userData?(
            //
            <div  className="flex flex-col items-center space-y-4 no-underline ">
              <li>
            <NavLink to="/Tracks" onClick={() => setIsOpen(false)}>
                Notification
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs" onClick={() => setIsOpen(false)}>
              My Profile
            </NavLink>
          </li>
            </div>

          ):(
            //Buttons (Mobile)
            <div className="flex flex-col items-center space-y-3 py-4">
          <Link
            to="/LogIn"
            className="px-4 py-2 border-2 border-white rounded-lg text-center w-20"
          >
            Login
          </Link>
          <Link
            to="/SignUp"
            className="px-4 py-2 rounded-lg bg-[#2F174E] text-white w-20 text-center"
          >
            Signup
          </Link>
        </div>
          )
        }
        
      </div>
    </nav>
  );
};

export default Navbar;