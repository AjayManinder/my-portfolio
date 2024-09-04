import React from 'react';
import projectsData from '../ProjectsData/projectsData.json';
import { Link } from 'react-router-dom';
import './section.css';
const Projects = () => {
  return (
    <section className="projects">
      <h2>Professional Projects</h2>
      <ul>
        {projectsData.professionalProjects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p><strong>{project.duration}</strong></p>
            <ul>
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <Link to={`/projects/professional/${index}`}>
              <button className='project-load-details-button'>View More</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
