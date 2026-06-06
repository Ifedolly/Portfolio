import React from "react";
import "../styles/ContactModal.css";
import profileImg from "/images/code1.jpg"; // temporary — replace with your real profile image later

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* LEFT SIDE */}
        <div className="modal-left">
          {/* <img src={profileImg} alt="Profile" className="profile-img" /> */}

          <h2>Got something in mind?</h2>

          {/* <p className="tagline">
            Frontend Developer focused on creating responsive, user-friendly web experiences.
          </p> */}

          <div className="contact-links">
            <a href="mailto:ifemidolapooo@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/ifedolapo-olawale" target="_blank">LinkedIn</a>
            <a href="https://github.com/Ifedolly" target="_blank">Github</a>
            <a href="https://tiktok.com" target="_blank">TikTok</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="modal-right">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* Web3Forms Access Key (you will replace this) */}
            <input type="hidden" name="access_key" value="b0428d6b-f0ec-42f5-ab1b-cf744a4b7306" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">SEND MESSAGE <span className="arrow">→</span></button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;