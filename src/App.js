import { useEffect, useState } from 'react';
import Todos from './components/Todos'; // a list of todos
import AddTodo from './components/AddTodo'; // a component for adding todos

function App() {
  return (
    <div className='React-Todo-App'>
      <Todos></Todos>
    </div>
  )
}

export default App;
