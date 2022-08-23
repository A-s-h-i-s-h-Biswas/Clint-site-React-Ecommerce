import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    email: null,
    password: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.username=action.payload;
      state.email=action.payload;
      state.password=action.payload;
    },
  },
});

export const { addUser } = registerSlice.actions;
export default registerSlice.reducer;