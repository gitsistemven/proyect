// src/main.tsx (Modificado para TypeScript)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa App.tsx (no necesita la extensión)
import './index.css';

// Usamos el operador "!" para decirle a TypeScript que sabemos que 'root' existe.
const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
