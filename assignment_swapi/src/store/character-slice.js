import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacter } from "./swap-actions";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    selectedCharacter: {},
  },
  reducers: {
    selectChar(state, action) {
      state.selectedCharacter = state.characters.find(
        (char) => char.name === action.payload.name
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacter.fulfilled(), (state, action) => {
      state.characters = action.payload;
    });
  },
});

export const characterActions = charactersSlice.actions;
export default charactersSlice;
