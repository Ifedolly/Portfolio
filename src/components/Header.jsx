import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const controlHeader = () => {
    if (window.scrollY === 0) {
      setShowHeader(true);
    } else if (window.scrollY > lastScrollY.current) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  return (
    <header className={`header ${showHeader ? "header-show" : "header-hide"}`}>
      {/* Logo */}
      <div className="logo-container">
        <NavLink to="/" className="logo">
          PORTFOLIO
        </NavLink>
        <p className="subtext">SOFTWARE ENGINEERING</p>
      </div>

      {/* Top Line */}
      <div className="line" />

      {/* Navbar */}
      <nav className="navbar">
        <NavLink to="/#projects" className="nav-link">Projects</NavLink>
        <NavLink to="/#about" className="nav-link">About</NavLink>
        <NavLink to="/#contact" className="nav-link">Contact</NavLink>
      </nav>

      {/* Bottom Line */}
      <div className="line" />
    </header>
  );
};

export default Header;
