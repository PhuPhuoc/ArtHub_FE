import { configureStore } from "@reduxjs/toolkit";
import { artworkSlice } from "./slices/artworkSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    artworkSlice: artworkSlice.reducer,
    userSlice: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
