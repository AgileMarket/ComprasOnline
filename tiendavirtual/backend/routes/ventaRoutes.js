//Importacion de express
import express from 'express';
//import { updateProductos } from '../controladores/productoControladores.js';

//Importacion de la variables controladores ventaControladores.js:
import {
    prueba,
    createVentas,
    getVentas,
    getVenta,
    updateVentas,
    deleteVentas
} from '../controladores/ventaControladores.js'

//Funcion Router, para sincronizarlo con express:  
const router = express.Router();

//CRUD de las rutas, Venta, epoints:
router.get('/prueba', prueba);

router.post('/create', createVentas);
router.get('/get', getVentas);
router.get('/get/:id', getVenta);
router.get('/update/:id', updateVentas);
router.get('/delete/:id', deleteVentas);


export default router;