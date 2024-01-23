import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducer/userSlice.jsx";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
