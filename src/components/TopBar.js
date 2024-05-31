import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="logo">Abuzar Shaikh</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default TopBar;
