//Importacion de express
import express from 'express';

//Importacion de los controladores:
import {
    prueba, 
    registrar,
    confirmar
} from '../controladores/usuarioControladores.js';

//Funcion Router, para sincronizarlo con express:
const router = express.Router();

//CRUD de las rutas, Usuario, epoints:
router.get('/prueba', prueba);

//Router de configuracion del modelo, de usuarioControladores: 
router.post('/', registrar);

//enviar correo de confirmacion:
router.get('/confirmar/:token', confirmar);

export default router;