import React from 'react';
import Todo from './Todo.js';

const Item = ({ todo, toggleCompleted, deleteTodo }) => (
  <div>
    <Todo todo={todo} toggleCompleted={()=>toggleCompleted(todo.id)} />
    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
  </div>
);

export default Item;
