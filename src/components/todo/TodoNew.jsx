import { useState } from "react";

const TodoNew = (props) => {
    //useState hook
    const [valueInput,setValueInput] = useState("");
    const { addNewTodo } = props;
    const handleClick = () => {
        console.log(valueInput);
    }
    const handleOnchange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
            <div>
                My text input: {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;
