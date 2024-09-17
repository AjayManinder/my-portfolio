import React, { useEffect } from 'react';
import './StarBackground.css'; // Import the CSS for styling

const StarsBackground = () => {
  useEffect(() => {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star) => {
      // Give each star a slight movement with a random speed and direction
      const duration = Math.random() * 10 + 5; // Between 5 and 10 seconds
      const distance = Math.random() * 80 + 10; // Slight random distance
      const angle = Math.random() * 360; // Random direction

      // Apply random position for each star
      const topPosition = Math.random() * 100;
      const leftPosition = Math.random() * 100;

      // Set animation properties
      star.style.animationDuration = `${duration}s`;
      star.style.setProperty('--distance', `${distance}px`);
      star.style.setProperty('--angle', `${angle}deg`);
      star.style.top = `${topPosition}%`;
      star.style.left = `${leftPosition}%`;
    });
  }, []);

  // Render multiple stars by looping and assigning each one a unique position
  return (
    <div className="stars-container">
      {[...Array(500)].map((_, index) => (
        <div key={index} className="star" />
      ))}
    </div>
  );
};

export default StarsBackground;
