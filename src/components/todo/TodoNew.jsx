const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;
    // addNewTodo("quang toản");
    const handleClick = () => {
        alert("click");
    }
    const handleOnchange = (name) => {
        console.log("change", name);
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew;
