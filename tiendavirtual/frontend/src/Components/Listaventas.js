//import React, { Fragment } from "react";

/*Importaciones del uso de las tablas:*/
import { useTable, usePagination } from "react-table";
import useColumns from "./useColumnslistaventas";
import useRows from "./useRowslistaventas";

/*Importar la etiqueta html Link con el uso de la rutas de react: */
import { Link } from 'react-router-dom';

/*Importaciones de los inconos de las tablas:*/
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

/*Funciones de Lista ventas de las herramientas usecolumnslistaventas y useRowslistaventas */
const Listaventas = () => {
  //Funciones de la tablas:
  const columns = useColumns();
  const data = useRows();
  const table = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 5,
        pageIndex: 0,
      },
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
    state: { pageIndex, pageSize },
  } = table;

  return (
    //Fragment -> Contenedor grande, que sostiene el div

    <div className="">

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
    

      {/*Codigo html de la tabla*/}
      <table class="table table-light "{...getTableProps()}>
        <thead  >
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr  {...headerGroup.getHeaderGroupProps()}>
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
  );
};

export default Listaventas;
