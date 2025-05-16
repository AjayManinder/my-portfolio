import React from 'react';
import { motion } from 'framer-motion';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
  };

  return (
    <section className="feedback-section">
      <motion.h2
        className="feedback-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Feedback Form
      </motion.h2>

      <motion.form
        className="feedback-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="name-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Feedback" rows={5} required />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="submit-button"
        >
          Submit
        </motion.button>
      </motion.form>
    </section>
  );
};

export default FeedbackForm;
