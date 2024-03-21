import React, { useState } from "react";
import { Link, Element } from "react-router-dom";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="container-fluid">
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className={isOpen ? "navbar-links active" : "navbar-links"}>
            <div className="navbar-logo">E-Waste Management System</div>
            <a href="#home" onClick={toggleNavbar}>
              <span class="glyphicon glyphicon-home"></span>Home
            </a>
            <a href="#about" onClick={toggleNavbar}>
              <span class="glyphicon glyphicon-tasks"></span>About
            </a>
            <a href="#services" onClick={toggleNavbar}>
              <span class="glyphicon glyphicon-globe"></span>Services
            </a>
            <a href="#contact" onClick={toggleNavbar}>
              <span class="glyphicon glyphicon-phone-alt"></span>Contact
            </a>
          </div>
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <button className="btn btn-link">
              <span
                className={
                  isOpen
                    ? "glyphicon glyphicon-remove"
                    : "glyphicon glyphicon-menu-hamburger"
                }
              ></span>
            </button>
          </div>
        </div>
      </nav>
      <div class="container" id="home">
        <h1>This Is Home section</h1>
        <div className="admin-button">
          <button class="btn btn-primary">Login</button>
          <button class="btn btn-primary" style={{ marginLeft: "20px" }}>
            Signup
          </button>
        </div>
      </div>
      <section class="container" id="about">
        <h1>This Is About section</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div class="card" style={{ marginLeft: "20px" }}>
            <h4>Images</h4>
          </div>
        </div>
        <div class="card" style={{ marginLeft: "100px" }}>
          <h4>Images</h4>
        </div>
      </section>

      <section class="container" id="services">
        <h1>This Is Services section</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div class="card" style={{ marginLeft: "20px" }}>
            <h4>Images</h4>
          </div>
          <div class="card" style={{ marginLeft: "20px" }}>
            <h4>Images</h4>
          </div>
        </div>
      </section>

      <div class="container" id="contact">
        <h1>This Is Contact section</h1>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <div class="card" style={{ width: "18px", marginLeft: "100px" }}>
            <div class="card-header">Social Media</div>
          </div>
          <div class="card" style={{ width: "18px", marginLeft: "100px" }}>
            <div class="card-header">Phone</div>
          </div>
          <div class="card" style={{ width: "18px", marginLeft: "100px" }}>
            <div class="card-header">General Inquries</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
