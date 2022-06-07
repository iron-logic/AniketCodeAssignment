import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./swap-actions";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled(), (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default moviesSlice;
