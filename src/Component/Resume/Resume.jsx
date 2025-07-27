import React, { useState } from "react";
import "./Resume.css";

const ResumeCard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleBackdropClick = (e) => {
    if (e.target.className === "resume-modal") closeModal();
  };

  return (
    <section className="resume-section">
      <h2 className="resume-title">📄 My Resume</h2>

      <div className="resume-card-wrapper">
        <div className="resume-card" onClick={openModal}>
          <img
            src="/resume-preview.png"
            alt="Resume Preview"
            className="resume-image"
          />
          <div className="resume-hover">
            <span>🔍 Tap to View</span>
          </div>
        </div>

        <a href="/Shashank_Resume.pdf" download className="download-btn">
          ⬇️ Download PDF
        </a>
      </div>

      {showModal && (
        <div className="resume-modal" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close">
              ✖
            </button>
            <iframe
              src="/Shashank_Resume.pdf"
              title="Resume Viewer"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeCard;
