/*Importacion de react table*/
import { useMemo } from "react";

/*Exportacion de las funciones de las columnas*/
export default function useColumns() {
    const columns = useMemo(
        () => [

            {
                Header: "Fecha",
                accessor: "fecha"
            },
            
            {
                Header: "idVenta",
                accessor: "idventa"
            },
            {
                Header: "Valor",
                accessor: "valor"
            },
          ],
         []
        );
    return columns;
}
