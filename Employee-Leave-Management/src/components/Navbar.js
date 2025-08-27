import React from "react";
import { FaHome, FaUserAlt, FaBell } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Leave Management System</div>
      <ul className="nav-links">
        <li><FaHome className="icon" /> Home</li>
        <li><FaUserAlt className="icon" /> Profile</li>
        <li><FaBell className="icon" /> Notifications</li>
      </ul>
    </nav>
  );
};

export default Navbar;
