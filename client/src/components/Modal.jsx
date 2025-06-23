import "./Modal.css";
import Dropdown from "./Dropdown";
import { useState, useRef } from "react";
import closeButton from "../assets/close-button.png";
import { API_URL } from "../config";

function Modal({ show, onClose, addTodo }) {

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
      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: { "Content-Type": "application/json" },
      });
    
      console.log(res);
      const data = await res.json()
      console.log(`response data ${JSON.stringify(data)}`);
      if (!res.ok) {
        throw new Error("failed to fetch");
      }

      addTodo(data);
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
              placeholder="what to do?"
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
            <Dropdown
              options={["High", "Medium", "Low"]}
              setNewTodo={setNewTodo}
              metaName={'priority'}
            />
            <Dropdown options={["Study", "Work", "Personal"]}
            setNewTodo={setNewTodo}
            metaName={'tag'}
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
