import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "./swap-actions";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.fulfilled(), (state, action) => {
      state.movie = action.payload;
    });
  },
});

export default movieSlice;
