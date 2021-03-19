import { takeLatest } from "redux-saga/effects";
import { fetchProduct, fetchProductId } from "./app/productsSlice";
import { fetchProductHandle, fetchProductid } from "./app/saga";

export default function* rootSaga() {
  yield takeLatest(fetchProduct, fetchProductHandle);
  yield takeLatest(fetchProductId, fetchProductid);
}
