import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <TodoEditor />
        <TodoList />

      </header>
    </div>
  );
}

export default App;
