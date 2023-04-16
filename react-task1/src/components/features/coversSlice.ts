import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { Data } from '../CardHolder';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const fetchCustomCovers = createAsyncThunk(
  'covers/fetchCustomCovers',
  async (searchValue: string) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchValue}&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek`
    );
    const data = await response.json();
    return data;
  }
);

interface CoversState {
  customCovers: Data | null;
  customError: FetchBaseQueryError | SerializedError | undefined;
  loading: boolean;
}

const initialState: CoversState = {
  customCovers: null,
  customError: undefined,
  loading: false,
};

const coversSlice = createSlice({
  name: 'covers',
  initialState,
  reducers: {
    setCovers: (state, action) => {
      state.customCovers = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.customError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomCovers.pending, (state) => {
        state.loading = true;
        state.customError = undefined;
      })
      .addCase(fetchCustomCovers.fulfilled, (state, action) => {
        state.customCovers = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustomCovers.rejected, (state, action) => {
        state.customError = {
          status: 'CUSTOM_ERROR',
          error: action.error.message ?? '',
          data: undefined,
        };
        state.loading = false;
      });
  },
});
export const { setCovers, setLoading, setError } = coversSlice.actions;

export default coversSlice.reducer;
