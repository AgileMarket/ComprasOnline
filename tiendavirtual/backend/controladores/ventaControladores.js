
import Venta from "../models/Ventas.js";

//Variable prueba, funcion de la peticion d eusuario y la respuesta de la peticion de usuario:
const prueba = (req, res) => {
  res.send({
    msg: "En esta ruta se gestionara todas las peticiones correspondientes al modelo de ventas",
  });
};
//funcion de la constante de Create (CRUD) de ventaRoutes:
const createVentas = async (req, res) => {
  try {
    //Configuracion de los datos traidos de Venta Squema y los guarda
    const venta = new Venta(req.body);
    const ventaGuardado = await venta.save();
    res.json(ventaGuardado);
  } catch (error) {
    console.log(error.message);
  }
};
//Constante de los CRUD, de productoRoutes.js:
//Constante Obtener ventas por "id":
const getVenta = async (req, res) => {
  try {
    const OneVenta = await Venta.findById(req.params.id);
    if (!OneVenta) {
      return res.sendStatus(404);
    } else {
      return res.json(OneVenta);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//Constante obtener todas las ventas:
const getVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.send(ventas);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

//Constante de actualizar ventas por "id":
const updateVentas = async (req, res) => {
  try {
    const estadoVenta = await Venta.findById(req.params.id);
    if (estadoVenta.estado === "vigente") {
      estadoVenta.estado = "cancelada";
      await estadoVenta.save();
      res.json({
        msg: "La venta está cancelada",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};


const deleteVentas = async (req, res) => {
    
};

export {
  prueba,
  createVentas,
  getVenta,
  getVentas,
  updateVentas,
  deleteVentas,
};
