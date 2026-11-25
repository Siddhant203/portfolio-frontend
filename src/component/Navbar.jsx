import React, { useState } from "react";
import "./Navbar.css";
import profileImage from "../assets/profile.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      {/* Logo */}
      <a href="/" className="navbar-brand-custom">
        <img className="brand-logo" src={profileImage} alt="Siddhant" />

        <span>SIDDHANT</span>
      </a>

      {/* Navigation links */}
      <div className={`nav-pill ${isMenuOpen ? "is-open" : ""}`}>
        <a
          href="#"
          className="nav-link-custom"
          onClick={() => setIsMenuOpen(false)}
        >
          HOME
        </a>

        <a
          href="#about"
          className="nav-link-custom"
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT
        </a>
        <li className="nav-item dropdown nav-link-custom">
          <button
            className="nav-link dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            MORE
          </button>

          <ul className="dropdown-menu dropdown-menu-dark nav-link-custom">
            <li>
              <a
                className="dropdown-item "
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#education"
                onClick={() => setIsMenuOpen(false)}
              >
                EDUCATION
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#services"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </a>
            </li>
          </ul>
        </li>

        <a
          href="#contact"
          className="nav-cta"
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </a>
      </div>
      <button
        className="hamburger-btn"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menue"
        aria-expanded={isMenuOpen}
      >
        <i className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}></i>
      </button>
    </nav>
  );
}
