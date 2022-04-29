import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626715a163e0f382568a55af.mockapi.io/api',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: `/contacts`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactsMutation,
} = contactsApi;
