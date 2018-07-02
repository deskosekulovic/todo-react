import React from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
  return(
    <ul>
      {todos.map(todo=>{
        if(todo.show){
          return (
            <div key={todo.id}>
              <Todo todo={todo} toggleCompleted={()=>toggleCompleted(todo.id)} />
              <button id={todo.id} onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </div>
        )
        }
      })}
    </ul>
  );
}

export default TodoList;
