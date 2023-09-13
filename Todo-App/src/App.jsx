import React, {useState} from 'react';
import './App.css'
import Header from './componentes/Header';
import TaskList from './componentes/TaskList';

function App() {
  const tasks = [
    { id: 1, name: "Ver repeticion de React intro", done: true },
    { id: 1, name: "Presentar proyecto integrador", done: false },
    { id: 1, name: "Leer presentacion Hooks 1", done: false },
  ];
  
  
  return (
    <>
      <Header />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App