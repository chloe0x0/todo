import { useEffect, useInsertionEffect, useState } from 'react';
import Todos from './components/Todos'; // a list of todos
import AddTodo from './components/AddTodo'; // a component for adding todos

const LOCAL_STORAGE = "todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    if (stored) {
      setTodos();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  

  return (
    <div className='React-Todo-App'>
      <h1> React Todo App </h1>
      <AddTodo addTodo={setTodos}/>
      <Todos todos={todos} />
    </div>
  )
}

export default App;
