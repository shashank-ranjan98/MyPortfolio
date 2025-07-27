import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Nav-menu">
      <img
        src={logo}
        alt="logo"
        style={{ height: "100px", cursor: "pointer" }}
        onClick={() => scrollTo("home")}
      />

      <ul className="ul-list">
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("about")}>About Me</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </ul>

      <div className="nav-connect">
        <button onClick={() => scrollTo("contact")}>Connect with me</button>
      </div>
    </div>
  );
};

export default Navbar;
