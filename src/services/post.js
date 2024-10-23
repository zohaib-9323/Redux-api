import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
 reducerPath: 'postApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
 }),
 endpoints: (builder) => ({
  getAllPost: builder.query({
   query: () => ({
    url: 'posts',
    method: 'GET'
   })
  }),
  getPostById: builder.query({
   query: (id) => {
    console.log("ID:", id)
    return {
     url: `posts/${id}`,
     method: 'GET'
    }
   }
  }),

  getPostByLimit: builder.query({
   query: (num) => {
    console.log("Limit Number:", num)
    return {
     url: `posts?_limit=${num}`,
     method: 'GET'
    }
   }
  }),

  deletePost: builder.mutation({
   query: (id) => {
    console.log("Delete ID:", id)
    return {
     url: `posts/${id}`,
     method: 'DELETE'
    }
   }
  }),

  createPost: builder.mutation({
   query: (newPost) => {
    console.log("Create Post: ", newPost)
    return {
     url: `posts`,
     method: 'POST',
     body: newPost,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    }
   }
  }),

  updatePost: builder.mutation({
   query: (updatePostData) => {
    console.log("Update Post: ", updatePostData)
    const { id, ...data } = updatePostData
    console.log("Actual Update Post: ", data)
    return {
     url: `posts/${id}`,
     method: 'PUT',
     body: data,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    }
   }
  }),
 }),

})


export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = postApi




/*
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define types for the posts and query parameters
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface NewPost {
  userId: number;
  title: string;
  body: string;
}

interface UpdatePost {
  id: number;
  title: string;
  body: string;
}

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query<Post[], void>({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => {
        console.log('ID:', id);
        return {
          url: `posts/${id}`,
          method: 'GET',
        };
      },
    }),
    getPostByLimit: builder.query<Post[], number>({
      query: (num) => {
        console.log('Limit Number:', num);
        return {
          url: `posts?_limit=${num}`,
          method: 'GET',
        };
      },
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => {
        console.log('Delete ID:', id);
        return {
          url: `posts/${id}`,
          method: 'DELETE',
        };
      },
    }),
    createPost: builder.mutation<Post, NewPost>({
      query: (newPost) => {
        console.log('Create Post: ', newPost);
        return {
          url: 'posts',
          method: 'POST',
          body: newPost,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
    updatePost: builder.mutation<Post, UpdatePost>({
      query: (updatePostData) => {
        console.log('Update Post: ', updatePostData);
        const { id, ...data } = updatePostData;
        console.log('Actual Update Post: ', data);
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
*/