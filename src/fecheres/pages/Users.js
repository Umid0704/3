import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddModal from "../../Modal/AddModal";
import { deleteUser } from "../counter/counterSlice";
import DeleteUser from "../../Modal/DeleteUser";
import PostsList from "../posts/PostsList";
export default function Users() {
 const dispatch = useDispatch()
  const user = useSelector((state) => state.counter);
  const [UserModal, setUserModal] = useState(false);
  const [Modaldelete, setModalDelete] = useState(false);
  const [userId,setUserId]=useState('')
  const [edit, setEdit]=useState('')

  const addUser = () => {
    setUserModal(true);
  };
  const toggle = () => {
    setUserModal(false);
  };
 const editUser=(item)=>{
    setUserModal(true)
console.log(item);
setEdit(item)
 }
const toggelDelete=()=>{
  setModalDelete(false)
  setUserId('')

}
 const deleteModal=(index)=>{
setModalDelete(true)
setUserId(index)

 }
  return (
    <div className="p-4">
    <DeleteUser open={Modaldelete} toggel={toggelDelete} index={userId}/>
      <AddModal open={UserModal} toggle={toggle} edit={edit} />
      <button
        className="px-3 py-2 bg-green-500 rounded mb-3 text-white font-semibold"
        onClick={addUser}
      >
        Add User
      </button>
      <table>
        <thead>
          <tr>
            <th className="border border-black px-2 py-1 text-center">T/R</th>
            <th className="border border-black px-2 py-1 text-center">Name</th>
            <th className="border border-black px-2 py-1 text-center">Age</th>
            <th className="border border-black px-2 py-1 text-center">Address</th>
            <th className="border border-black px-2 py-1 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border border-black px-2 py-1">{index + 1}</td>
                <td className="border border-black px-2 py-1">{item.name}</td>
                <td className="border border-black px-2 py-1">{item.age}</td>
                <td className="border border-black px-2 py-1">{item.address}</td>
                <td className="border border-black px-2 py-1">
                  <button className="bg-blue-500 rounded px-3 py-1 mx-2 text-white font-semibold" onClick={()=>editUser(item)}>edit</button>
                  <button className="bg-red-500 rounded px-3 py-1 font-semibold text-white" onClick={()=>deleteModal(index)} >delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
}
