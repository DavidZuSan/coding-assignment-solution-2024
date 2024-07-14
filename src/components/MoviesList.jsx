import React, { useState } from "react";
import Movies from "./Movies";
import Modal from "./Modal";

const MoviesList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to handle viewing the trailer
  const viewTrailer = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="movies-list">
      {/* Render the Movies component and pass the viewTrailer function */}
      <Movies viewTrailer={viewTrailer} />
      {showModal && (
        <Modal show={showModal} onClose={closeModal}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedMovie?.trailerId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        </Modal>
      )}
    </div>
  );
};

export default MoviesList;
