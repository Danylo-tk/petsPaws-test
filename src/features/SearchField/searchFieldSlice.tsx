import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface searchFieldState {
  searchValue: string;
  breedId: string | undefined;
}

const initialState: searchFieldState = {
  searchValue: "",
  breedId: "",
};

export const searchFieldSlice = createSlice({
  name: "searchField",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setBreedId: (state, action: PayloadAction<string | undefined>) => {
      state.breedId = action.payload;
    },
  },
});

export const { setSearchValue, setBreedId } = searchFieldSlice.actions;
export default searchFieldSlice.reducer;
