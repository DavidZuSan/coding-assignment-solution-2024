import React from "react";
import ReactPlayer from "react-player";
import { ENDPOINT, API_KEY } from "../constants";

const YoutubePlayer = ({ videoKey }) => (
  <ReactPlayer
    className="video-player"
    url={`https://www.youtube.com/watch?v=${videoKey}`}
    controls={true}
    playing={true}
    data-testid="youtube-player"
  />
);

export default YoutubePlayer;

// Function to get the movie endpoint with appended video information
export const ENDPOINT_MOVIE = (movieId) =>
  `${ENDPOINT}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
