import { createSlice } from "@reduxjs/toolkit";

const contactListSlice = createSlice({
  name: "contacts",
  initialState: {},
  reducers: {
    setContactsList: (state, action) => {
      state.contacts = action.payload;
    },
    setContactsListLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setContactsList, setContactsListLoading } =
  contactListSlice.actions;

export default contactListSlice.reducer;
