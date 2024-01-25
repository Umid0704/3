import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Umid",
    age: 20,
    address: "Qo'qon",
    count: 0,
  },
  {
    id: 2,
    name: "Umid",
    age: 20,
    address: "Qo'qon",
    count: 0,
  },
  {
    id: 3,
    name: "Umid",
    age: 20,
    address: "Qo'qon",
    count: 0,
  }
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   adduser(state, action){
    state.push(action.payload)
   },
   deleteUser(state,action){
    let index = action.payload
    state.splice(index,1)
   },
   userUpdate(state,action){
    let {id,name,age,address} = action.payload
   let singles_users = state.find(item=>item.id == id)
   singles_users.name = name
   singles_users.age = age
   singles_users.address = address
   }
  },
});
export const {adduser,deleteUser,userUpdate} = usersSlice.actions;
export default usersSlice.reducer;
