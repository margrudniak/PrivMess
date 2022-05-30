import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'src/config';
import { RootState } from 'src/redux/store';
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from './authApi.types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/auth`,
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
      signUp: builder.mutation<SignUpResponse, SignUpRequest>({
        query: (credentials) => ({
          url: '/signup',
          method: 'POST',
          body: credentials
        })
      }),
      signIn: builder.mutation<SignInResponse, SignInRequest>({
        query: (credentials) => ({
          url: '/signin',
          method: 'POST',
          body: credentials
        })
      })
    };
  }
});

export const { useSignUpMutation, useSignInMutation } = authApi;
