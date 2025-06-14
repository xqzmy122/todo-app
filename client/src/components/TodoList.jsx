import { useState, useEffect } from "react";
import Todo from "./Todo";

const API = "http://localhost:3000/todos"

function TodoList() {
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      (async function fetchData() {
        const data = await fetch(API);
        const todos = await data.json();
        setTodos(todos);
      }())
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <>
      {todos.map((todo, index) => {
        return <Todo text={todo.todoText} key={index} />;
      })}
    </>
  );
}

export default TodoList;
