import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IP_ADDRESS } from "@env";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${IP_ADDRESS}:8000`,
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
