import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      {/* Logo */}
      <div className="logo-container">
        <NavLink to="/" className="logo">
          PORTFOLIO
        </NavLink>
        <p className="subtext">FRONT-END DEVELOPMENT</p>
      </div>

      {/* Top Line */}
      <div className="line"/>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Bottom Line */}
      <div className="line"/>
    </header>
  )
}

export default Header