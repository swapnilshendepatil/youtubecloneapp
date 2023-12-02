import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchSlice,
    chat: chatSlice,
  },
});
