import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from './moviesSlice';
import starredSlice from './starredSlice';
import watchLaterSlice from './watchLaterSlice';

// Configure the Redux store with the reducers from various slices
const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer, // Reducer for movies
        starred: starredSlice.reducer, // Reducer for starred movies
        watchLater: watchLaterSlice.reducer // Reducer for watch later movies
    },
});

export default store;