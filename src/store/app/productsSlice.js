import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "app",
  initialState: {
    products: [],
  },

  reducers: {
    fetchProduct: () => {},
    setProduct: (state, action) => {
      state.products = [...action.payload];
    },
  },
});

export const { fetchProduct, setProduct } = productsSlice.actions;
export default productsSlice.reducer;
