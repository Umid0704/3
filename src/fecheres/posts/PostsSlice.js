import { createSlice } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

let date = sub(new Date(),{minuts:10}).toISOString()

const initialState = [
    {id:1, title:"Lorem Modern Redux Toolkit",select:'Admin',date:date,content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero excepturi explicabo eos assumenda, eaque veniam iste facilis nesciunt modi?"}
]

const PostSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postsAdd(state, action){
            state.push(action.payload)  
         }
    }
})
export const getAllPost = (state)=>state.posts
export const {postsAdd}=PostSlice.actions
export default PostSlice.reducer