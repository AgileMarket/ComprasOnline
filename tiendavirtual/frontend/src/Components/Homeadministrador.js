/*Importacion del proyecto react, trabajando especificamente de la carpeta components
y el respectiva etiqueta Fragment*/

import React, { Fragment } from "react";
import "../App.css";

/*Importar la etiqueta html Link con el uso de la rutas de react: */
import { Link } from "react-router-dom";

//Una funcion de la costante Home -> Pagina Principal

const Homeadministrador = () => {
  return (
    <Fragment>
      <body className="text-center">
        <main className="form-signin w-100 m-auto">
          <form action="">
            <h1 class="h3 mb-3 fw-normal">Home</h1>

            {/*Direccionamiento Del link de la ruta*/}

            <div className="row">
              <div className="col">
                <button class="w-100 btn btn-lg btn-primary" id="badmin">
                  <Link
                    to="/Menuinterfaz"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Administrador
                  </Link>
                </button>
              </div>
              <div className="col">
    
                <button class="w-100 btn btn-lg btn-primary" id="badmin">
                  <Link
                    to="/Menuinterfazcliente"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Cliente
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </main>
      </body>
    </Fragment>
  );
};

export default Homeadministrador;
