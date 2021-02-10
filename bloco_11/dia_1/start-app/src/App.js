import React from 'react';
import './App.css';
import Component from './Component';

const techs = ['React', 'HTML', 'CSS', 'JEST', 'JavaScript', 'Linux', 'Git'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <Component />
      {techs.map(element => task(element))}
    </div>
  )
}

export default App;
