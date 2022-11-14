//Importacion de proceder  manejo de los esquemas y Mongo DB

import mongoose from 'mongoose';

//Importacion de un cifrado de datos, password
import bcrypt from 'bcrypt';

//Importacion de Generar ID
import generarId from '../helper/generarId.js';

//Funcion de usuarioSchema, con la respectiva descripciones:
const usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,

    },

    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    telefono:{
        type: String,
        default: null,
        trim: true,
    },
    direccion:{
        type: String,
        default: null,
        trim: true,
    },
    web:{
        type: String,
        default: null,
        trim: true,
    },
    token:{
        type: String,
        default: generarId(),
    },
    confirmado:{
        type: Boolean,
        default: false,
    },
    rol:{
        type: String,
        default: 'usuario',
        trim: true,
    }
    
});

//Decifrar nuestro password: quede guardado protegido para que 
usuarioSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    };
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

//Comprobar o confirmar password del usuario
usuarioSchema.methods.comprobarPassword = async function(passwordFomrulario){
    return await bcrypt.compare(passwordFomrulario, this.password);
};

//
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;