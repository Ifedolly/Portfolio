import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Bring Your Vision — I’ll Code It</h2>
      <p className="contact-message">
        Whether it’s a job opportunity, a project idea, or a consultation request — I’d love to hear from you.
      </p>

      

      <div className="social-links">
        <a href="mailto:ifemidolapooo@gmail.com" className="email-link">
        Email
        </a>
        <a href="https://www.linkedin.com/in/ifedolapo-olawale" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Ifedolly" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.instagram.com/thedollypuppy" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;