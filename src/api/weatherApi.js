import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.openweathermap.org/data/2.5/';

export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWeatherById: builder.query({
      // query: () => '/todos', (By default it takes GET Method)
      query: (id) => ({
        url:`weather?q=${id}&appid=`,
        method:'GET'
      })
    }),
  }),
});

// Export the actions for manual dispatch
export const { useGetWeatherByIdQuery } = weatherApi;
