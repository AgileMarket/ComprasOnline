/*Importacion del proyecto react, trabajando especificamente de la carpeta components
y el respectivo archivo menuinterfazprincipal.js*/
import React, { Component } from 'react'; 

/*Importar la etiqueta html Link con el uso de la rutas de react: */
import {Link} from 'react-router-dom';

/*Exportacion por defecto  la clase del archivo menuinterfazprincipal.js heredado de la carpeta component*/
export default class Menuinterfazprincipal extends Component {
    
    render() {
        /*Interfaz Grafica: HTML*/
        return (
            //Menu de Navegacion:
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    
                    {/*Etiqueta a se reemplaza por link, y los href se reemplaza por to*/}
                    <Link className="navbar-brand" to="/">Bienvenidos a la Tienda Virtual</Link>
                    
                    {/*Boton Minimizar*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        {/*SUBMENUS:*/}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            {/*Lista de integracion del submenu:*/}
                            <li className="nav-item">
                                
                                {/*Etiqueta a se reemplaza por link, y los href se reemplaza por to*/}
                                <Link className="nav-link active" aria-current="page" to="/productos">Lista productos</Link>
                            </li>
                            {/*Lista de integracion del submenu:*/}
                            <li className="nav-item">
                                
                                {/*Etiqueta a se reemplaza por link, y los href se reemplaza por to*/}
                                <Link className="nav-link" to="/modificarproductos">Modificar Productos</Link>
                            </li>
                            {/*Lista de integracion del submenu:*/}
                            <li className="nav-item dropdown">
                                
                                {/*Etiqueta a se reemplaza por link, y los href se reemplaza por to*/}
                                <Link className="nav-link dropdown-toggle" to="/listaventas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Lista Ventas
                                </Link>
                            </li>
                            
                        </ul>
                         
                    </div>
                </div>
            </nav>
        )
    }
}