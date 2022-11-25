import React, {useState} from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, deleteTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    desc: ''
  });

  return todos.map((todo, index) => (
    <div className={todo.isDone ? 'complete' : 'not-complete'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.desc}
      </div>
      <div className="icons">
        <RiCloseCircleLine className="remove-icon" onClick={() => deleteTodo(todo.id)}/>
        <TiEdit className="edit-icon" onClick={() => setEdit({id: todo.id, value: todo.desc})}/>
      </div>
    </div>
  ))
}

export default Todo;
