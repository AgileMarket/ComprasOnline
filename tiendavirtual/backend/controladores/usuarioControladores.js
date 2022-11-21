//Importacion del modelo usuario:
import Usuario from "../models/Usuario.js";

//Funcion de peticion y una respuesta
const prueba = (req, res) => {
  res.send({
    message:
      "En esta ruta gestionaremos todas las peticiones correspondientes al modelo de Usuario",
  });
};

//Funcion de Registrar
const registrar = async (req, res) => {
  //Se define los datos del nombre, email y password en el body de req:
  const { nombre, email, password, telefono, direccion, web, rol } = req.body;

  //Solicitud de creacion de usuario:
  const user = await Usuario.create({
    nombre,
    email,
    password,
    telefono,
    direccion,
    web,
    rol,
  });
  res.status(201).json({
    mensage: "Usuario Registrado",
    usuario: user,
  });
};

const confirmar = (req, res) => {
  res.status(200).json({
    message: "Confirmacion de usuario",
  });
};

export { prueba, registrar, confirmar };
