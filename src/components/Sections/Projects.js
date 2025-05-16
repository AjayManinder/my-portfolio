import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../ProjectsData/projectsData.json';
import { Link } from 'react-router-dom';
import './section.css';

const Projects = () => {
  return (
    <motion.section 
      className="academic-projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="about-heading"
        whileHover={{ scale: 1.05, color: "#a5b4fc" }}
      >
        Professional Projects
      </motion.h2>

      <div className="projects-grid">
        {projectsData.professionalProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, type: "spring" }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}
          >
            <div className="project-card-content">
              <div className="card-header">
                <h3>{project.title}</h3>
              </div>

              <p className="project-duration"><strong>{project.duration}</strong></p>

              <p className="project-preview">
                {project.details[0].length > 100 
                  ? `${project.details[0].substring(0, 100)}... `
                  : `${project.details[0]} `
                }
              </p>

              <div className="card-footer">
                <motion.div
                  className="view-more-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link to={`/projects/professional/${index}`}>
                    View More
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
