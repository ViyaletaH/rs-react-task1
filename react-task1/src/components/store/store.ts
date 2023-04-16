import { combineReducers, configureStore } from '@reduxjs/toolkit';
import apiReducer from '../features/apiSlice';
import { coversFetch } from '../services/apiDataFetch';
import coversSlice from '../features/coversSlice';

const rootReducer = combineReducers({
  [coversFetch.reducerPath]: coversFetch.reducer,
  apiSlice: apiReducer,
  covers: coversSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(coversFetch.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
