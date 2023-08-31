import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "../redux/features/builderSlice";
import { apiSlice } from "./api/api";

export const store = configureStore({
  reducer: {
    builder: builderReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
