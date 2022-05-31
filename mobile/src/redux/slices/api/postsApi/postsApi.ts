import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'src/config';
import { RootState } from 'src/redux/store';
import {
  CreatePostRequest,
  CreatePostResponse,
  GetPostRequest,
  GetPostResponse,
  RemovePostRequest,
  RemovePostResponse
} from './postsApi.types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/post`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      getPosts: builder.query<GetPostResponse, GetPostRequest>({
        query: (credentials) => ({
          url: '/posts',
          method: 'GET',
          body: credentials
        })
      }),
      createPost: builder.mutation<CreatePostResponse, CreatePostRequest>({
        query: (credentials) => ({
          url: '/create',
          method: 'POST',
          body: credentials
        })
      }),
      removePost: builder.mutation<RemovePostResponse, RemovePostRequest>({
        query: (credentials) => ({
          url: '/remove',
          method: 'DELETE',
          body: credentials
        })
      })
    };
  }
});

export const {} = postsApi;
