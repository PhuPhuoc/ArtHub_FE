import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getRequest,
  postRequest,
} from "../../services/httpMethod";
import { message } from "antd";

const initialState = {
  artworkData: [],
  likes: {},
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  comments: {},
  cart: [],
  saved: [],
  sold: [],
  history: [],
  transactions: [],
};

export const artworkSlice = createSlice({
  name: "artwork",
  initialState,
  reducers: {
    // addToCart(state, action) {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemIndex >= 0) {
    //     state.cartItems[itemIndex].cartQuantity += 1;
    //     toast.info("increased product quantity", {
    //       position: "bottom-left",
    //     });
    //   } else {
    //     const tempProduct = { ...action.payload, cartQuantity: 1 };
    //     state.cartItems.push(tempProduct);
    //     toast.success("added a new product to cart", {
    //       position: "bottom-left",
    //     });
    //   }
    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },
  },

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
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(getSavedArtwork.fulfilled, (state, action) => {
        state.saved = action.payload;
      })
      .addCase(getArtworkSold.fulfilled, (state, action) => {
        state.sold = action.payload;
      })
      .addCase(getArtworkHistory.fulfilled, (state, action) => {
        state.history = action.payload;
      })
      .addCase(getAllTransaction.fulfilled, (state, action) => {
        state.transactions = action.payload;
      });
  },
});

// const addArtwork = createAsyncThunk("artwork/addArtwork", async (values) => {
//   try {
//     const { userid, title, description, typeDesign, price, image } = values;

//     const res = await postRequest("artwork", {
//       userid,
//       title,
//       description,
//       typeDesign,
//       price,
//       image,
//     });

//     return res.data;
//   } catch (error) {
//     console.log({ error });
//   }
// });
export const addLikeArtwork = createAsyncThunk(
  "artwork/addLikeArtwork",
  async (values) => {
    try {
      const res = await postRequest(
        `users/${values.userId}/artworks/${values.artworkId}/likes`
      );
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

export const getSavedArtwork = createAsyncThunk(
  "artwork/getSavedArtwork",
  async (userId) => {
    try {
      const res = await getRequest(`users/${userId}/saved`);
      return res.data.savedArtworks;
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

export const addToCart = createAsyncThunk(
  "artwork/addToCart",
  async (values) => {
    try {
      const res = await postRequest(
        `users/${values.userId}/cart/${values.artworkId}`
      );

      if (res) {
        message.success("Add to cart successfully");
      } else {
        message.error("Artwork not added successfully");
      }
      return res.data;
    } catch (error) {
      console.log({ error });
    }
  }
);
export const getUserCart = createAsyncThunk(
  "artwork/getUserCart",
  async (userId) => {
    try {
      const res = await getRequest(`users/${userId}/cart`);
      return res.data.cartArtworks;
    } catch (error) {
      console.log({ error });
    }
  }
);
export const deleteCart = createAsyncThunk(
  "artwork/deleteCart",
  async (values) => {
    try {
      const res = await deleteRequest(
        `users/${values.userId}/cart/${values.artworkId}`
      );
      return res.data;
    } catch (error) {
      ~console.log({ error });
    }
  }
);

export const placeOrder = createAsyncThunk(
  "artwork/placeOrder",
  async (userId) => {
    try {
      const res = await deleteRequest(`payment/${userId}`);
      return res.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const paymentV2 = createAsyncThunk(
  "artwork/paymentV2",
  async (userId) => {
    try {
      const res = await postRequest(`paymentv2/${userId}`);
      console.log(res);
      return res;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const getArtworkSold = createAsyncThunk(
  "artwork/getArtworkSold",
  async (userId) => {
    try {
      const res = await getRequest(`users/${userId}/sold`);
      return res.data.transactions;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const getArtworkHistory = createAsyncThunk(
  "artwork/getArtworkHistory",
  async (userId) => {
    try {
      const res = await getRequest(`users/${userId}/history`);
      return res.data.list_artwork_of_user;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const getAllTransaction = createAsyncThunk(
  "artwork/getAllTransaction",
  async () => {
    try {
      const res = await getRequest(`transactions`);
      return res.data.transactions;
    } catch (error) {
      console.log({ error });
    }
  }
);
export default artworkSlice;
