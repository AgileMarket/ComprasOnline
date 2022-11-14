import React, { Fragment } from "react";

/*Importaciones del uso de las tablas:*/
import { useTable, usePagination } from "react-table";
import useColumns from "./useColumnslistaventas";
import useRows from "./useRowslistaventas";

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
    <Fragment>
      <div>Listaventas</div>
   
    {/*Codigo html de la tabla*/}
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
    </Fragment>
  );
};

export default Listaventas;
