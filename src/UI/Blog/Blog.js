import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import CardLayout from './CardLayout';
import SearchBlog from './SearchBlog';
import { data } from './data';

const Blog = () => {
  console.log(data);
  return (
    <>
    <Header />
    <div className="container-fluid pt-5">
    <div className="container-fluid pt-5">
        <h3 className='text-center'>Blogs</h3>
        <SearchBlog/>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map(d=>(
          <CardLayout key={d.blog.id} data={d}/>
        ))}
        </div>
    </div>
    </div>
    </>
  );
};
export default Blog;
