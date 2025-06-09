import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../ProjectsData/projectsData.json';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import './section.css';

const AcademicProjects = () => {
  return (
    <motion.section 
      className="academic-projects background-cards"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="about-heading"
        whileHover={{ scale: 1.05, color: "#a5b4fc" }}
      >
        Academic Projects
      </motion.h2>

      <div className="projects-grid bg-card-grid">
        {projectsData.academicProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-project-card"
            style={{ backgroundImage: `url(${project.image})` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="bg-card-overlay">
              <h3>{project.title}</h3>
              <div className="bg-card-buttons">
                <Link to={`/projects/academic/${index}`} className="view-btn">
                  View More
                </Link>
                <div className="icons">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} className="icon github-icon" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} className="icon live-icon" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AcademicProjects;