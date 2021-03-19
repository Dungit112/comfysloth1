import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'app',
  initialState: {
    products: [],
    product: {},
    isloading: false,
    addcard: JSON.parse(window.localStorage.getItem('products'))
      ? JSON.parse(window.localStorage.getItem('products'))
      : [],
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

    addToCard: (state, { payload }) => {
      if (state.addcard.map((item) => item.id).includes(payload.id)) {
        state.addcard.forEach((item) => {
          if (item.id === payload.id) {
            item.amount += payload.amount;
          }
        });
      } else {
        state.addcard.push(payload);
      }
    },
    increment: (state) => {
      if (state.product.amount <= state.product.stock) {
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
      state.total = 0;
      state.addcard.map(
        (product) => (state.total += product.amount * product.price)
      );
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
        if (dec.id === payload && dec.amount > 1) {
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
