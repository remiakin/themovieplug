import React from 'react';
import './Hero.css'; // Ensure this path is correct for your project structure

const Hero = ({ title, backdrop }) => {
  const backgroundImage = backdrop ? `url(https://image.tmdb.org/t/p/w500${backdrop})` : 'url(https://source.unsplash.com/1600x900/?movies)';

  return (
    <div className="hero" style={{ backgroundImage }}>
      <div className="hero-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
