import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from 'react-redux';
import { deleteTask } from '../fecheres/imtihon/TaskSlice';
export default function TaskDeleteModal({open, toggle, index, e_index}) {
    let dispatch = useDispatch()
    const delete_task =()=>{
        let payload = {
            index,
            e_index
        }
        dispatch(deleteTask({...payload}))
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle} >
        <ModalHeader>Delete</ModalHeader>
        <ModalBody><button className='btn btn-warning'  onClick={toggle}>close</button><button className='btn btn-danger' onClick={delete_task}>delete</button></ModalBody>
      </Modal>
    </div>
  )
}
