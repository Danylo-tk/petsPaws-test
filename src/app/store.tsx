import { configureStore } from "@reduxjs/toolkit";
import { votingApiSlice } from "../features/api/votingApiSlice";
import { searchFieldApiSlice } from "../features/api/searchFieldApiSlice";
import votingWidgetReducer from "../features/VotingWidget/votingWidgetSlice";
import searchFieldReducer from "../features/SearchField/searchFieldSlice";

export const store = configureStore({
  reducer: {
    votingWidget: votingWidgetReducer,
    searchField: searchFieldReducer,
    [votingApiSlice.reducerPath]: votingApiSlice.reducer,
    [searchFieldApiSlice.reducerPath]: searchFieldApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(votingApiSlice.middleware)
      .concat(searchFieldApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
