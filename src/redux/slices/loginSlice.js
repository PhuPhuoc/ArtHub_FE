import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {

};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
    .addCase(fetch.fulfilled, (state, action) => {
      state.data = action?.payload
    })
  }
});


export default loginSlice;
