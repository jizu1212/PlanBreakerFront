import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your API slice
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (userDTO) => ({
        url: "api/signIn",
        method: "POST",
        body: userDTO,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
