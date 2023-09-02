// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pc-builder-two-black.vercel.app/",
  }),
//   tagTypes: ["Post"],
  endpoints: (build) => ({
    getAllProducts:build.query({
        query:() => `/api/products`
    }),
    getProductById: build.query({
      query: (id) => ({ url: `/api/products/${id}` }),
    }),
    getAllCategories: build.query({
      query: () =>  `/api/categories/`,
    }),
  }),
});


export const {useGetAllCategoriesQuery,useGetAllProductsQuery,useGetProductByIdQuery} = apiSlice