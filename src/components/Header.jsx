import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/header.scss";

const Header = ({ searchMovies }) => {
  // Select starred movies from the Redux state
  const { starredMovies } = useSelector((state) => state.starred);

  return (
    <header>
      {/* Home link with click handler to reset search */}
      <Link to="/" data-testid="home" onClick={() => searchMovies("")}>
        <i className="bi bi-film" />
      </Link>

      <nav>
        {/* Navigation link to starred movies */}
        <NavLink
          to="/starred"
          data-testid="nav-starred"
          className="nav-starred"
        >
          {starredMovies.length > 0 ? (
            <>
              <i className="bi bi-star-fill bi-star-fill-white" />
              <sup className="star-number">{starredMovies.length}</sup>
            </>
          ) : (
            <i className="bi bi-star" />
          )}
        </NavLink>
        {/* Navigation link to watch later movies */}
        <NavLink to="/watch-later" className="nav-fav">
          Watch Later
        </NavLink>
      </nav>

      {/* Search input group */}
      <div className="input-group rounded">
        <Link to="/" onClick={(e) => searchMovies("")} className="search-link">
          <input
            type="search"
            data-testid="search-movies"
            onKeyUp={(e) => searchMovies(e.target.value)}
            className="form-control rounded"
            placeholder="Search movies..."
            aria-label="Search movies"
            aria-describedby="search-addon"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
