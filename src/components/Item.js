import React from 'react';
import Todo from './Todo';
import StyledItem from '../styles/Item';
import Button from '../styles/Button';

const Item = ({ todo, toggleCompleted, deleteTodo }) => (
  <StyledItem>
    <Todo todo={todo} toggleCompleted={() => toggleCompleted(todo.id)} />
    <Button itemButton onClick={() => deleteTodo(todo.id)}>
      Delete
    </Button>
  </StyledItem>
);

export default Item;
