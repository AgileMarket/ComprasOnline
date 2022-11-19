//Este archivo manejara todas las imagenes:
//Importacion de la dependencia instalada Cloudinary
import{v2 as cloudinary} from "cloudinary";

//Importacion del "dotenv" del backend
import dotenv from 'dotenv';

//Configuracion del dotenv de los datos .en(Variables del entorno):
dotenv.config();

//Configuracion del cloudinary, de los datos .env (Variables del entorno):
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

//Exportacion de la constante Metodo CRUD del archivo productoControladores.js
export const uploadImage = async filePath =>{
    return await cloudinary.uploader.upload(filePath, {
        folder: 'productos'
    });
};

//Exportacion de la constante Metodo CRUD del archivo productoControladores.js
export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id);
}