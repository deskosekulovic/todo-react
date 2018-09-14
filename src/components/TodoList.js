import React from 'react';
import Item from './Item';
import Ul from '../styles/Ul';

const TodoList = ({ todos, show, toggleCompleted, deleteTodo }) => {
    let completed;
    completed = show==='uncompleted' && false;
    completed = show==='completed' && true;
    return(
      <Ul>
        {todos.map((todo,i)=> show ? todo.completed===completed &&
            <Item key={i} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
           : <Item key={i} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
        )}
      </Ul>
    );
}

export default TodoList;
