import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const loginSlice = createSlice({
  name: "artwork",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
  },
});

const addArtwork = createAsyncThunk("artwork/addArtwork", async (values) => {
  try {
    const {  userid, title, description, typeDesign, price, image } =
      values;

    const res = await postRequest("artwork", {
      userid,
      title,
      description,
      typeDesign,
      price,
      image,
    });

    return res.data;
  } catch (error) {
    console.log({ error });
  }
});

export default loginSlice;
