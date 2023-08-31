import React from 'react';
import ReactDOM from 'react-dom/client';
// importar a bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// forma de importar (utilizar) un componente
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


