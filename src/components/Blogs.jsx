import React from "react";
import { useGetBlogsQuery } from "../feature/services/blogAPI";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: Blogs } = useGetBlogsQuery();

  return (
    <div className='p-5'>
      <Link to={"/createblog"}>
        <button className='py-2 px-5  border border-violet-500 hover:bg-violet-500 hover:text-white duration-300 rounded-md font-semibold'>
          Create your Blog
        </button>
      </Link>
      <div className='flex flex-wrap items-center gap-16 mt-5 justify-center'>
        {Blogs?.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
