import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { products } from "@/redux/api";
import productReducer from "@/redux/slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const presistConfig = {
  key: "root",
  version: 1,
  storage,
};

const combinedReducer = combineReducers({
  [products.reducerPath]: products.reducer,
  productReducer: productReducer,
});

const persistedReducer = persistReducer(presistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (mid) =>
    mid({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(products.middleware),
});

export const persistor = persistStore(store);
