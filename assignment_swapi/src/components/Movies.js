import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/swap-actions";
import "./Movie.css";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const selectedMovies = useSelector((state) => state.movies);
  const selectedCharacter = useSelector((state) => state.characters);

  useEffect(() => {
    if (!selectedCharacter) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(
        fetchMovies(selectedCharacter.selectedCharacter.films)
      ).unwrap();
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch, selectedCharacter]);

  if (!selectedCharacter.selectedCharacter.films) {
    return null;
  }
  if (isLoading) {
    <div className="center">Loading...</div>;
  }
  return (
    <Fragment>
      <h3>List of movies</h3>
      <div className="movie center">
        {selectedMovies.movies.map((movie) => {
          return (
            <h4 key={movie.title}>
              {movie.title} - {movie.date}
            </h4>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Movies;
