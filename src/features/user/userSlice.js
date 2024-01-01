import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAsyncUsers = createAsyncThunk(
  "users/getAsyncUsers",
 async (payload, { rejectWithValue }) => {
    try {
      const { data } =await axios.get("https://jsonplaceholder.typicode.com/users");
      return data;
    } catch (error) {
     return  rejectWithValue(error.message);
    }
  }
);

// export const getAsyncUsers = createAsyncThunk(
//   "user/getAsyncUsers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
const initialState = {
  isLoading: false,
  data: [],
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getAsyncUsers.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getAsyncUsers.fulfilled,(state,action)=>{
      state.data = action.payload,
      state.isLoading = false
    })
    .addCase(getAsyncUsers.rejected,(state,action)=>{
      state.error = action.payload,
      state.isLoading = false
      console.log(state)
    })
  },
});
export default userSlice.reducer