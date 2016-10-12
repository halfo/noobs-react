import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <App items={ ['Timer', 'Real-time Search', 'Todo List', 'Image Tiles'] } />,
  document.getElementById('root')
);