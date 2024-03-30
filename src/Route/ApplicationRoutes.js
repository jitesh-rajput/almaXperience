// Routes.js

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Landing from '../UI/Landing/Landing';
import Login from '../UI/Authentication/Login';
import SignUp from '../UI/Authentication/SignUp';
import Feed from '../UI/Tweets/Feed';
import Blog from '../UI/Blog/Blog';
import FullBlog from '../UI/Blog/FullBlog';
import AddBlog from '../UI/Blog/AddBlog';
import Launchpad from '../UI/Launchpad/Launchpad';
import OffCampus from '../UI/Launchpad/OffCampus';
import Placements from '../UI/Launchpad/Placements';
import Profile from '../UI/Profile/Profile';

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing/>} />
        <Route  path="/login" element={<Login/>}  />
        <Route path='*' element={<Landing/>} />
        <Route  path="/signup" element={<SignUp/>}  />
        <Route  path='/profile' element={<Profile/>}/> 
        <Route  path='/feed' element={<ProtectedRoute component={Feed}/>}/> 
        <Route path="/blog" element={<ProtectedRoute component={Blog}/>}/>
        <Route  path='/blog/addBlog' element={<ProtectedRoute component={AddBlog}/>}/> 
        <Route  path='/blog/:id' element={<ProtectedRoute component={FullBlog}/>}/> 
        <Route  path='/launchpad' element={<ProtectedRoute component={Launchpad}/>}/> 
        <Route  path='/launchpad/offcampus' element={<ProtectedRoute component={OffCampus}/>}/> 
        <Route  path='/launchpad/placements' element={<ProtectedRoute component={Placements}/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
