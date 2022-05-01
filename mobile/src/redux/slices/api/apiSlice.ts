import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:8000",
  }),
  endpoints(builder) {
    return {
      testGet: builder.query<Object, void>({
        query: () => ({
          url: "/",
          method: "GET",
        }),
      }),
    };
  },
});

export const { useTestGetQuery } = apiSlice;
