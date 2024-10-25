import React from 'react';
import Hero from './Hero';

const AboutView = () => {
  return (
    <div>
      <Hero title="About Us" />
      <div style={{ padding: '20px', fontSize: '18px', lineHeight: '1.6' }}>
        <p>We know you love your movies at your fingertips. What we do here is ensure all movies are readily available to you, no matter how old or how new. You can always get it here; just search and you'll have access to all movies by title. What’s more, we curate the movies from different sources to suit your needs, from moderate to high definition—all at your fingertips without stress.</p>
      </div>
    </div>
  );
};

export default AboutView;
