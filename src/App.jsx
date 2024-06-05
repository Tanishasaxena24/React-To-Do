import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>React To-Do</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
