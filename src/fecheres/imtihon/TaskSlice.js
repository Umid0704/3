import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {title:"Open" , element:[{e_title:"task1"}]},
    {title:"Peding" , element:[{e_title:"task2"}]},
    {title:"Inroge" , element:[{e_title:"task3"}]},
    {title:"Progress" , element:[{e_title:"task4"}]},
    
]
const TaskList = createSlice({
    name:"Task",
    initialState,
    reducers:{
        taskadd(state,action){
            let task=action.payload
            let single_task = state.find(item=>item.title == task.select)
            single_task.element.push(task.value)
        },
        deleteTask(state,action){
            let task = action.payload
            state[task.index].element.splice(task.e_index,1)
        },
        TaskUpdate(state, action){
            let task = action.payload
            console.log(task);
            // state[index].element.splice(e_index,1)
            //     let single_task = state.find(item=>item.title == select)
            // single_task.element.e_title = value
        }
    }
})
export const {taskadd,deleteTask,TaskUpdate}=TaskList.actions
export default TaskList.reducer