/*Importacion de react table*/
import { useMemo } from "react";


/*Exportacion de las funciones de las filas*/
export default function useRows(){
    const rows = useMemo(
        () => [
            
            {
                fecha: 27092022,
                idventa: 123,
                valor: 35
            },
            {
                fecha: 28092022,
                idventa: 234,
                valor: 50
            },
            {
                fecha: 29092022,
                idventa: 543,
                valor: 10
            }
        ],
        []
    );
    return rows;
}