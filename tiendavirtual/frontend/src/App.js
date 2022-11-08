
import React from 'react';  
//Importamos nuestro servicio Router y del comando que escirbimos en la terminal
import {BrowserRouter as Router,Route} from 'react-router-dom';

/*Importaciones del uso de las tablas:*/
import {useTable, usePagination} from "react-table"
import useColumns from './Components/useColumnslistaventas';
import useRows from './Components/useRowslistaventas';

/*Importaciones de los inconos de las tablas:*/
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import './App.css';
//Importacion de nuestros archivos de components:
import Menuinterfazprincipal from './Components/Menuinterfazprincipal';
import Listaproductos from './Components/Listaproductos';
import Modificarproductos from './Components/Modificarproductos';
import Listaventas from './Components/Listaventas';
import Formularioregistro from './Components/Formularioregistro';

//Importacion de libreria Boostrap:
import 'bootstrap/dist/css/bootstrap.min.css'



export default function App() {
  //Funciones de la tablas:
  const columns = useColumns();
  const data = useRows();
  const table = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 5,
        pageIndex: 0
      }
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = table;


  
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
      <Route path="/useColumnslistaventas/useRowslistaventas" Component={Listaventas}>
        {/*Codigo html de la table*/}
      <div className="container">
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className="pagination">
        <span>
          Página&nbsp;
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{" "}
        </span>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <BiFirstPage className="page-controller" />
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <MdKeyboardArrowLeft className="page-controller" />
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <MdKeyboardArrowRight className="page-controller" />
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <BiLastPage className="page-controller" />
          </button>{" "}
        </div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize !== 15 ? `Mostrar ${pageSize}` : `Mostrar todo`}
            </option>
          ))}
        </select>
      </div>
    </div>
      </Route>

     
      {/*enlace de nuestra importacion de archivo listaventas*/}
      <Route path="/registro" Component={Formularioregistro }></Route>
      </div>

  
    </Router>

  );

  
}

//export default App;
