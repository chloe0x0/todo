import React from "react";

function Todo({ todo }) {
  return (
    <>
      <input type="checkbox" />
      <li> {todo.desc} </li>
      <button> X </button>
    </>
  )
}

export default Todo
