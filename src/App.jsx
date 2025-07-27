import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Resume from "./Component/Resume/Resume"

const App = () => {
  return (
    <>
      <div>
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
 <section id="resume">
          <Resume />
        </section>
        
      </div>
    </>
  );
};

export default App;
