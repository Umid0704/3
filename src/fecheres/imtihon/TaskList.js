import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskModal from "../../Modal/TaskModal";
import TaskDeleteModal from "../../Modal/TaskDeleteModal";

export default function TaskList() {
    const [taskModal, setTaskModal]=useState(false)
    const [taskDeleteModal, setTaskDeleteModal]=useState(false)
    const [e_index, setE_index]=useState('')
    const [index, setIndex]=useState('')
    const [e_item, setE_item]=useState('')
    const [item, setitem]=useState('')
  let task = useSelector((state) => state.task);
    const toggle=()=>{
        setTaskModal(false)
        setIndex('')
        setE_index('')
        setE_item('')
        setitem('')
    }
    const taskDelete=(index,e_index)=>{
        setIndex(index)
        setE_index(e_index)
        setTaskDeleteModal(true)
    }
    const toggleTaskDelete=()=>{
        setTaskDeleteModal(false)
        
    }
    const etidTask=(index, e_index,e_item,item)=>{
        setTaskModal(true)
        setIndex(index)
        setE_index(e_index)
        setE_item(e_item)
        setitem(item)
    }
  return (
    <div className="m-5">
    <button className="px-3 py-1 bg-green-500 rounded text-white font-semibold shadow" onClick={()=>setTaskModal(true)}>Add Task</button>
        <div className="flex w-full justify-around">
    <TaskModal open={taskModal} toggle={toggle} index={index} e_index={e_index} e_item={e_item} item={item} />
    <TaskDeleteModal open={taskDeleteModal} toggle={toggleTaskDelete} index={index} e_index={e_index} />
      {task.map((item, index) => {
        return (
          <div key={index} className=" border  shadow p-3 rounded">
            <h2>{item.title}</h2>
            <div>
              {item.element.map((e_item, e_index) => {
                return (
                  <div key={e_index} className="border p-2 rounded shadow my-3 ">
                    <p className="text-xl font-semibold">
                      {e_item.e_title}
                      <button className="bg-gray-500 rounded text-white font-semibold px-3 py-1 mx-3" onClick={()=>etidTask(index,e_index,e_item,item)}>edit</button>
                      <button className="bg-red-500 rounded text-white font-semibold px-3 py-1" onClick={()=>taskDelete(index,e_index)}>delete</button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}
