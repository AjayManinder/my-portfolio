import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './section.css';

const expertiseList = [
  "Building responsive UI with React.js, Next.js, and TypeScript.",
  "Performance optimization via lazy loading, caching, and code splitting.",
  "API integration and state management with Redux and Context API.",
  "Accessibility (WCAG 2.1), cross-browser support, mobile-first design.",
  "Test-Driven Development using Jest and API testing with Postman.",
  "CI/CD pipeline enhancement with GitHub Actions and Jenkins.",
  "Cloud-native deployment on AWS: EC2, Lambda, S3, Amplify.",
  "Version control with Git and GitHub, including PR workflows.",
];

const About = () => {
  return (
    <motion.section
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="about-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
      >
        <motion.h2
          className="about-heading"
          whileHover={{ scale: 1.05, color: "#a5b4fc" }}
        >
       Professional Summary  
        </motion.h2>

        <motion.p className="about-description">
          Frontend Software Engineer with 3+ years of experience designing, developing, and maintaining scalable, high-performance web applications and user interfaces using React.js, Next.js, and TypeScript. Skilled in building large-scale frontend architectures with a focus on performance optimization through code splitting, lazy loading, and caching strategies. Proven ability to deliver production-ready features for high-traffic platforms, improving customer experience by 30% through responsive design, cross-browser compatibility, and WCAG 2.1 accessibility compliance. Experienced in API integration, test-driven development (TDD) using Jest and Postman, and enhancing CI/CD pipelines, reducing deployment times by up to 40%. Proficient in cloud-native deployments on AWS (EC2, Lambda, S3) and version control using Git.
        </motion.p>

        <motion.ul
          className="expertise-list"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
        >
          {expertiseList.map((item, idx) => (
            <motion.li
              key={idx}
              className="expertise-item"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <CheckCircle className="check-icon" size={20} />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default About;
