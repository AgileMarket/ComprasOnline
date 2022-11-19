//Importacion de express
import express from 'express';

//Importacion de los controladores:
import {
    prueba, 
    registrar,
    confirmar
} from '../controladores/usuarioControladores.js';

//Funcion:
const router = express.Router();

//CRUD de las rutas, Usuario:
router.get('/prueba', prueba);

//Router de configuracion del modelo, de usuarioControladores: 
router.post('/', registrar);

//enviar correo de confirmacion:
router.get('/confirmar/:token', confirmar);

export default router;