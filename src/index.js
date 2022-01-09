import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let existingSideBar = document.getElementById('pasteable-root');
if (false) {
  document.getElementById('pasteable-root').remove();
} else {
  let sideBar = document.createElement('div');
  sideBar.setAttribute("id", "pasteable-root");
  sideBar.setAttribute("style", `
  width: 20vw;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(232, 232, 232, 0.7);
  z-index: 1000000000000;
`)
  document.body.appendChild(sideBar);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    sideBar
  );
}