import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { deleteUser } from "../fecheres/counter/counterSlice";
import { useDispatch } from "react-redux";

export default function DeleteUser({open, toggel, index}) {
    const dispatch=useDispatch()
    const user =()=>{
        dispatch(deleteUser(index))
        toggel()
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggel}>
        <ModalHeader>Delete</ModalHeader>
        <ModalBody>
          <button className="bg-yellow-500 rounded px-3 py-1 font-semibold text-white" onClick={toggel}>close</button>
          <button className="bg-red-500 rounded px-3 py-1 font-semibold text-white mx-3" onClick={user}>delete</button>
        </ModalBody>
      </Modal>
    </div>
  );
}
