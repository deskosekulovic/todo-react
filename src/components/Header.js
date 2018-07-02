import React from 'react';

const Header = ({ todo, onSubmit, handleChange, addTodo }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      autoFocus
      placeholder="Add Todo"
      value={todo}
      onChange={handleChange}
    />
    <button onClick={addTodo}>Add Todo</button>
  </form>
);

export default Header;
