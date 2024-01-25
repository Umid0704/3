import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from 'react-redux'
import { TaskUpdate, taskadd } from '../fecheres/imtihon/TaskSlice'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function TaskModal({open,toggle,index,e_index,e_item,item}) {
    console.log(index);
    let dispatch = useDispatch()
    const AddTask =(e)=>{
      e.preventDefault()
        let payload=null
        if(!index == ''){
            payload ={
                value:{e_title: e.target[0].value},
                select: e.target[1].value,
                index,
                e_index,
                e_item,
                item
            }
            dispatch(TaskUpdate({...payload}))
        }
        payload={
             value:{e_title: e.target[0].value},
                select: e.target[1].value,
        }
        dispatch(taskadd({...payload}))
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle} >
        <ModalHeader>Add task</ModalHeader>
        <ModalBody>
            <form className='form-control' onSubmit={AddTask} >
                <input defaultValue={e_item.e_title} type="text" className='form-control' placeholder='Task'/>
                <select defaultValue={item.title} className='form-control my-2'>
                    <option value="" hidden>select</option>
                    <option value="Open" >Open</option>
                    <option value="Peding" >Peding</option>
                    <option value="Inroge" >Inroge</option>
                    <option value="Progress" >Progress</option>
                </select>
                    <button onClick={toggle} className='px-3 py-1 bg-green-500 rounded text-white font-semibold shadow '>add task</button>
            </form>
        </ModalBody>
      </Modal>
    </div>
  )
}
