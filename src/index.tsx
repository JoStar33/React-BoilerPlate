import { worker } from 'mocks/server';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

worker.start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
