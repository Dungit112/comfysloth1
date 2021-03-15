import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootSaga from "./middleware";

import createSagaMiddleware from "redux-saga";
import productsSlice from "./app/productsSlice";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
export default configureStore({
  middleware,
  reducer: {
    app: productsSlice,
  },
});

sagaMiddleware.run(rootSaga);
