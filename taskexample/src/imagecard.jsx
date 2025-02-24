
import React from 'react';

function ImageCard({ name, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default ImageCard;
