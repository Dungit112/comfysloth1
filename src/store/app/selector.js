import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.app.products;
export const selecttorValue = createSelector(
  selectProducts,
  (products) => products
);

export const selectProduct = (state) => state.app.product;
export const selecttorValueProduct = createSelector(
  selectProduct,
  (product) => product
);

export const sLoading = (state) => state.app.isloading;
export const selecttorLoading = createSelector(
  sLoading,
  (l) => l
);
export const addCard = (state) => state.app.addcard;
export const selecttorAdd = createSelector(
  addCard,
  (addcard) => addcard
);
export const total = (state) => state.app.total;
export const selecttorTotal = createSelector(
  total,
  (total) => total
);
