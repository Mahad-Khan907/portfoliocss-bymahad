"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../app/styles/hero.css";

const Hero = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero-container">
      <div className="menu-button-container">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="menu-button"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <ul className="hero-ul">
        <Link href="/">
          <li className="hero-item">Home</li>
        </Link>
        <Link href="/about">
          <li className="hero-item">About</li>
        </Link>
        <Link href="/skills">
          <li className="hero-item">Skills</li>
        </Link>
        <Link href="/education">
          <li className="hero-item">Education</li>
        </Link>
        <Link href="/project">
          <li className="hero-item">Project</li>
        </Link>
        <Link href="/contact">
          <li className="hero-item">Contact</li>
        </Link>
      </ul>

      <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <Link href="/">
          <li className="mobile-item">Home</li>
        </Link>
        <Link href="/about">
          <li className="mobile-item">About</li>
        </Link>
        <Link href="/skills">
          <li className="mobile-item">Skills</li>
        </Link>
        <Link href="/education">
          <li className="mobile-item">Education</li>
        </Link>
        <Link href="/project">
          <li className="mobile-item">Project</li>
        </Link>
        <Link href="/contact">
          <li className="mobile-item">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Hero;
