import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpMethod";

const initialState = {
  userData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  try {
    const res = await getRequest("admin/users");

    return res.data.users;
  } catch (error) {
    console.log({ error });
  }
});

export default userSlice;
