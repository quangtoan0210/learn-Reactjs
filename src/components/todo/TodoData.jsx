const TodoData = (props) => {
    const {todoList} = props;
    console.log(props);
    return (
        <div className='todo-data'>
            {todoList.map((item,index)=>{
                return(
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                   
                )
            })}
        </div>
    )
}

export default TodoData;
