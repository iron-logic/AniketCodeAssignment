import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../store/swap-actions";
import "./Movie.css";

const LastMovie = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.characters);
  const selectedMovie = useSelector((state) => state.movie.movie);

  useEffect(() => {
    const fetchHandler = async () => {
      if (!selected.selectedCharacter.films) return;
      await dispatch(
        fetchMovie(
          selected.selectedCharacter.films[
            selected.selectedCharacter.films.length - 1
          ]
        )
      ).unwrap();
      setIsLoading(false);
    };
    fetchHandler();
  }, [dispatch, selected]);

  if (!selected.selectedCharacter.films) {
    return null;
  }
  if (isLoading) {
    return <div className="center">Loading...</div>;
  }
  return (
    <div>
      <h3>Name/Year last movie</h3>
      <div className="movie center">
        {selectedMovie.title} -{" "}
        {selectedMovie.release_date.replaceAll("-", "/")}
      </div>
    </div>
  );
};

export default LastMovie;
