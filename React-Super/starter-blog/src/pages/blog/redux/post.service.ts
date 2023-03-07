import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostType } from 'types/post.type'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004/'
  }),
  tagTypes: ['Posts'],

  endpoints: (builder) => ({
    posts: builder.query<PostType[], void>({
      query: () => `posts`,
      providesTags: (result) => {
        if (result) {
          return [...result.map(({ id }) => ({ type: 'Posts', id } as const)), { type: 'Posts', id: 'LIST' }]
        } else {
          return [{ type: 'Posts', id: 'LIST' }]
        }
      }
    }),
    addPost: builder.mutation<PostType, Omit<PostType, 'id'>>({
      query(body) {
        return {
          url: `posts`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }]
    }),
    getPost: builder.query<PostType, string>({
      query: (id: string) => `posts/${id}`
    }),
    updatePost: builder.mutation<PostType, { id: string; body: PostType }>({
      query({ id, body }) {
        try {
          return {
            url: `posts/${id}`,
            method: 'PUT',
            body
          }
        } catch (error: any) {
          return error
        }
      },
      invalidatesTags: (result, error, body) => [{ type: 'Posts', id: body.id }]
    }),
    deletePost: builder.mutation<{}, string>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (result, error, body) => [{ type: 'Posts', id: body }]
    })
  })
})

export const { usePostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  postApi
