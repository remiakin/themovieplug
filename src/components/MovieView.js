import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hero from './Hero';
import '../App.css';

const MovieView = ({ setLastViewedMovie }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const placeholderImage = 'URL_TO_YOUR_PLACEHOLDER_IMAGE';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const apiKey = '0b5e06b9ec2dd6efbe5019ae4b94f7c5';
      const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits,videos,images,reviews`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovieDetails(data);
        setLastViewedMovie(data.poster_path);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id, setLastViewedMovie]);

  if (!movieDetails) return <div className="container mt-4"><h1>Loading...</h1></div>;

  const { title, overview, release_date, vote_average, credits, videos, poster_path, runtime, genres, reviews, budget } = movieDetails;
  const trailer = videos.results.find(video => video.type === 'Trailer');

  return (
    <>
      <Hero title={title} backdrop={poster_path} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <img 
              src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholderImage} 
              alt={title} 
              className="img-fluid" 
            />
          </div>
          <div className="col-md-8">
            <h1 className="movie-heading">{title}</h1>
            <p className="movie-detail"><strong className="movie-label">Release Date:</strong> {release_date}</p>
            <p className="movie-detail"><strong className="movie-label">Rating:</strong> {vote_average}</p>
            <p className="movie-detail"><strong className="movie-label">Runtime:</strong> {runtime} minutes</p>
            <p className="movie-detail"><strong className="movie-label">Genres:</strong> {genres.map(genre => genre.name).join(', ')}</p>
            <p className="movie-detail"><strong className="movie-label">Budget:</strong> {budget ? `$${budget.toLocaleString()}` : 'Unavailable'}</p>
            <p className="movie-detail">{overview}</p>
            
            <h3 className="movie-heading">Cast</h3>
            <ul className="movie-detail">
              {credits.cast.map(actor => (
                <li key={actor.id}>{actor.name} as {actor.character}</li>
              ))}
            </ul>

            {trailer && (
              <div>
                <h3 className="movie-heading">Trailer</h3>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* Up Arrow Button below Trailer */}
                <button className="arrow-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  ↑
                </button>
              </div>
            )}

            <h3 className="movie-heading">Reviews</h3>
            {reviews.results.length > 0 ? (
              <ul className="movie-detail">
                {reviews.results.map(review => (
                  <li key={review.id}>
                    <p><strong className="movie-label">{review.author}:</strong> {review.content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="movie-detail">No reviews available.</p>
            )}
            {/* Up Arrow Button below Reviews */}
            <button className="arrow-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              ↑
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieView;
