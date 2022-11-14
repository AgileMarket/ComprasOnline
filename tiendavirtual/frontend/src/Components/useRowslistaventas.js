/*Importacion de react table*/
import { useMemo } from "react";


/*Exportacion de las funciones de las filas*/
export default function useRows(){
    const rows = useMemo(
        () => [
            
            {
                fecha: '27-09-2022',
                idventa: 123,
                valor: 35
            },
            {
                fecha: '28-09-2022',
                idventa: 234,
                valor: 50
            },
            {
                fecha: '30-09-2022',
                idventa: 543,
                valor: 10
            }
            ,
            {
                fecha: '01-10-2022',
                idventa: 308,
                valor: 20
            }
            ,
            {
                fecha: '02-10-2022',
                idventa: 210,
                valor: 15
            }
            ,
            {
                fecha: '03-10-2022',
                idventa: 100,
                valor: 30
            },
            {
                fecha: '04-10-2022',
                idventa: 900,
                valor: 90
            },
            {
                fecha: '05-10-2022',
                idventa: 507,
                valor: 85
            },
            {
                fecha: '06-10-2022',
                idventa: 430,
                valor: 40
            },
            {
                fecha: '07-10-2022',
                idventa: 700,
                valor: 76
            }
        ],
        []
    );
    return rows;
}