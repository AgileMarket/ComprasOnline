//Importacion de express
import express from 'express';

//Importacion de los controladores:
import {
    prueba, 
    registrar,
    confirmar
} from '../controladores/usuariosControladores.js';

//Funcion:
const router = express.Router();

//CRUD de las rutas:
router.get('/prueba', prueba);

//Router de configuracion del modelo:
router.post('/', registrar);
//enviar correo de confirmacion:
router.get('/confirmar/:token', confirmar);

export default router;