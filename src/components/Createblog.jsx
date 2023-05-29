import React, { useRef } from "react";
import { useGetCreateBlogMutation } from "../feature/services/blogAPI";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Createblog = () => {
  const ref = useRef();
  const [getCreateBlog] = useGetCreateBlogMutation();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    const { title, text, desc, image } = ref.current;
    const newData = {
      title: title.value,
      text: text.value,
      desc: desc.value,
      image: image.value,
      id: v4(),
    };
    getCreateBlog(newData);
    e.preventDefault();
    nav('/')
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        className=' flex flex-col gap-10 p-7 shadow-xl bg-white   w-96'
        action=''
        ref={ref}
      >
        <h2 className='text-lg uppercase text-violet-700 font-semibold'>
          Create your Blog
        </h2>

        <input
          type='text'
          placeholder='title..'
          name='title'
          className='outline-none border-b border-b-gray-700'
        />
        <input
          type='text'
          placeholder='text..'
          name='text'
          className='outline-none border-b border-b-gray-700'
        />
        <input
          type='text'
          placeholder='desc...'
          name='desc'
          className='outline-none border-b border-b-gray-700'
        />

        <input
          type='text'
          placeholder='imageAddress...'
          name='image'
          className='outline-none border-b border-b-gray-700'
        />

        <button
          type='submit'
          className='py-[0.8rem] px-3 font-semibold rounded-full hover:bg-violet-800 duration-300 bg-violet-700 text-white'
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Createblog;
