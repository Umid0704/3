import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../fecheres/counter/counterSlice"
import PostsReducer from "../fecheres/posts/PostsSlice";
import TaskReducer from "../fecheres/imtihon/TaskSlice";
const store  =  configureStore({
    reducer:{
        counter:userReducer,
        posts:PostsReducer,
        task:TaskReducer
    }})
export default store
