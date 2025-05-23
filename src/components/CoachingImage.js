import React from 'react';

const CoachingImage = () => {
  // For GitHub Pages, we need to use relative URLs
  // The base URL will be automatically prepended by the browser
  const imageSrc = 'images/coaching.png';

  // Add specific style for the image container
  const containerStyle = {
    overflow: 'hidden',
    borderRadius: '0',
    maxHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  };

  // Add specific style for the image itself
  const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
    maxHeight: '400px',
    borderRadius: '0'
  };

  return (
    <div className="featured-image" style={containerStyle}>
      <img 
        src={imageSrc} 
        alt="Coaching mit Hannah"
        style={imageStyle}
        onError={(e) => {
          console.error('Image failed to load');
          e.target.src = 'https://placehold.co/800x400/CECBC1/062d7f?text=Coaching+mit+Hannah&font=Jost';
        }}
      />
    </div>
  );
};

export default CoachingImage; 