//Importacion de express
import express from 'express';

//Importacion de la variables controladores productoControladores.js:
import {
    prueba,
    createProductos,
    getProducto,
    getProductos,
    updateProductos,
    deleteProductos
} from '../controladores/productoControladores.js';

//Funcion Router, para sincronizarlo con express:
const router = express.Router();

//CRUD de las rutas, Usuario, epoints:
router.get('/prueba', prueba);
router.get('/get', getProductos);
router.get('/get/:id', getProducto);
router.post('/create', createProductos);
router.put('/update/:id', updateProductos);
router.delete('/delete/:id', deleteProductos);

//Exportacion por defecto Router
export default router;