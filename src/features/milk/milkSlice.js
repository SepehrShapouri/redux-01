import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMilks: 10,
};

const milkSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    buyMilk: (state, action) => {
      state.numOfMilks = state.numOfMilks - 1;
    },
  },
});

export default milkSlice.reducer
export const {buyMilk} = milkSlice.actions