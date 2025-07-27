import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import p1 from "../../assets/p1.jfif"
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import Project from "../ProjectWorks/Project";
import Eyes from "../Eyes/Eyes";

const skillData = [
  { icon: <FaHtml5 />, label: "HTML/CSS" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaReact />, label: "React JS" },
  { icon: <FaNodeJs />, label: "Node JS" },
  { icon: <SiExpress />, label: "Express JS" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <FaDatabase />, label: "SQL" },
  { icon: <SiNextdotjs />, label: "Next JS" },
];

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-title">
          <h1>About me</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I am a passionate MERN Stack Developer with a keen interest in
            building dynamic, responsive web applications. I enjoy solving
            problems and constantly learning new technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            My core strengths lie in full-stack development with MongoDB,
            Express, React, and Node.js, combined with a solid foundation in
            frontend design and UI logic.<br/><br/><br/><br/>
            <h1>Skills</h1>
          </motion.p>
        </div>
      </div>

      <div className="about-section">
        <div className="abou-left">
          <img
            src={p1}
            alt="Profile"
          />
        </div>

        <div className="about-right">
          <div className="about-skill">
            {skillData.map((skill, index) => (
              <motion.div
                className="skill"
                key={skill.label}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.label}</p>
                <hr />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Eyes/>
      <Project/>
    </div>
  );
};

export default About;
