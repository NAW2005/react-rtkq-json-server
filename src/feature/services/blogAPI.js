import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogAPI = createApi({
  reducerPath: "blogAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["blogAPI"],

  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blogAPI"],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blogAPI"],
    }),
    getCreateBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["blogAPI"],
    }),

    getDeleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["blogAPI"],
    }),

    getEditBlog: builder.mutation({
      query: (newdata) => ({
        url: `/blogs/${newdata?.id}`,
        method: "PATCH",
        body: newdata,
      }),
      invalidatesTags: ["blogAPI"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useGetCreateBlogMutation,
  useGetDeleteBlogMutation,
  useGetEditBlogMutation,
} = blogAPI;
