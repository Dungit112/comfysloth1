import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.app.products;
export const selecttorValue = createSelector(
  selectProducts,
  (products) => products
);
