
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const audiusCoreApi = createApi({
  reducerPath: 'audiusCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1/',
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({
      query: () => 'tracks/trending?limit=10&app_name=spotify-clone',
    }),
  }),
});

export const {
  useGetTopTracksQuery,
} = audiusCoreApi;