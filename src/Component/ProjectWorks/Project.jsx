import React, { useState, useEffect } from "react";
import "./Project.css";

const projects = [
  {
    title: "Weather App",
    description: "A dynamic weather forecast app showing real-time data using OpenWeatherMap API.",
    points: [
      "Built using React and Axios",
      "Responsive UI with custom CSS",
      "Fetches live weather by city name",
    ],
    link: "https://github.com/shashank-ranjan98/WeatherApp",
  },
  {
    title: "Clone of Testyantra Website",
    description: "A pixel-perfect frontend clone of the official Testyantra website.",
    points: [
      "Built using React components and CSS modules",
      "Responsive layout for mobile & desktop",
      "Focus on animations and layout accuracy",
    ],
    link: "https://github.com/shashank-ranjan98/TestYantra",
  },
  {
    title: "Landing Page of WHO",
    description: "Clean and informative landing page designed for World Health Organization concept.",
    points: [
      "HTML5/CSS3 with responsive layout",
      "Used modern layout techniques",
      "Optimized for accessibility and performance",
    ],
    link: "https://your-who-landing-page.com",
  },
  {
    title: "World Atlas",
    description: "React, and custom CSS-based store with authentication, cart, filtering, and search.",
    points: [
      "Firebase Auth + Firestore integration",
      "Fully responsive layout",
      "Used Context API for state management",
    ],
    link: "https://github.com/shashank-ranjan98/WorldAtlas",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animated sections, responsive design, and dark mode support.",
    points: [
      "Built with React + clean design principles",
      "Dark/light theme toggle",
      "Mobile-first responsive design",
    ],
    link: "https://my-portfolio-nu-nine-18.vercel.app",
  },
  {
    title: "Food Blog Platform",
    description: "Users can post food photos, like, comment, and explore based on cuisine/region.",
    points: [
      "Realtime updates with Firestore",
      "Image uploads via Firebase Storage",
      "Interactive UI with filtering",
      "Email.JS library used for email email service"
    ],
    link: "https://xwebheadsha.netlify.app/",
  },
];

const Project = () => {
  const [theme, setTheme] = useState("dark");
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const openModal = (project) => setActiveProject(project);
  const closeModal = () => setActiveProject(null);

  return (
    <section className="project-section">
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="container">
        <h2 className="section-title">Project Insights</h2>
        <p className="section-description">
          A deeper dive into the process, tools, and challenges of selected projects.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              onClick={() => openModal(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <span className="click-hint">Click to open ↗</span>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <ul>
              {activeProject.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-link"
            >
              Visit Project ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
