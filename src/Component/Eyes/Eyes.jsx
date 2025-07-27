import React, { useEffect } from "react";
import "./Eyes.css";

const Eyes = () => {
  useEffect(() => {
    const moveArea = document.querySelector(".move-area");
    const eyes = document.querySelectorAll(".eye");

    const handleMouseMove = (event) => {
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const rad = Math.atan2(event.pageX - eyeX, event.pageY - eyeY);
        const rot = (rad * (180 / Math.PI) * -1) + 180;

        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    moveArea.addEventListener("mousemove", handleMouseMove);
    return () => moveArea.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="move-area bg-black/80 backdrop-blur-sm">
      <div className="eyes-container">
        <div className="eye" />
        <div className="eye" />
      </div>
    </section>
  );
};

export default Eyes;
