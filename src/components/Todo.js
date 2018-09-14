import React from 'react';
import Li from '../styles/Li';

const Todo = ({ todo, toggleCompleted }) => (
    <Li
      onClick={toggleCompleted}
      completed={todo.completed}
    >
      {todo.todo}
    </Li>
);

export default Todo;
