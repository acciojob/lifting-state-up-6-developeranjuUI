
import React, {useState} from "react";
import './../styles/App.css';
import Todolist from "./todolist";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Practice JavaScript', completed: false },
    { id: 3, text: 'Build a project', completed: false }
  ]);
  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
        <h1>Todo List</h1>
      <Todolist todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
