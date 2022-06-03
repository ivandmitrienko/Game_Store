import React from 'react';
import ReactDOM from 'react-dom';

// import { render } from 'react-dom'
window.React = React

import App from './components/App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('container')
);