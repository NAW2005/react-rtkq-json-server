import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetEditBlogMutation,
  useGetSingleBlogQuery,
} from "../feature/services/blogAPI";

const Edit = () => {
  const { id } = useParams();
  const ref = useRef();

  const [getEditBlog] = useGetEditBlogMutation();
  const { data: blog } = useGetSingleBlogQuery(id);

  const nav = useNavigate();
  const editblgHandler = (e) => {
    const { title, image, text, desc } = ref.current;
    e.preventDefault();
    const newData = {
      title: title.value,
      image: image.value,
      text: text.value,
      desc: desc.value,
      id: blog.id,
    };
    console.log(newData);
    getEditBlog(newData);
    nav("/");
  };
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <form
          className=' flex flex-col gap-10 p-7 shadow-xl bg-white   w-96'
          action=''
          ref={ref}
        >
          <h2 className='text-lg uppercase text-violet-700 font-semibold'>
            Edit your Blog
          </h2>

          <input
            type='text'
            defaultValue={blog?.title}
            placeholder='title..'
            name='title'
            className='outline-none border-b border-b-gray-700'
          />
          <input
            type='text'
            defaultValue={blog?.text}
            placeholder='text..'
            name='text'
            className='outline-none border-b border-b-gray-700'
          />
          <input
            type='text'
            defaultValue={blog?.desc}
            placeholder='desc...'
            name='desc'
            className='outline-none border-b border-b-gray-700'
          />

          <input
            type='text'
            defaultValue={blog?.image}
            placeholder='imageAddress...'
            name='image'
            className='outline-none border-b border-b-gray-700'
          />

          <div className='flex items-center space-x-5'>
            <button
              type='submit'
              className='py-[0.5rem] px-3 font-semibold rounded-sm hover:bg-violet-800 duration-300 bg-violet-700 text-white'
              onClick={editblgHandler}
            >
              Done
            </button>
            <Link to={"/"}>
              <button
                type='submit'
                className='py-[0.5rem] px-3 font-semibold rounded-sm hover:bg-violet-800 duration-300 bg-violet-700 text-white'
                onClick={() => nav("/")}
              >
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
