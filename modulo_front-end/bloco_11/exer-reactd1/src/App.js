// import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = [ 'Acordar', 'Tomar café', 'Escovar os dentes', 'ir trabalhar' ]

class App extends React.Component {
  render() {
    return (
      <ul className='App App-logo App-header App-link'>{tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  };
};

export default App;
