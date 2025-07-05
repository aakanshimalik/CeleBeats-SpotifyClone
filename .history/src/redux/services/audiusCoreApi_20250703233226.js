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
      query: ( songid ) => `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: (songid ) => `v1/tracks/related?track_id=${songid}` }),
  
  // Get artist profile 
  // getArtist: builder.query({
  //   query: (artistId)=> `users/${artistId}?app_name=spotify-clone`,
  // }),
  }),
});

export const {
  useGetTopTracksQuery,
  useGetArtistQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = audiusCoreApi;