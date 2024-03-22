import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../services/httpMethod";
import {toast} from "react-toastify";
const initialState = {
  artworkData: [],
  likes: {},
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const artworkSlice = createSlice({
  name: "artwork",
  initialState,
  reducers: {
    addToCart(state,action){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity +=1;
        toast.info("increased product quantity",{
          position: "bottom-left",
        })
      } else{
        const tempProduct = {...action.payload , cartQuantity: 1};
        state.cartItems.push(tempProduct);
        toast.success("added a new product to cart",{
          position: "bottom-left"
        })
      }
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getArtwork.fulfilled, (state, action) => {
        state.artworkData = action.payload;
      })
      .addCase(getLikeArtwork.fulfilled, (state, action) => {
        state.likes = action.payload;
      });
  },
});
export const{addToCart}=artworkSlice.actions;

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

export const getArtwork = createAsyncThunk("artwork/getArtwork", async () => {
  try {
    const res = await getRequest("homepage/artworks");

    return res.data.artworks;
  } catch (error) {
    console.log({ error });
  }
});

export default artworkSlice;
