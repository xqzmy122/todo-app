import { useState, useEffect } from "react";
import Todo from "./Todo";
import Modal from "./Modal";
import "./TodoList.css";

const API = "http://localhost:3000/todos";

function TodoList() {
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);

  console.log("----------");
  console.log(todos);

  useEffect(() => {
    try {
      (async function fetchData() {
        const data = await fetch(API);
        const todos = await data.json();
        setTodos(todos);
      })();
    } catch (error) {
      setError(error.message);
    }
  }, []);

  function toggleTodos(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  }

  function addTodo(newTodo) {
    setTodos(prev => {
      return [...prev, newTodo]
    }) 
  }

  return (
    <div className="todoList">
      <Modal show={isModalShown} onClose={() => setIsModalShown(false)} addTodo={addTodo}/>
      <div className="proccesingTodos todos">
        <h2>In process</h2>
        <button
          className="openModalButton"
          onClick={() => setIsModalShown(true)}
        >
          +
        </button>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return <Todo {...todo} onToggleTodos={toggleTodos} key={todo.id}/>;
          })}
      </div>
      <div className="doneTodos todos">
        <h2>Done</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return <Todo {...todo} onToggleTodos={toggleTodos} key={todo.id}/>;
          })}
      </div>
    </div>
  );
}

export default TodoList;
