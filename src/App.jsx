import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: todoList.length + 1,
      name: name,
    }
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todoList={todoList}  // Truyền object person qua props cho component TodoData
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
