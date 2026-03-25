import React from 'react';
import logo from '../assets/logo.png';
 
function Header() {
  return (
<header className="header">
<img src={logo} alt="Logo" className="logo" />
<nav className="menu">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</nav>
</header>
  );
}
 
export default Header;