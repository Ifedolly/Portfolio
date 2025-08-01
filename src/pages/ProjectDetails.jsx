import React from "react";
import { useParams } from "react-router-dom";
import { projectsDetailsData } from "../data/projectsDetailsData";
import "../styles/ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsDetailsData.find((item) => item.slug === slug);

  if (!project) {
    return <div className="project-not-found">Project not found.</div>;
  }

  return (
    <div className="project-details">
      {/* Header section */}
      <div className="project-header">
        <div className="project-header-left">
          <h1 className="project-title">{project.name}</h1>
          <p className="project-one-liner">{project.oneLiner}</p>
        </div>
        <div className="project-header-right">
          <p className="project-intro">{project.intro}</p>
        </div>
      </div>

      {/* Main and secondary images */}
      <div className="project-images">
        <img src={project.mainImage} alt="Main" className="main-image" />
        <div className="secondary-images">
          <img src={project.image2} alt="Secondary 1" className="secondary-image" />
          <img src={project.image3} alt="Secondary 2" className="secondary-image" />
        </div>
      </div>

      {/* Sections */}
      <div className="project-content">
        <section className="project-section">
          <h2>About the Website</h2>
          <p>{project.about}</p>
        </section>

        <div className="device-views">
          <img src={project.laptopView} alt="Laptop view" className="device-image" />
          <img src={project.mobileView} alt="Mobile view" className="device-image" />
        </div>

        <section className="project-section">
          <h2>Challenges I Faced</h2>
          <p>{project.challenges}</p>
        </section>

        <section className="project-section">
          <h2>How I Solved Them</h2>
          <p>{project.solution}</p>
        </section>

        <section className="project-section">
          <h2>Tools Used</h2>
          <ul>
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </section>

        <section className="project-section">
          <h2>Future Updates</h2>
          <p>{project.futureUpdates}</p>
        </section>

        <div className="project-link">
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            View Live Project
          </a>
          <span className="arrow">→</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
