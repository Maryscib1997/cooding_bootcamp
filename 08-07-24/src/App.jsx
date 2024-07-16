import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Input"
        className="input"
      />
      <button onClick={addTodo} className="add-button">ADD</button>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">{todo}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
