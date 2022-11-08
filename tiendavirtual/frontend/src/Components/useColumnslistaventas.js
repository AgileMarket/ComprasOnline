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
                accesor: "idventa"
            },
            {
                Header: "Valor",
                accesor: "valor"
            },
          ],
         []
        );
    return columns;
}
