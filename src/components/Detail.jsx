import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../feature/services/blogAPI";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const { data: blog } = useGetSingleBlogQuery(id);
  console.log(blog);

  return (
    <div className='flex flex-wrap gap-10 justify-center mt-10'>
      <div className='flex  border shadow-md  w-[450px]  rounded-md flex-col'>
        <img className='h-[300px]  ' src={blog?.image} alt='' />
        <div className=' p-2 flex flex-col gap-3'>
          <h2 className='mt-2 uppercase'>{blog?.title}</h2>
          <p>{blog?.desc}</p>
          <p>{blog?.text}</p>

          <div className='flex items-center space-x-3'>
            <Link className=' ' to={`/`}>
              <button className='py-2 px-4 w-full  rounded-sm  text-white font-bold bg-violet-600'>
                Back
              </button>
            </Link>
            <Link className=' ' to={`/edit/${blog?.id}`}>
              <button className='py-2 px-4 w-full  rounded-sm  text-white font-bold bg-blue-600'>
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
