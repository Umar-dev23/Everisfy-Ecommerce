import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({ query: () => "products" }),
    getCategoryProdcuts: builder.query({
      query: (categoryName) =>
        `products/category/${encodeURIComponent(categoryName)}`,
    }),
    getOneProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  useGetCategoryProdcutsQuery,
} = products;
