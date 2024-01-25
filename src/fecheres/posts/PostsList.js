import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react';
import PostsModal from '../../Modal/PostsModal';
import TimeAge from '../Time/TimeAge';
export default function PostsList() {
    const posts = useSelector(state=>state.posts)
    const [modalPosts, setModalPosts]=useState(false)
    console.log(posts);
    const openModal=()=>{
        setModalPosts(true)
    }
    const toggleModal=()=>{
        setModalPosts(false)
    }
  return (
    <div>
    <PostsModal open={modalPosts} toggle={toggleModal} />
    <button className='text-white bg-green-500 px-3 rounded m-3 py-2' onClick={openModal}  >Add Post</button>
    <div className='flex flex-col items-center'>
     {
        posts.map((item, index)=>{
            return <div className='p-4 shadow mb-3 w-[700px] rounded border' key={index}>
                <h1 className='text-center text-3xl'>{item.title}</h1>
                <p>{item.select}</p>
                <p className='text'>{item.content}</p>
                <TimeAge time={item.date} />
                
            </div>
        })
     }
    </div>
    </div>
  )
}
