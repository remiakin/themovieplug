import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import MovieView from './components/MovieView';
import SearchView from './components/SearchView';
import NotFound from './components/NotFound';  // Import NotFound

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [lastViewedMovie, setLastViewedMovie] = useState('');

  const navigate = useNavigate();

  const handleSearch = async (text) => {
    setSearchTerm(text);
    navigate(`/search?query=${text}`);
  };

  return (
    <div className="app" style={{ backgroundImage: lastViewedMovie ? `url(https://image.tmdb.org/t/p/w500${lastViewedMovie})` : '' }}>
      <Navbar setSearchTerm={handleSearch} />
      <Routes>
        <Route path="/" element={<HomeView searchTerm={searchTerm} />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/movie/:id" element={<MovieView setLastViewedMovie={setLastViewedMovie} />} />
        <Route path="/search" element={<SearchView searchTerm={searchTerm} />} />
        <Route path="/not-found" element={<NotFound />} />  {/* NotFound route */}
        <Route path="*" element={<NotFound />} />  {/* Catch-all route */}
      </Routes>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
