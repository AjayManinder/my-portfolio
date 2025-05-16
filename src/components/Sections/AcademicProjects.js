import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../ProjectsData/projectsData.json';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import "./section.css";

const AcademicProjects = () => {
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
          Academic Projects  
            </motion.h2>

      <div className="projects-grid">
        {projectsData.academicProjects.map((project, index) => (
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
        
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
           

            <div className="card-content">
              <div className="card-header">
                <h3>{project.title}</h3>
              </div>
              <div className="card-footer">
                <motion.div
                  className="view-more-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link to={`/projects/academic/${index}`}>
                    View More
                  </Link>
                </motion.div>

                <div className="project-links">
 
    <motion.a 
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      aria-label="GitHub repository"
    >
      <Github size={22} className="icon github-icon" >
        {project.github}
        </Github>
    </motion.a>


    <motion.a 
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Live demo"
    >
      <ExternalLink size={22} className="icon live-icon" >
        {project.live}
        </ExternalLink>
    </motion.a>

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