import React from 'react';
import ReactDOM from 'react-dom';
import Application from './App';
import './app.css';

const PLAYERS = [
  {
    name: "Priyesh Tungare",
    score: 48,
    key: 1
  },
  {
    name: "Mona Agarwal",
    score: 35,
    key: 2
  },
  {
    name: "Pritam Tungare",
    score: 46,
    key: 3
  }
];

ReactDOM.render(
  <Application players={PLAYERS}/>,
  document.getElementById('root')
);
