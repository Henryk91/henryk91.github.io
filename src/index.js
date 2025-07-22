import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const logUse = () => {
  const currentURL = window.location.href;
  if (currentURL.includes("localhost")) return;
  const hasLoggedUse = sessionStorage.getItem("hasLoggedUse");
  if (!hasLoggedUse) {
  fetch("https://note.henryk.co.za/api/log")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      sessionStorage.setItem("hasLoggedUse", "true");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  }
}
logUse();