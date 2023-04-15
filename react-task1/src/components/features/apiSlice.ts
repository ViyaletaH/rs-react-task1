import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  basicUrl: string;
}

export const initialState: GlobalState = {
  basicUrl:
    'https://api.unsplash.com/search/photos?query=gloomy+sky&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek',
};

export const apiSlice = createSlice({
  name: 'apiSlice',
  initialState,
  reducers: {
    requestChange: (state, action: PayloadAction<string>) => {
      state.basicUrl = action.payload;
    },
  },
});

export const { requestChange } = apiSlice.actions;
export default apiSlice.reducer;
