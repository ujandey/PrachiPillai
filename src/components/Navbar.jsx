import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)
  const linksRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    // close menu on route change
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(e) {
      if (!hamburgerRef.current || !linksRef.current) return
      if (
        !hamburgerRef.current.contains(e.target) &&
        !linksRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav className="expanding-navbar">
      <div className="logo">
        <img src={`${import.meta.env.BASE_URL}assets/logo/logo.png`} alt="Prachi Pillai Logo" />
      </div>

      <div
        className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
        id="hamburger-menu"
        onClick={() => setMenuOpen((v) => !v)}
        ref={hamburgerRef}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>

      <ul
        className={`nav-links ${menuOpen ? 'active' : ''}`}
        id="nav-links"
        ref={linksRef}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/hire-me" className="hire-btn">Hire me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

