import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'app',
  initialState: {
    products: [],
    product: {},
    isloading: false,
    addcard:[],
    total:0
  },

  reducers: {
    fetchProduct: () => {},
    setProduct: (state, action) => {
      state.products = [...action.payload];
    },
    fetchProductId: () => {},
    setProductId: (state, action) => {
      state.product = { ...action.payload, amount : 1 };
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
      if(state.product.amount < state.product.stock){
      state.product.amount++
      }
    },
    decrement:(state) =>{
      if (state.product.amount > 0) {
      state.product.amount--
      }
      return
    },
     deleteProduct: (state, action) => {
      const { payload } = action;
      state.addcard = state.addcard.filter((ft) => ft.id !== payload);
    },
    deleteAll: (state) => {
      state.addcard = [];
    },
    totalPrice: (state) =>{
      state.addcard.map(
        (product) => (state.total += product.amount * product.price)
      )
    },
    cardIncrement: (state, action) => {
      const { payload } = action;
      state.addcard.map((prod) =>
        prod.id === payload && prod.amount <= prod.stock
          ? (prod.amount += 1)
          : prod.amount
      );
    },
    cardDecrement: (state, action) => {
      const { payload } = action;
      state.addcard.map((prod) => {
        if (prod.id === payload && prod.amount > 0) {
          return (prod.amount -= 1);
        }
        return prod.amount;
      });
    },
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
  decrement,
  deleteProduct,
  deleteAll,
  totalPrice,
  cardIncrement,
  cardDecrement
} = productsSlice.actions;
export default productsSlice.reducer;
