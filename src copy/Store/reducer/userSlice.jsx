import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    username: "",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    resetLoading: (state, action) => {
      state.loading = false;
    },
    setuser: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setLoading, resetLoading, setuser } = userSlice.actions;

export { userSlice };
