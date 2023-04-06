import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VotingWidgetState {
  votes: string[];
  imagesIds: string[];
  votesTime: string[];
}

const initialState: VotingWidgetState = {
  votes: [],
  imagesIds: [],
  votesTime: [],
};

export const votingWidgetSlice = createSlice({
  name: "votingWidget",
  initialState,
  reducers: {
    addVote: (state, action: PayloadAction<string>) => {
      state.votes = [...state.votes, action.payload];
    },
    addImageId: (state, action: PayloadAction<string>) => {
      state.imagesIds = [...state.imagesIds, action.payload];
    },
    addVotesTime: (state, action: PayloadAction<string>) => {
      state.votesTime = [...state.votesTime, action.payload];
    },
  },
});

export const { addVote, addImageId, addVotesTime } = votingWidgetSlice.actions;
export default votingWidgetSlice.reducer;
