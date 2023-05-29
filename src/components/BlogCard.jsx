import React from "react";
import { Link } from "react-router-dom";
import { useGetDeleteBlogMutation } from "../feature/services/blogAPI";

const BlogCard = ({ blog }) => {
  const [getDeleteBlog] = useGetDeleteBlogMutation();
  return (
    <div>
      <div className='flex  border shadow-md w-72 rounded-md flex-col'>
        <img className='h-[300px] ' src={blog.image} alt='' />
        <div className=' p-2 flex flex-col gap-3'>
          <h2 className='mt-2 uppercase'>{blog.title}</h2>
          <p>{blog.desc}</p>
          <div className='flex space-x-3 items-center'>
            <Link className=' ' to={`detail/${blog?.id}`}>
              <button className='py-2 px-4   rounded-sm  text-white font-bold bg-violet-600'>
                Detail
              </button>
            </Link>
            <button
              onClick={() => getDeleteBlog(blog?.id)}
              className='bg-red-600 px-4 py-2 rounded-sm text-white font-bold '
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
