/*Importacion del proyecto react, trabajando especificamente de la carpeta components
y el respectivo archivo listaproductos.js*/
import React, {Component} from 'react'

/*Importacion de axios en la que se escribio en la terminal*/
import axios from 'axios'




/*Exportacion por defecto  la clase del archivo listaproductos.js heredado de la carpeta component*/
export default class Listaproductos extends Component {
    
    
//estado de actualizacion de los productos:
 state={
    productos:[]
}


//Declarar Constructor asincrono component, para que haga Didmount en tiempo real:
async componentDidMount(){
    
    /*Constructor metodo get nos muestre o lista los productos, de la interfaz:
    */
    this.getProductos();
}


    /*Funcion de getcantiddadproductos,
    que tenga la sintasis asincrona*/
    getProductos = async() => {
        /*almacenar la cantidad de productos en una constante para sostener en nuestro servicio Api rest:
        para obtener y guardarlo, utilizando la herramienta asincrona
        de axios, para generar una consulta
        Sincronizacion del archivo del simuladordatospruebas.json, con el puerto local host, 
       */
        const rest = await axios.get('http://localhost:3000/productos');
        
        /*Constructor metodo Set: 
        Actualizarestado de lo datos json "simuladordatospruebas.json"
        */
        this.setState({productos: rest.data});
        console.log(rest)
    }


    render() {
        /*Interfaz grafica etiquetas html*/
        return (
            //Almacenar en un Formulario:
            <div className='row'>
                {/*Primera columna del formulario*/}
                <div className='col-md4'>
                    <div className='card card-body'></div>
                    <h3>Cargar Lista de productos</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'></div>
                        <h6>Fecha: </h6>
                        <input type="text" className="form.control"></input>
                    </form>

                </div>
                {/*Segunda columna del formulario*/}
                <div className='col-md-8'>
                    <ul className='list-group'>
                        
                        
                        {   
                            //Mapeo  de estado de los productos: 
                            this.state.productos.map(producto=>(
                                <li
                                    className="list-group-item list-group-item-action"
                                    //Visualizacion de nuestro producto:
                                    key={producto.id}
                                >
                                    {/*visualizacion de nuestro producto en link*/}
                                    {producto.name}
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
        
        )
    }
}