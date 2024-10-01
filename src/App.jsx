import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "learning react" },
    { id: 2, name: "learning vue" },

  ]);
  const name = 'quangtoan';
  const age = 13;
  const person = {
    name: 'Quang Toản',
    age: 25,
    address: 'Hà Nội',
  }
  const addNewTodo = (name) => {
    alert(`Add new Todo ${name}`);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        person={person}
        todoList={todoList}  // Truyền object person qua props cho component TodoData
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
