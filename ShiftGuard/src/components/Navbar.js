// src/components/Navbar.js
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUsers, FaCalendarAlt, FaProjectDiagram, FaExclamationTriangle, FaHome } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">ShiftGuard</Link>
      </h2>
      <ul className="nav-links">
        <li><NavLink to="/" end><FaHome /> Dashboard</NavLink></li>
        <li><NavLink to="/roster"><FaCalendarAlt /> Roster</NavLink></li>
        <li><NavLink to="/planner"><FaProjectDiagram /> Planner</NavLink></li>
        <li><NavLink to="/matrix"><FaUsers /> Matrix</NavLink></li>
        <li><NavLink to="/alerts"><FaExclamationTriangle /> Alerts</NavLink></li>
        <li><NavLink to="/team"><FaUsers /> Team</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
