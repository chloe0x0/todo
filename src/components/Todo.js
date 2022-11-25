import React, {useState} from "react";
import AddTodo from "./AddTodo";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, deleteTodo, editTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    desc: ''
  });

  const submitUpdate = x => {
    editTodo(edit.id, x);

    // reset edit val
    setEdit({
      id: null,
      desc: ''
    });

    if (edit.id) {
      return <AddTodo edit={edit} onSubmit={submitUpdate}/>
    }
  }

  return todos.map((todo, index) => (
    <div className={todo.isDone ? 'complete' : 'not-complete'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.desc}
        {todo.id}
      </div>
      <div className="icons">
        <RiCloseCircleLine className="remove-icon" onClick={() => deleteTodo(todo.id)}/>
        <TiEdit className="edit-icon" onClick={() => setEdit({id: todo.id, value: todo.desc})}/>
      </div>
    </div>
  ))
}

export default Todo;
