import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1>Incident Reporting Tool</h1>
      <ul>
        <li><a href="#report">Report</a></li>
        <li><a href="#incidents">Incidents</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
