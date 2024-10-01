const TodoData = (props) => {
    const {todoList} = props;
    console.log(props);
    return (
        <div className='todo-data'>
            <div>{JSON.stringify(todoList)}</div>
        </div>
    )
}

export default TodoData;
