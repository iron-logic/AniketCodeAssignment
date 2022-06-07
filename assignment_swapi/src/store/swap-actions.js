import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacter = createAsyncThunk("characters", async () => {
  const characters = [];
  const res = await fetch("https://swapi.dev/api/people");

  const data = await res.json();
  console.log(data);
  for (let i = 0; i < data.results.length; i++) {
    characters.push({
      name: data.results[i].name,
      films: data.results[i].films,
      url: data.results[i].url,
    });
  }
  return characters;
});

export const fetchMovies = createAsyncThunk("movies", async (urls) => {
  const movies = [];
  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const data = await res.json();
    movies.push({ title: data.title, date: data.release_date });
  }
  return movies;
});

export const fetchMovie = createAsyncThunk("movie", async (url) => {
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  return data;
});
