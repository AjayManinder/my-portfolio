import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import AcademicProjects from './AcademicProjects';
import PersonalProjects from './PersonalProjects';
import Education from './Education';
import FeedbackForm from './FeedbackForm';

const sections = [
  { id: 'home', Component: Home },
  { id: 'professional-summary', Component: About },
  { id: 'technologies', Component: Technologies },
  { id: 'projects', Component: Projects },
  { id: 'academic', Component: AcademicProjects },
  { id: 'personal', Component: PersonalProjects },
  { id: 'education', Component: Education },
  { id: 'feedback', Component: FeedbackForm },
];

const sectionVariants = {
  initial: { opacity: 0, scale: 0.95, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -70 },
};

const Main = () => {
  return (
    <div
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth pt-12"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      <Navbar />
      {sections.map(({ id, Component }) => (
        <motion.section
          key={id}
          id={id}
          className="snap-start min-h-screen flex items-center justify-center p-6"
          style={{ scrollMarginTop: '8rem' }}
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: false, amount: 0.1 }} 
        >
          <Component />
        </motion.section>
      ))}
    </div>
  );
};

export default Main;
