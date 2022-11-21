//Importacion de la carpeta "modelo" del archivo Usuario.js:
import Producto from "../models/Producto.js";

//Importacion de la dependencia instalada cloudinary express-filoeupload fs-extra
import fs from "fs-extra";

//Importacion de la carpteta Helper (incluyendo la configuracion CRUD) del archivo cloudinary.js
import { uploadImage, deleteImage } from "../helper/cloudinary.js";

//Variable prueba, funcion de la peticion de usuario y la respuesta de la peticion de usuario:
const prueba = (req, res) => {
  res.send({
    msg: "En esta ruta se gestionara todas las peticiones correspondientes al modelo de productos",
  });
};

//funcion de la constante de Create (CRUD) de ProductoRoutes:
const createProductos = async (req, res) => {
  try {
    //Constante de los campos creados de los Squemas del modelo Producto.js
    const { nombre, description, precio, stock } = req.body;
    let image;

    //Configuracion de la imagen
    if (req.files.image) {
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
    const Newproducto = new Producto({
      nombre,
      description,
      precio,
      image,
      stock,
    });
    await Newproducto.save();
    return res.json(Newproducto);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

//Constante de los CRUD, de productoRoutes.js:
//Constante Obtener todos los productos
const getProductos = async (req, res) => {
  try {
    //Constante de productos, que busca en la tabla producto:
    const productos = await Producto.find();
    res.send(productos);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

//Constante Actualizacion del producto con imagen por "id":
const updateProductos = async (req, res) => {
  //Actualizacion del cuerpo:
  const { id, nombre, description, precio, stock } = req.body;
  try {
    //Busca por Id del producto
    const updateProducto = await Producto.findById(id);

    updateProducto.nombre = nombre;
    updateProducto.description = description;
    updateProducto.precio = precio;
    updateProducto.stock = stock;

    //Condifcional, si cumple la accion de la imagen
    if (req.files.image) {
      await deleteImage(updateProducto.image.public_id);
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);

      //Actualizacion de imagen, la anterior imagen se reemplaza por una nueva imagen
      updateProducto.image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      //Salva la actualizacion del producto, en un formato json:
      await updateProducto.save();
      return res.status(204).json(updateProducto);
    }
    //Si no cumple, que muestre el error
  } catch (error) {
    console.log(error.message);
  }
};

//Constante de Borrar el producto con imagen por "id":
const deleteProductos = async (req, res) => {
  try {
    const productRemoved = await Producto.findByIdAndDelete(req.params.id);

    //Condicional, quiere decir que si el producto no existe, envie el mensaje "Token no valido"
    if (!productRemoved) {
      const error = new Error("Token no valido");
      return res.sendStatus(404);
    }
    //Del caso contrario, lo elimina el producto; por que muestra tambien el estado del servidor:
    else {
      if (productRemoved.image.public_id) {
        await deleteImage(productRemoved.image.public_id);
      }
      return res.sendStatus(204);
    }
    //Si no cumple, que muestre el error
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Constante Mostrar un producto con imagen por "id":
const getProducto = async (req, res) => {
  try {
    const OneProduct = await Producto.findById(req.params.id);

    //Condicional, quiere decir la confirmacion de la muestra del producto por id:
    if (!OneProduct) {
      return res.sendStatus(404);
    }
    //Del caso contrario, lo envia como repuesta en el formato JSON
    else {
      return res.json(OneProduct);
    }
    //Si no cumple, que muestre el error
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Exportacion de la variables, de productoRoutes.js:
export {
  prueba,
  createProductos,
  getProductos,
  updateProductos,
  deleteProductos,
  getProducto,
};
