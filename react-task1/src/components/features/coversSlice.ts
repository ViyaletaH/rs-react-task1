import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  covers: null,
  isLoading: false,
  error: null,
};

const coversSlice = createSlice({
  name: 'covers',
  initialState,
  reducers: {
    setCovers: (state, action) => {
      state.covers = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCovers, setLoading, setError } = coversSlice.actions;
