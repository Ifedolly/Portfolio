import React from "react";
import { NavLink } from "react-router-dom";
import projects from "../projectsData";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">View My Work</h2>

      <div className="projects-grid">
        {projects.map(({ id, name, image, description, detailsLink }) => (
          <NavLink to={detailsLink} key={id} className="project-card">
            <div className="project-image-container">
              <img src={image} alt={name} className="project-image" />
            </div>
            <div className="project-info">
              <h3>{name}</h3>
              <div className="project-desc-row">
                <p className="project-desc">{description}</p>
                <span className="arrow">→</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Projects;
