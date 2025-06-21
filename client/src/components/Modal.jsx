import "./Modal.css";
import Dropdown from "./Dropdown";
import { useState, useRef } from "react";
import closeButton from "../assets/close-button.png";

function Modal({ show, onClose, addTodo }) {
  const todoPriorityRef = useRef();
  const todoTagRef = useRef();

  const [newTodo, setNewTodo] = useState({
    todoText: "",
    isDone: false,
    priority: "",
    tag: "",
  });

  console.log(newTodo);

  // Отправляем на сервер при сабмите
  async function onClickHandler() {
    console.log(newTodo);
    alert(JSON.stringify(newTodo));

    try {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("failed to fetch");
      }

      addTodo(newTodo);
      onClose();
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!show) return null;

  return (
    <div className="modalBackground">
      <div className="modalWindow">
        <div className="modalBody">
          <h2>New ToDo</h2>
          <button className="modalClose" onClick={onClose}>
            <img src={closeButton} alt="" />
          </button>
          <form
            className="modalForm"
            action=""
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="modalInput"
              placeholder="Name"
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") todoPriorityRef.current.focus();
              }}
              onChange={(e) => {
                setNewTodo((prev) => {
                  return {
                    ...prev,
                    todoText: e.target.value,
                  };
                });
              }}
            />
            <Dropdown // как достать данные?
              options={["React", "Cesium", "Typescript"]}
              onChange={(e) => {
                setNewTodo((prev) => {
                  return { ...prev, priority: e.target.textContent };
                });
              }}
            />
            <input
              className="modalInput"
              placeholder="Priority"
              type="text"
              ref={todoPriorityRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") todoTagRef.current.focus();
                console.log("yes");
              }}
              onChange={(e) => {
                setNewTodo((prev) => {
                  return { ...prev, priority: e.target.value };
                });
              }}
            />
            <input
              className="modalInput"
              placeholder="Tag"
              type="text"
              ref={todoTagRef}
              onChange={(e) => {
                setNewTodo((prev) => {
                  return { ...prev, tag: e.target.value };
                });
              }}
            />
            <button className="modalButton" onClick={onClickHandler}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
