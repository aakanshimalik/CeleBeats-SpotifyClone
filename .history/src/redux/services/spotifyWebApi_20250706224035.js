import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SPOTIFY_ACCESS_TOKEN = 'BQD7QP3W3KHJwxCya8e7OVK_mXZ1w3MyGm8xP-36zfRgGgfxJ5zzrvAN6uqD-1S6Xaev7F_fs55X-YopvAsUr7AK-T1eMbYjpzHAdEfYJ2lapGEQHHg53zQWRmwJB0V1PtYOzF3dTqY';

export const spotifySearchApi = createApi({
  reducerPath: 'spotifySearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${SPOTIFY_ACCESS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchTracks: builder.query({
      query: (term) => `search?q=${encodeURIComponent(term)}&type=track&limit=20`,
    }),
  }),
});

export const { useSearchTracksQuery } = spotifySearchApi;
