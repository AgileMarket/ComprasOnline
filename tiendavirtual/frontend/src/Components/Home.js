/*Importacion del proyecto react, trabajando especificamente de la carpeta components
y el respectiva etiqueta Fragment*/

import React, { Fragment } from 'react'

/*Importar la etiqueta html Link con el uso de la rutas de react: */
import {Link} from 'react-router-dom';

//Una funcion de la costante Home -> Pagina Principal
const Home = () => {
  return (
    <Fragment>
    <div>Home</div>
    <div>
        {/*Direccionamiento Del link de la ruta*/}
        <Link  to="/Menuinterfaz">
            Administrador
        </Link>

        {/*Direccionamiento Del link de la ruta*/}
        <button>
            Cliente
        </button>
    </div>
    </Fragment>
  )
}

export default Home