import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

function Todos({ todos }) {

  return (
    <ul>
        {todos.map(x => (
            <Todo key={x.id} todo={x} /> 
        ))}
    </ul>
  )
}

export default Todos

