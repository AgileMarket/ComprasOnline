/*Cargar informacion de archivos Json o informacion de una Appi externa:
Importar el fragment del la interfaz, guardarlo en usuarioestado:
*/
import { Fragment, useState } from "react";

/*Importar la carpeta data y archivo user,json
Es decir, estamos cargando una variable los datos "userFromJson", del archivo JSON (users.)
*/
import userFromJson from "../data/users.json";




/*Exportacion de la funcion: 
Es decir exportando una constante del archivo
*/
export const Interfazventas = () => {
    /*Creacion de constante de usuarios y por destructura del array, se le asigna a users un valor de array vacio:
    Aparte de eso, se crear el estado de users y le asignamos la funcion setUsers, para actualizar el estado users 
    */
    const [users, setUsers] = useState([]);
    
    //Asignacion de creacion de constante de funcion de setProducts, para que se encargue de mantener esos mismos products
    const [products, setProducts] = useState([]);  
    
    
    

    /*Creacion de interfaz, fragmento, section y dentro de la section h1:*/
    return (
        <Fragment>
            <section>
                <h1> {/*Titulo*/}
                    Agil &aacute; Market</h1>

                <ul> {/*Menu De Navegacion*/}
                    <li> {/*lista de menu de navegacion, con la integracion de la url*/}
                        <a href="http://google.com">Vista Administrador Ventas</a>
                    </li>
                </ul>

                    {/*Bottones:
                    Botton, funcion mensaje:*/}
                <button onClick={mensaje}> Lista Productos </button>

                    {/*Botton, funcion saveUsers, integrando la constante de users, setUsers*/}
                <button onClick={saveUsers(users, setUsers)}> Cargar Usuarios</button>

                    {/*Botton, funcion buscarPelicular, integrando la constante de products, setProducts*/}
                <button onClick={buscarProductos(products, setProducts)}> Lista Ventas</button>

                <ul>
                    {products.map((products, i) => (
                        <li key={i}> {products.titulo} </li>
                    ))}
                </ul>
            </section>
        </Fragment>
    );
};

 


/*Funcion de Mensaje del bottom*/
function mensaje() {
    //un Aviso del mensaje: 
    alert("Hola");
}




/*Mostrar los usuarios o generar una vista de esos mismos usuarios en pantalla*/
/*Funcion que va hacer es, tomar los datos del archivo JSON y guardarlo en un "state", 
Es decir recibe los usuarios y dentro de los parentesis (la ubicacion de esos usarios dentro del arreglo)<- parametros
*/
function saveUsers(users, setUsers) {
    /*Retornar la funcion del parametreo setUsers y (el contenido de los usuarios del archivo JSON)*/
    return () => { 
        /*Llamamos la funcion setUsers y la variable userFromJson, con todos los usarios dentro del archivo*/
        setUsers(userFromJson);
    };
}



//Funcion de buscarProductos (con los parametros)
function buscarProductos(products, setProducts){
    /*Retornar de forma asincrona, otra funcionarlo*/
    return async () => {
        /*Se crea una variable let y colocar un URL de datos JSON:*/
        let url = "http://jsonplaceholder.typicode.com/comments?postId=1";
        /*Se crea una variable let, como tenemos una funcion async, colocamos un await,
        await para hacer esperar en hacer la consulta a la API, que nos genere la consulta y nos retorne el resultado, 
        con el Fetch y dentro del fect (colamos url)
        */
        let respuesta = await fetch(url);
        /* Una vez obtengamos respuestas, 
        vamos a products, asignamos con await respuesta en formato .json
        para depurar cualquier tipo de afectacion en cargas que traiga
        */
        products = await respuesta.json();
        //Se guarda en "State" (guardamos en el parametro products)
        await setProducts(products);
    }
}