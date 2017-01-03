import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'todomvc-app-css/index.css'

import observer from "@risingstack/nx-observe"

const initialState = [
  {
    text: 'Use nx-observe',
    completed: false,
    id: 0
  }
];

ReactDOM.render(
  <App todos={observer.observable(initialState)} />,
  document.getElementById('root')
);
