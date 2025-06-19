import "./Modal.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import closeButton from '../assets/close-button.png'

function Modal({ show, onClose, addTodo}) {
  const [newTodo, setNewTodo] = useState({
    id: nanoid(),
    todoText: "",
    isDone: false,
    priority: "",
    tag: "",
  });
 
  // Отправляем на сервер при сабмите
  async function onClickHandler() {
    console.log(newTodo);
    alert(JSON.stringify(newTodo))
    try {
      const res = await fetch('http://localhost:3000/todos', {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {'Content-Type': 'application/json'}
    })

    if(!res.ok) {
      throw new Error('failed to fetch')
      console.log("hello");
    }

    console.log(res.ok);
    console.log(res);
    addTodo(newTodo)
  
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
          <form className="modalForm" action="" onSubmit={(e) => e.preventDefault()}>
            <input
              className="modalInput"
              placeholder="Name"
              type="text"
              onChange={(e) => {
                setNewTodo((prev) => {
                  return {
                    ...prev,
                    todoText: e.target.value
                  };
                });
              }}
            />
            <input
              className="modalInput"
              placeholder="Priority"
              type="text"
              onChange={(e) => {
                setNewTodo(prev => {
                  return {...prev, priority: e.target.value}
                })
              }}
            />
            <input
              className="modalInput"
              placeholder="Tag"
              type="text"
              onChange={(e) => {
                setNewTodo(prev => {
                  return {...prev, tag: e.target.value}
                })
              }}
            />
            <button className="modalButton" onClick={onClickHandler}>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
