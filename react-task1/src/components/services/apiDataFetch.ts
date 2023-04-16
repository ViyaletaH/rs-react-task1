import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../CardHolder';

export const coversFetch = createApi({
  reducerPath: 'coversFetch',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/search/photos?query=' }),
  endpoints: (builder) => ({
    getDefaultCovers: builder.query<Data, undefined>({
      query: () => 'gloomy+sky&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek',
    }),
    getCustomCovers: builder.query<Data, string>({
      query: (request) => `${request}&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek`,
    }),
  }),
});

export const { useGetDefaultCoversQuery } = coversFetch;
export const { useGetCustomCoversQuery } = coversFetch;
