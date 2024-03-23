import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../services/httpMethod";

const initialState = {
  artworkData: [],
  likes: {},
  comments: {},
};

export const artworkSlice = createSlice({
  name: "artwork",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getArtwork.fulfilled, (state, action) => {
        state.artworkData = action.payload;
      })
      .addCase(getLikeArtwork.fulfilled, (state, action) => {
        state.likes = action.payload;
      })
      .addCase(getCommentArtwork.fulfilled, (state, action) => {
        state.comments = action.payload;
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
export const addLikeArtwork = createAsyncThunk(
  "artwork/addLikeArtwork",
  async (artworkId) => {
    try {
      const res = await postRequest(`artworks/${artworkId}/likes`);
      return res.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const addCommentArtwork = createAsyncThunk(
  "artwork/addCommentArtwork",
  async (values) => {
    try {
      console.log(values);
      const res = await postRequest(`${values.artworkId}/comments`, {
        text: values.text,
        userId: values.userId,
      });
      return res.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const getLikeArtwork = createAsyncThunk(
  "artwork/getLikeArtwork",
  async (artworkId) => {
    try {
      const res = await getRequest(`artworks/${artworkId}/likes`);
      return res.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const getCommentArtwork = createAsyncThunk(
  "artwork/getCommentArtwork",
  async (artworkId) => {
    try {
      const res = await getRequest(`${artworkId}/comments`);
      return res.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const getArtwork = createAsyncThunk("artwork/getArtwork", async () => {
  try {
    const res = await getRequest("homepage/artworks");

    return res.data.artworks;
  } catch (error) {
    console.log({ error });
  }
});

export default artworkSlice;
