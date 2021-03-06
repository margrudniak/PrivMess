import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'src/config';
import { RootState } from 'src/redux/store';
import {
  CreatePostRequest,
  CreatePostResponse,
  GetPostRequest,
  GetPostResponse,
  Post,
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
        query: ({ userId, page = 0, size = 10 }) => ({
          url: `/posts?userId=${userId}&page=${page}&size=${size}`,
          method: 'GET'
        })
      }),
      createPost: builder.mutation<Post, CreatePostRequest>({
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

export const { useLazyGetPostsQuery, useCreatePostMutation, useRemovePostMutation } = postsApi;
