import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchInput);
    navigate(`/search?query=${searchInput}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genres
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Comedy</a></li>
                <li><a className="dropdown-item" href="#">Drama</a></li>
                <li><a className="dropdown-item" href="#">Horror</a></li>
                <li><a className="dropdown-item" href="#">Romance</a></li>
                <li><a className="dropdown-item" href="#">Sci-Fi</a></li>
                <li><a className="dropdown-item" href="#">Thriller</a></li>
                <li><a className="dropdown-item" href="#">Fantasy</a></li>
                <li><a className="dropdown-item" href="#">Animation</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Documentary</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/not-found">Coming Soon</Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
