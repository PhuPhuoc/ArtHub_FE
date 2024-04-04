export const getArtworkSelector = (state) => state.artworkSlice.artworkData;
export const getArtworkLikeSelector = (state) => state.artworkSlice.likes;
export const getArtworkCommentSelector = (state) => state.artworkSlice.comments;
export const getSavedArtworkSelector = (state) => state.artworkSlice.saved;
export const getUserCartSelector = (state) => state.artworkSlice.cart;
export const getArtworkSoldSelector = (state) => state.artworkSlice.sold;
export const getArtworkHistorySelector = (state) => state.artworkSlice.history;
export const getAllTransactionSelector = (state) =>
  state.artworkSlice.transactions;
export const getDepositHistorySelector = (state) => state.artworkSlice.deposit;
export const getCustomerOrderHistorySelector = (state) =>
  state.artworkSlice.customerOrder;
export const getAdminProfitHistorySelector = (state) =>
  state.artworkSlice.adminProfit;
export const getSingleUserSelector = (state) => state.userSlice.user;
export const getUserSelector = (state) => state.userSlice.userData;
