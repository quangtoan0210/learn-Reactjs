import { useState } from "react";

const TodoNew = (props) => {
    //useState hook
    const [valueInput, setValueInput] = useState("");
    const { addNewTodo } = props;
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("");

    }
    const handleOnchange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)} value={valueInput}
            />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>

        </div>
    )
}

export default TodoNew;
