import React from 'react';
import Item from './Item.js';

const TodoList = ({ todos, show, toggleCompleted, deleteTodo }) => {
    let completed;
    completed = show==='uncompleted' && false;
    completed = show==='completed' && true;
    return(
      <ul>
        {todos.map((todo,i)=> show ? todo.completed===completed &&
            <Item key={i} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
           : <Item key={i} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
        )}
      </ul>
    );
}

export default TodoList;
