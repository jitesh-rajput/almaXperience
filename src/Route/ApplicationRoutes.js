// Routes.js

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from '../UI/Landing/Landing';
import Login from '../UI/Authentication/Login';
import SignUp from '../UI/Authentication/SignUp';
/*import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import NotFound from './components/NotFound';
*/
function ApplicationRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<Landing/>} />
        <Route  path="/login" element={<Login/>}  />
        <Route  path="/signup" element={<SignUp/>}  />
    </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
