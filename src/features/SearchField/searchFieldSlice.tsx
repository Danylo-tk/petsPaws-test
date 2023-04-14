import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface searchFieldState {
  searchValue: string;
}

const initialState: searchFieldState = {
  searchValue: "",
};

export const searchFieldSlice = createSlice({
  name: "searchField",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchFieldSlice.actions;
export default searchFieldSlice.reducer;
