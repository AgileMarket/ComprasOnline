
import React from 'react';  
//Importamos nuestro servicio Router y del comando que escirbimos en la terminal
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
//Importacion de nuestros archivos de components:
import Menuinterfazprincipal from './Components/Menuinterfazprincipal';
import Listaproductos from './Components/Listaproductos';
import Modificarproductos from './Components/Modificarproductos';
import Listaventas from './Components/Listaventas';

//Importacion de libreria Boostrap:
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  
  /*Creacion de interfaz, fragmento, section y dentro de la section h1:*/  
  return (

    /*Eiqueta importada de nuestro servicio Router*/
    <Router>
      {/*Invocar todo el contenido del archivo menuinterfazprincipal.js*/}
      <Menuinterfazprincipal/>

      {/*Contenedor:*/}
      <div className="container p-4">

      {/*Respectivo Route paquete:
      enlace de nuestra importacion de archivo listaproductos*/}
      <Route path="/productos" Component={Listaproductos}></Route>
      
      {/*enlace de nuestra importacion de archivo modificarproductos*/}
      <Route path="/modificacion" Component={Modificarproductos}></Route>
      
      {/*enlace de nuestra importacion de archivo listaventas*/}
      <Route path="/ventas" Component={Listaventas}></Route>
      </div>
    </Router>
  );
}

export default App;
