import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { showcaseItems } from './static-content.js';
import './index.css';

ReactDOM.render(
  <App itemNames={ Object.keys(showcaseItems) } />,
  document.getElementById('root')
);