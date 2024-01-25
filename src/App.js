import React from "react";
import Users from "./fecheres/pages/Users";
import PostsList from "./fecheres/posts/PostsList";
import { Link, Route, Routes } from "react-router-dom";
import TaskList from "./fecheres/imtihon/TaskList";
export default function App(){
  return (
    <div className="my-3">
    <Link to='/' className="no-underline text-white bg-blue-600 font-semibold text-2xl mx-3  rounded p-2" >users</Link>
    <Link to='/post' className="no-underline text-white bg-blue-600 font-semibold text-2xl mx-3  rounded p-2">post</Link>
    <Link to='/task' className="no-underline text-white bg-blue-600 font-semibold text-2xl mx-3  rounded p-2">task</Link>
    <Routes>
      <Route path="" element={<Users/>} />
      <Route path="post" element={<PostsList/>} />
      <Route path="task" element={<TaskList/>} />
    </Routes>
     
    </div>
  );
}
