import React from 'react';

function TodoList({ todos, handleComplete }) {
     return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ marginBottom: '10px' }}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)} style={{ marginLeft: '10px' }}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;