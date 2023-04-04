import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Image {
  id: number;
  url: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecatapi.com/v1" }),
  endpoints: (builder) => ({
    getRandImg: builder.query({
      query: () => "/images/search",
      transformResponse: (res: Image[]) =>
        res[0] /*here we're extracting, our obj with random image,
      since it's returned inside an array of length one*/,
    }),
  }),
});

export const { useGetRandImgQuery } = apiSlice;
