import Todo from "./Todo";
import {nanoid} from 'nanoid'
import './TodoSection.css'

function TodoSection({ title, className, isDone, todos, toggleTodos, handlerDeleteTodo, setIsModalShown }) {
  console.log(`todoSection todos ${JSON.stringify(todos)}`);
  return (
    <div className={className}>
      <p className="todoSectionTitle">{title}</p>
      {!isDone && (
        <button
          className="openModalButton"
          onClick={() => setIsModalShown(true)}
        >
          +
        </button>
      )}
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <Todo
              {...todo}
              onToggleTodos={toggleTodos}
              key={nanoid()}
              onDelete={handlerDeleteTodo}
            />
          );
        })}
    </div>
  );
}

export default TodoSection;
