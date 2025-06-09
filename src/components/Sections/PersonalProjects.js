import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../ProjectsData/projectsData.json';
import './section.css';

const PersonalProjects = () => {
  return (
    <section className="academic-projects background-cards">
      <h2 className="about-heading">Personal Projects</h2>
      <div className="projects-grid bg-card-grid">
        {projectsData.personalProjects.map((project, index) => (
          <div
            key={index}
            className="bg-project-card"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="bg-card-overlay">
              <h3>{project.title}</h3>
              <div className="bg-card-buttons">
                <Link to={`/projects/personal/${index}`} className="view-btn">View More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalProjects;
