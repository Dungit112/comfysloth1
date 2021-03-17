import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'app',
  initialState: {
    products: [],
    product: {},
    isloading: false,
    addcard:[],
  },

  reducers: {
    fetchProduct: () => {},
    setProduct: (state, action) => {
      state.products = [...action.payload];
    },
    fetchProductId: () => {},
    setProductId: (state, action) => {
      state.product = { ...action.payload, amount : 0 };
    },
    starLoading: (state) => {
      state.isloading = true
    },
    endLoading:(state) =>{
      state.isloading = false
    },
    addToCard:(state,action) =>{
      if(state.products.map(sp => sp.id===action.payload)){
        state.addcard = [...state.addcard, state.product]
      }
    },
    increment:(state) =>{
      state.product.amount++
    },
    decrement:(state) =>{
      state.product.amount--
    }
  },
});

export const {
  fetchProduct,
  setProduct,
  fetchProductId,
  setProductId,
  starLoading,
  endLoading,addToCard,
  increment,
  decrement
} = productsSlice.actions;
export default productsSlice.reducer;
