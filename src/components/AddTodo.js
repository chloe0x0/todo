import React, { useState } from 'react';

function AddTodo(props) {
  const [todo, setTodo] = useState({
    id: 0,
    desc: "",
    isDone: false
  });

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      ...todo
    });
  }

  const handleChange = e => {
    setTodo({...todo, desc: e.target.value});
  }

  return (
    <div>
      <form className="add-todo" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Add a todo' 
          value={todo.desc} 
          name="desc" 
          className="add-todo" 
          onChange={handleChange}/>
        <button className="add-button"> Add Todo </button>
      </form>
    </div>
  );
}

export default AddTodo