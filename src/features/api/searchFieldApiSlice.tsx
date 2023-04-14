import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "51e1899d-7841-4283-8c25-753f0431e06a";

interface Breed {
  id: string;
  name: string;
}

interface ReturnedBreed {
  id: string;
  url: string;
}

export const searchFieldApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-API-Key", apiKey);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query<Breed[], void>({
      query: () => "/breeds",
    }),
    getSingleBreed: builder.query<ReturnedBreed, string | undefined>({
      query: (breedId) => "/images/search?breed_ids=" + breedId,
      transformResponse: (res: ReturnedBreed[]) =>
        res[0] /* here we're extracting, our obj with breed information,
      since it's returned inside an array of length one */,
    }),
  }),
});

export const { useGetBreedsQuery, useGetSingleBreedQuery } =
  searchFieldApiSlice;
