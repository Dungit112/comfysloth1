import { createSlice, current } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'app',
  initialState: {
    products: [],
    product: {},
    isloading: false,
    addcard: [],
    total: 0,
    
  },

  reducers: {
    fetchProduct: () => {},
    setProduct: (state, action) => {
      const { payload } = action;
      state.products = [...payload];
    },
    fetchProductId: () => {},
    setProductId: (state, action) => {
      const { payload } = action;
      state.product = { ...payload, amount: 1 };
    },
    
    starLoading: (state) => {
      state.isloading = true;
    },
    endLoading: (state) => {
      state.isloading = false;
    },

    addToCard: (state, action) => {
      const { payload } = action;
      if (state.products.map((sp) => sp.id === payload)) {
        state.addcard = [...state.addcard, state.product];
      }
    },
    increment: (state) => {
      if (state.product.amount < state.product.stock) {
        state.product.amount++;
      }
    },
    decrement: (state) => {
      if (state.product.amount > 0) {
        state.product.amount--;
      }
      return;
    },
    deleteProduct: (state, action) => {
      const { payload } = action;
      state.addcard = state.addcard.filter((ft) => ft.id !== payload);
    },
    deleteAll: (state) => {
      state.addcard = [];
    },
    totalPrice: (state) => {
      state.total = 0
      state.addcard.map(
        (product) => (state.total += product.amount * product.price)
      );
      console.log(current (state.addcard))
    },
    cardIncrement: (state, action) => {
      const { payload } = action;
      state.addcard.map((inc) =>
        inc.id === payload && inc.amount <= inc.stock
          ? inc.amount++
          : inc.amount
      );
    },
    cardDecrement: (state, action) => {
      const { payload } = action;
      state.addcard.map((dec) => {
        if (dec.id === payload && dec.amount > 0) {
          return dec.amount--;
        }
        return dec.amount;
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
  endLoading,
  addToCard,
  increment,
  decrement,
  deleteProduct,
  deleteAll,
  totalPrice,
  cardIncrement,
  cardDecrement,
  
} = productsSlice.actions;
export default productsSlice.reducer;
