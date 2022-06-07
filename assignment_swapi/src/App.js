import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "./store/swap-actions";
import { useEffect, useState } from "react";
import Movies from "./components/Movies";
import LastMovie from "./components/LastMovie";
import { characterActions } from "./store/character-slice";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    const fetchHandler = async () => {
      dispatch(fetchCharacter()).unwrap();
      setIsLoading(false);
    };
    fetchHandler();
  }, [dispatch]);

  const onSelectChangeHandler = (e) => {
    dispatch(characterActions.selectChar({ name: e.target.value }));
  };

  if (isLoading) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <h3>Characters</h3>
      <select onChange={onSelectChangeHandler}>
        <option selected disabled hidden value="none">
          Select
        </option>

        {characters.characters.map((char) => (
          <option value={char.name} key={char.name}>
            {char.name}
          </option>
        ))}
      </select>
      <Movies />
      <LastMovie />
    </div>
  );
}

export default App;
