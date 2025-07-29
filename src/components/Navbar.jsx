import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1>Sampada<span>.</span></h1>
        </Link>

        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar styles are in index.css */}
    </nav>
  )
}

export default Navbar