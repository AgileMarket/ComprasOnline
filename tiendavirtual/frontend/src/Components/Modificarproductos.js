/*Importacion del proyecto react, trabajando especificamente de la carpeta components
y el respectivo archivo modificarproductos.js*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

/*Exportacion por defecto  la clase del archivo modificarproductos.js heredado de la carpeta component*/
export default class Modificarproductos extends Component {
    render() {
        return (
            <div className='todo'>
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
                <p />
                <div className='col'>
                    {/*Para poner estilo propio para un elemento en especial  debe ser así:*/}
                    <div class="card" style={{ width: '18rem', margin: '0 auto' }}>
                        <img src="https://http2.mlstatic.com/D_NQ_NP_856060-MLA46153369079_052021-O.jpg" class="card-img-top" alt="hola"></img>
                        <div class="card-body">
                            <label className="form-label">Nombre</label>
                            <h5 class="card-title"> <input type="text" className='form-control' value={"Iphone 11"} /></h5>
                            <p class="card-text"></p>
                        </div>


                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <label className="form-label">Precio: </label>
                                <input type="text" className='form-control' value={"$ 3.500.000"} />
                            </li>
                            <li class="list-group-item">
                                <label  className="form-label">Stock:  </label>
                                <input type="text" className='form-control' value={"5"} />
                            </li>

                            <li class="list-group-item">
                            <button type="button" class="btn btn-primary" style={{ margin: '1px' }}>Guardar</button>
                            <button type="button" class="btn btn-success">volver</button>
                            </li>
                        </ul>

                    </div>
                </div>




            </div>
        )
    }
}