import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const audiusCoreApi = createApi({
  reducerPath: 'audiusCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1/', // Audius API base
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({
      query: () => 'tracks/trending?limit=10&app_name=spotify-clone',
    }),
    searchTracks: builder.query({
      query: (term) => tracks/search?query=${encodeURIComponent(term)}&app_name=spotify-clone,
    }),
    getArtist: builder.query({
      query: (artistId) => users/${artistId}?app_name=spotify-clone,
    }),
  }),
});

export const {
  useGetTopTracksQuery,
  useSearchTracksQuery,
  useGetArtistQuery,
} = audiusCoreApi;
