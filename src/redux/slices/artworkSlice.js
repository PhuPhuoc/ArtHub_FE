import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpMethod";

const initialState = {
  artworkData: [],
};

export const artworkSlice = createSlice({
  name: "artwork",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getArtwork.fulfilled, (state, action) => {
      state.artworkData = action.payload;
    });
  },
});

const addArtwork = createAsyncThunk("artwork/addArtwork", async (values) => {
  try {
    const { userid, title, description, typeDesign, price, image } = values;

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

export const getArtwork = createAsyncThunk("artwork/getArtwork", async () => {
  try {
    const res = await getRequest("getartwork");

    return res.data;
  } catch (error) {
    console.log({ error });
  }
});

export default artworkSlice;
