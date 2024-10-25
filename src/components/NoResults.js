import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const NoResults = () => {
  return (
    <>
      <Hero title="No Results Found" />
      <div className="container mt-4 text-center">
        <h2>Sorry, we couldn't find any movies matching your search.</h2>
        <p>
          Try searching for another movie, or visit our other sections:
        </p>
        <Link to="/" className="btn btn-primary mt-3 mx-2">Home</Link>
        <Link to="/about" className="btn btn-secondary mt-3 mx-2">About Us</Link>
      </div>
    </>
  );
};

export default NoResults;
