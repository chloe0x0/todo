import React, { useState, useRef } from 'react';

function AddTodo(props) {
  const [todo, setTodo] = useState('');

  const todoRef = useRef(null);



  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      isDone: false,
      desc: todo
    });

    setTodo('');
  }

  const handleChange = e => {
    setTodo(e.target.value);
  }

  return (
    <div>
      <form className="add-todo" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Add a todo' 
          value={todo.desc} 
          name="desc" 
          className="todo-input" 
          onChange={handleChange}
          ref = {todoRef}/>
        <button className="add-button"> Add Todo </button>
      </form>
    </div>
  );
}

export default AddTodo