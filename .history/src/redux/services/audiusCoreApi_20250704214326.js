import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const audiusCoreApi = createApi({
  reducerPath: 'audiusCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1/',
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({
      query: (songid) => 'tracks/trending?limit=50&app_name=spotify-clone',
    }),
    getSongDetails: builder.query({ 
      query: (songid) => `tracks/${songid}` }),
    getSongRelated: builder.query({ query: ({songid }) => `/tracks/${songid}` }),
    getSongsByArtist: builder.query({
      query: (artistId) => `users/${artistId}/tracks?app_name=your_app`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `users/${artistId}?app_name=spotify-clone`,
    })
 
  
  // Get artist profile 
  // getArtist: builder.query({
  //   query: (artistId)=> `users/${artistId}?app_name=spotify-clone`,
  // }),
  }),
});

export const {
  useGetTopTracksQuery,
  useGetArtistDetailsQuery,
  useGetSongsByArtistQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,

} = audiusCoreApi;