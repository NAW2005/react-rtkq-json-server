import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Detail from "./components/Detail";
import Createblog from "./components/Createblog";
import Edit from "./components/Edit";

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/createblog' element={<Createblog />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
