import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const NotFound = () => {
  return (
    <>
      <Hero title="Page Not Found" />
      <div className="container mt-4 text-center">
        <h2>Oops! This page doesn't exist... yet.</h2>
        <p>
          This space will soon host information on Nollywood movies, Bollywood flicks, and other international gems. Stay tuned!
          <br />In the meantime, check out our other sections:
        </p>
        <Link to="/" className="btn btn-primary mt-3 mx-2">Home</Link>
        <Link to="/about" className="btn btn-secondary mt-3 mx-2">About Us</Link>
      </div>
    </>
  );
};

export default NotFound;
