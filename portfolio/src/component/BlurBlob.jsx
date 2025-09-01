import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size, color, opacity }) => {
  // Default values
  const { top = '50%', left = '50%' } = position || {};
  const { width = '200px', height = '200px' } = size || {};
  const blobColor = color || '#8245ec';
  const blobOpacity = opacity || 0.2;

  return (
    <div
      style={{
        position: 'absolute',
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', // Clicks pass through
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: blobColor,
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: blobOpacity,
          animation: 'blobMove 10s infinite',
        }}
      ></div>
    </div>
  );
};

// Prop Types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default BlurBlob;
