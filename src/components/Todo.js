import React from 'react';

const Todo = ({ todo, toggleCompleted }) => (
    <li
      id={todo.id}
      onClick={toggleCompleted}
      className={todo.completed ? 'completed':''}
    >
      {todo.todo}
    </li>
);

export default Todo;
