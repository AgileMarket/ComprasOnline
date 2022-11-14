//Importacion de express
import express from 'express';

//Importacion de los controladores:
import {
    prueba
} from '../controladores/productosControladores.js'

//Funcion:
const router = express.Router();

//CRUD
router.get('/prueba', prueba);

export default router;