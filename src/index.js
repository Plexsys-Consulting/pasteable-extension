import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let existingSideBar = document.getElementById('pasteable-root');
if (false) {
  document.getElementById('pasteable-root').remove();
} else {
  let sideBar = document.createElement('div');
  sideBar.setAttribute("id", "pasteable-root");
  sideBar.setAttribute("class", `pasteable-root`);
  document.body.appendChild(sideBar);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    sideBar
  );
}