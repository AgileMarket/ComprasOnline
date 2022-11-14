//Manejo de la bases de datos:
//https://mongoosejs.com -> npm i mongoose
import mongoose from 'mongoose';

//Funcion Asincrona de conectarDB:
const conectarDB = async() => {

    //Validacion Si esta corriendo correcto el servidor:
    try {
        const db = await mongoose.connect(
            process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ) 
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`Mongo DB conectado en: ${url} `);
        
        //Validacion Si esta corriendo incorrecto el servidor:
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;