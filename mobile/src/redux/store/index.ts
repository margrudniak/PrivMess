import { configureStore } from '@reduxjs/toolkit';
import { authApi, authSlice, postsApi } from '../slices';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    auth: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware, postsApi.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
