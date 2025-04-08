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
      </div>

      {/* Top Line */}
      <div className="line"/>

      {/* Navbar */}
      <nav className="navbar">
        <NavLink to="/#projects" className="nav-link">Projects</NavLink>
        <NavLink to="/#about" className="nav-link">About</NavLink>
        <NavLink to="/#contact" className="nav-link">Contact</NavLink>
      </nav>

      {/* Bottom Line */}
      <div className="line"/>
    </header>
  )
}

export default Header