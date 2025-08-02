import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-blue-300 to-purple-500 w-full p-4 fixed top-0 left-0 z-50 ">
      <nav className="max-w-7xl flex justify-between">
        <div className="text-2xl font-bold text-white">Portfolio</div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/cv"
            className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            CV
          </Link>

          <Link
            to="/contact"
            className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
          {/* <Link
            to="/testing"
            className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Testing
          </Link> */}

          {/* <Link
            to="/policy"
            className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Privacy Policy
          </Link> */}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-gradient-to-r from-blue-400  to-purple-400 w-1/2 shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="p-4 flex flex-col space-y-4">
          <button
            onClick={toggleMenu}
            className="self-end text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Link
            to="/"
            className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
              location.pathname === "/" ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/cv"
            className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            Cv
          </Link>

          <Link
            to="/contact"
            className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
