import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out">
      <nav className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">My Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-white hover:text-yellow-300 transition-colors duration-300 ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
