import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Technologies.css';

const Technologies = () => {
  const [activeTech, setActiveTech] = useState(null);
  const softColors = ["#E0F7FA", "#FCE4EC", "#FFF8E1", "#E8F5E9", "#F3E5F5"];

  const techStack = {
    frontend: [
      { name: "React.js", level: 90, color: "#61DAFB" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "Vue.js", level: 80, color: "#4FC08D" },
      { name: "TypeScript", level: 88, color: "#3178C6" },
      { name: "JavaScript", level: 95, color: "#F7DF1E" },
      { name: "HTML5", level: 98, color: "#E34F26" },
      { name: "CSS3", level: 95, color: "#1572B6" },
      { name: "Tailwind CSS", level: 85, color: "#38B2AC" },
      { name: "Material-UI", level: 80, color: "#0081CB" },
      { name: "jQuery", level: 75, color: "#0769AD" },
      { name: "JSON", level: 90, color: "#FF9900" },
      { name: "Redux", level: 85, color: "#764ABC" },
      { name: "SASS", level: 80, color: "#CD6799" },
      { name: "Babel", level: 70, color: "#F9DC3E" },
      { name: "WCAG 2.1", level: 75, color: "#000000" },
      { name: "WordPress", level: 70, color: "#21759B" },
      { name: "Vanilla JS", level: 80, color: "#F0DB4F" }
    ],
    backend: [
      { name: "Node.js", level: 88, color: "#68A063" },
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "Java", level: 75, color: "#007396" },
      { name: "Python (Flask)", level: 70, color: "#3776AB" },
      { name: "REST APIs", level: 85, color: "#E44D26" },
      { name: "GraphQL", level: 75, color: "#E10098" },
      { name: "Microservices", level: 80, color: "#00A6ED" }
    ],
    cloud: [
      { name: "AWS", level: 85, color: "#FF9900" },
      { name: "S3", level: 80, color: "#569A31" },
      { name: "Lambda", level: 75, color: "#FF9900" },
      { name: "EC2", level: 70, color: "#FF9900" },
      { name: "Amplify", level: 65, color: "#F78C40" },
      { name: "IAM", level: 70, color: "#232F3E" },
      { name: "Docker", level: 85, color: "#2496ED" },
      { name: "Kubernetes", level: 80, color: "#326CE5" },
      { name: "Jenkins", level: 75, color: "#D33833" },
      { name: "GitHub Actions", level: 70, color: "#24292E" },
      { name: "CI/CD", level: 85, color: "#28A745" },
      { name: "Terraform", level: 75, color: "#623CE4" }
    ],
    database: [
      { name: "MongoDB", level: 85, color: "#47A248" },
      { name: "MySQL", level: 80, color: "#4479A1" },
      { name: "PostgreSQL", level: 80, color: "#336791" },
      { name: "Firebase", level: 75, color: "#FFCA28" },
      { name: "Mongoose", level: 70, color: "#880000" },
      { name: "Prisma", level: 75, color: "#0C344B" }
    ],
    mobile: [
      { name: "React Native", level: 80, color: "#61DAFB" },
      { name: "Android Studio", level: 70, color: "#3DDC84" }
    ],
    testing: [
      { name: "Jest", level: 80, color: "#99425B" },
      { name: "Cypress", level: 75, color: "#17202C" },
      { name: "Postman", level: 85, color: "#FF6C37" },
      { name: "SonarQube", level: 70, color: "#4E9BCD" },
      { name: "Selenium", level: 70, color: "#43B02A" }
    ],
    others: [
      { name: "Python", level: 80, color: "#3776AB" },
      { name: "ChatGPT API", level: 70, color: "#10A37F" },
      { name: "Transformers", level: 65, color: "#FFB800" },
      { name: "NLP", level: 75, color: "#7F8C8D" },
      { name: "Git", level: 90, color: "#F05032" },
      { name: "JIRA", level: 85, color: "#0052CC" },
      { name: "Agile/Scrum", level: 80, color: "#E44D26" },
      { name: "WebSockets", level: 75, color: "#8E44AD" },
      { name: "OAuth 2.0", level: 70, color: "#2C3E50" }
    ]
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { 
      y: -200,
      rotate: 180,
      opacity: 0 
    },
    show: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.section 
      className="technologies"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={container}
    >
          <motion.h2 className="about-heading" whileHover={{ scale: 1.05, color: "#a5b4fc" }}>
                Technical Skills
              </motion.h2>
      {Object.entries(techStack).map(([category, technologies]) => (
        <div key={category} className="tech-category">
          <h4 style={{color:"grey", textAlign:"center"}}>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
          <motion.div 
            className="tech-grid"
            variants={container}
          >
            {technologies.map((tech, i) => {
  const pastelColor = softColors[i % softColors.length];
  return (
    <motion.div
      key={tech.name}
      className="tech-box"
      variants={item}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setActiveTech(tech)}
      onHoverEnd={() => setActiveTech(null)}
      style={{ backgroundColor: pastelColor }}
    >
      <span className="tech-name">{tech.name}</span>
      <AnimatePresence>
        {activeTech?.name === tech.name && (
          <motion.div
            className="tech-popup"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -40 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <span>{tech.name}</span>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                animate={{ width: `${tech.level}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="skill-percent">{tech.level}%</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
})}
          </motion.div>
        </div>
      ))}
    </motion.section>
  );
};

export default Technologies;