import { configureStore } from "@reduxjs/toolkit";
import { productDetailApi } from "../services/detailProductApi";
import { cartProductsApi } from "../services/cartProductsApi";
import accountSlice from "../features/accountSlice";
import cartSlice from "../features/cartSlice";
import collectionSlice from "../features/collectionSlice";
import searchSlice from "../features/searchSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    [cartProductsApi.reducerPath]: cartProductsApi.reducer,
    collection: collectionSlice,
    search: searchSlice,
    cart: cartSlice,
    account: accountSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productDetailApi.middleware),
});

export default store;
