import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiKey = import.meta.env.VITE_BASE_QUERY;
export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseApiKey }),
  endpoints: (builder) => ({
    getGoodsQuery: builder.query<any, any>({
      query: (params) => ({
        url: "/goods/",
        params,
      }),
    }),
  }),
});

export const { useGetGoodsQueryQuery } = goodsApi;
