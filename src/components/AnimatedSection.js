import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        padding: '10px',
        margin: '10px auto',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        backgroundColor: "transparent",
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
