import { useState } from "react"

function Todo(props) {
    console.log(props);
    const [isDone, setIsDone] = useState(props.isDone)
    console.log(isDone);

    function onClickHandler() {
        setIsDone(!isDone)
    }
    return (
        <>
        <div>{props.todoText}</div>
        {isDone ? <button onClick={onClickHandler}>Delete</button> : <button onClick={onClickHandler}>Done</button>}
        </>
)
}

export default Todo