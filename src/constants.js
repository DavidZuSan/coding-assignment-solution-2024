// API key retrieved from environment variables
export const API_KEY = process.env.REACT_APP_API_KEY;

// Base URL for the TMDB API
export const ENDPOINT = 'https://api.themoviedb.org/3';

// URL for discovering movies, sorted by vote count
export const ENDPOINT_DISCOVER = `${ENDPOINT}/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc`;

// URL for searching movies
export const ENDPOINT_SEARCH = `${ENDPOINT}/search/movie?api_key=${API_KEY}`;

// URL for fetching detailed information about a specific movie, including its videos
export const ENDPOINT_MOVIE = (movieId) => 
  `${ENDPOINT}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
