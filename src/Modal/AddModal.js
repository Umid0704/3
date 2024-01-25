import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { adduser, userUpdate } from "../fecheres/counter/counterSlice";

export default function AddModal({ open, toggle, edit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const formAdd = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let payload = {
      id: edit ? edit.id : nanoid(),
      name: name ? name : edit.name,
      age: age ? age : edit.age,
      address: address ? address : edit.address,
    };
    if (edit) {
      dispatch(userUpdate({ ...payload }));
    } else {
      dispatch(adduser({ ...payload }));
    }
  };
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>Add Users</ModalHeader>
        <ModalBody>
          <form onSubmit={formAdd}>
            <input
              defaultValue={edit.name}
              className="form-control"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              defaultValue={edit.age}
              className="form-control"
              type="number"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              defaultValue={edit.address}
              className="form-control"
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="btn py-2 my-2 btn-info" onClick={toggle}>
              Add
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
