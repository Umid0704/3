import React from "react";
import {  postsAdd } from "../fecheres/posts/PostsSlice";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export default function PostsModal({open, toggle}) {
 let dispatch = useDispatch()
    const addPost=(e)=>{
      e.preventDefault()
     let payload={ 
       title:e.target[0].value,
       select:e.target[1].value,
       content:e.target[2].value,
       date:new Date().toISOString()
      }
      dispatch(postsAdd({...payload}))
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader><h1>Posts</h1></ModalHeader>
        <ModalBody>
          <form onSubmit={addPost} >
          <input className="form-control" type="text" placeholder="Title" />
          <select className="form-control" >
            <option className="form-control" value="" hidden>Select</option>
            <option className="form-control" value="superAdmin">Super admin</option>  +
            <option className="form-control" value="admin"> Admin</option>
            <option className="form-control" value="user"> User</option>
          </select>
          <textarea className="resize-none form-control my-3" placeholder="Coment" name="" id="" cols="30" rows="10"></textarea>
          <button className="btn btn-info text-white " onClick={toggle}>add post</button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
