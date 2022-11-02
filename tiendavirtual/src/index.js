
/*Este archivo llama todos los componentes de la aplicacion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Importar el archivo Interfazventas.js y from que viene de la carpeta "Components y slash  Interfazventas"

import { Interfazventas } from './components/Interfazventas';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/*Se invoca el componente de archivo Interfazventas:*/} 
    <Interfazventas/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
