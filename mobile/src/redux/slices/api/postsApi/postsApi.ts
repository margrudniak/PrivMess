import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'src/config';
import { RootState } from 'src/redux/store';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/posts`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints(builder) {
    return {};
  }
});

export const {} = postsApi;
