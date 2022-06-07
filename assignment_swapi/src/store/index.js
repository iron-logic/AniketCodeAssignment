import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./character-slice";
import movieSlice from "./movie-slice";
import moviesSlice from "./movies-slice";


const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    movie: movieSlice.reducer,
    movies: moviesSlice.reducer
  },
});
export default store;