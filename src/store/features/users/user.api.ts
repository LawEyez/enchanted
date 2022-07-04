import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ResponseState {
  userId: string,
  token: string,
  ok: boolean
}

interface DataState {
  email: string,
  password: string
}

export const userApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    prepareHeaders: (headers) => {
      return headers
    }
  }),
  endpoints: (build) => {
    return {
      login: build.mutation<ResponseState, DataState>({
        query: (data) => ({
          url: 'users/login',
          method: 'POST',
          body: data
        })
      }),
    }
  }
})

export const { useLoginMutation } = userApiSlice
