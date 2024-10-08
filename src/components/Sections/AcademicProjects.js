import React from 'react';
import projectsData from '../ProjectsData/projectsData.json';
import { Link } from 'react-router-dom';
import "./section.css";
const AcademicProjects = () => {
  return (
<>
    <h2>Academic Projects</h2>
    <section className="academic-projects">
      <ul>
        {projectsData.academicProjects.map((project, index) => (
          <li className='lists' key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <Link to={`/projects/academic/${index}`}>
              <button className='project-load-details-button'>View More</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
    </>
  );
};

export default AcademicProjects;