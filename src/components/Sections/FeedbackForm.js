import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      feedback: '',
    });
  };

  return (
    <section className="feedback-section">
      <motion.h2 className="about-heading" whileHover={{ scale: 1.05, color: "#a5b4fc" }}>
      GET IN TOUCH
      </motion.h2>

      {submitted && (
        <motion.div
          className="feedback-success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Feedback sent successfully!
        </motion.div>
      )}

      <motion.form
        className="feedback-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="name-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Enter Message"
          rows={5}
          required
          value={formData.feedback}
          onChange={handleChange}
        />
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
