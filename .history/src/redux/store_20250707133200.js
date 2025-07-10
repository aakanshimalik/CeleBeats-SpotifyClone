import { configureStore } from '@reduxjs/toolkit';
import { audiusCoreApi } from './services/audiusCoreApi';
import { spotifySearchApi } from './services/spotifyWebApi';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [audiusCoreApi.reducerPath]: audiusCoreApi.reducer,
    [spotifySearchApi.reducerPath]: spotifySearchApi.reducer, 
    player: playerReducer,
  },

  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware().concat(audiusCoreApi.middleware)
  .concat(spotifySearchApi.middleware),
});
