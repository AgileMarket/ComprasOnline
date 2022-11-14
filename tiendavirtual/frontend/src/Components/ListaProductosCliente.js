/*Importacion del proyecto react, trabajando especificamente de la carpeta components
y el respectivo archivo listaproductos.js*/
import React, { Component } from "react";

/*Importacion de axios en la que se escribio en la terminal*/
import axios from "axios";

/*Importar la etiqueta html Link con el uso de la rutas de react: */
import { Link } from "react-router-dom";

/*Exportacion por defecto  la clase del archivo listaproductos.js heredado de la carpeta component*/
export default class Listaproductoscliente extends Component {
  //estado de actualizacion de los productos:
  state = {
    productos: [],
  };

  //Declarar Constructor asincrono component, para que haga Didmount en tiempo real:
  async componentDidMount() {
    /*Constructor metodo get nos muestre o lista los productos, de la interfaz:
     */
    this.getProductos();
  }

  /*Funcion de getcantiddadproductos,
    que tenga la sintasis asincrona*/
  getProductos = async () => {
    /*almacenar la cantidad de productos en una constante para sostener en nuestro servicio Api rest:
        para obtener y guardarlo, utilizando la herramienta asincrona
        de axios, para generar una consulta
        Sincronizacion del archivo del simuladordatospruebas.json, con el puerto local host, 
       */
    const rest = await axios.get("http://localhost:3000/productos");

    /*Constructor metodo Set: 
        Actualizarestado de lo datos json "simuladordatospruebas.json"
        */
    this.setState({ productos: rest.data });
    console.log(rest);
  };

  render() {
    /*Interfaz grafica etiquetas html*/
    return (
      /* Necesario para contener todos los elementos*/
      <div className="">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            {/*Etiqueta a se reemplaza por link, y los href se reemplaza por to*/}
            <Link className="navbar-brand" to="/">
              Bienvenidos a la Tienda Virtual
            </Link>

            {/*Boton Minimizar*/}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/*SUBMENUS:*/}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/*Lista de integracion del submenu:*/}
                <li className="nav-item">
                  {/*Etiqueta a se reemplaza por link, y los href se reemplaza por to*/}
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/productos"
                  >
                    Lista productos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="row">
          {/*Primera columna del formulario*/}
          <p />
          {/*Segunda columna del formulario*/}
          <div className="col">
            {/*Para poner estilo propio para un elemento en especial  debe ser así:*/}
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_856060-MLA46153369079_052021-O.jpg"
                class="card-img-top"
                alt="hola"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Iphone 11</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio: $ 3.500.000</li>
                <li class="list-group-item">Stocl: 5</li>
              </ul>
            </div>

            {/* //<ul className='list-group'> */}

            {
              //Mapeo  de estado de los productos:
              //  this.state.productos.map(producto => (
              //    <li
              //      className="list-group-item list-group-item-action"
              //Visualizacion de nuestro producto:
              //    key={producto.id}
              // >
              //    {/*visualizacion de nuestro producto en link*/}
              //</ul>    {producto.name}
              //</div></li>
              //</div>)
              // )
            }
            {/* //</ul> */}
          </div>

          <div className="col">
            {/*Para poner estilo propio para un elemento en especial  debe ser así:*/}
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_856060-MLA46153369079_052021-O.jpg"
                class="card-img-top"
                alt="hola"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Iphone 11</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio: $ 3.500.000</li>
                <li class="list-group-item">Stocl: 5</li>
              </ul>
            </div>
          </div>

          <div className="col">
            {/*Para poner estilo propio para un elemento en especial  debe ser así:*/}
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_856060-MLA46153369079_052021-O.jpg"
                class="card-img-top"
                alt="hola"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Iphone 11</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio: $ 3.500.000</li>
                <li class="list-group-item">Stocl: 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
