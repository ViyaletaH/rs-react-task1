import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../features/apiSlice';
import { coversFetch } from '../services/apiDataFetch';

export const store = configureStore({
  reducer: {
    [coversFetch.reducerPath]: coversFetch.reducer,
    apiSlice: apiReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(coversFetch.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
