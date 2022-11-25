import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = x => {
    if (!x.desc) {
      return;
    }

    setTodos([x,...todos]);
  }

  const completeTodo = complete_id => {
    // toggle the todos isDone field
    let updated = todos.map(todo => {
      if (todo.id == complete_id) {
        todo.isDone = !todo.isDone;
      }
    });

    setTodos(updated);
  }

  const deleteTodo = delete_id => {
    setTodos([...todos].filter(todo => todo.id != delete_id));
  }

  const editTodo = (edit_id, new_todo) => {
    if (!new_todo.desc) {
      return;
    }

    setTodos(p => p.map(it => (it.id === edit_id ? new_todo : it)));
  }

  return (
    <div>
      <h1> React Todo App </h1>
      <AddTodo onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  )
}

export default Todos

