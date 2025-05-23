import React from 'react';
import coachingImage from '../assets/coaching-image.JPG';

const CoachingImage = () => {
  // Use a dynamically constructed URL for the image
  // This will try 3 common locations where the image might be found
  const imageSources = [
    coachingImage,                          // Import the image directly
    "./images/coaching-image.JPG",          // For standard folder structure with relative path
    "https://via.placeholder.com/800x400?text=Coaching+with+Hannah" // Fallback
  ];

  const [currentSourceIndex, setCurrentSourceIndex] = React.useState(0);

  const handleImageError = () => {
    if (currentSourceIndex < imageSources.length - 1) {
      setCurrentSourceIndex(currentSourceIndex + 1);
    }
  };

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
        src={imageSources[currentSourceIndex]} 
        alt="Coaching with Hannah"
        onError={handleImageError}
        style={imageStyle}
      />
    </div>
  );
};

export default CoachingImage; 