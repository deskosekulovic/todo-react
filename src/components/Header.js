import React from 'react';

const Header = ({ todo, handleChange, addTodo }) => (
  <form onSubmit={addTodo}>
    <input
      type="text"
      autoFocus
      placeholder="Add Todo"
      value={todo}
      onChange={handleChange}
    />
  </form>
);

export default Header;
