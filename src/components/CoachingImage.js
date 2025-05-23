import React from 'react';

const CoachingImage = () => {
  // Use the image from the public directory
  const imageSrc = process.env.NODE_ENV === 'production' 
    ? './images/coaching.png' // For production (GitHub Pages)
    : '/images/coaching.png'; // For development

  // Add specific style for the image container
  const containerStyle = {
    overflow: 'hidden',
    borderRadius: '0',
    maxHeight: '400px', // Reduced maximum height to fit better in the layout
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  };

  // Add specific style for the image itself
  const imageStyle = {
    objectFit: 'cover', // Ensures the image covers the container nicely
    width: '100%',
    height: 'auto',
    maxHeight: '400px', // Match container max height
    borderRadius: '0'
  };

  return (
    <div className="featured-image" style={containerStyle}>
      <img 
        src={imageSrc} 
        alt="Coaching mit Hannah"
        style={imageStyle}
      />
    </div>
  );
};

export default CoachingImage; 