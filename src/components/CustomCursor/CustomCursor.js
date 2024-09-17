import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Import the CSS file

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement and scroll
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX + window.scrollX,  // Adjust mouse position with horizontal scroll offset
      y: event.clientY + window.scrollY,  // Adjust mouse position with vertical scroll offset
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor container that holds the white circle and black dot */}
      <div
        className="cursor-container"
        style={{
          position: 'fixed',  // Ensure the cursor is fixed relative to the viewport
          top: 0,
          left: 0,
          width: '50px',
          height: '50px',
          pointerEvents: 'none', // Ensure the custom cursor does not interfere with actual clicks
          transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,  // Center the cursor on the mouse
        }}
      >
        {/* Black dot inside the white circle */}
        <div className="cursor-dot" />
      </div>
    </>
  );
};

export default CustomCursor;
