import React from "react";
//Importamos nuestro servicio Router y del comando que escirbimos en la terminal
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

//Importacion de nuestros archivos de la carpeta components:
import Menuinterfazprincipal from "./Components/Menuinterfazprincipal";
import Listaproductos from "./Components/Listaproductos";
import Modificarproductos from "./Components/Modificarproductos";
import Listaventas from "./Components/Listaventas";
import Listaproductoscliente from "./Components/ListaProductosCliente";
//Importacion de de carpeta components, del archivo Home
import Homeadministrador from "./Components/Homeadministrador";

import Menuinterfazcliente from "./Components/Menuinterfazcliente";

//Importacion de libreria Boostrap:
import "bootstrap/dist/css/bootstrap.min.css";

//Funcion principal APP
export default function App() {
  /*Creacion de interfaz, fragmento, section y dentro de la section h1:*/
  return (
    /*Eiqueta principal de la importacion de nuestro servicio Router*/
    <Router>
      {/*Contenedor:*/}
      <div className="container">
        {/*contener las rutas generales, importadas por las Subetiquetas Routes*/}
        <Routes>
          {/*contener las rutas de cada opcion, Home*/}
          <Route path="/" element={<Homeadministrador />} />

          {/*contener las rutas de cada opcion, Menuinterfazprincipal*/}
          <Route path="/Menuinterfaz" element={<Menuinterfazprincipal />} />

          {/*contener las rutas de cada opcion, Listaproductos*/}
          <Route path="/productos" element={<Listaproductos />} />

          {/*contener las rutas de cada opcion, modificarproductos*/}
          <Route path="/modificarproductos" element={<Modificarproductos />} />

          {/*contener las rutas de cada opcion, modificarproductos*/}
          <Route path="/listaventas" element={<Listaventas />} />

          {/*contener las rutas de cada opcion, modificarproductos*/}
          <Route path="/listaproductoscliente" element={<Listaproductoscliente />} />

          {/*Cierre de SubEtiqueta Principal Routes*/}
        </Routes>

        {/*PARTE MENU  CLIENTE*/}

        {/*contener las rutas generales, importadas por las Subetiquetas Routes*/}
        <Routes>
          {/*contener las rutas de cada opcion, Home*/}
          {/*<Route path="/" element={<Homeadministrador />}/>*/}

          {/*contener las rutas de cada opcion, Menuinterfazprinpal cliente*/}
          <Route
            path="/Menuinterfazcliente"
            element={<Menuinterfazcliente />}
          />

          {/*Cierre de SubEtiqueta Principal Routes*/}
        </Routes>
      </div>

      {/*Cierre de la Etiqueta Principal Router*/}
    </Router>
  );
}

//export default App;
