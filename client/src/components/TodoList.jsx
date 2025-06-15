import { useState, useEffect } from "react";
import Todo from "./Todo";
import './TodoList.css'

const API = "http://localhost:3000/todos";

function TodoList() {
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]);

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

  function toggleTodos() {
    return 'hello'
  }

  return (
    <div className="todoList">
      <div className="doneTodos todos">
        <h2>Выполненные задания</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <Todo {...todo} />
          ))}
      </div>
      <div className="proccesingTodos todos">
        <h2>В процессе</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <Todo {...todo}/>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
