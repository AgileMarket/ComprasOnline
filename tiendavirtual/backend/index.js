/*Archivo princpial:
Creacion del desarrollo de nuestro sitio web
*/

// Codigo para inicializar el servidor, de las 4 herramientas de las dependencias instaladas:
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuariosRoutes.js';
import productosRoutes from './routes/productosRoutes.js';
import ventasRoutes from './routes/ventasRoutes.js';

//La funcion de la constante del puerto 4000;
const PORT = process.env.PORT || 4000;

//Acepte las variables de entorno
dotenv.config();

//Se Agrega toda la funcionalidad del servidor de express del aplicativo:
const app = express();
 
//informacion enviada y recibida, atra ves del archivo JSON y conectarlo con Mongo
app.use(express.json()); 
conectarDB();

//middlewares
//Se utiliza para realizar la comunicacion entre el servidor del frontend y servidor el backend

/*
const corsOptions = {
    //Dominio para establecer con el frontend
    origin: function(origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1) {
            //El origen es del request(peticion de usuario) esta permitido
            callback(null,true);
        }
        else{
            callback(new Error('No per mitido por CORS'));
        }
    }
};

/*
Gestion de las Rutas: Entre las peticion y asi mismo direccionar las respuesta que corresponde 
Utilizacion de la ruta principal, local host, puerto 4000 api y usuarios:
que se utilizaria en los controladores para el tema de los CRUD*/

//app.use(cors(corsOptions))


//Gestion de Usuarios
app.use('/api/usuarios', usuarioRoutes);

//Gestion de productos
app.use('/api/productos', productosRoutes);

//Gestion de ventas:
app.use('/api/ventas', ventasRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor funciando en el puerto: ${PORT}`);
});
