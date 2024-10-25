import React from 'react';
import Hero from './Hero';

const HomeView = ({ searchTerm }) => {
  return (
    <div>
      <Hero title={`You are searching for... ${searchTerm}`} />
      <div style={{ padding: '20px', fontSize: '18px', lineHeight: '1.6' }}>
        <p>{searchTerm ? `Searching for: ${searchTerm}` : 'Start typing to search for a movie!'}</p>
      </div>
    </div>
  );
};

export default HomeView;
