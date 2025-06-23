import { useState, useEffect } from "react";
import Modal from "./Modal";
import TodoSection from "./TodoSection";
import "./TodoList.css";

const API = "http://localhost:3000/todos";

function TodoList() {
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]); // храним массив объектов todo
  const [isModalShown, setIsModalShown] = useState(false); // состояние модального окна

  console.log("----------");
  console.log(`actual todos ${JSON.stringify(todos)}`);
  console.log("rendered");

  // загружаем данные с бекэнда
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

  // меняем поле isDone конкретной todo
  function toggleTodos(id) {
    setTodos(
      todos.map((todo) => {
        if (todo._id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  }

  // функция, которую пробрасываем в компонент модального окна, чтобы менять состояние todos
  function addTodo(newTodo) {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }

  // функция, которую пробрасываем в компонент модального окна, чтобы менять состояние todos
  function handlerDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo._id !== id));
  }

  return (
    <div className="todoList">
      <Modal
        show={isModalShown}
        onClose={() => setIsModalShown(false)}
        addTodo={addTodo}
      />
      <TodoSection
        className={"proccesingTodos todos"}
        title={"In proccess"}
        isDone={false}
        todos={todos}
        toggleTodos={toggleTodos}
        handlerDeleteTodo={handlerDeleteTodo}
        setIsModalShown={setIsModalShown}
      />
      <TodoSection
        className={"doneTodos todos"}
        title={"Done"}
        isDone={true}
        todos={todos}
        toggleTodos={toggleTodos}
        handlerDeleteTodo={handlerDeleteTodo}
        setIsModalShown={setIsModalShown}
      />
    </div>
  );
}

export default TodoList;
