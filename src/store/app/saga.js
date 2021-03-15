import axios from "axios";
import { put } from "redux-saga/effects";
import { setProduct } from "./productsSlice";
export function* fetchProductHandle(payload) {
  try {
    let res = yield axios.get(
      "https://course-api.com/react-store-products",
      {}
    );

    yield put(setProduct(res.data));
  } catch (error) {
    console.log("");
  }
}

// export function* appMiddleware() {
//     yield all([call(handleJokesSaga)]);
//   }
