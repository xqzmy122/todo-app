import './Todo.css'

function Todo({id, isDone, todoText, priority, tag, onToggleTodos}) {

  function onClickHandler() {
    onToggleTodos(id)
  }

  return (
    <div className="todo">
    <div className="todoMain">
      <input className='todoCheckbox' type="checkbox" checked={isDone} onChange={onClickHandler}/>
      {/* {isDone ? (
        <button className='todoButton'>
          Delete
        </button>
      ) : (
        <button className='todoButton' onClick={onClickHandler}>Done</button>
      )} */}
      <div className="todoText">{todoText}</div>
      
    </div>
    <div className="todoMeta">
      <div className={`todoPriority${priority}`}>{priority}</div>
      <div className="todoTag">{tag}</div>
    </div>
    </div>
  );
}

export default Todo;
