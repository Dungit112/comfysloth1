import { takeLatest } from "redux-saga/effects";
import { fetchProduct } from "./app/productsSlice";
import { fetchProductHandle } from "./app/saga";

export default function* rootSaga() {
  yield takeLatest(fetchProduct, fetchProductHandle);
}
