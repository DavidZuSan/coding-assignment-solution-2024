import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Modal from "./Modal";
import YoutubePlayer from "./YoutubePlayer";
import { ENDPOINT_DISCOVER, ENDPOINT_MOVIE, API_KEY } from "../constants.js";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import "../styles/movies.scss";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoKey, setCurrentVideoKey] = useState(null);
  const [page, setPage] = useState(1);

  // Function to fetch movies from the API
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${ENDPOINT_DISCOVER}&api_key=${API_KEY}&page=${page}`
      );
      const { results } = await response.json();
      setMovies((prevMovies) => {
        // Filter duplicates before updating state
        const newMovies = results.filter(
          (newMovie) =>
            !prevMovies.some((prevMovie) => prevMovie.id === newMovie.id)
        );
        return [...prevMovies, ...newMovies];
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Fetch movies when the component mounts or page changes
  useEffect(() => {
    fetchMovies();
  }, [page]);

  // Function to handle viewing the trailer
  const handleViewTrailer = (movieId) => {
    const movieEndpoint = `${ENDPOINT_MOVIE(movieId)}`;
    fetch(movieEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.videos) {
          const video = data.videos.results.find(
            (video) => video.type === "Trailer"
          );
          if (video) {
            setCurrentVideoKey(video.key);
            setShowModal(true);
          } else {
            console.error("No trailer found for this movie.");
          }
        } else {
          console.error("No videos found for this movie.");
        }
      })
      .catch((error) => console.error("Error fetching video key:", error));
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideoKey(null);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(() => {
    setPage((prevPage) => prevPage + 1);
  });

  // Fetch more movies when isFetching is true
  useEffect(() => {
    if (!isFetching) return;
    fetchMovies().then(() => setIsFetching(false));
  }, [isFetching]);

  return (
    <div className="movies-grid" data-testid="movies">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          viewTrailer={() => handleViewTrailer(movie.id)}
        />
      ))}
      {showModal && currentVideoKey && (
        <Modal show={showModal} onClose={handleCloseModal}>
          <YoutubePlayer videoKey={currentVideoKey} />
        </Modal>
      )}
      {isFetching && <p>Loading more movies...</p>}
    </div>
  );
};

export default Movies;
