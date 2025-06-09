import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master's in Computer Science",
      school: 'University of Central Missouri, USA',
      cgpa: 'CGPA: 3.30 / 4',
      year: '2022',
    },
    {
      degree: "Bachelor's in Computer Science",
      school: 'Saveetha School of Engineering, India',
      cgpa: 'CGPA: 8.063 / 10',
      year: '2020',
    },
  ];

  return (
    <section className="education-section">
      <motion.h2
        className="education-heading"
        whileHover={{ scale: 1.05, color: "#a5b4fc" }}
      >
        Education
      </motion.h2>

      <div className="education-grid">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <p>{item.cgpa}</p>
            <p className="education-year">{item.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
