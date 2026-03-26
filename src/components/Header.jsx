import logo from "../assets/logo.png";
import React, { useRef, useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null); // Wrap both hamburger + menu

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header" ref={wrapperRef}>
      <img src={logo} alt="Logo" className="logo" />
      <div className="company-text">
      <span className="company-name">Kakos Dev</span>
      <span className="company-tagline">Shipping International</span>
    </div>

      <div className="marquee">
  <div className="track">
    <span>
      Reliable Logistics, Real Results
    </span>
    <span>
      Welcome to Kakos Development Ltd for the best logistics services
    </span>
  </div>
</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={handleHamburgerClick}>
        &#9776;
      </div>

      {/* Menu */}
      <nav className={`menu ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        <button className="cta">
  Get a Quote <span>→</span>
</button>
      </nav>
    </header>
  );
}

export default Header;
