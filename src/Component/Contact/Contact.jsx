import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../../assets/logo.png";
// import Resume from "../Resume/Resume"

import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import "./Contact.css"
const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5z3zgr6",
        "template_edvryys",
        form.current,
        "SQr-OmXlXJ-dHbD4D"
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          setError("");
          form.current.reset();
        },
        (error) => {
          setError("Failed to send message. Try again.");
          setMessage("");
        }
      );
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (

    <>

    <div className={darkMode ? "contact-dark" : "contact-light"}>
      <div className="floating-buttons">
        <button onClick={toggleDarkMode}>🌓</button>
        <button onClick={scrollToTop}><FaArrowUp /></button>

        
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-left">
          <h2>Let's Connect</h2>
          <p>Email: your@email.com</p>
          <p>Phone: +91-1234567890</p>
          <p>Location: Bangalore, India</p>
          <img src={logo} alt="Logo" className="contact-logo"class="contact-logo floating" />
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required />
          <button type="submit">Send</button>
          {message && <p className="success">{message}</p>}
          {error && <p className="error">{error}</p>}
        </form>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Shashank’s Portfolio</p>
        <div className="socials">
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank"><FaGithub /></a>
        </div>
        {/* <Resume/> */}
      </footer>
    </div>
    
    </>
    
    
  );
};

export default Contact;
