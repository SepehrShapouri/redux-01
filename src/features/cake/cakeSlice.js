import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state, (state.numOfCakes = state.numOfCakes - action.payload);
    },
  },
});

export default cakeSlice.reducer;
export const { buyCake } = cakeSlice.actions;
