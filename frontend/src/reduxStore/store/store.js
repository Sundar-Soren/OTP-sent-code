import { configureStore } from "@reduxjs/toolkit";
import SentMessages from "../features/sentMessagesSlice";
import Contacts from "../features/contactListSlice";

export default configureStore({
  reducer: {
    sentMessagesUser: SentMessages,
    contacts: Contacts,
  },
});
