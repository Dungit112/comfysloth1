import axios from "axios";
import { put } from "redux-saga/effects";
import {
  setProduct,
  setProductId,
  starLoading,
  endLoading,
} from "./productsSlice";
export function* fetchProductHandle(payload) {
  try {
    yield put(starLoading());
    let res = yield axios.get(
      "https://course-api.com/react-store-products",
      {}
    );

    yield put(setProduct(res.data));
    yield put(endLoading());
  } catch (error) {
    console.log("error", error.message);
  }
}

export function* fetchProductid(payload) {
  try {
    yield put(starLoading());
    let res = yield axios.get(
      `https://course-api.com/react-store-single-product?id=${payload.payload}`
    );

    yield put(setProductId(res.data));
    yield put(endLoading());
  } catch (error) {
    console.log("error", error.message);
  }
}
