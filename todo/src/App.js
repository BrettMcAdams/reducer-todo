import React from 'react';
import './App.css';
import TodoList from './components/todoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
