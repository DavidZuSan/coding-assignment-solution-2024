import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import watchLaterSlice from "../data/watchLaterSlice";
import Movie from "./Movie";
import "../styles/starred.scss";

const WatchLater = ({ viewTrailer }) => {
  // Access state from Redux store
  const state = useSelector((state) => state);
  const { watchLater } = state;
  const { removeAllWatchLater } = watchLaterSlice.actions; // Corrected action name from remveAllWatchLater to removeAllWatchLater
  const dispatch = useDispatch();

  return (
    <div className="starred" data-testid="watch-later-div">
      {/* Check if there are movies saved to watch later */}
      {watchLater.watchLaterMovies.length > 0 && (
        <div data-testid="watch-later-movies" className="starred-movies">
          <h6 className="header">Watch Later List</h6>
          <div className="row">
            {/* Render each movie saved to watch later */}
            {watchLater.watchLaterMovies.map((movie) => (
              <Movie movie={movie} key={movie.id} viewTrailer={viewTrailer} />
            ))}
          </div>

          <footer className="text-center">
            {/* Button to clear all movies in the watch later list */}
            <button
              className="btn btn-primary"
              onClick={() => dispatch(removeAllWatchLater())}
            >
              Empty list
            </button>
          </footer>
        </div>
      )}

      {/* Message when there are no movies saved to watch later */}
      {watchLater.watchLaterMovies.length === 0 && (
        <div className="text-center empty-cart">
          <i className="bi bi-heart" />
          <p>You have no movies saved to watch later.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default WatchLater;
