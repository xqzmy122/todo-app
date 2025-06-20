import "./Todo.css";

function Todo({ _id, isDone, todoText, priority, tag, onToggleTodos, onDelete }) {
  function onClickHandler() {
    onToggleTodos(_id);
  }

  async function deleteTodo() {
    await fetch(`http://localhost:3000/todo/${_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })

    onDelete(_id)
  }

  return (
    <div className="todo">
      <div className="todoMain">
        <input
          className="todoCheckbox"
          type="checkbox"
          checked={isDone}
          onChange={onClickHandler}
        />
        <div className="todoText">{todoText}</div>
      </div>
      <div className="todoMeta">
        <div className={`todoPriority${priority}`}>{priority}</div>
        <div className={`todoTag${tag}`}>{tag}</div>
      </div>
      <button onClick={() => deleteTodo()}>Delete</button>
    </div>
  );
}

export default Todo;
