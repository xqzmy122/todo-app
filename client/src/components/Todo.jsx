import "./Todo.css";

function Todo({ id, isDone, todoText, priority, tag, onToggleTodos }) {
  function onClickHandler() {
    onToggleTodos(id);
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
    </div>
  );
}

export default Todo;
