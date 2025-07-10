import { configureStore } from '@reduxjs/toolkit';
import { audiusCoreApi } from './services/audiusCoreApi';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [audiusCoreApi.reducerPath]: audiusCoreApi.reducer,
    player: playerReducer,
  },

  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware().concat(audiusCoreApi.middleware),
});
