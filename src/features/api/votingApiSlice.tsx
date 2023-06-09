import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "51e1899d-7841-4283-8c25-753f0431e06a";

type Image = {
  id: number;
  url: string;
};

interface ReactionImage {
  id: number;
  value: number;
  image: Image;
}

interface ReturnedImg {
  imgId: string;
  subId: string;
  value: number;
}

export const votingApiSlice = createApi({
  reducerPath: "votingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-API-Key", apiKey);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRandImg: builder.query<Image, void>({
      query: () => "/images/search",
      transformResponse: (res: Image[]) =>
        res[0] /* here we're extracting, our obj with random image,
      since it's returned inside an array of length one */,
    }),

    getVotes: builder.query<ReactionImage[], void>({
      query: () => "/votes",
    }),

    getFavourites: builder.query<ReactionImage[], void>({
      query: () => "/favourites",
    }),

    voteImg: builder.mutation<
      ReturnedImg,
      { imageId: number | undefined; voteValue: number }
    >({
      query: ({ imageId, voteValue }) => ({
        url: "/votes",
        method: "POST",
        body: { image_id: imageId, sub_id: "user-123", value: voteValue },
      }),
    }),

    favouriteImg: builder.mutation<ReturnedImg, number | undefined>({
      query: (imageId) => ({
        url: "/favourites",
        method: "POST",
        body: { image_id: imageId, sub_id: "user-123" },
      }),
    }),

    deleteVote: builder.mutation<Image, number>({
      query: (deleteImageId) => ({
        url: "/votes" + "/" + deleteImageId,
        method: "DELETE",
      }),
    }),

    deleteFavourite: builder.mutation<Image, number>({
      query: (deleteImageId) => ({
        url: "/favourites" + "/" + deleteImageId,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetRandImgQuery,
  useGetVotesQuery,
  useGetFavouritesQuery,
  useFavouriteImgMutation,
  useVoteImgMutation,
  useDeleteVoteMutation,
  useDeleteFavouriteMutation,
} = votingApiSlice;
