import Todo from "./Todo";

function TodoSection({ title, className, isDone, todos, toggleTodos, handlerDeleteTodo, setIsModalShown }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
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
              key={todo._id}
              onDelete={handlerDeleteTodo}
            />
          );
        })}
    </div>
  );
}

export default TodoSection;
