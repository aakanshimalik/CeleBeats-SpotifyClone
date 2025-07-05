import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const genreByCountry = {
  IN: 'bollywood',
  US: 'hip-hop',
  BR: 'latin',
  KR: 'k-pop',
  JP: 'j-pop',
  FR: 'electronic',
  DE: 'house',
  NG: 'afrobeats',
  // Add more if needed
}

export const audiusCoreApi = createApi({
  reducerPath: 'audiusCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1/',
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({
      query: () => 'tracks/trending?limit=50&app_name=spotify-clone&include_users=true',
    }),
    getSongsByGenre: builder.query({ query: () => '/charts/genre-world?genre_code=${genre}&limit=50&app_name=spotify-clone'}),
    getSongDetails: builder.query({ 
      query: (songid) => `tracks/${songid}` }),
    getSongRelated: builder.query({ query: ({songid }) => `/tracks/${songid}` }),
    getSongsByArtist: builder.query({
      query: (artistId) => `users/${artistId}/tracks?app_name=your_app`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `users/${artistId}?app_name=spotify-clone`,
    }),
    getSongsByCountry: builder.query({ query: (countryCode) => {
      const genre = genreByCountry[countryCode] || 'electronic'; // default fallback
          return `/tracks/trending?genre=${genre}&limit=20&app_name=spotify-clone`;     
    }
    // `/charts/country?country_code=${countryCode}`
  }),
 
  
  // Get artist profile 
  // getArtist: builder.query({
  //   query: (artistId)=> `users/${artistId}?app_name=spotify-clone`,
  // }),
  }),
});

export const {
  useGetTopTracksQuery,
  useGetSongsByGenreQuery,
  useGetArtistDetailsQuery,
  useGetSongsByArtistQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsByCountryQuery,

} = audiusCoreApi;