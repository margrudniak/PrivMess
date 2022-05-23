import { IP_ADDRESS } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'src/redux/store';

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  id?: number;
  email?: string;
  accessToken?: string;
  message?: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${IP_ADDRESS}:8000/api`,
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
      testGet: builder.query<Object, void>({
        query: () => ({
          url: '/',
          method: 'GET'
        })
      }),
      signUp: builder.mutation<SignUpResponse, SignUpRequest>({
        query: (credentials) => ({
          url: '/auth/signup',
          method: 'POST',
          body: credentials
        })
      }),
      signIn: builder.mutation<SignInResponse, SignInRequest>({
        query: (credentials) => ({
          url: '/auth/signin',
          method: 'POST',
          body: credentials
        })
      })
    };
  }
});

export const { useTestGetQuery, useSignUpMutation, useSignInMutation } = apiSlice;
