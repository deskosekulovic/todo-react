import React from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos, show, toggleCompleted, deleteTodo }) => {
  if(show){
    let completed;
    completed = show==='uncompleted' && false;
    completed = show==='completed' && true;
    return(
      <ul>
        {todos.map(todo=> todo.completed===completed &&
            (
              <div key={todo.id}>
                <Todo todo={todo} toggleCompleted={()=>toggleCompleted(todo.id)} />
                <button id={todo.id} onClick={()=>deleteTodo(todo.id)}>Delete</button>
              </div>
          )

        )}
      </ul>
    );
  }
  return(
    <ul>
      {todos.map(todo=>{
          return (
            <div key={todo.id}>
              <Todo todo={todo} toggleCompleted={()=>toggleCompleted(todo.id)} />
              <button id={todo.id} onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </div>
        )
      })}
    </ul>
  );

}

export default TodoList;
