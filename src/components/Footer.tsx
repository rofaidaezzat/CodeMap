import { Link, NavLink } from "react-router-dom";
import { Facebook, MessageCircleCode, Linkedin, Instagram } from "lucide-react";
import Image from "./Image";

const Footer = () => {
    return (
    <footer className="bg-[#2F174E] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
        {/* First Section */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center mb-4 ">
            <Image
              imageurl="/assets/Header/Rectangle 1938.png"
              alt="Logo"
              className="h-10"
            />
            <Image
              imageurl="/assets/Header/Rectangle 1939.png"
              alt="Logo"
              className="h-10"
            />
          </Link>
          <p className="text-sm leading-relaxed opacity-80">
            The platform provides login and signup for users, along with
            dashboards for instructors and admins to manage courses, track user
            progress, and update content.
          </p>
        </div>

        {/* Second Section  */}
        <div>
          <p className="font-semibold text-lg mb-3">Permalinks</p>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-gray-300 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs" className="hover:text-gray-300 transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/SignUp" className="hover:text-gray-300 transition">
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/LogIn" className="hover:text-gray-300 transition">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/FAQFerMember" className="hover:text-gray-300 transition">
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Third Section  */}
        <div>
          <p className="font-semibold text-lg mb-3">Legal</p>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/PrivacyPolicy"
                className="hover:text-gray-300 transition"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/TermsAndConditions"
                className="hover:text-gray-300 transition"
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/CookiesPolicy"
                className="hover:text-gray-300 transition"
              >
                Cookies Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Fourth Section  */}
        <div>
          <p className="font-semibold text-lg mb-3">Contact Us</p>
          <ul className="space-y-2 text-sm">
            <li>📞 128-470-9314</li>
            <li>✉️ info.CodeMap1@gmail.com</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="cursor-pointer hover:text-gray-400 transition transform hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="cursor-pointer hover:text-gray-400 transition transform hover:scale-110" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="cursor-pointer hover:text-gray-400 transition transform hover:scale-110" />
            </a>
            <a
              href="https://messenger.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleCode className="cursor-pointer hover:text-gray-400 transition transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-8 opacity-80">
        © 2024 - 2025 Codemap. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
