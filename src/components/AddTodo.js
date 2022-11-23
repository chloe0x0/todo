import React, { useState } from 'react';

function AddTodo( {addTodo} ) {
  const [todo, setTodo] = useState({
    id: "",
    desc: "",
    isDone: false
  });

  const handleChange = e => {
    setTodo({...todo, desc: e.target.value});
  }



  const handleSubmit = e => {
    e.preventDefault();

    if (todo.desc.trim()) {
        addTodo({...todo, id: Math.floor(Math.random() * 1000) });
    }
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