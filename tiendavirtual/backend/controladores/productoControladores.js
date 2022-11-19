//Importacion de la carpeta "modelo" del archivo Usuario.js:
import Producto from "../models/Producto.js";

//Importacion de la dependencia instalada cloudinary express-filoeupload fs-extra
import fs from 'fs-extra';

//Importacion de la carpteta Helper (incluyendo la configuracion CRUD) del archivo cloudinary.js
import{
    uploadImage,
    deleteImage
} from '../helper/cloudinary.js'

//Variable prueba, funcion de la peticion de usuario y la respuesta de la peticion de usuario:
const prueba = (req, res) => {
    res.send({
        msg : "En esta ruta se gestionara todas las peticiones correspondientes al modelo de productos" 
    })
};

//funcion de la constante de Create (CRUD) de ProductoRoutes:
const createProductos = async (req, res) => {
    try {
        //Constante de los campos creados de los Squemas del modelo Producto.js
        const {nombre, description, precio, stock} = req.body;
        let image;

        //Configuracion de la imagen 
        if(req.files.image){
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            image = {
                url: result.secure_url,
                public_id: result.public_id,
            };
            console.log(result);        
        } 
        /*Constante de una variable nueva Newproducto, instanciado del Producto 
        funcionando los campos del Esquema modulo Producto.js
        */
        const Newproducto = new Producto({nombre, description, precio, image, stock});
        await Newproducto.save();
        return res.json(Newproducto);
    }
    catch (error){
        console.log(error);
        return res.status(500).json({msg: error.message});
    }
};


//Constante de los CRUD, de productoRoutes.js:

//Obtener todos los productos
const getProductos =async (req, res) =>{
    
};

//Actualizacion de imagen
const updateProductos =async (req, res) =>{
    
};

//Borrar todos los productos 
const deleteProductos =async (req, res) =>{
    
};

//Mostrar un producto:
const getProducto =async (req, res) =>{
 
};

//Exportacion de la variables, de productoRoutes.js:
export{
    prueba,
    createProductos,
    getProductos,
    updateProductos,
    deleteProductos,
    getProducto
};