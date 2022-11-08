/*Importacion del proyecto react, trabajando especificamente de la carpeta components
y el respectivo archivo listaventas.js*/
import React, {Component} from 'react';

/*Importacion de los dos archivos de la table */

/*import useColumns from './useColumnslistaventas';
import useRows from './useRowslistaventas';
*/



/*Exportacion por defecto  la clase del archivo listaventas.js heredado de la carpeta component*/
class Listaventas extends Component {
    render(){

        
        return (
            <div id="ListaVentas">
                Listaventas
                <useColumnslistaventas/>
                <useRowslistaventas/>

            </div>

        );
    }
}
export default Listaventas;
