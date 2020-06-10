import React from 'react';// core package for dom manipulation 
import ReactDOM from 'react-dom';// used for dom websites
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; 
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
 