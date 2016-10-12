import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { showcaseItems } from './static-content.js';

ReactDOM.render(
  <App itemNames={ Object.keys(showcaseItems) } />,
  document.getElementById('root')
);