import React from "react";
import "./Hero.css";
import p1 from "../../assets/p1.jfif";

const Hero = () => {
  // Scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <>
    <div className="relative overflow-hidden">
      <div className="Hero-comp relative z-10">
        <img src={p1} alt="Shashank" />

        <h1>Hi I am Shashank Ranjan and MERN Stack developer</h1>
        <p>
          Hi, I'm a passionate MERN stack developer with a strong foundation in
          MongoDB, Express.js, React, and Node.js.
        </p>

        <div className="hero-action">
          <div
            className="hero-connect"
            onClick={() => scrollToSection("contact")}
          >
            Connect
          </div>
          <div
            className="hero-resume"
            onClick={() => scrollToSection("resume")}
          >
            Resume
          </div>
        </div>
      </div>
    </div>
   
   </>
  );
};

export default Hero;
