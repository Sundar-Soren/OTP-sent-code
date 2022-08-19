import { createSlice } from "@reduxjs/toolkit";

const sentMessagesSlice = createSlice({
  name: "sentMessages",
  initialState: {},
  reducers: {
    setSentMessages: (state, action) => {
      state.sentMessages = action.payload;
    },
    setSentMessagesLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setSentMessages, setSentMessagesLoading } =
  sentMessagesSlice.actions;

export default sentMessagesSlice.reducer;
