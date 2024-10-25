import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Hero from './Hero';
import NoResults from './NoResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SearchView = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      const fetchMovies = async () => {
        const apiKey = '0b5e06b9ec2dd6efbe5019ae4b94f7c5';
        const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&api_key=${apiKey}`;
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setSearchResults(data.results || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchMovies();
    }
  }, [searchTerm]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const renderListItems = () => {
    return searchResults.map((movie) => (
      <div key={movie.id} className="card my-3 mx-auto" style={{ maxWidth: '14rem' }}>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'URL_TO_YOUR_PLACEHOLDER_IMAGE'} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <button className="btn btn-primary" onClick={() => handleMovieClick(movie.id)}>View Details</button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Hero title={`You are searching for... ${searchTerm}`} />
      <div className="container mt-4">
        {searchResults.length > 0 ? (
          <div className="row">
            {renderListItems()}
          </div>
        ) : (
          <NoResults />
        )}
      </div>
    </>
  );
};

export default SearchView;
