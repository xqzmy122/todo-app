import { useState } from "react";

function Todo({id, isDone, todoText, onToggleTodos}) {

  function onClickHandler() {
    onToggleTodos(id)
  }
  return (
    <>
      <div>{todoText}</div>
      {isDone ? (
        <button>
          Delete
        </button>
      ) : (
        <button onClick={onClickHandler}>Done</button>
      )}
    </>
  );
}

export default Todo;
