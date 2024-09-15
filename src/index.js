import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';  // Still include the App styles if needed
import Main from './Main';  // Import Main.js directly (your router setup)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>
);reportWebVitals();
