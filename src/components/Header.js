import React from 'react';
import Form from '../styles/Form';

const Header = ({ todo, handleChange, addTodo }) => (
  <Form onSubmit={addTodo}>
    <input
      type="text"
      autoFocus
      placeholder="Add Todo"
      value={todo}
      onChange={handleChange}
    />
  </Form>
);

export default Header;
